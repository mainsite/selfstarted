angular
    .module('selfStarted.profilePage')
    .config(ProfilePageConfig);

function ProfilePageConfig($stateProvider) {
    $stateProvider.state({
        name: 'profile',
        url: '/profile',
        templateUrl: '/selfStarted/features/profilePage/profilePage.html',
        controller: ProfilePageCtrl,
        controllerAs: 'ProfilePageVM'
    });
}