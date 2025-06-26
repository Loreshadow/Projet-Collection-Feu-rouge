<?php

namespace App\Controller;

use App\Entity\TrafficLight;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class AddTrafficLightController extends AbstractController
{
    #[Route('/add/traffic/light', name: 'trafficlight')]
    public function index(Request $request, EntityManagerInterface $entityManager): Response
    {
        $traffic = new TrafficLight();
    $form = $this->createForm(addTrafficTypeForm::class, $glaces);

    $form->handleRequest($request);

    if($form->isSubmitted() && $form->isValid()){
        $entityManager->persist($traffic);
        $entityManager->flush();

        $this->addFlash('success', 'Feu Tricolore ajouté avec succès!');

        return $this->redirectToRoute('home');
    }


        return $this->render('add_traffic_light/add_glaces.html.twig', [
            'GlaceTypeForm' => $form->createView(),
        ]);
    }
}
