/**
 * Created by lenovo on 17/12/12 012.
 */
/*Initialize Swiper*/
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
    }
});


var music =document.getElementById("music");
var musicImg = document.querySelector(".musicImg");
var audio = document.querySelector("audio");
var flag=1;
music.onclick = function(){
    if (flag==1){
        musicImg.style.animation = "none";
        audio.pause();
        flag = 0;
    }else{
        musicImg.style.animation = "music 2s infinite linear";
        audio.play();
        flag=1;
    }

};