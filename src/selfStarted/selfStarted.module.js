angular
    .module('selfStarted', [
        'ui.router',
        'ui.materialize',
        'selfStarted.landingPage',
        'selfStarted.dashboard'
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}