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


function CreateProjectsCtrl($scope) {

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




  $scope.today = function() {
    $scope.startDate = new Date();
    $scope.endDate = new Date();
  };
  $scope.today();

  $scope.setDate = function(year, month, day) {
    $scope.startDate = new Date(year, month, day);
    $scope.endDate = new Date(year, month, day);
  };

  function submit(){

    var createProjectInfo = {

      projectName: $scope.title,
      projectDescription: $scope.description,
      projectStartDate: $scope.startDate,
      projectEndDate: $scope.endDate,
      projectLocation: $scope.location,
      projectCategoryByCollege: $scope.mainCollege,
      projectCategoryByProgram : $scope.subCollege,
      remotePermitted: $scope.radioModel,
      otherSkillsDesired: $scope.skills


    }

    console.log(createProjectInfo);

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


var projectAreas = [
  {
    "college": "Arts & Humanities",
    "program": [
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
    ]
  },
  {
    "college": "Business Administration",
    "program": [
      "Accounting",
      "Economics",
      "Finance",
      "Integrated Business",
      "Management",
      "Marketing",
      "Real Estate"
    ]
  },
  {
    "college": "Education & Human Performance",
    "program": [
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
    ]
  },
  {
    "college": "Engineering & Computer Science",
    "program": [
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
    ]
  },
  {
    "college": "Health & Public Affairs",
    "program": [
      "Athletic Training",
      "Communication Sciences and Disorders",
      "Criminal Justice",
      "Health Informatics and Information Management",
      "Health Sciences Pre-Clinical",
      "Health Services Administration",
      "Legal Studies",
      "Public Administration",
      "Social Work"
    ]
  },
  {
    "college": "Hospitality Management",
    "program": [
      "Entertainment Management",
      "Event Management",
      "Hospitality Management",
      "Restaurant and Foodservice Management"
    ]
  },
  {
    "college": "Medicine",
    "program": [
      "Biomedical Sciences",
      "Biotechnology",
      "Medical Laboratory Sciences"
    ]
  },
  {
    "college": "Nursing",
    "program": [
      "Nursing"
    ]
  },
  {
    "college": "Optics & Photonics",
    "program": [
      "Photonic Science and Engineering"
    ]
  },
  {
    "college": "Sciences",
    "program": [
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
    ]
  },
  {
    "college": "Undergraduate Studies",
    "program": [
      "Interdisciplinary Studies",
      "Interdisciplinary Studies - Environmental Studies",
      "Interdisciplinary Studies - Women's Studies"
    ]
  }
]
