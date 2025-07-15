# My Profile

This is my personal profile page: [https://ktnoor.github.io/](https://ktnoor.github.io/).
The project is built using the [Academic Pages](https://academicpages.github.io/) template, which is a Jekyll theme designed for academic and professional portfolio websites.

---

## Academic Pages

**Academic Pages is a GitHub Pages template for personal and professional portfolio-oriented websites.**

## Running locally

When you are initially working on your website, it is very useful to be able to preview the changes locally before pushing them to GitHub. To work locally you will need to:

1. Clone the repository and made updates as detailed above.
1. Make sure you have ruby-dev, bundler, and nodejs installed

    On most Linux distribution and [Windows Subsystem Linux](https://learn.microsoft.com/en-us/windows/wsl/about) the command is:

    ```bash
    sudo apt install ruby-dev ruby-bundler nodejs
    ```

    If you see error `Unable to locate package ruby-bundler`, `Unable to locate package nodejs`, run the following:

    ```bash
    sudo apt update && sudo apt upgrade -y
    ```

    then try run `sudo apt install ruby-dev ruby-bundler nodejs` again.

    On MacOS the commands are:

    ```bash
    brew install ruby
    brew install node
    gem install bundler
    ```

1. Run `bundle install` to install ruby dependencies. If you get errors, delete Gemfile.lock and try again.

    If you see file permission error like `Fetching bundler-2.6.3.gem ERROR:  While executing gem (Gem::FilePermissionError) You don't have write permissions for the /var/lib/gems/3.2.0 directory.` or `Bundler::PermissionError: There was an error while trying to write to /usr/local/bin.`
    Install Gems Locally (Recommended):

    ```bash
    bundle config set --local path 'vendor/bundle'
    ```

    then try run `bundle install` again. If succeeded, you should see a folder called `vendor` and open `.gitignore` then add `vendor` inside it.

1. Run `jekyll serve -l -H localhost` to generate the HTML and serve it from `localhost:4000` the local server will automatically rebuild and refresh the pages on change.
    You may also try `bundle exec jekyll serve -l -H localhost` to ensure jekyll to use specific dependencies on your own local machine.

If you are running on Linux it may be necessary to install some additional dependencies prior to being able to run locally: `sudo apt install build-essential gcc make`

## Using Docker

Working from a different OS, or just want to avoid installing dependencies? You can use the provided `Dockerfile` to build a container that will run the site for you if you have [Docker](https://www.docker.com/) installed.

You can build and execute the container by running the following command in the repository:

```bash
docker compose up
```

You should now be able to access the website from `localhost:4000`.

## Using Windows

If you are using Windows, you can use run the website locally using [Jekyll on Windows](https://jekyllrb.com/docs/installation/windows/).

The easiest way to install Ruby and Jekyll is by using the [RubyInstaller](https://rubyinstaller.org/) for Windows.

- [Download and install](https://rubyinstaller.org/downloads/) the latest version of `Ruby+Devkit`, which includes Ruby, DevKit, and Bundler.
- Run the `ridk install` step on the last stage of the installation wizard. This is needed for installing gems with native extensions. You can find additional information regarding this in the RubyInstaller Documentation. From the options choose `MSYS2 and MINGW development toolchain`.
- Open a command prompt and run the following commands to verify the installation:

    ```bash
    ruby -v
    bundler -v
    ```

- Run:

    ```bash
    bundle install
    ```

## Command to Run locally

If you are using Windows and want to run the website locally, you can use [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install) (WSL).

After installing and setting up WSL, you can run the following commands in your WSL terminal:

```bash
bundle exec jekyll serve
```

---

[![GitHub license](https://img.shields.io/github/license/academicpages/academicpages.github.io?color=blue)](LICENSE)

---
