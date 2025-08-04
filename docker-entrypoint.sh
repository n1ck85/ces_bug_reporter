#!/bin/bash

# Fix Laravel permissions
echo "Setting correct permissions..."
chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache
chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Run the main container command (Apache)
exec "$@"
