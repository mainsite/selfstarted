angular
    .module('selfStarted.component.findTalent')
    .directive('findTalent', FindTalent);

function FindTalent() {
    return {
        restrict: 'E',
        scope: {
            todoData: '='
        },
        templateUrl: 'selfStarted/features/components/findTalent/findTalent.html',
        controller: FindTalentCtrl,
        controllerAS: 'FindTalentVM',
        bindToController: true
    };
}


function FindTalentCtrl($scope) {

    var vm = this;
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

        console.log(searchProjectInfo);

/*        projects.getAllProjects(searchProjectInfo, function (err, res) {
          if(err) return console.log(err);
          $scope.projects = res.data;
          console.log($scope.projects);
        });*/
        
    }

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
