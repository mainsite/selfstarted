angular
    .module('selfStarted.service.users')
    .service('UsersService', UsersService);

function UsersService($http) {
    return {
        getUsers: function (user, callback) {
            $http({
                methods: 'GET',
                url: '/api/users/searchUsers',
                params: user
            }).then(function(response){
                var err = false;
                return callback(err, response.data);
            }, function (error) {
                console.log("error getting users", error);
                return callback(error);
            });
        },
        updateUser: function (user) {
            $http.post('/api/users/updateUser',user)
                .then(function (res) {
                    console.log(res);
                }, function (err) {
                    console.log(err);
                }); 
        }
    };
}