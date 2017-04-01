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


function CreateProjectsCtrl($scope, localStorageService, ProjectsService, CollegeService, UserLocation) {



    var vm = this;
    var college = CollegeService;
    var mainCollegeField = Object.keys(college);
    var projects = ProjectsService;


    $scope.submit = submit;
    $scope.dateRestrict = dateRestrict;
    $scope.colleges = mainCollegeField;
    $scope.subcolleges = [];
    $scope.changeSubCollege = changeSubCollege;
    $scope.changeState = changeState;
    $scope.changeCity = changeCity;

    var userLocation = UserLocation;

    console.log(userLocation);

    var country = Object.keys(userLocation);
    console.log(country);

    $scope.countries = country;


    function changeState(){

        let key = $scope.countryUser;

        let userCountry = Object.keys(userLocation[key]);

        console.log(userCountry);

        $scope.states = userCountry;

    }

    function changeCity() {

        let keyCountry = $scope.countryUser;
        let keyState = $scope.stateUser;

        let userState = userLocation[keyCountry][keyState];

        console.log(userState);

        $scope.cities = userState


    }



    $scope.optionsStartDate = {
      minDate: new Date(),
      showWeeks: true
    };

    $scope.optionsEndDate = {
      minDate: new Date(),
      showWeeks: true
    };

    function dateRestrict () {

        $scope.optionsEndDate = {
            minDate: $scope.startDate,
            showWeeks: true
        };

    }

    function changeSubCollege() {
        let key = $scope.mainCollege;

        let userSub = college[key];

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

         alert("Project has been successfully sumbitted");
         
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