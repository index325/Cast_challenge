<?php

namespace App\Controller;

use App\Exception\AppException;
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
    public function index(CourseService $service): Response
    {
        try {
            return $this->json([
                'courses' => $service->findAllCourses(),
            ]);
        } catch (AppException $e) {
            return $this->json([
                'error' => $e->getMessage()
            ]);
        }
    }

    /**
     * @Route("/new", name="course_new", methods={"POST"})
     */
    public function new(Request $request, CourseService $service): Response
    {
        try {
            $course = $service->createCourse($request->request->all());

            return $this->json(
                $course
            );
        } catch (AppException $e) {
            return $this->json([
                'error' => $e->getMessage()
            ]);
        }
    }

    /**
     * @Route("/{id}", name="course_show", methods={"GET"})
     */
    public function show($id, CourseService $service): Response
    {
        try {
            $course = $service->showCourse($id);

            return $this->json(
                $course
            );
        } catch (AppException $e) {
            return $this->json([
                'error' => $e->getMessage()
            ]);
        }
    }

    /**
     * @Route("/{id}/edit", name="course_edit", methods={"PUT"})
     */
    public function edit(Request $request, $id, CourseService $service): Response
    {
        try {
            $course = $service->updateCourse($request->request->all(), $id);

            return $this->json(
                $course
            );
        } catch (AppException $e) {
            return $this->json([
                'error' => $e->getMessage()
            ]);
        }
    }

    /**
     * @Route("/{id}", name="course_delete", methods={"DELETE"})
     */
    public function delete($id, CourseService $service): Response
    {
        try {
            $service->deleteCourse($id);

            return $this->json([
                'success' => 'Registro removido'
            ]);
        } catch (AppException $e) {
            return $this->json([
                'error' => $e->getMessage()
            ]);
        }
    }
}
