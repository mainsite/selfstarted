angular
    .module('selfStarted.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);

function DashboardCtrl($scope, $mdSidenav) {
    var vm = this;

    $scope.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    };
}