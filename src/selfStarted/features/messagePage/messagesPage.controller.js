angular
    .module('selfStarted.messagesPage')
    .controller('MessagesPageCtrl', MessagesPageCtrl);

function MessagesPageCtrl(MessagesService, localStorageService) {
    var vm = this;
    var messages = MessagesService;
    var userID = getUserID();

    console.log(userID);

    vm.showMessage = showMessage;
    vm.show = false;

    messages.getMessages(userID, function (err, res) {
        if (err) console.log(err);
        vm.userMessages = res;
        console.log(vm.userMessages);
    });

    function showMessage(message, index) {
        vm.show = true;
        vm.messageBody = message;
        
        if (!message.isRead) {
            messages.markMessageRead(message._id, function(err, response) {
                vm.userMessages[index] = response;
                console.log(vm.messageBody);
            });
        }
    }

    function getUserID() {
        return localStorageService.get('userDBid');
    }
}