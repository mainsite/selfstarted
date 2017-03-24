angular
    .module('selfStarted.projectsPage')
    .controller('ProjectsPageCtrl', ProjectsPageCtrl);

function ProjectsPageCtrl(ProjectsService, localStorageService) {
    var vm = this;
    var projects = ProjectsService;
    var userID = getUserId('userDBid');
    vm.projects = [];
    
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

    //projects pending on membership
    projects.getUserProjects.pendingProjects(userID, function (err, response) {
        if (err) console.erro(err);
        console.log(response);

        vm.projects[2] = response;
    });

    function getUserId(key) {
        return localStorageService.get(key);
    }
}