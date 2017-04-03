angular
    .module('selfStarted.component.findTalent')
    .directive('findTalent', FindTalent);


function FindTalent() {
    return {
        restrict: 'E',
        scope: {
            userData: '='
        },
        templateUrl: 'selfStarted/features/components/directives/findTalent/findTalent.html',
        controller: FindTalentCtrl,
        controllerAS: 'FindTalentVM',
        bindToController: true
    };
}


function FindTalentCtrl($scope, UsersService, localStorageService, ProjectsService, CollegeService, $uibModal, $log) {

    var vm = this;

    // Using CollegeService to get the colleges and fields
    var college = CollegeService;

    // Getting the Object keys
    var mainCollegeField = Object.keys(college);

    // Using UsersService to get the user
    var users = UsersService;

    // Using ProjectsService
    var projects = ProjectsService;
    // Setting submit() function in the form to scope.submit
    $scope.submit = submit;

    // Setting recruit() function in the form to scope.recruit
    $scope.recruit = recruit;

    // Setting up function for colleges and changSubCollege 
    $scope.colleges = mainCollegeField;
    $scope.changeSubCollege = changeSubCollege;

    // Will get data of user input
    $scope.userSelection = [];
    $scope.project = [];
    $scope.subcolleges = [];

    /**
     * @return {Will make the drop down and find what the user click on}
     */
    function changeSubCollege() {

        var key = $scope.mainCollege;

        var userSub = college[key];

        $scope.subcolleges = userSub;

    }

    /**
     * @return {Light the Powder Keg}
     */
    function submit() {

        /**
         * Location Storage of the User ID
         * @type {LinkedId ID of User}
         */
        var userDBid = getItem('userDBid');

        /**
         * Allows user to search for a first name
         * @type {String - trim and lower case}
         */
        var firstName = $scope.firstName ? $scope.firstName.trim().toLowerCase() : undefined;

        /**
         * Allows user to search for a last name
         * @type {String - trim and lower case}
         */
        var lastName = $scope.lastName ? $scope.lastName.trim().toLowerCase() : undefined;

        /**
         * Gathers user search as an object
         * @type {Object}
         */
        var searchUsersInfo = {
            firstNameLowerCase: firstName,
            lastNameLowerCase: lastName,
            defaultSkillByCollege: $scope.mainCollege,
            defaultSkillByProgram: $scope.subCollege
        };


        /**
         * @param  {searchUsersInfo}
         * @param  {null}
         * @return {The talent in the database that matches the fields}
         */
        users.getUsers(searchUsersInfo, function (err, res) {
            if (err) return console.log(err);

            $scope.theUsers = res;
        });

        /**
         * @param  {User LinkedIn key}
         * @return {User LinkedIn Key}
         */
        function getItem(key) {
            return localStorageService.get(key);
        }

        /**
         * theProjects is the projects that user has made
         * @type {Key}
         */
        var theProjects = {_primaryProjectOwner: userDBid};

        /**
         * @param  {Projects that the user is primary on}
         * @param  {null}
         * @return {The projects the user is primart on}
         */
        projects.getAllProjects(theProjects, function (err, res) {
            if (err) return console.log(err);

            let holder = [];

            for (let i = 0; i < res.data.length; i++) {

                holder.push({ id: res.data[i]._id, name: res.data[i].projectName});

            }

           

            $scope.userProjects = holder;

        });

    }

    /**
     * @param  {user ID linkedIn key}
     * @return {null}
     */
    function recruit(userID) {
        
        let chosenUser = userID;
        let chosenProject = this.myProject.id;

        //TODO call service to send out recruit flag
        var accept = window.confirm("Confirm Adding user to your project");

        if (accept) {
            projects.inviteToProject(chosenProject, chosenUser, function (err, res) {
                if (err) console.log(err);
                console.log(res, "Succeeded");
            });
        }
    }
    $scope.open = open;
    function open(user) {
        console.log("open modal");
        var modalInstance = $uibModal.open({
            templateUrl: 'selfStarted/features/components/directives/userProfile/userProfile.html',
            controller: UserProfileCtrl,
            resolve: {
                userData: function() {
                    return user;
                }
            }
        });

        modalInstance.result.then(function() {
        }, function () {
            $log.info('modal closed by outside click: ');
        });
    }

}