<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250708093923 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE comment CHANGE user_id user_id INT NOT NULL, CHANGE traffic_light_id traffic_light_id INT NOT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL COMMENT '(DC2Type:datetime_immutable)'
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE traffic_light DROP updated_at
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE user CHANGE profile_color profile_color VARCHAR(255) NOT NULL, CHANGE profile_image profile_image VARCHAR(255) NOT NULL
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE comment CHANGE traffic_light_id traffic_light_id INT DEFAULT NULL, CHANGE user_id user_id INT DEFAULT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE traffic_light ADD updated_at DATETIME DEFAULT NULL COMMENT '(DC2Type:datetime_immutable)'
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE user CHANGE profile_color profile_color VARCHAR(255) DEFAULT '#FFFF' NOT NULL, CHANGE profile_image profile_image VARCHAR(255) DEFAULT 'default-avatar.jpg' NOT NULL
        SQL);
    }
}
