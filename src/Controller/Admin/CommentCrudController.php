<?php

namespace App\Controller\Admin;

use App\Entity\Comment;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class CommentCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Comment::class;
    }

  public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextEditorField::new('content', 'Contenu'),
            AssociationField::new('user', 'Utilisateur')
                ->hideOnForm(),
            AssociationField::new('trafficLight', 'Feu tricolore')
                ->hideOnForm(),
            DateTimeField::new('createdAt', 'Date de création')
                ->hideOnForm()
                ->setFormat('dd/MM/yyyy HH:mm'),
            DateTimeField::new('updatedAt', 'Dernière modification')
                ->hideOnForm()
                ->setFormat('dd/MM/yyyy HH:mm')
                ->hideOnIndex(),
        ];
    }
}
