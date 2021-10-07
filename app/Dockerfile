FROM ruby:3

ARG RAILS_ENV
ARG DATABASE_URL

ENV RAILS_ENV=$RAILS_ENV
ENV RACK_ENV=$RAILS_ENV
ENV DATABASE_URL=$DATABASE_URL

RUN apt-get update -qq
  && apt-get install -y nodejs postgresql-client
  && mkdir -p /app

WORKDIR /app
