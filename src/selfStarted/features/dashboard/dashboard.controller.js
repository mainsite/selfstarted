angular
    .module('selfStarted.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);

function DashboardCtrl($scope, $http, localStorageService) {
    var vm = this;
    vm.userImg = '/assets/images/defaultuser.jpg';

    vm.isCollapsed = false;


    // need to move this out to a service later
    // $http.get('/auth/userdata')
    //     .then(function (res) {
    //         console.log(res.data);
            
    //     }, function(err) {
    //         console.log(err);
    //     });

}