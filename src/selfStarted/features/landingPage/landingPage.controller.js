(function(){

angular
    .module('selfStarted.landingPage')
    .controller('LandingPageCtrl', LandingPageCtrl);

function LandingPageCtrl($scope) {
    var vm = this;


    $scope.currentNavItem = 'page1';


}

})();