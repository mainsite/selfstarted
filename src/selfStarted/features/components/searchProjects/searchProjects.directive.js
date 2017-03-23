angular
    .module('selfStarted.component.searchProjects')
    .directive('searchProjects', SearchProjects);

function SearchProjects() {
    return {
        restrict: 'E',
        scope: {
            projectData: '='
        },
        templateUrl: 'selfStarted/features/components/searchProjects/searchProjects.html',
        controller: SearchProjectsCtrl,
        controllerAS: 'SearchProjectsVM',
        bindToController: true
    };
}

function SearchProjectsCtrl($scope, ProjectsService, CollegeService) {

    var vm = this;
    var college = CollegeService;
    var mainCollegeField = Object.keys(college);
    var projects = ProjectsService;

    $scope.submit = submit;
    $scope.colleges = mainCollegeField;
    $scope.subcolleges = [];
    $scope.changeSubCollege = changeSubCollege;



    function changeSubCollege() {

        var key = $scope.mainCollege;

        var userSub = college[key];

        $scope.subcolleges = userSub;

        console.log($scope.subcolleges);

    }


    function submit() {
        var title = $scope.title ? $scope.title.trim().toLowerCase() : undefined;
        var location = $scope.location ? $scope.location.trim().toLowerCase() : undefined;

        var searchProjectInfo = {
            projectNameLowerCase: title,
            projectLocationLowerCase: location,
            projectCategoryByCollege: $scope.mainCollege,
            projectCategoryByProgram: $scope.subCollege
        };

        projects.getAllProjects(searchProjectInfo, function (err, res) {
          if(err) return console.log(err);
          $scope.projects = res.data;
          console.log($scope.projects);
        });
    }

}