angular
    .module('selfStarted.landingPage')
    .controller('LandingPageCtrl', LandingPageCtrl);

function LandingPageCtrl($scope) {
    var vm = this;

    vm.login = function () {
        window.location.href = "/auth/linkedin";
    };

    var pictures = [

        "../../../assets/images/carousel/a.jpg",
        "../../../assets/images/carousel/b.jpg",
        "../../../assets/images/carousel/c.jpg",
        "../../../assets/images/carousel/d.jpg",
        "../../../assets/images/carousel/e.jpg",
        "../../../assets/images/carousel/f.jpg",
        "../../../assets/images/carousel/g.jpg",
        "../../../assets/images/carousel/h.jpg",
        "../../../assets/images/carousel/i.jpg",
        "../../../assets/images/carousel/k.jpg",
        "../../../assets/images/carousel/l.jpg",
        "../../../assets/images/carousel/m.jpg",
        "../../../assets/images/carousel/n.jpg",
        "../../../assets/images/carousel/o.jpg",
        "../../../assets/images/carousel/p.jpg"

    ]

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function (i) {
        var newWidth = 1080 + slides.length + 1;
        slides.push({
            image: pictures[i],
            text: ['Discover projects that need your skillset', 'Start up a project for others to find', 'Recruit talent that meet the skills you need', 'Join a network where people can make teams and work great together'][slides.length % 4],
            id: currIndex++
        });
    };

    $scope.randomize = function () {
        var indexes = generateIndexesArray();
        assignNewIndexesToSlides(indexes);
    };

    for (var i = 0; i < pictures.length; i++) {
        $scope.addSlide(i);
    }

    // Randomize logic below

    function assignNewIndexesToSlides(indexes) {
        for (var i = 0, l = slides.length; i < l; i++) {
            slides[i].id = indexes.pop();
        }
    }

    function generateIndexesArray() {
        var indexes = [];
        for (var i = 0; i < currIndex; ++i) {
            indexes[i] = i;
        }
        return shuffle(indexes);
    }

    // http://stackoverflow.com/questions/962802#962890
    function shuffle(array) {
        var tmp, current, top = array.length;

        if (top) {
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        }

        return array;
    }
}