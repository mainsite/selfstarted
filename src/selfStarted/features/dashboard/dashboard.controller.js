angular
    .module('selfStarted.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);

function DashboardCtrl($scope) {
    var vm = this;

    var tabs = [
        { title: 'One', content: "Tabs will become paginated if there isn't enough room for them." },
        { title: 'Two', content: "You can swipe left and right on a mobile device to change tabs." },
        { title: 'Three', content: "You can bind the selected tab via the selected attribute on the md-tabs element." },
        { title: 'Four', content: "If you set the selected tab binding to -1, it will leave no tab selected." },
    ];

    var selected = null, previous = null;

    $scope.tabs = tabs;
    $scope.selectedIndex = 2;
    $scope.$watch('selectedIndex', function (current, old) {
        previous = selected;
        selected = tabs[current];
    });
}