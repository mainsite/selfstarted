angular
  .module('selfStarted.component.viewProject')
  .directive('viewProject', ViewProject);

function ViewProject() {
  return {
    restrict: 'E',
    scope: {
      todoData: '='
    },
    templateUrl: 'selfStarted/features/components/viewProject/viewProject.html',
    controller: ViewProjectCtrl,
    controllerAS: 'viewProjectVM',
    bindToController: true
  };
}


function ViewProjectCtrl() {

  var vm = this;


}

