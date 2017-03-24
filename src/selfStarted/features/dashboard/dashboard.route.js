angular
    .module('selfStarted.dashboard')
    .config(dashboardConfig);

function dashboardConfig($stateProvider, localStorageServiceProvider) {
    localStorageServiceProvider.setStorageType('localStorage');
    
    $stateProvider.state({
        name: 'dashboard',
        url: '/dashboard',
        templateUrl: 'selfStarted/features/dashboard/dashboard.html',
        controller: DashboardCtrl,
        controllerAs: 'DashboardVM',
        // resolve: {
        //     loggedIn: checkLogin
        // }
    });
}

function checkLogin($q, $http, $location, localStorageService) {
    var defer = $q.defer();
    $http.get('/auth/userdataid')
        .then(function (res) {
            if(res.data) {
                console.log("user is logged in");
                setStorage('userDBid', res.data);
                defer.resolve();
            }
            else {
                defer.reject();
                $location.url('/');
            }
        });

    return defer.promise;

    function setStorage(key, val) {
        return localStorageService.set(key, val);
    }
}