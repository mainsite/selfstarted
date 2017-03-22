angular
  .module('selfStarted.component.viewProject')
  .directive('viewProject', ViewProject);

function ViewProject() {
  return {
    restrict: 'E',
    scope: {
      projectDat: '='
    },
    templateUrl: 'selfStarted/features/components/viewProject/viewProject.html',
    controller: ViewProjectCtrl,
    controllerAS: 'ViewProjectVM',
    bindToController: true
  };
}


function ViewProjectCtrl($scope) {

  var vm = this;

}

