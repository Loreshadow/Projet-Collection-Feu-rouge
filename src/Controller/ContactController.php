<?php

namespace App\Controller;

use App\Form\ContactType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

final class ContactController extends AbstractController
{
    #[Route('/contact', name: 'contact')]
    public function index(Request $request, MailerInterface $mailer): Response
    {
        $form = $this->createForm(ContactType::class);
        $form->handleRequest($request);

        dump($request->getMethod());
        dump($request->request->all());

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            dump($data);
            if ($request->isMethod('POST')) {
                dump('POST reçu');
            }
            $email = (new Email())
                ->from('sc7jewe1253@sc7jewe1253.universe.wf')
                ->replyTo($data['email']) // <-- l'adresse de l'utilisateur ici
                ->to('offwsh99@gmail.com')
                ->subject('[Contact] ' . $data['subject'])
                ->text(
                    "Nom: {$data['name']}\nEmail: {$data['email']}\n\nMessage:\n{$data['message']}"
                );

            $mailer->send($email);

            $this->addFlash('success', 'Votre message a bien été envoyé !');
            // return $this->redirectToRoute('contact');
        }

        return $this->render('contact/index.html.twig', [
            'contactForm' => $form->createView(),
        ]);
    }
}