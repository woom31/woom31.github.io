var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

jQuery(document).ready(function($){
    if(!isMobile) {
        console.log('pc');
    } else {
        console.log('mobile');
    }
});