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

function UserProfileCtrl($scope, $uibModalInstance, localStorageService, UsersService, userData , MessagesService) {

    var vm = this;

    var users = userData;

    console.log(users);

    var messagesService = MessagesService;

    $scope.user = setCurrentUser(users);
 
    $scope.ok = function () {
        console.log("you clicked ok");

               /**
         * Location Storage of the User ID
         * @type {LinkedId ID of User}
         */
        var userDBid = getItem('userDBid');



        console.log($scope.subjectUser);
        console.log($scope.messageUser);

        var messageInfo = {

            _fromUser      : userDBid,
            _toUser        : users._id,
            messageSubject : $scope.subjectUser,
            messageText    : $scope.messageUser

        }

        console.log(messageInfo);

        messagesService.postMessage(messageInfo , function (err , res){

            if (err) return console.log(err);



        })

        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        console.log("you clicked cancel");
        $uibModalInstance.close();
    };

    /**
     * @param  {User LinkedIn key}
     * @return {User LinkedIn Key}
     */
    function getItem(key) {
        return localStorageService.get(key);
    }

    function setCurrentUser(user) {
        var local  = user.willDoLocalProjects ? 'yes' : 'no';
        var remote = user.willDoRemoteProjects ? 'yes' : 'no';
        return {
            firstName   : user.firstName,
            lastName    : user.lastName,
            location    : user.userLocation,
            description : user.aboutMe,
            url         : user.linkedInURL,
            photo       : user.userPhotoLink,
            local       : local,
            remote      : remote
        };
    }
}