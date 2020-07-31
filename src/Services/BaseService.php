<?php

namespace App\Services;

abstract class BaseService {

    protected $em;

    /**
     * This method need to be implemented by the child class
     * returning for example $this->em->getRepository('SystemBundle:Entity')
     */
    protected abstract function getRepository();

    /**
     * This method is used to persist the entity in the database using their repository.
     */
    protected function saveOrUpdate($entity) {
        if (!$entity->getId()) {
            $entity = $this->em->persist($entity);
            $entity = $this->em->flush();
        } else {
            $entity = $this->em->flush();
        }

        return $entity;
    }

    protected function delete($entity){
        try {

            if($entity){
                $this->em->remove($entity);
                $this->em->flush();
            }

        }catch(\Exception $e){
            throw new \Exception('Erro ao tentar excluir registro');
        }
    }

    public function listAll() {
		return $this->getRepository()->findAll();
	}

	public function find($id) {
		return $this->getRepository()->find($id);
	}

}
