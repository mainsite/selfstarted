angular
    .module('selfStarted.createProjects')
    .directive('createProjects', CreateProjects);

function CreateProjects() {
    return {
        restrict: 'E',
        scope: {
            todoData: '='
        },
        templateUrl: 'selfStarted/features/components/createProjects/createProjects.html',
        controller: "createProjectsCtrl",
        controllerAS: 'createProjectsVM',
        bindToController: true
    };
}