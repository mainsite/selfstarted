angular
    .module('selfStarted', [
        'ui.router',
        'ui.bootstrap',
        'selfStarted.landingPage'
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}