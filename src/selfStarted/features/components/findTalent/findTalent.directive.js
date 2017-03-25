angular
    .module('selfStarted.component.findTalent')
    .directive('findTalent', FindTalent);

function FindTalent() {
    return {
        restrict: 'E',
        scope: {
            userData: '='
        },
        templateUrl: 'selfStarted/features/components/findTalent/findTalent.html',
        controller: FindTalentCtrl,
        controllerAS: 'FindTalentVM',
        bindToController: true
    };
}


function FindTalentCtrl($scope, UsersService, localStorageService, ProjectsService, CollegeService) {

    var vm = this;
    var college = CollegeService;
    var mainCollegeField = Object.keys(college);
    var users = UsersService;
    var projects = ProjectsService;

    $scope.submit = submit;
    $scope.recruit = recruit;
    $scope.colleges = mainCollegeField;
    $scope.userSelection = [];
    $scope.project = [];
    $scope.subcolleges = [];
    $scope.changeSubCollege = changeSubCollege;

    function changeSubCollege() {

        var key = $scope.mainCollege;

        var userSub = college[key];

        $scope.subcolleges = userSub;

    }

    function submit() {

        var userDBid = getItem('userDBid');



        var firstName = $scope.firstName ? $scope.firstName.trim().toLowerCase() : undefined;
        var lastName = $scope.lastName ? $scope.lastName.trim().toLowerCase() : undefined;

        var searchUsersInfo = {
            firstNameLowerCase: firstName,
            lastNameLowerCase: lastName,
            defaultSkillByCollege: $scope.mainCollege,
            defaultSkillByProgram: $scope.subCollege
        };



        users.getUsers(searchUsersInfo, function (err, res) {
            if (err) return console.log(err);
            $scope.theUsers = res;
        });

        function getItem(key) {
            return localStorageService.get(key);
        }

        var theProjects = {_primaryProjectOwner: userDBid};

        projects.getAllProjects(theProjects, function (err, res) {
            if (err) return console.log(err);

            var holder = [];

            for (var i = 0; i < res.data.length; i++) {

                holder.push({ id: res.data[i]._id, name: res.data[i].projectName});

            }

            console.log(holder);

            $scope.userProjects = holder;

        });

    }

    function recruit(userID) {
        var chosenUser = userID;
        var chosenProject = this.myProject.id;
        console.log(chosenUser, chosenProject);

        //TODO call service to send out recruit flag
        var accept = window.confirm("Confirm Adding user to your project");

        if (accept) {
            projects.inviteToProject(chosenProject, chosenUser, function (err, res) {
                if (err) console.log(err);
                console.log(res, "Succeeded");
            });
        }
    }

}