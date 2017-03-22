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

    users.getUsers(userID, function (err, response) {
        if (err) console.error(err);
        var user = response[0];
        console.log("User is:", user.firstName);
        $scope.user = setCurrentUser(user);
    });

    $scope.ok = function () {
        console.log("you clicked ok");
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        console.log("you clicked cancel");
        $uibModalInstance.close();
    };

    function setCurrentUser(user) {
        var local = user.willDoLocalProjects ? 'yes' : 'no';
        var remote = user.willDoRemoteProjects ? 'yes' : 'no';
        return {
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.userLocation,
            description: user.aboutMe,
            url: user.linkedInURL,
            photo: user.userPhotoLink,
            local: local,
            remote: remote
        };
    }

    function getItem(key) {
        return localStorageService.get(key);
    }
}