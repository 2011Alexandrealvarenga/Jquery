$(document).ready(function(){
    jQuery('#class1').click(
        function(){
        jQuery('#content1').css('display','block');
        jQuery('#content2').css('display','none');
        }
    )
    jQuery('#class2').click(
        function(){
        jQuery('#content2').css('display','block');
        jQuery('#content1').css('display','none');
        }
    )
});