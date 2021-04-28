$(document).ready(function(){

    function randomName(a){
        return a[Math.floor(Math.random() * a.length)];
    }
    
    $('.feed').each(function(index, item){
        var userName = ["Jeong", "Woomin", "Jeong Woomin", "WOOM", "WAMOOVI"]
        console.log(item);
        $(this).find('.top-name').text(randomName(userName));
    })

    $('.feed').each(function(index, item){
        console.log(index);
        if(index == 0){
            $(this).find('.top-time').text(index + 1 + " hour ago");
        } else {
            $(this).find('.top-time').text(index + 1 + " hours ago");
        }
    })

    $('.top-img').each(function(index, item){
        console.log(index);
        var imgNum = index * 2 + 1; 
        $(this).attr('src','https://source.unsplash.com/random?q=' + imgNum);
    })

    $('.body-image').each(function(index, item){
        console.log(index);
        var imgNum = index * 2 + 2; 
        $(this).attr('src','https://source.unsplash.com/random?q=' + imgNum);
    })

    var likeOnOff = false;
    
    $('.btn-like').on('click', function(){
        if(likeOnOff == false){
            likeOnOff = true;
            $(this).find('.like-icon').text("favorite");
        } else {
            likeOnOff = false;
            $(this).find('.like-icon').text("favorite_border");
        }
    })
}); 