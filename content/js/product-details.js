// toggle between hiding and showing the dropdown content
console.log('mario')

$(document).ready(function(){
    $('.dropdown-btn').click(function() {
        $('.dropdown-content').slideToggle('show');
    });

    // Close the dropdown menu if the user clicks outside of it
    $(document).click(function(event) {
        if (!$(event.target).hasClass('dropdown-btn')) {
            $('.dropdown-content').removeClass('show');
        }
    });
});  


/*=======================================================
  * Author: Karen & Mario
========================================================*/
  