<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\String\Slugger\SluggerInterface;
use App\Form\ProfileType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;

use Symfony\Component\HttpFoundation\Request;

class ProfileController extends AbstractController
{
    #[Route('/profile', name: 'profile')]
    public function index(
        Request $request,
        EntityManagerInterface $em,
        SluggerInterface $slugger,
        UserRepository $userRepository
    ): Response {
        $user = $this->getUser();
        $form = $this->createForm(ProfileType::class, $user);
        $form->handleRequest($request);

        $error = null;

        if ($form->isSubmitted() && $form->isValid()) {
            $newName = $form->get('username')->getData();
            if ($userRepository->findOneBy(['username' => $newName]) && $newName !== $user->getUsername()) {
                $error = "Ce nom d'utilisateur existe déjà.";
            } else {
                // pour les image qui m'embêtent
                $imageFile = $form->get('profile_image')->getData();
                if ($imageFile) {
                    $originalFilename = pathinfo($imageFile->getClientOriginalName(), PATHINFO_FILENAME);
                    $safeFilename = $slugger->slug($originalFilename);
                    $newFilename = $safeFilename.'-'.uniqid().'.'.$imageFile->guessExtension();

                    try {
                        $imageFile->move(
                            $this->getParameter('profile_images_directory'),
                            $newFilename
                        );
                        $user->setProfileImage($newFilename);
                    } catch (FileException $e) {
                        $error = "Erreur lors de l'upload de l'image.";
                    }
                }
                if (!$error) {
                    $em->flush();
                    $this->addFlash('success', 'Profil mis à jour !');
                    return $this->redirectToRoute('profile');
                }
            }
        }

        return $this->render('profile/index.html.twig', [
            'profileForm' => $form->createView(),
            'error' => $error,
        ]);
    }
}