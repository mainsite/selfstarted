angular
    .module('selfStarted.messagesPage')
    .config(MessagesPageConfig);

function MessagesPageConfig($stateProvider) {
    $stateProvider.state({
        name: 'messages',
        url: '/messages',
        templateUrl: '/selfStarted/features/messagePage/messagesPage.html',
        controller: MessagesPageCtrl,
        controllerAs: 'MessagesPageVM'
    });
}