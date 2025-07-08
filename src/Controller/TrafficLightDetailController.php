<?php

namespace App\Controller;

use App\Entity\TrafficLight;
use App\Entity\Comment;
use App\Form\CommentType;
use App\Form\CommentEditType;
use App\Repository\CommentRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

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

    #[Route('/comment/{id}/edit', name: 'comment_edit')]
    #[IsGranted('ROLE_USER')]
    public function editComment(
        Comment $comment,
        Request $request,
        EntityManagerInterface $em
    ): Response {
        if ($comment->getUser() !== $this->getUser() && !$this->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Vous ne pouvez pas modifier ce commentaire.');
        }

        $form = $this->createForm(CommentEditType::class, $comment);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $comment->setUpdatedAt(new \DateTimeImmutable());
            $em->flush();

            $this->addFlash('success', 'Commentaire modifié !');
            return $this->redirectToRoute('traffic_light_detail', ['id' => $comment->getTrafficLight()->getId()]);
        }

        return $this->render('comment/edit.html.twig', [
            'commentForm' => $form->createView(),
            'comment' => $comment,
        ]);
    }

    #[Route('/comment/{id}/delete', name: 'comment_delete', methods: ['POST'])]
    #[IsGranted('ROLE_USER')]
    public function deleteComment(
        Comment $comment,
        Request $request,
        EntityManagerInterface $em
    ): Response {
        if ($comment->getUser() !== $this->getUser() && !$this->isGranted('ROLE_ADMIN')) {
            throw $this->createAccessDeniedException('Vous ne pouvez pas supprimer ce commentaire.');
        }

        if ($this->isCsrfTokenValid('delete'.$comment->getId(), $request->request->get('_token'))) {
            $trafficLightId = $comment->getTrafficLight()->getId();
            $em->remove($comment);
            $em->flush();

            $this->addFlash('success', 'Commentaire supprimé !');
            return $this->redirectToRoute('traffic_light_detail', ['id' => $trafficLightId]);
        }

        $this->addFlash('error', 'Erreur lors de la suppression.');
        return $this->redirectToRoute('traffic_light_detail', ['id' => $comment->getTrafficLight()->getId()]);
    }
}