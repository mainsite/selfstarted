angular
    .module('selfStarted.searchProjects')
    .directive('searchProjects', SearchProjects);

function SearchProjects() {
    return {
        restrict: 'E',
        scope: {
            todoData: '='
        },
        templateUrl: 'selfStarted/features/components/searchProjects/searchProjects.html',
        controller: "SearchProjectsCtrl",
        controllerAS: 'SearchProjectsVM',
        bindToController: true
    };
}