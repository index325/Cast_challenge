<p align="center"><img alt="Cast" src="https://hipsters.jobs/files/pictures/Logomarca-Cast-group.jpg" /></p>
<h1 align=center>Desafio React + PHP</h1>
<p align="center">Repositório contendo o desafio proposto pela Cast.</p>

## :computer: Techs:
- ReactJS
- Babel
- Webpack
- Material-UI
- Symfony Framwork
- Doctrine ORM

## :running: Run the project (backend):
```shell
  # Clone this repository
  - git clone https://github.com/index325/Cast_challenge.git
  
  # Enter project directory
  - cd Cast_challenge
  
  # Enter backend directory
  - cd backend
  
  # Install dependencies
  - composer install

  # Create database
  - php bin/console doctrine:database:create
  
  # Execute migrations
  - php bin/console doctrine:migrations:migrate
  
  # Execute DataFixtures
  - php bin/console doctrine:fixtures:load
  
  # Run server
  - symfony serve
  
  # Start the application
  - yarn start
  
  
```

## :running: Run the project (frontend):
```shell
  
  # Enter project directory
  - cd Cast_challenge
  
  # Enter backend directory
  - cd frontend
  
  # Install dependencies
  - yarn
  
  # Run the application
  - yarn start=
```

<p align="center">Feito com ❤ por Gabriel de Moraes Orlando</p>
