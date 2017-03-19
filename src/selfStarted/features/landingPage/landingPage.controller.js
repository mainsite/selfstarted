angular
    .module('selfStarted.landingPage')
    .controller('LandingPageCtrl', LandingPageCtrl);

function LandingPageCtrl($scope) {
    var vm = this;

    $scope.isCollapsed = false;
}