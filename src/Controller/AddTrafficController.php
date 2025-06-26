<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class AddTrafficController extends AbstractController
{
    #[Route('/add/traffic', name: 'app_add_traffic')]
    public function index(): Response
    {
        return $this->render('add_traffic/index.html.twig', [
            'controller_name' => 'AddTrafficController',
        ]);
    }
}
