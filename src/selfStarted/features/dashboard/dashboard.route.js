angular
    .module('selfStarted.dashboard')
    .config(dashboardConfig);

function dashboardConfig($stateProvider) {
    $stateProvider.state({
        name: 'dashboard',
        url: '/dashboard',
        templateUrl: 'selfStarted/features/dashboard/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'DashboardVM'
    });
}