// Auto-close mobile menu after clicking navigation links
$(document).ready(function() {
    $('.navbar-nav a.page-scroll').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
});