# Handbook

<p align="center">
    <img alt="UCL Butantã Custom Badge" src="https://img.shields.io/badge/codelab-butantã-ff690a"/>
    <img alt="UCL Leste Custom Badge" src="https://img.shields.io/badge/codelab-leste-ff029e"/>
    <img alt="UCL Sanca Custom Badge" src="https://img.shields.io/badge/codelab-sanca-5ec8ae"/>
</p>

<p align="center">
    <img alt="Status Custom Badge"src="https://img.shields.io/badge/status-🚀-success"/>
    <img alt="GitHub package.json dependency version (dev dep on branch)" src="https://img.shields.io/github/package-json/dependency-version/uspcodelab/handbook/dev/vuepress?style=flat"/>
    <img alt="GitHub License" src="https://img.shields.io/github/license/uspcodelab/handbook?style=flat"/>
    <a href="https://github.com/uspcodelab/handbook/blob/master/CONTRIBUTING.md"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat"/></a>
</p>

<p align="center">
    <img alt="GitHub forks" src="https://img.shields.io/github/forks/uspcodelab/handbook?style=social">
    <a href="https://twitter.com/uspcodelab"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/uspcodelab?style=social"></a>
</p>

## Introduction

The USPCodeLab Handbook is, primarily, a repository of all relevant information about USPCodeLab, an universitary extension which aims to stimulate technological innovation at the University of São Paulo. Here you can find more information about the group, initiatives, projects, internal organization and much more. Although it was created to improve the onboarding experience of new members, the Handbook is open for everyone to read :)

## Getting Started

### Prerequisites

This project was created using [VuePress v1.2][1], which is a static site generator and part of the [VueJS][2] ecossystem. Here is the list of prerequisites:

* **Git** - [Download & Install Git][3]. OSX and Linux machines typically have this already installed;
* **NodeJS**: [Download & Install Node.js][4] and the npm package manager. Be aware that _VuePress 1.2_ requires `NodeJS >= 8.6`;
* **Docker** + **Docker Compose** (optional): [Download & Install Docker][5] and [Docker Compose][6] in order to use an alternative way to run this project.

### Installing

Run the following command on your terminal of choice to install the necessary dependencies (you may skip this step if you're using Docker and Docker Compose):

```shell
# on the root directory of this project, the same as package.json and package-lock.json
npm install
```

### Run using npm

Run the following command on your terminal of choice to run the application. By default, it sets up a server on `localhost:8080`.

```shell
npm run docs:dev
```

### Run using Docker and Docker Compose

Alternatively, we also provide a `Dockerfile` and a `docker-compose.yml`. Run the following commands on your command-line to build an image and setup a container running the application. By default, it binds the container's _port 8080_ to `localhost:8080`.

```shell
docker-compose build
docker-compose up
```

### Add new content!

That's it! The application should be up and running 🚀🚀. You can edit the _Markdown_ files inside the `.docs/` directory and see your changes at `localhost:8080`.

If you want to contribute, checkout the following section.

## Contributing

![GitHub issues](https://img.shields.io/github/issues/uspcodelab/handbook?style=flat)
![GitHub contributors](https://img.shields.io/github/contributors/uspcodelab/handbook?style=flat)

## Contributors


[1]: https://vuepress.vuejs.org/
[2]: https://vuejs.org/
[3]: https://git-scm.com/downloads
[4]: https://nodejs.org/en/download/
[5]: https://docs.docker.com/install/
[6]: https://docs.docker.com/compose/install/