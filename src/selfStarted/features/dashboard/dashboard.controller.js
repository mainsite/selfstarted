angular
    .module('selfStarted.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);

function DashboardCtrl($scope, UsersService, localStorageService, $uibModal) {
    var vm = this;
    var users = UsersService;
    var userID = {
        _id: getUserID('userDBid')
    };      
    vm.userImg = '/assets/images/defaultuser.jpg';
    vm.open = open;

    $scope.isCollapsed = false;

    users.getUsers(userID, function(err, response) {
        if (err) return console.log(err);
        console.log(response[0]);
        vm.userName = response[0].firstName;
        vm.userImg = response[0].userPhotoLink;
    });
    
    // function open() {
    //     console.log("open modal");
    //     var modalInstance = $uibModal.open({
    //         templateUrl: 'selfStarted/features/components/userProfile/userProfile.html',
    //         controller: UserProfileCtrl
    //     });
    // }

    function getUserID(key) {
        return localStorageService.get(key);
    }
}