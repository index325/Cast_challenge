<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Course
 *
 * @ORM\Table(name="course")
 * @ORM\Entity(repositoryClass=App\Repository\CourseRepository::class)
 */
class Course
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="course_id_seq", allocationSize=1, initialValue=1)
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", nullable=false)
     */
    private $description;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_begin", type="datetime", nullable=false)
     */
    private $date_begin;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_finish", type="datetime", nullable=false)
     */
    private $date_finish;

    /**
     * @var integer
     *
     * @ORM\Column(name="quantity_students", type="integer", nullable=true)
     */
    private $quantity_students;

    /**
     * @ORM\ManyToOne(targetEntity="Category")
     * @ORM\JoinColumn(name="category_id", referencedColumnName="id")
     */
    private $category;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getDateBegin()
    {
        return $this->date_begin;
    }

    public function setDateBegin($date_begin): self
    {
        $this->date_begin = new \DateTime($date_begin);

        return $this;
    }

    public function getDateFinish()
    {
        return $this->date_finish;
    }

    public function setDateFinish($date_finish): self
    {
        $this->date_finish = new \DateTime($date_finish);

        return $this;
    }

    public function getQuantityStudents(): ?int
    {
        return $this->quantity_students;
    }

    public function setQuantityStudents(?int $quantity_students): self
    {
        $this->quantity_students = $quantity_students;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }
}
