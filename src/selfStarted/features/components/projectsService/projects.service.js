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

            ownedProjects: function (userID, callback) {

                var user = { _primaryProjectOwner: userID };

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
            memberProjects: function (userID, callback) {

                var user = { _usersAssigned: userID };

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
            requestingProjects: function (userID, callback) {

                var user = { _usersRequesting: userID };

                //pojects user is a member of
                $http({
                    method: 'GET',
                    url: '/api/projects/searchRequestingProjects',
                    params: user
                }).then(function (response) {
                    var err = false;
                    return callback(err, response.data);
                }, function (err) {
                    console.log("error retreiving projects", err);
                    return callback(err);
                });
            },
            invitedProjects: function (userID, callback) {
                var user = { _usersInvited: userID };

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

        },
        joinProject: function (projectID, userID, callback) {
            var projectRequest = {
                _id: projectID,
                _usersRequesting: userID
            };

            $http.post('/api/projects/joinProject', projectRequest)
                .then(function (response) {
                    var err;
                    return callback(err, "Join request");
                }, function (err) {
                    return callback(err);
                });
        },
        acceptMemberRequest: function (projectID, userID, callback) {
            var projectRequest = {
                _id: projectID,
                _usersRequesting: userID
            };

            $http.post('/api/projects/acceptProjectJoin', projectRequest)
                .then(function (response) {
                    var err;
                    callback(err, "Member accepted");
                }, function (err) {
                    callback(err);
                });
        },
        denyMemberRequest: function (projectID, userID, callback) {
            var projectRequest = {
                _id: projectID,
                _usersRequesting: userID
            };

            $http.post('/api/projects/denyProjectJoin', projectRequest)
                .then(function (response) {
                    var err;
                    callback(err, "Member denied");
                }, function (err) {
                    callback(err);
                });
        },
        inviteToProject: function (projectID, userID, callback) {
            var projectRequest = {
                _id: projectID,
                _usersInvited: userID
            };

            $http.post('/api/projects/inviteProject', projectRequest)
                .then(function (response) {
                    var err;
                    callback(err, "Invited member");
                }, function (err) {
                    callback(err);
                });
        },
        denyProjectInvite: function (projectID, userID, callback) {
            var projectRequest = {
                _id: projectID,
                _usersInvited: userID
            };

            $http.post('/api/projects/denyProjectInvite', projectRequest)
                .then(function (response) {
                    var err;
                    callback(err, "denied invite");
                }, function (err) {
                    callback(err);
                });
        },
        acceptProjectInvite: function (projectID, userID, callback) {
            var projectRequest = {
                _id: projectID,
                _usersInvited: userID
            };

            $http.post('/api/projects/denyProjectInvite', projectRequest)
                .then(function (response) {
                    var err;
                    callback(err, "accepted Invitation");
                }, function (err) {
                    callback(err);
                });
        },
    };
}