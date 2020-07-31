<?php

namespace App\Controller;

use App\Entity\Course;
use App\Form\CourseType;
use App\Services\CourseService;
use App\Repository\CourseRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/course")
 */
class CourseController extends AbstractController
{
    /**
     * @Route("/", name="course_index", methods={"GET"})
     */
    public function index(CourseRepository $courseRepository): Response
    {
        return $this->json([
            'courses' => $courseRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="course_new", methods={"GET","POST"})
     */
    public function new(Request $request, CourseService $service): Response
    {
        $course = $service->createCourse($request->request->all());

        return $this->json([
            $course
        ]);
    }

    /**
     * @Route("/{id}", name="course_show", methods={"GET"})
     */
    public function show($id, CourseService $service): Response
    {
        $course = $service->showCourse($id);

        return $this->json([
            $course
        ]);
    }

    /**
     * @Route("/{id}/edit", name="course_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, $id, CourseService $service): Response
    {

        $course = $service->updateCourse($request->request->all(), $id);

        return $this->json([
            $course
        ]);
    }

    /**
     * @Route("/{id}", name="course_delete", methods={"DELETE"})
     */
    public function delete($id, CourseService $service): Response
    {
        $service->deleteCourse($id);

        return $this->json([
            'success' => 'Registro removido'
        ]);
    }
}
