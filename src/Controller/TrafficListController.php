<?php

namespace App\Controller;

use App\Repository\TrafficLightRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TrafficListController extends AbstractController
{
    #[Route('/feux/{page<\d+>?1}', name: 'traffic_list')]
    public function list(
        TrafficLightRepository $repo,
        Request $request,
        int $page = 1
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

        $highlightId = $request->query->get('highlight');
        $selected = null;
        if ($highlightId) {
            foreach ($trafficLights as $feu) {
                if ($feu->getId() == $highlightId) {
                    $selected = $feu;
                    break;
                }
            }
            // Si le feu n'est pas dans la page courante, on va le chercher en base
            if (!$selected) {
                $selected = $repo->find($highlightId);
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