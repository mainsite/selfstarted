angular
    .module('selfStarted.dashboard')
    .config(dashboardConfig);

function dashboardConfig($stateProvider, localStorageServiceProvider) {
    $stateProvider.state({
        name: 'dashboard',
        url: '/dashboard',
        templateUrl: 'selfStarted/features/dashboard/dashboard.html',
        controller: DashboardCtrl,
        controllerAs: 'DashboardVM',
        resolve: {
            loggedIn: checkLogin
        }
    });

    localStorageServiceProvider.setStorageType('localStorage');
}

function checkLogin($q, $http, $location) {
    var defer = $q.defer();
    $http.get('/auth/userdata')
        .then(function (res) {
            if(res.data !== 'error') {
                console.log("user is logged in");
                defer.resolve();
            }
            else {
                defer.reject();
                $location.url('/');
            }
        });

    return defer.promise;
}