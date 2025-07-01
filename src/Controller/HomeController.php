<?php

namespace App\Controller;

use App\Repository\TrafficLightRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'Home')]
    public function index(TrafficLightRepository $trafficLightRepository): Response
    {
        $lastTrafficLights = $trafficLightRepository->findBy([], ['id' => 'DESC'], 4);

        return $this->render('home/Homepage.html.twig', [
            'lastTrafficLights' => $lastTrafficLights,
        ]);
    }
}