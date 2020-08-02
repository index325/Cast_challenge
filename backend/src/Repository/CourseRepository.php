<?php

namespace App\Repository;

use App\Entity\Course;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Course|null find($id, $lockMode = null, $lockVersion = null)
 * @method Course|null findOneBy(array $criteria, array $orderBy = null)
 * @method Course[]    findAll()
 * @method Course[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CourseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Course::class);
    }

    public function verifyIfAlreadyHaveACourseInTheSameInterval($dateFrom, $dateTo)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.date_begin >= :begin')
            ->setParameter('begin', $dateFrom)
            ->andWhere('c.date_finish >= :finish')
            ->setParameter('finish', $dateTo)
            ->getQuery()
            ->getResult();
    }

}
