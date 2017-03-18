

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


function CreateProjectsCtrl($scope){

    var vm = this;


    $scope.user = {
          title: 'Developer',
          email: 'ipsum@lorem.com',
          firstName: '',
          lastName: '',
          company: 'Google',
          address: '1600 Amphitheatre Pkwy',
          city: 'Mountain View',
          state: 'CA',
          biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
          postalCode: '94043'
        };

        $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
        'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
        'WY').split(' ').map(function(state) {
            return {abbrev: state};
          });

        // Configure a dark theme with primary foreground yellow
       

        $scope.colleges = Object.keys(college);
        $scope.selectedCollege;
        $scope.getSelectedText = function() {
          if ($scope.selectedCollege !== undefined) {

            $scope.items = college[$scope.selectedCollege];

            $scope.selectedItem;

            if ($scope.selectedItem !== undefined) {
               return $scope.selectedItem;
            } 


            return "Selected: " + $scope.selectedCollege;
          } else {
            return "Chose A College";
          }
        };


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



