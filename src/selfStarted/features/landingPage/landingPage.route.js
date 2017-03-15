angular
    .module('selfStarted.landingPage')
    .config(landingPageConfig);

function landingPageConfig($stateProvider) {
    $stateProvider.state({
        name: 'home',
        url: '/home',
        templateUrl: 'selfStarted/features/landingPage/landingPage.html',
        controller: LandingPageCtrl,
        controllerAs: 'LandingPageVM'
    });
}