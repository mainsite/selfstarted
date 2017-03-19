angular
    .module('selfStarted.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);

function DashboardCtrl($scope, $http) {
    var vm = this;
    vm.userImg = '/assets/images/defaultuser.jpg';

    vm.isCollapsed = false;

    //need to move this out to a service later
    $http.get('/auth/userdata')
        .then(function (res) {
            console.log(res.data);
            console.log(res.data._json.pictureUrl);
            vm.userName = res.data._json.firstName;
            vm.userImg = res.data._json.pictureUrl;
        }, function(err) {
            console.log(err);
        });
}