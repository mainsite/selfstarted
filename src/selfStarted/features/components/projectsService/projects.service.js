angular
    .module('selfStarted.service.projects')
    .service('ProjectsService', ProjectsService);

function ProjectsService($http) {
    return {
        getAllProjects: function (query, callback) {
            $http({
                method: 'GET',
                url: '/api/projects/searchProjects',
                params: query
            }).then(function (response) {
                var err = false;
                return callback(err, response);
            }, function (err) {
                console.log("error retreiving projects", err);
                return callback(err);
            });
        },
        addNewProject: function (newProject) {
            $http.post('/api/projects/newProject', newProject)
                .then(function (res) {
                    console.log('new project added');
                }, function (err) {
                    console.log(err);
                });
        }
    };
}