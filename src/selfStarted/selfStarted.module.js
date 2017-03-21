angular
    .module('selfStarted', [
        'ui.router',
        'ui.bootstrap',
        'ngAnimate',
        'LocalStorageModule',
        'selfStarted.landingPage',
        'selfStarted.dashboard'
    ])
    .config(appConfig);

function appConfig($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
}