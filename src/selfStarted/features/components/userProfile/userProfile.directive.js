angular
    .module('selfStarted.component.userProfile')
    .directive('userProfile', UserProfile);

function UserProfile() {
    return {
        restrict: 'E',
        scope: {
            userData: '='
        },
        templateUrl: 'selfStarted/features/components/userProfile/userProfile.html',
        controller: UserProfileCtrl,
        controllerAs: 'UserProfileVM'
    };
}

function UserProfileCtrl($scope, $uibModalInstance) {
    vm = this;

    

    $scope.ok = function () {
        console.log("you clicked ok");
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        console.log("you clicked cancel");
        $uibModalInstance.close();
    };
}