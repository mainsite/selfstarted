angular
    .module('selfStarted.messagesPage')
    .config(MessagesPageConfig);

function MessagesPageConfig($stateProvider) {
    $stateProvider.state({
        name: 'messages',
        url: '/messages',
        templateUrl: '/selfStarted/features/messagesPage/messagesPage.html',
        controller: MessagesPageCtrl,
        controllerAs: 'MessagesPageVM'
    });
}