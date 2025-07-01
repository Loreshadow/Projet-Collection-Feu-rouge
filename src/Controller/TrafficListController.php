<?php

namespace App\Controller;

use App\Repository\TrafficLightRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TrafficListController extends AbstractController
{
    #[Route('/feux/{page<\d+>?1}/{selectedId?}', name: 'traffic_list')]
    public function list(
        TrafficLightRepository $repo,
        Request $request,
        int $page = 1,
        ?int $selectedId = null
    ): Response {
        $limit = 10;
        $offset = ($page - 1) * $limit;
        $q = $request->query->get('q', '');

        if ($q) {
            $qb = $repo->createQueryBuilder('t')
                ->where('t.name LIKE :q OR t.description LIKE :q OR t.special LIKE :q')
                ->setParameter('q', '%' . $q . '%')
                ->orderBy('t.id', 'DESC');
            $total = count($qb->getQuery()->getResult());
            $trafficLights = $qb
                ->setFirstResult($offset)
                ->setMaxResults($limit)
                ->getQuery()
                ->getResult();
        } else {
            $total = $repo->count([]);
            $trafficLights = $repo->findBy([], ['id' => 'DESC'], $limit, $offset);
        }

        $selected = null;
        if ($selectedId) {
            foreach ($trafficLights as $feu) {
                if ($feu->getId() === $selectedId) {
                    $selected = $feu;
                    break;
                }
            }
        }
        if (!$selected && count($trafficLights) > 0) {
            $selected = $trafficLights[0];
        }

        return $this->render('traffic_light/list.html.twig', [
            'trafficLights' => $trafficLights,
            'selected' => $selected,
            'page' => $page,
            'maxPage' => max(1, ceil($total / $limit)),
        ]);
    }
}