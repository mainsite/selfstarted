angular.module('selfStarted', [
    'ui.router',
    'ui.bootstrap'
])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}