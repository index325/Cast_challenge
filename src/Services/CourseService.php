<?php

namespace App\Services;

use App\Services\BaseService;
use App\Entity\Course;
use Doctrine\ORM\EntityManager;

class CourseService extends BaseService
{

    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }

    protected function getRepository()
    {
        $repository = $this->em->getRepository('App:Course');

        return $repository;
    }

    protected function getCategoryRepository()
    {
        $repository = $this->em->getRepository('App:Category');

        return $repository;
    }

    public function createCourse($data)
    {
        $course = new Course();
        $course->setDescription($data['description']);
        $course->setDateFinish($data['date_finish']);
        $course->setDateBegin($data['date_begin']);
        $course->setQuantityStudents($data['quantity_students']);

        $category = $this->getCategoryRepository()->find($data['category_id']);

        if (!$category) {
            throw new \Exception('Category not found');
        }

        $course->setCategory($category);

        $this->saveOrUpdate($course);

        return $course;
    }

    public function showCourse($id)
    {
        return $this->getRepository()->find($id);
    }

    public function updateCourse($data, $id)
    {
        $course = $this->getRepository()->find($id);
        $course->setDescription($data['description']);
        $course->setDateFinish($data['date_finish']);
        $course->setDateBegin($data['date_begin']);
        $course->setQuantityStudents($data['quantity_students']);

        $category = $this->getCategoryRepository()->find($data['category_id']);

        if (!$category) {
            throw new \Exception('Category not found');
        }

        $course->setCategory($category);

        $this->saveOrUpdate($course);

        return $course;
    }

    public function deleteCourse($id)
    {
        $course = $this->getRepository()->find($id);
        return $this->delete($course);
    }
}
