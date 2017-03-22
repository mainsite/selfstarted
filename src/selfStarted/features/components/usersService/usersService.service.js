angular
    .module('selfStarted.service.usersService')
    .service('UsersService'. UsersService);

function UsersService($http) {
    return {
        getUsers: function(user, callback) {
            //do stuff
            $http({
                method: 'GET',
                url: '/api/users/searchUsers',
                params: user
            }).then( function (res) {
                var err = false;
                return callback(err, res.data);
            }, function(err) {
                console.log("error getting user". err);
                return err;
            });
        }
    };
}