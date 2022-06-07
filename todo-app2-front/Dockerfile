FROM node:latest

RUN apt-get update -qq && apt-get install -y build-essential git

ENV APP_ROOT /todo-app2-front
RUN mkdir $APP_ROOT
WORKDIR $APP_ROOT

ADD . $APP_ROOT
EXPOSE 3000

# Configure the main process to run when running the image
