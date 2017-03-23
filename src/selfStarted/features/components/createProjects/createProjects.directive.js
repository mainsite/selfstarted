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


function CreateProjectsCtrl($scope, localStorageService, ProjectsService, CollegeService) {

    var vm = this;
    var college = CollegeService;
    var mainCollegeField = Object.keys(college);
    var projects = ProjectsService;

    $scope.submit = submit;
    $scope.colleges = mainCollegeField;
    $scope.subcolleges = [];
    $scope.changeSubCollege = changeSubCollege;


    $scope.today = function () {
        $scope.startDate = new Date();
        $scope.endDate = new Date();
    };
    $scope.today();

    $scope.setDate = function () {
        $scope.startDate = new Date();
        $scope.endDate = new Date();
    };

    function changeSubCollege() {
        var key = $scope.mainCollege;

        var userSub = college[key];

        $scope.subcolleges = userSub;
    }

    function submit() {

        var userDBid = getItem('userDBid');

        var createProjectInfo = {

            projectName: $scope.title,
            projectNameLowerCase: $scope.title.trim().toLowerCase(),
            projectDescription: $scope.description.trim(),
            projectStartDate: $scope.startDate.toISOString(),
            projectEndDate: $scope.endDate.toISOString(),
            projectLocation: $scope.location,
            projectLocationLowerCase: $scope.location.trim().toLowerCase(),
            projectCategoryByCollege: $scope.mainCollege,
            projectCategoryByProgram: $scope.subCollege,
            remotePermitted: $scope.radioModel,
            otherSkillsDesired: $scope.skills,
            _primaryProjectOwner: userDBid

        };

        projects.addNewProject(createProjectInfo);

        console.log(createProjectInfo);
        resetForm();
    }

    function resetForm() {
        $scope.title = '';
        $scope.description = '';
        $scope.location = '';
        $scope.skills = '';
        $scope.radioModel = false;
    }

    function getItem(key) {
        return localStorageService.get(key);
    }

}