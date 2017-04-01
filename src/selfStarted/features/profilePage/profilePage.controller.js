angular
    .module('selfStarted.profilePage')
    .controller('ProfilePageCtrl', ProfilePageCtrl);

function ProfilePageCtrl($scope, localStorageService, UsersService, CollegeService, UserLocation) {
    var vm = this;
    var college = CollegeService;
    var mainCollegeField = Object.keys(college);
    var users = UsersService;
    var userID = {_id: getItem('userDBid')};
    vm.user = {};

    //college drop menu init
    vm.colleges = mainCollegeField;
    vm.subcolleges = [];
    vm.changeSubCollege = changeSubCollege;

    //edit/save button configs
    vm.edit = false;
    vm.toggleEdit = toggleEdit;
    vm.saveChanges = saveChanges;
    

    vm.changeState = changeState;
    vm.changeCity = changeCity;

    var userLocation = UserLocation;

    var country = Object.keys(userLocation);

    $scope.countries = country;

    function changeState(){

        let key = vm.countryUser;

        

        let userCountry = Object.keys(userLocation[key]);

        $scope.states = userCountry;

    }

    function changeCity() {

        let keyCountry = vm.countryUser;
        let keyState = vm.stateUser;

        let userState = userLocation[keyCountry][keyState];

        $scope.cities = userState

    }

    users.getUsers(userID, function (err, response) {
        if (err) console.error(err);
        var user = response[0];
        
        vm.user = setCurrentUser(user);
    });


    function getItem(key) {
        return localStorageService.get(key);
    }

    function toggleEdit() {
        if (vm.edit) {
            vm.edit = false;
        } else {
            vm.edit = true;
        }
    }

    function saveChanges() {
 // userCountry, userState, userCityArea

        let theSkills = [vm.skills1,vm.skills2,vm.skills3,vm.skills4]

        let skillsHolder = [];

        for (let i = 0; i < theSkills.length; i++) {
             

            if (theSkills[i]) {

                skillsHolder.push(theSkills[i]);
            }

        }

        console.log(theSkills);
        console.log(skillsHolder);

        var updatedInfo = {
            _id: userID._id,
            userCountry : vm.countryUser,
            userState : vm.stateUser,
            userCity : vm.cityUser,
            willDoRemoteProjects: vm.user.remote,
            willDoLocalProjects: vm.user.local,
            aboutMe: vm.user.description,
            userSchoolName: vm.user.schoolName,
            additionalSkills: skillsHolder,
            defaultSkillByCollege: vm.user.college,
            defaultSkillByProgram: vm.user.major
        };

        console.log(updatedInfo);
        var update = window.confirm("Confirm update");

        if (update) {
            users.updateUser(updatedInfo);
            vm.edit = false;
        }
    }

    function changeSubCollege() {
        var key = vm.mainCollege;
        vm.user.college = key;
        var userSub = college[key];
        vm.subcolleges = userSub;
        vm.user.major = vm.subCollege;
    }
}

function setCurrentUser(user) {
    return {
        firstName: user.firstName,
        lastName: user.lastName,
        location: user.userLocation,
        description: user.aboutMe,
        url: user.linkedInURL,
        photo: user.userPhotoLink,
        local: user.willDoLocalProjects,
        remote: user.willDoRemoteProjects,
        signUpDate: user.signUpDate,
        college: user.defaultSkillByCollege,
        major: user.defaultSkillByProgram,
        schoolName: user.userSchoolName
    };
}