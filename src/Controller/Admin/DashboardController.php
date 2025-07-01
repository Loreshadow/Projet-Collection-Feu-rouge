<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Entity\Comment;
use App\Entity\TrafficLight;
use App\Repository\UserRepository;
use App\Repository\TrafficLightRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use EasyCorp\Bundle\EasyAdminBundle\Attribute\AdminDashboard;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;

#[AdminDashboard(routePath: '/admin', routeName: 'admin')]
class DashboardController extends AbstractDashboardController
{
    private UserRepository $userRepository;
    private TrafficLightRepository $trafficLightRepository;

    public function __construct(UserRepository $userRepository, TrafficLightRepository $trafficLightRepository)
    {
        $this->userRepository = $userRepository;
        $this->trafficLightRepository = $trafficLightRepository;
    }

    #[IsGranted('ROLE_ADMIN')]
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        $userCount = $this->userRepository->count([]);
        $trafficCount = $this->trafficLightRepository->count([]);
        return $this->render('admin/index.html.twig', [
            'userCount' => $userCount,
            'trafficCount' => $trafficCount,
        ]);
    }
        
    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Projet Symfony');
    }
        
    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToRoute('Retour à l\'accueil', 'fa fa-arrow-left', 'Home');
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linkToCrud('Users', 'fas fa-list', User::class);
        yield MenuItem::linkToCrud('Traffic Light', 'fas fa-list', TrafficLight::class);
        yield MenuItem::linkToCrud('Comment', 'fas fa-list', Comment::class);
    }
}