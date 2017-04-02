angular
    .module('selfStarted.projectsPage')
    .controller('ProjectsPageCtrl', ProjectsPageCtrl);

function ProjectsPageCtrl(ProjectsService, localStorageService, $state) {
    var vm = this;
    var projects = ProjectsService;
    var userID = getUserId('userDBid');
    vm.projects = [];
    vm.undeleted = true;
    vm.filterDeleted = filterDeleted;
    vm.filter = undefined;
    vm.acceptProjectInvite = acceptProjectInvite;
    vm.denyProjectInvite = denyProjectInvite;
    vm.acceptUserInvite = acceptUserInvite;
    vm.denyUserInvite = denyUserInvite;
    
    //current users projects
    projects.getUserProjects.ownedProjects(userID, function (err, response) {
        if (err) console.erro(err);
        console.log(response);

        vm.projects[0] = response;
    });

    //projects user belongs to not their own
    projects.getUserProjects.memberProjects(userID, function (err, response) {
        if (err) console.erro(err);
        console.log(response);

        vm.projects[1] = response;
    });

    //projects user is pending on membership
    projects.getUserProjects.requestingProjects(userID, function (err, response) {
        if (err) console.erro(err);
        console.log(response);

        vm.projects[2] = response;
    });

    projects.getUserProjects.invitedProjects(userID, function (err, response) {
        if (err) console.erro(err);
        console.log(response);

        vm.projects[3] = response;
    });

    function getUserId(key) {
        return localStorageService.get(key);
    }

    function filterDeleted() {
        if (vm.undeleted) {
            vm.undeleted = false;
            vm.filter = 'project.isDeleted';
        } else {
            vm.undeleted = true;
            vm.filter = undefined;
        }
    }

    function acceptUserInvite(projectID, invitedUser) {
        ProjectsService.acceptMemberRequest(projectID, invitedUser, function (err, res) {
            if (err) console.log(err);
            console.log(res);
            refreshPage();
        });
    }

    function denyUserInvite(projectID, invitedUser) {
        ProjectsService.denyMemberRequest(projectID, invitedUser, function (err, res) {
            if (err) console.log(err);
            console.log(res);
            refreshPage();
        });
    }

    function acceptProjectInvite(projectID) {
        ProjectsService.acceptProjectInvite(projectID, userID, function (err, res) {
            if (err) console.log(err);
            console.log(res);
            refreshPage();
        });
    }

    function denyProjectInvite(projectID) {
        ProjectsService.denyProjectInvite(projectID, userID, function (err, res) {
            if (err) console.log(err);
            console.log(res);
            refreshPage();
        });
    }

    function refreshPage() {
        $state.reload();
    }
}