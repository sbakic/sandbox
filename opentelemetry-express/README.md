## Running Project

### Standalone

Run the project with `npm run start`

### Docker

Build the project with `npm run build`

Build the project for development with `docker build -f ./docker/app.Dockerfile -t app .`

Build the project for production with `docker build -f ./docker/prod.Dockerfile -t app .`

Run the project with `docker run --name app --publish 8080:8080 --volume .:/home/app:cached -d app:latest`

Stop the project with `docker stop app && docker remove app`

## Testing Project

Test the project with `curl http://localhost:8080/rolldice`

Check the logs with `docker logs app --follow`
