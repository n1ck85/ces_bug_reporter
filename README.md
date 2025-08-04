Setup

1. Clone the repo
2. Create .env and edit DB credentials (host should be set to 'db')
3. RUN: composer install
4. RUN: npm install
5. RUN: npm run build
6. RUN: docker-compose up --build -d
7. RUN: docker-compose exec app php artisan migrate
8. RUN: docker-compose exec app php artisan key:generate if no key is present
9. Go to http://localhost:8000

Running Tests

RUN: npx cypress open
Select 'e2e tests' and then 'bug report form'
