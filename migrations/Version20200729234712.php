<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200729234712 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE category ADD description VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE course ADD category_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE course ADD description VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE course ADD date_begin TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL');
        $this->addSql('ALTER TABLE course ADD date_finish TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL');
        $this->addSql('ALTER TABLE course ADD quantity_students INT DEFAULT NULL');
        $this->addSql('ALTER TABLE course ADD CONSTRAINT FK_169E6FB912469DE2 FOREIGN KEY (category_id) REFERENCES category (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_169E6FB912469DE2 ON course (category_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE category DROP description');
        $this->addSql('ALTER TABLE course DROP CONSTRAINT FK_169E6FB912469DE2');
        $this->addSql('DROP INDEX IDX_169E6FB912469DE2');
        $this->addSql('ALTER TABLE course DROP category_id');
        $this->addSql('ALTER TABLE course DROP description');
        $this->addSql('ALTER TABLE course DROP date_begin');
        $this->addSql('ALTER TABLE course DROP date_finish');
        $this->addSql('ALTER TABLE course DROP quantity_students');
    }
}
