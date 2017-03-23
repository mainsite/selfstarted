angular
    .module('selfStarted.profilePage')
    .controller('ProfilePageCtrl', ProfilePageCtrl);

function ProfilePageCtrl($scope, localStorageService, UsersService) {
    var vm = this;
    var users = UsersService;
    var userID = {
        _id: getItem('userDBid')
    };

    vm.edit = false;
    vm.toggleEdit = toggleEdit;
    vm.saveChanges = saveChanges;
    vm.user = {};

    users.getUsers(userID, function (err, response) {
        if (err) console.error(err);
        var user = response[0];
        console.log("User id is:", userID._id);
        console.log("User is:", user);
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

        var updatedInfo = {
            _id: userID._id,
            willDoRemoteProjects: vm.user.remote,
            willDoLocalProjects: vm.user.local,
            aboutMe: vm.user.description
            //userSchoolName: vm.user.userSchoolName,
            //additionalSkills: vm.user.additionalSkills,
            //defaultSkillByCollege: vm.user.defaultSkillByCollege,
            //defaultSkillByProgram: vm.user.defaultSkillByProgram
        };

        console.log(updatedInfo);
        var update = window.confirm("Confirm update");

        if (update) {
            users.updateUser(updatedInfo);
            vm.edit = false;
        }
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
        local: user.local,
        remote: user.remote,
        signUpDate: user.signUpDate
    };
}