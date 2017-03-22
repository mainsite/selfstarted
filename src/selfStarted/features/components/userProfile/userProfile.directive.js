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

function UserProfileCtrl($scope, $uibModalInstance, localStorageService, UsersService) {
    var vm = this;
    var users = UsersService;
    var userID = {
        _id: getItem('userDBid')
    };

    console.log(userID);

    users.getUsers(userID, function (err, response) {
        if (err) console.error(err);

        console.log(response);
    });

    $scope.ok = function () {
        console.log("you clicked ok");
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        console.log("you clicked cancel");
        $uibModalInstance.close();
    };

    function getItem(key) {
        return localStorageService.get(key);
    }
}