# Chat App

Real Time Chat With Laravel Broadcast, Pusher and Vue.js

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

<p> First, download the Laravel installer using Composer:<p>
    <code>composer global require laravel/installer</code>

### Installing

A step by step series of examples that tell you how to get a development env running

1. Clone the repo and `cd` into it
1. `composer install`
1. Rename or copy `.env.example` file to `.env`
1. `php artisan key:generate`
1. Set your database credentials in your `.env` file
1. Set your Pusher credentials in your `.env` file. Specifically `PUSHER_APP_KEY` and `PUSHER_APP_SECRET`
1. `npm install`
1. `npm run dev`
1. `php artisan serve` or use Laravel Valet or Laravel Homestead
1. Visit `localhost:8000` in your browser


## Built With

* [Laravel](https://laravel.com/docs/8.x) - The web framework used
* [Vue.js](https://vuejs.org/) - The web framework used
* [Composer](https://getcomposer.org/) - Dependency Manager
* [NPM](https://www.npmjs.com/) - Package Manager


## Authors

* **Xyryl Aranza** - *Initial work* - [Xyryllium](https://github.com/Xyryllium)

See also the list of [contributors](https://github.com/Xyryllium/laravel-chat/contributors) who participated in this project.

