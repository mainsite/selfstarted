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


function FindTalentCtrl($scope , UsersService, localStorageService, ProjectsService, CollegeService) {

    var vm = this;
    var college = CollegeService;
    var mainCollegeField = Object.keys(college);
    var users = UsersService;
    var projects = ProjectsService;

    $scope.submit = submit;
    $scope.colleges = mainCollegeField;
    $scope.subcolleges = [];
    $scope.changeSubCollege = changeSubCollege;
    $scope.myProject = "";


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
          if(err) return console.log(err);
          $scope.theUsers = res;
         
        });

        function getItem(key) {
            return localStorageService.get(key);
        }

        var theProjects = {

            _primaryProjectOwner: userDBid

        }

        projects.getAllProjects(theProjects, function (err, res) {
          if(err) return console.log(err);
         
            var holder = [];

          for (var i = 0; i < res.data.length; i++) {
              
            holder.push(res.data[i].projectName);

          }

          console.log(holder);

          $scope.userProjects = holder;
         
        });

    }
        $scope.selectProject = function () {
            console.log($scope.myProject);
        };


   
        var panels = angular.element('.user-infos');
        var panelsButton = angular.element('.dropdown-user');
        panels.hide();

        //Click dropdown
        panelsButton.click(function() {
            //get data-for attribute
            var dataFor = angular.element(this).attr('data-for');
            var idFor = angular.element(dataFor);

            //current button
            var currentButton = angular.element(this);
            idFor.slideToggle(400, function() {
                //Completed slidetoggle
                if(idFor.is(':visible'))
                {
                    currentButton.html('<i class="icon-chevron-up text-muted"></i>');
                }
                else
                {
                    currentButton.html('<i class="icon-chevron-down text-muted"></i>');
                }
            })
        });


      

        angular.element(".main").on("click",".recruit" ,function(e) {
            e.preventDefault();
            var userChoosen = angular.element(this).data("index");
            console.log(userChoosen);

        });
  


}