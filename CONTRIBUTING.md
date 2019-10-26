# CONTRIBUTING

All contributions are welcome!

If you'd like to submit a change, please create a Pull-Request.
There are some [issues][1] in the repository you can base you're contribution on.

Don't forget to add yourself as a contributor to the project README section!

## Creating a PR

1. Fork this repo
2. Clone your forked version
3. Make and commit your awesome contribution change
4. Push commits to your forked repo
5. Come back to your repo (the forked one)
6. Open the Pull-Request tab and create the PR!

[1]: https://github.com/uspcodelab/handbook/issues

## Project Structure

We follow the directory structure recommended [here][2]! Therefore, in order to have your PR approved faster, always double check whether or not your changes respect the directory structure.

- **`docs`**: root directory for this [VuePress][3] project. All files related to USPCodeLab's handbook are present in this directory. In order to add content, change project configurations, update themes, it'll all be done here :)
  - **`.vuepress`**: directory that stores global configuration, components, static resources, etc.
    - `.vuepress/config.js`: configuration file. You can see the configuration options [here][4].
  - `docs/README.md`: content for handbook's index page.

[2]: https://vuepress.vuejs.org/guide/directory-structure.html
[3]: https://vuepress.vuejs.org
[4]: https://vuepress.vuejs.org/config/#basic-config
