angular
    .module('selfStarted.projectsPage')
    .config(ProjectsPageConfig);

function ProjectsPageConfig($stateProvider) {
    $stateProvider.state({
        name: 'projects',
        url: '/projects',
        templateUrl: '/selfStarted/features/projectsPage/projectsPage.html',
        controller: ProjectsPageCtrl,
        controllerAs: 'ProjectsPageVM'
    });
}