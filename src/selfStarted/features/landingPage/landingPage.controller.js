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

    angular.element( document ).ready(function() {

        scaleVideoContainer();

        initBannerVideoSize('.video-container .poster img');
        initBannerVideoSize('.video-container .filter');
        initBannerVideoSize('.video-container video');

        angular.element(window).on('resize', function() {
            scaleVideoContainer();
            scaleBannerVideoSize('.video-container .poster img');
            scaleBannerVideoSize('.video-container .filter');
            scaleBannerVideoSize('.video-container video');
        });

    });

    function scaleVideoContainer() {

        var height = angular.element(window).height() + 5;
        var unitHeight = parseInt(height) + 'px';
        angular.element('.homepage-hero-module').css('height',unitHeight);

    }

    function initBannerVideoSize(element){

        angular.element(element).each(function(){
            angular.element(this).data('height', angular.element(this).height());
            angular.element(this).data('width', angular.element(this).width());
        });

        scaleBannerVideoSize(element);

    }

    function scaleBannerVideoSize(element){

        var windowWidth = angular.element(window).width(),
        windowHeight = angular.element(window).height() + 5,
        videoWidth,
        videoHeight;

        // console.log(windowHeight);

        angular.element(element).each(function(){
            var videoAspectRatio = angular.element(this).data('height')/angular.element(this).data('width');

            angular.element(this).width(windowWidth);

            if(windowWidth < 1000){
                videoHeight = windowHeight;
                videoWidth = videoHeight / videoAspectRatio;
                angular.element(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

                angular.element(this).width(videoWidth).height(videoHeight);
            }

            angular.element('.homepage-hero-module .video-container video').addClass('fadeIn animated');

        });



    }

    /*!
     * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
     * Code licensed under the Apache License v2.0.
     * For details, see http://www.apache.org/licenses/LICENSE-2.0.
     */

    // jQuery to collapse the navbar on scroll
    function collapseNavbar() {
        if (angular.element(".navbar").offset().top > 50) {
            angular.element(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            angular.element(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    }

    angular.element(window).scroll(collapseNavbar);
    angular.element(document).ready(collapseNavbar);

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    angular.element(function() {
        angular.element('a.page-scroll').bind('click', function(event) {
            var $anchor = angular.element(this);
            angular.element('html, body').stop().animate({
                scrollTop: angular.element($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // Closes the Responsive Menu on Menu Item Click
    angular.element('.navbar-collapse ul li a').click(function() {
        angular.element(".navbar-collapse").collapse('hide');
    });





}