angular
    .module('selfStarted', [
        'ui.router',
        'ui.bootstrap',
        'selfStarted.landingPage',
        'selfStarted.dashboard'
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}