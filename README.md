# Logux proxy sample configuration

Setup:

```
docker-compose run app bin/setup
docker-compose run logux-proxy yarn
docker-compose up app
```

Open http://localhost:3000/ when server is up.

Rails console:

```
docker-compose run app bundle exec rails c
```
