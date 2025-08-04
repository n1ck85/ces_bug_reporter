1. Clone the repo
2. Create .env and edit DB credentials (host should be set to 'db')
3. RUN: docker-compose exec app php artisan key:generate if no key is present
4. RUN: composer install
5. RUN: npm install
6. RUN: npm run build
7. RUN: docker-compose up --build -d
8. RUN: docker-compose exec app php artisan migrate
