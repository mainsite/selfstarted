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


function FindTalentCtrl($scope , UsersService, localStorageService, ProjectsService ) {

    var vm = this;
    var mainCollegeField = Object.keys(college);
    var users = UsersService;
    var projects = ProjectsService;

    $scope.submit = submit;
    $scope.colleges = mainCollegeField;
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

var college =

    {
        "Arts & Humanities":

        [
            "Architecture",
            "Art",
            "Digital Media",
            "English",
            "Film",
            "French",
            "History",
            "Humanities and Cultural Studies",
            "Latin American Studies",
            "Music",
            "Philosophy",
            "Photography",
            "Religion and Cultural Studies",
            "Spanish",
            "Theatre",
            "Writing and Rhetoric"
        ],


        "Business Administration":
        [
            "Accounting",
            "Economics",
            "Finance",
            "Integrated Business",
            "Management",
            "Marketing",
            "Real Estate"
        ],

        "Education & Human Performance":
        [
            "Art Education",
            "Early Childhood Development",
            "Elementary Education",
            "English Language Arts Education",
            "Mathematics Education",
            "Science Education",
            "Social Science Education",
            "Sport and Exercise Education",
            "Sport and Exercise Science",
            "Technical Education and Industry Training",
            "World Languages Education"
        ],

        "Engineering & Computer Science":
        [
            "Aerospace Engineering",
            "Civil Engineering",
            "Computer Engineering",
            "Computer Science",
            "Construction Engineering",
            "Electrical Engineering",
            "Environmental Engineering",
            "Industrial Engineering",
            "Information Technology",
            "Mechanical Engineering"
        ],

        "Health & Public Affairs":
        [
            "Athletic Training",
            "Communication Sciences and Disorders",
            "Criminal Justice",
            "Health Informatics and Information Management",
            "Health Sciences Pre-Clinical",
            "Health Services Administration",
            "Legal Studies",
            "Public Administration",
            "Social Work"
        ],

        "Hospitality Management":
        [
            "Entertainment Management",
            "Event Management",
            "Hospitality Management",
            "Restaurant and Foodservice Management"
        ],

        "Medicine":
        [
            "Biomedical Sciences",
            "Biotechnology",
            "Medical Laboratory Sciences"
        ],

        "Nursing":
        [
            "Nursing"
        ],

        "Optics & Photonics":
        [
            "Photonic Science and Engineering"
        ],

        "Sciences":
        [
            "Advertising-Public Relations",
            "Anthropology",
            "Biology",
            "Chemistry",
            "Chemistry - Biochemistry",
            "Communication & Conflict",
            "Forensic Science - Analysis",
            "Forensic Science - Biochemistry",
            "Human Communication",
            "International and Global Studies",
            "Journalism",
            "Mathematics",
            "Physics",
            "Political Science",
            "Political Science - Prelaw",
            "Psychology",
            "Radio - Television",
            "Social Sciences",
            "Sociology",
            "Statistics"
        ],

        "Undergraduate Studies":
        [
            "Interdisciplinary Studies",
            "Interdisciplinary Studies - Environmental Studies",
            "Interdisciplinary Studies - Women's Studies"
        ]

    };
