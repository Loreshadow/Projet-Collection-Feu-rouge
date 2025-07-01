<?php

namespace App\Controller;

use App\Entity\TrafficLight;
use App\Entity\Comment;
use App\Form\CommentType;
use App\Repository\CommentRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TrafficLightDetailController extends AbstractController
{
    #[Route('/feux/detail/{id}', name: 'traffic_light_detail')]
    public function detail(
        TrafficLight $trafficLight,
        Request $request,
        EntityManagerInterface $em,
        CommentRepository $commentRepo
    ): Response {
        $comment = new Comment();
        $form = $this->createForm(CommentType::class, $comment);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid() && $this->getUser()) {
            $comment->setTrafficLight($trafficLight);
            $comment->setUser($this->getUser());
            $comment->setCreatedAt(new \DateTimeImmutable());
            $em->persist($comment);
            $em->flush();
            $this->addFlash('success', 'Commentaire ajouté !');
            return $this->redirectToRoute('traffic_light_detail', ['id' => $trafficLight->getId()]);
        }

        $comments = $commentRepo->findBy(['trafficLight' => $trafficLight], ['createdAt' => 'DESC']);

        return $this->render('traffic_light/show.html.twig', [
            'trafficLight' => $trafficLight,
            'comments' => $comments,
            'commentForm' => $form->createView(),
        ]);
    }
}