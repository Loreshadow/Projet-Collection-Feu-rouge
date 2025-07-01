<?php

namespace App\Controller;

use App\Entity\TrafficLight;
use App\Form\AddTrafficTypeForm;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class AddTrafficLightController extends AbstractController
{
    #[Route('/add/traffic/light', name: 'trafficlight')]
    public function index(Request $request, EntityManagerInterface $entityManager): Response
    {
        $traffic = new TrafficLight();
    $form = $this->createForm(AddTrafficTypeForm::class, $traffic);

    $form->handleRequest($request);

    if($form->isSubmitted() && $form->isValid()){
        $entityManager->persist($traffic);
        $entityManager->flush();

        $this->addFlash('success', 'Feu Tricolore ajouté avec succès!');

        return $this->redirectToRoute('Home');
    }


        return $this->render('add_traffic_light/index.html.twig', [
            'AddTrafficTypeForm' => $form->createView(),
        ]);
    }
}
