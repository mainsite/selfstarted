angular
    .module('selfStarted.component.searchProjects')
    .directive('searchProjects', SearchProjects);

function SearchProjects() {
    return {
        restrict: 'E',
        scope: {
            todoData: '='
        },
        templateUrl: 'selfStarted/features/components/searchProjects/searchProjects.html',
        controller: SearchProjectsCtrl,
        controllerAS: 'SearchProjectsVM',
        bindToController: true
    };
}


function SearchProjectsCtrl($scope){

    var vm = this;

    $scope.submit = submit;

    var mainCollegeField = Object.keys(college);

    $scope.colleges = mainCollegeField;


    $scope.subcolleges = [];

    
    $scope.changeSubCollege = function (){

      var key = $scope.mainCollege;

      var userSub = college[key];

      $scope.subcolleges = userSub

      console.log($scope.subcolleges);

    } 


    function submit(){

      var searchProjectInfo = {

        projectUser: $scope.user,
        projectName: $scope.title,
        projectLocation: $scope.location,
        projectCategoryByCollege: $scope.mainCollege,
        projectCategoryByProgram : $scope.subCollege

      }

      console.log(searchProjectInfo);

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
    
    
      "Business Administration" : 
        [
          "Accounting",
          "Economics",
          "Finance",
          "Integrated Business",
          "Management",
          "Marketing",
          "Real Estate"
        ],

     "Education & Human Performance" : 
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

      "Engineering & Computer Science" :
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

      "Engineering & Computer Science" :
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

    }