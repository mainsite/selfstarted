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
        },
        updateProject: function (updatedProject) {
            $http.post('/api/projects/updateProject', updatedProject)
                .then(function (res) {
                    console.log('project updated');
                }, function (err) {
                    console.log(err);
                });
        },
        getUserProjects: {

            ownedProjects: function (userId, callback) {

                var user = {_primaryProjectOwner: userId};

                //all projects including deleted
                $http({
                    method: 'GET',
                    url: '/api/projects/searchPersonalProjects',
                    params: user
                }).then(function (response) {
                    var err = false;
                    return callback(err, response.data);
                }, function (err) {
                    console.log("error retreiving projects", err);
                    return callback(err);
                });
            },
            memberProjects: function (userId, callback){

                var user = {_usersAssigned: userId};

                //pojects user is a member of
                $http({
                    method: 'GET',
                    url: '/api/projects/searchAssignedProjects',
                    params: user
                }).then(function (response) {
                    var err = false;
                    return callback(err, response.data);
                }, function (err) {
                    console.log("error retreiving projects", err);
                    return callback(err);
                });
            },
            pendingProjects: function (userId, callback) {

                var user = {_usersInvited: userId};

                //pojects user is a member of
                $http({
                    method: 'GET',
                    url: '/api/projects/searchInvitedProjects',
                    params: user
                }).then(function (response) {
                    var err = false;
                    return callback(err, response.data);
                }, function (err) {
                    console.log("error retreiving projects", err);
                    return callback(err);
                });
            }

        }
    };
}