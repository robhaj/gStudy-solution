app.config(function($locationProvider, $routeProvider) {
  $routeProvider
    .when('/', {templateUrl: 'views/register-page.html'})
    .when('/dashboard', {templateUrl: 'views/dashboard-page.html'})
    .when('/login', {templateUrl: 'views/login-page.html'})
    .when('/new-deck', {templateUrl: 'views/new-deck-page.html'})
    .when('/show-deck', {templateUrl: 'views/show-deck-page.html'})
    .otherwise({redirectTo: '/'});
});
