//todays book adjust
var mobileSideMenuButton = document.getElementsByClassName("side-menu")[0];
var mobileSideMenuButtonWhite = document.getElementsByClassName("side-menu-white")[0];
var pageContainer = document.getElementsByClassName("page_content")[0];
var mobileSideMenu = document.getElementsByClassName("mobile_nav_menu")[0];

/*function adjust_todaybooks(){
    if(window.innerWidth >=599){
        todayBook.style.marginLeft = (todayBook.offsetWidth * 0.5)*-1 + "px";
        todayBook.style.marginTop = (todayBook.offsetHeight * 0.5)*-1 + "px";
        console.log("hi");
    }else{
        todayBook.style.marginLeft = (todayBook.offsetWidth * 0.5)*-1 + "px";
        todayBook.style.marginTop = 0 + "px";
    }
}*/

function adjust_sideMenuButton(){
    if(window.innerWidth <=599){
        mobileSideMenuButton.style.left = window.innerWidth - 58 - 60+ "px";
        console.log(mobileSideMenu.offsetWidth);
    }
}

//mobile side menu 

function adjust_mobileMenuHeight(){
    mobileSideMenu.style.height = window.innerHeight + "px";
    mobileSideMenu.style.left = window.innerWidth + "px";

}

//mobile menu events

mobileSideMenuButton.addEventListener("click",buttonsEvent);
mobileSideMenuButtonWhite.addEventListener("click",buttonsEvent);


function buttonsEvent(){
    if (mobileSideMenu.getAttribute("data-toggled") == "closed"){
        open_sidemenu();
        open_menuButton();
        mobileSideMenu.setAttribute("data-toggled","active");
    }
    else if(mobileSideMenu.getAttribute("data-toggled") == "active"){
        close_sidemenu();
        close_menuButton();
        mobileSideMenu.setAttribute("data-toggled","closed");
    }
}

function open_sidemenu(){
    var distance = 0;
    var endPos = mobileSideMenu.offsetWidth;
    pageContainer.style.position = "relative";
    var timer = setInterval(open_animate,10);
    function open_animate (){
        
        if (distance < endPos){
            distance = distance + 10;
            pageContainer.style.left = distance * -1 + "px";
            mobileSideMenu.style.left = window.innerWidth - distance  + "px";
            console.log(endPos);
        }
        if(distance >= endPos){
            
            clearInterval(timer);
        }
    }
}

function close_sidemenu(){
    var distance =  mobileSideMenu.offsetWidth;
    var endPos = 0;
    var timer = setInterval(close_animate,10);
    function close_animate (){
        if (distance > endPos){
            distance = distance - 10;
            pageContainer.style.left = distance * -1 + "px";
            mobileSideMenu.style.left = window.innerWidth - distance  + "px";
            console.log(endPos);
        }
        if(distance <= endPos){
            clearInterval(timer);
        }
    }
}

var bars = document.getElementsByClassName("icon-bar");
function open_menuButton(){
    var top_offset = 0;
    var distance_black = parseInt(mobileSideMenuButton.style.left);
    var distance_white = mobileSideMenuButtonWhite.offsetLeft;
    var endPos_black = distance_black + 76;
    var endPos_white = distance_white + 76;
    var timer = setInterval(open_animate,8);
    function open_animate (){
        if (distance_black < endPos_black){
            distance_black = distance_black + 4;
            distance_white = distance_white + 4;
            mobileSideMenuButton.style.left = distance_black + "px";
            mobileSideMenuButtonWhite.style.left = distance_white + "px";
            
        }
        if(top_offset < 50){
            top_offset = top_offset + 2;
            bars[0].style.top = top_offset + "%";
            bars[2].style.top = (100 - top_offset) + "%";
        }
        if(distance_black >= endPos_black && top_offset >= 50){
            rotate_bars(bars);
            clearInterval(timer);
        }
    }
}

function rotate_bars(bars){
    //rotate the two lower bars in the same direction and sandwich the top bar to cancel its shadow on lower bar,
    var deg = 0;
    var timeInterval = setInterval(animate,8);
    function animate(){
        if(deg < 45){
            deg = deg + 1;
            bars[0].style.transform = "rotate("+deg+"deg)";
            bars[0].style.webkitTransform = "rotate("+deg+"deg)";
            bars[1].style.transform = "rotate("+(deg *-1)+"deg)";
            bars[1].style.webkitTransform = "rotate("+(deg *-1)+"deg)";
            bars[2].style.transform = "rotate("+(deg *-1)+"deg)";
            bars[2].style.webkitTransform = "rotate("+(deg *-1)+"deg)";
        }
        if(deg >= 50){
            clearInterval(timeInterval);
        }
    }
}

function close_menuButton(){
   
    var distance_black = parseInt(mobileSideMenuButton.style.left);
    var distance_white = mobileSideMenuButtonWhite.offsetLeft;
    var endPos_black = distance_black - 76;
    var endPos_white = distance_white - 76;
    var timer = setInterval(open_animate,8);
    function open_animate (){
        if (distance_black > endPos_black){
            distance_black = distance_black - 4;
            distance_white = distance_white - 4;
            mobileSideMenuButton.style.left = distance_black + "px";
            mobileSideMenuButtonWhite.style.left = distance_white + "px";
            
        }
        if(distance_black <= endPos_black){
            bars[0].style.transform = "rotate("+0+"deg)";
            bars[0].style.webkitTransform = "rotate("+0+"deg)";
            bars[1].style.transform = "rotate("+0+"deg)";
            bars[1].style.webkitTransform = "rotate("+0+"deg)";
            bars[2].style.transform = "rotate("+0+"deg)";
            bars[2].style.webkitTransform = "rotate("+0+"deg)";
            bars[0].style.top = 0 + "%";
            bars[2].style.top = 100 + "%";
            clearInterval(timer);
        }
    }
}

