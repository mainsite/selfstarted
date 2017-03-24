angular
    .module('selfStarted', [
        'ui.router',
        'ui.bootstrap',
        'ngAnimate',
        'LocalStorageModule',
        'selfStarted.landingPage',
        'selfStarted.dashboard',
        'selfStarted.service.users',
        'selfStarted.profilePage',
        'selfStarted.projectsPage',
        'selfStarted.service.college',
        'selfStarted.service.projects'
    ])
    .config(appConfig);

function appConfig($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
}