(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
            $('.navbar .dropdown-menu').addClass('drop-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
            $('.navbar .dropdown-menu').removeClass('drop-sticky');
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    // Dropdown Change href attribute when hovering
    document.getElementById('nosProjetsLink').addEventListener('mouseover', function() {
        this.setAttribute('href', 'Projets.html');
    });

    // Dropdown Navigate to new URL when clicked
    document.getElementById('nosProjetsLink').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action of link
        window.location.href = this.getAttribute('href'); // Navigate to the new URL
    });

    // Dropdown function to add 'active' class to Nos Projets link if current page matches
    function setActiveClass() {
        var currentPage = window.location.pathname.split('/').pop(); // Get current page filename
        var nosProjetsLink = document.getElementById('nosProjetsLink');
    
        if (currentPage === 'Projets.html') {
        nosProjetsLink.classList.add('active');
        }
    }
    
    // Dopdown run the function when the page loads
    window.addEventListener('DOMContentLoaded', setActiveClass);
    
    // Main carousel
    $(".carousel .owl-carousel").owlCarousel({
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        smartSpeed: 300,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });
    
    
    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });
    
    
    // Causes carousel
    $(".causes-carousel").owlCarousel({
        autoplay: true,
        animateIn: 'slideInDown',
        animateOut: 'slideOutDown',
        items: 1,
        smartSpeed: 450,
        dots: false,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    
    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Related post carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    //Pie Chart
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChartrecettes);
    google.charts.setOnLoadCallback(drawChartdepenses);

    function drawChartrecettes() {

      var data = google.visualization.arrayToDataTable([
        ['Recettes', 'Euros'],
        ['Courses de solidarité',     8073.32],
        ['Autres actions extérieurs',      1113.24],
        ['MiCuiCS',  1169.72],
        ['Autres actions sur le campus', 549.57],
        ['Semaine HUMA',    1419.20],
        ['Autres subventions', 9362.90],
        ['Dons', 351.08]
      ]);

      var formatter = new google.visualization.NumberFormat({decimalSymbol: ',',groupingSymbol: ' ', suffix: '€'});
      formatter.format(data, 1);

      var options = {
        legend: {
            position: 'labeled'
          },
        pieSliceText: 'value',
        label: 'label-percentage',
        height: '350',
        chartArea: {'width': '100%', 'height': '80%'},
        backgroundColor: {
            'fill': '#c0c0c0',
            'fillOpacity': 0.04
        }
      };

      var chart = new google.visualization.PieChart(document.getElementById('piechart-recettes'));

      chart.draw(data, options);
    }
    
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChartdepenses() {

      var data = google.visualization.arrayToDataTable([
        ['Dépenses', 'Euros'],
        ['NAFE',     8202.72],
        ['Earth Peru', 5889.55],
        ['Superlearner', 5823.93],
        ['Chaska', 5252.18],
        ['Autre dépenses', 180.98]
      ]);

      var formatter = new google.visualization.NumberFormat({decimalSymbol: ',',groupingSymbol: ' ', suffix: '€'});
      formatter.format(data, 1);

      var options = {
        legend: {
            position: 'labeled'
          },
        pieSliceText: 'value',
        label: 'label-percentage',
        height: '350',
        chartArea: {'width': '100%', 'height': '80%'},
        backgroundColor: {
            'fill': '#c0c0c0',
            'fillOpacity': 0.04
        }
        
      };

      var chart = new google.visualization.PieChart(document.getElementById('piechart-depenses'));

      chart.draw(data, options);
    }


})(jQuery);