voltApp.config(['$routeProvider', '$compileProvider',
    function ($routeProvider, $compileProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/index.html',
            })
            .when('/login', {
                templateUrl: 'views/login.html',
            })
            .otherwise({
                redirectTo: '/login'
            });
        // $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|blob|data):/);
    }
]);