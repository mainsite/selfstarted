angular
    .module('selfStarted.dashboard')
    .config(dashboardConfig);

function dashboardConfig($stateProvider, $mdThemingProvider) {
    $stateProvider.state({
        name: 'dashboard',
        url: '/dashboard',
        templateUrl: 'selfStarted/features/dashboard/dashboard.html',
        controller: DashboardCtrl,
        controllerAs: 'DashboardVM'
    });

    $mdThemingProvider.theme('docs-dark')
    .primaryPalette('yellow')
    .dark();
}