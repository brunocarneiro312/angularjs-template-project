import ngRoute from 'angular-route';

/**
 * ----------------
 * Módulo principal
 * ----------------
 */
export default function App() {

    // Declarando módulo
    return angular.module('app', [
        ngRoute
    ])
    // Declarando rotas
    .config(function($routeProvider) {

        $routeProvider
            .when('/', {
                template: 'Home',
                controller: 'HomeController as vm'
            })
            .when('/components', {
                template: 'Components'
            })
            .otherwise("/");
    });
}