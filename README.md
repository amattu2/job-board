# Introduction

This is a Job Listing Board project built from the [nilanth/laravel-react-boilerplate](https://github.com/nilanth/laravel-react-boilerplate) boilerplate with a Laravel 9 backend and a React.js frontend using Antd. It's a continuous work-in-progress, with a primary focus towards implementing a functional UI.

Tech Stack & Tools:

- **Laravel 9**
- Laravel Sanctum for SPA Auth
- **React 18**
- Redux
- **[Ant Design](https://github.com/ant-design/ant-design)**
- [Redux Saga](https://redux-saga.js.org/)
- [Sass](https://sass-lang.com/)
- [ESLint](https://github.com/eslint/eslint)

# Usage

1. Installation `git clone https://github.com/amattu2/job-board`
   1. `cd job-board`
   2. `yarn install`
   3. `composer install`
2. Copy `.env.example` and rename to `.env`
3. Run `php artisan key:gen`
4. Database Setup
   1. Create the MySQL Database
   2. Update the Database credentials in the `.env` file
   3. Run `php artisan migrate` -> To create needed tables.
   4. Run `php artisan db:seed` -> To seed some fake users.
   5. Run `yarn run dev`
5. Update API `HOST_URL` in `resources/js/config/constant.js` file to your deployment URL
6. Run the project
   1. `php artisan serve`
   2. and `npm run watch`
   3. Open <http://localhost:8000>

# Credits

Based off [nilanth/laravel-react-boilerplate](https://github.com/nilanth/laravel-react-boilerplate).

Authors and Contributors:

- [Nilanth](https://github.com/nilanth)
- [All Contributors](../../contributors)

# License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
