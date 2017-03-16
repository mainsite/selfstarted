angular
    .module('selfStarted', [
        'ui.router',
        'selfStarted.landingPage',
        'selfStarted.dashboard'
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}