<?php

namespace App\DataFixtures;

use App\Entity\Category;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $category = new Category();

        $category->setId(1);
        $category->setDescription('Comportamental');

        $manager->persist($category);

        $category = new Category();

        $category->setId(2);
        $category->setDescription('Programação');

        $manager->persist($category);

        $category = new Category();

        $category->setId(3);
        $category->setDescription('Qualidade');

        $manager->persist($category);

        $category = new Category();

        $category->setId(4);
        $category->setDescription('Processos');

        $manager->persist($category);

        $manager->flush();
    }
}
