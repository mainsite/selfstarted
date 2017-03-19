angular
  .module('selfStarted.component.createProjects')
  .directive('createProjects', CreateProjects);

function CreateProjects() {
  return {
    restrict: 'E',
    scope: {
      todoData: '='
    },
    templateUrl: 'selfStarted/features/components/createProjects/createProjects.html',
    controller: CreateProjectsCtrl,
    controllerAS: 'createProjectsVM',
    bindToController: true
  };
}


function CreateProjectsCtrl($scope) {

  var vm = this;

}



