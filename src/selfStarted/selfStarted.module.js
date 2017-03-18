angular
    .module('selfStarted', [
        'ui.router',
        'ngMaterial',
        'ngMessages',
        'selfStarted.landingPage',
        'selfStarted.dashboard'
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}