//book slider mobile animation
var Book_slider = document.getElementsByClassName("book-slider")[0];

function cache_bookSliderHeight(){ //hashed
    Book_slider.setAttribute("data_height",Book_slider.offsetHeight);
    Book_slider.style.display = "none";
}


/*book shuffle*/
var Book_images= document.getElementsByClassName("book-image");
var Book_description= document.getElementsByClassName("book-description");
var arrayOfImages = [];
var arrayOfDescription = [];

for(var i = 0; i < Book_images.length; i++){
    arrayOfImages[i] = Book_images[i].innerHTML;
    arrayOfDescription[i] = Book_description[i].innerHTML;
}

var cache_lastShuffled = 0;
var nextOnQueue = 3;


function shuffleStart(){
    console.log("hs");
    var timer = setInterval(bookSlider_shuffle,2500);
}
function bookSlider_shuffle(){
    console.log("hs");
    var randomvalue = Math.trunc((Math.random()*100)%3);
    while(randomvalue == cache_lastShuffled){
        randomvalue = Math.trunc((Math.random()*100)%3);
    }
    if(nextOnQueue >= arrayOfImages.length){
        nextOnQueue = 0;
    }

    fadein_book(randomvalue);

}


function fadein_book(random){
    var fadding_book = document.getElementsByClassName("book-node")[random];
    console.log(cache_lastShuffled);
    var opacity = 1;
    var timer = setInterval(animatein,30);
    function animatein(){
        if(opacity > 0){
            console.log(random+"out");
            opacity = opacity - 0.05;
            fadding_book.style.opacity = opacity;
        }
        else{
            Book_images[random].innerHTML = arrayOfImages[nextOnQueue];
            Book_description[random].innerHTML = arrayOfDescription[nextOnQueue];
            setTimeout(fadeout_book(random),100);
            clearInterval(timer);
        }
    }
}

function fadeout_book(random){
    var fadding_book = document.getElementsByClassName("book-node")[random];
    var opacity = 0;
    var timer = setInterval(animateout,30);
    function animateout(){
        if(opacity <= 1){
            console.log(cache_lastShuffled+"in");
            opacity = opacity + 0.05;
            fadding_book.style.opacity = opacity;
        }
        else{
            cache_lastShuffled = random;
            nextOnQueue = nextOnQueue + 1;
            clearInterval(timer);
        }
    }
}



var background_img = document.getElementsByClassName("cover")[0];
function adjust_coverImage(){
    if(background_img.getAttribute("data-size") == "fullsize"){
        var ratio = (window.pageYOffset / 2)-100;
        background_img.style.backgroundPosition = "50% "+ ratio+"px";
    }
    else if(background_img.getAttribute("data-size") == "minified"){
        var ratio = (window.pageYOffset / 2)-280;
        background_img.style.backgroundPosition = "50% "+ ratio+"px";
    }
}

var navbar = document.getElementsByClassName("navbar")[0];
function navbar_pop(){
    console.log("sdas")
    if(window.pageYOffset + navbar.offsetHeight >= background_img.offsetHeight){
        navbar.style.backgroundColor = "hsl(0, 0%, 16%)";
    }else if(window.pageYOffset + navbar.offsetHeight < background_img.offsetHeight){
        navbar.style.backgroundColor = "hsla(0, 0%, 16%, 0.795)";
    }
}

function adjust_coverHeight(){
    if(window.innerWidth > 600 && background_img.getAttribute("class") != "cover"){
        background_img.style.height = 320 + "px";
        background_img.setAttribute("data-size","minified");
    }
    else if(window.innerWidth <= 600 && background_img.getAttribute("class") != "cover"){
        background_img.style.height = 720 + "px";
        background_img.setAttribute("data-size","fullsize");
    }
}


//window.addEventListener("resize",adjust_todaybooks);
window.addEventListener("resize",adjust_sideMenuButton);
window.addEventListener("resize",adjust_mobileMenuHeight);
window.addEventListener("resize",adjust_coverHeight);
window.addEventListener("scroll",adjust_coverImage);
window.addEventListener("scroll",navbar_pop);
//function call
//adjust_todaybooks();
adjust_sideMenuButton();
adjust_mobileMenuHeight();
adjust_coverHeight();
adjust_coverImage();
if(document.getElementsByClassName("book-image")[0] != undefined){
    shuffleStart();
}
//cache_bookSliderHeight();


/*window.onscroll = function (){
    if(window.innerWidth <= 600){
        if(window.pageYOffset + window.innerHeight >= 900 && Book_slider.style.display == "none"){
            Book_slider.style.height = 0 + "px";
            Book_slider.style.display = "block";
            var distance = 0;
            console.log(end_distance);
            var end_distance = Book_slider.getAttribute("data_height");
            var timer = setInterval(animate,30);
            function animate(){
                if(distance < end_distance){
                    distance = distance + 40;
                    Book_slider.style.height = distance + "px";
                }
                else{
                    clearInterval(timer);
                }
            }
        }
    }
}*/