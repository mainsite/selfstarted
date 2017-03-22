angular
    .module('selfStarted.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);

function DashboardCtrl($scope, $http, localStorageService, $uibModal) {
    var vm = this;
    vm.userImg = '/assets/images/defaultuser.jpg';

    $scope.isCollapsed = false;

    vm.open = function () {
        console.log("open modal");
        var modalInstance = $uibModal.open({
            templateUrl: 'selfStarted/features/components/userProfile/userProfile.html',
            controller: UserProfileCtrl
        });
    };
}