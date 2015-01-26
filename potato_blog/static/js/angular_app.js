var potato_blog = angular.module('potato_blog', ['ngRoute', 'ngCookies', 'ui.bootstrap']);

potato_blog.run(function ($http, $cookies) {
    $http.defaults.headers.post['X-CSRFToken'] = $cookies['csrftoken'];
    $http.defaults.headers.put['X-CSRFToken'] = $cookies['csrftoken'];
    $http.defaults.headers.common['X-CSRFToken'] = $cookies['csrftoken'];
});

potato_blog.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: '/static/js/views/home.html', controller: homeController }).
        otherwise({redirectTo: '/'});
}]);