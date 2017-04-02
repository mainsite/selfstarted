angular
    .module('selfStarted.component.userProfile')
    .directive('userProfile', UserProfile);

function UserProfile() {
    return {
        restrict: 'E',
        scope: {
            userData: '='
        },
        templateUrl: 'selfStarted/features/components/directives/userProfile/userProfile.html',
        controller: UserProfileCtrl,
        controllerAs: 'UserProfileVM'
    };
}

function UserProfileCtrl($scope, $uibModalInstance, localStorageService, UsersService, userData) {
    var vm = this;
    var users = userData;

    $scope.user = setCurrentUser(users);
    
    console.log(users);

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
}