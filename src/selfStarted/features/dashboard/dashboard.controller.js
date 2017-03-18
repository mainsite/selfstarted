angular
    .module('selfStarted.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);

function DashboardCtrl($scope, $mdSidenav) {
    var vm = this;

    vm.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    };

     $scope.currentNavItem = 'page1';
}