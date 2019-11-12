<p align="center">
  <img width="191" alt="Logo USPCodeLab Handbook" src="logo.png"/>
</p>

<p align="center">
  <img alt="UCL Butantã Custom Badge" src="https://img.shields.io/badge/codelab-butantã-ff690a"/>
  <img alt="UCL Leste Custom Badge" src="https://img.shields.io/badge/codelab-leste-ff029e"/>
  <img alt="UCL Sanca Custom Badge" src="https://img.shields.io/badge/codelab-sanca-5ec8ae"/>
</p>

<p align="center">
  <img alt="Status Rocket Custom Badge"src="https://img.shields.io/badge/status-🚀-success"/>
  <a href="https://vuepress.vuejs.org/"><img alt="GitHub package.json dependency version (dev dep on branch)" src="https://img.shields.io/github/package-json/dependency-version/uspcodelab/handbook/dev/vuepress?style=flat"/></a>
  <img alt="" src="https://img.shields.io/github/license/uspcodelab/handbook?style=flat"/>
  <a href="https://github.com/uspcodelab/handbook/blob/master/CONTRIBUTING.md"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat"/></a>
</p>

<p align="center">
  <a href="https://github.com/uspcodelab/handbook/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/uspcodelab/handbook?style=social"></a>
  <a href="https://twitter.com/uspcodelab"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/uspcodelab?style=social"></a>
</p>

# Handbook

## Introduction

The **USPCodeLab Handbook** is, primarily, a repository of all relevant information about _USPCodeLab_, an universitary extension group which aims to stimulate technological innovation at the _University of São Paulo_. Here you can find more information about the group, initiatives, projects, internal organization and much more. Although it was created to _improve the onboarding experience of new members_, the **Handbook is open for everyone to read :)**

## Getting Started

### Prerequisites

This project was created using [VuePress v1.2][1], which is a static site generator and part of the [VueJS][2] ecossystem. Here is the list of prerequisites:

- **Git** - [Download & Install Git][3]. OSX and Linux machines typically have this already installed;
- **NodeJS**: [Download & Install Node.js][4] and the npm package manager. Be aware that _VuePress 1.2_ requires `NodeJS >= 8.6`;
- **Docker** + **Docker Compose** (optional): [Download & Install Docker][5] and [Docker Compose][6] in order to use an alternative way to run this project.

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

[![GitHub issues](https://img.shields.io/github/issues/uspcodelab/handbook?style=flat)][8]
[![GitHub contributors](https://img.shields.io/github/contributors/uspcodelab/handbook?style=flat)][9]

We are open for contributions :)

Please checkout our [Contributing Guide][7] for more information on how to propose improvements. Also, see our [issues board][8] if you're looking for ideas on how to contribute.

## License

Please, checkout our [License][10]

## Contributors

<!-- Copied from VuePress' own README.md Contributors section :P -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/ricardokojo"><img src="https://avatars1.githubusercontent.com/u/29009138?s=460&v=4" width="100px;" alt="Ricardo Kojo"/><br /><sub><b>Ricardo Kojo</b></sub></a></td>
    <td align="center"><a href="https://github.com/jooaodanieel"><img src="https://avatars1.githubusercontent.com/u/12701604?s=460&v=4" width="100px;" alt="João Daniel"/><br /><sub><b>João Daniel</b></sub></a></td>
    <td align="center"><a href="https://github.com/leandrigues"><img src="https://avatars1.githubusercontent.com/u/39068024?s=460&v=4" width="100px;" alt="Leandro Rodrigues"/><br /><sub><b>Leandro Rodrigues</b></sub></a></td>
    <td align="center"><a href="https://github.com/ygortavela"><img src="https://avatars1.githubusercontent.com/u/39172911?s=460&v=4" width="100px;" alt="Ygor Tavela"/><br /><sub><b>Ygor Tavela</b></sub></a></td>
  </tr>
</table>
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

[1]: https://vuepress.vuejs.org/
[2]: https://vuejs.org/
[3]: https://git-scm.com/downloads
[4]: https://nodejs.org/en/download/
[5]: https://docs.docker.com/install/
[6]: https://docs.docker.com/compose/install/
[7]: https://github.com/uspcodelab/handbook/blob/master/CONTRIBUTING.md
[8]: https://github.com/uspcodelab/handbook/issues
[9]: https://github.com/uspcodelab/handbook/graphs/contributors
[10]: https://github.com/uspcodelab/handbook/blob/master/LICENSE
