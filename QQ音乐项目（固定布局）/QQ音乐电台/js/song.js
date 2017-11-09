/**
 * Created by Administrator on 2017/9/17.
 */
//图片效果-----------------------------
$(function () {
    //给li设置移入效果
    $(".item li").mouseenter(function () {
        //给每个li设置移入效果
        $(this).css("opacity",0.7).siblings().css("opacity", 1);

    })
    $(".item ul").mouseleave(function () {
        $(this).find("li").css("opacity", 1);
    })
})

//图片放大-----------------------------
$(function () {
    $(".img img").mouseenter(function () {
        $(this).stop().animate({
            width:"120%",
            top: "-20px",
            left: "-20px",
        }).css("position" ,"absolute")

    })
    $(".img img").mouseleave(function () {
        $(this).stop().animate({
            width:"100%",
            top: 0,
            left: 0,
        }).css("position" ,"absolute")
    })
})

//移入 播放器 图片也放大
$(function () {
    $(".img a i").mouseenter(function () {
        $(this).siblings().stop().animate({
            width:"120%",
            top: "-20px",
            left: "-20px",
        }).siblings().css("position" ,"absolute");
    })
    $(".img a i").mouseleave(function () {
        $(this).siblings().stop().animate({
            width:"100%",
            top: 0,
            left: 0,
        }).siblings().css("position" ,"absolute");
    })

})


//fl定位------------------------
$(function () {
    $(window).scroll(function () {
        //如果页面的卷度大于header，nav banner 设置定位
        var $top=$("#header").height()+$("#nav").height()+$("#baiyechuang").height();
        var $bottom=$("#header").height()+$("#nav").height()+$("#baiyechuang").height()+$("#main").height()-490 ;

        if($(this).scrollTop()>$top  && ($(this).scrollTop() < $bottom)){
            $("#main .fl").addClass("fixed");
        }else{
            $("#main .fl").removeClass("fixed");
        }
    })

//    回顶部定位
    //页面滚动时，检测，如果页面的卷曲高度> ，设置     盒子定位，
    $dwlid=$("#nav ol li");
    //-------固定定位
    $(window).scroll(function () {
        //$dingwei=$("#dingwei");
        if ($(this).scrollTop() > 150) {
            $dwlid.eq(0).show();
        }
        else{
            $dwlid.eq(0).hide();
        }
    });
})

//点击字,变颜色------------------
$(function () {
    $(".fl a").click(function () {
        $(this).addClass("current").siblings().removeClass();
    });
})



//轮播图

$(function () {
    var nowimg=0 ;
    var mytimer = 0;
    dongdong();
    //设置定时器
    function dongdong(){
        window.clearInterval(mytimer);
        mytimer = window.setInterval(
            function(){
                //$(".right_but").trigger("click");
                if(nowimg < $(".tuul li").length - 1){
                    nowimg ++;
                }else{
                    nowimg=0;
                }
                huanhuan();
            },1000

        );

    }

    $("#baiyechuang").mouseenter(
        function(){
            window.clearInterval(mytimer);
        }
    );

    $("#baiyechuang").mouseleave(dongdong);



    function huanhuan() {
        // 换猫腻的图片，换成信号量所表示的li中的那个图片
        var temp = $(".tuul li a img").eq(nowimg).attr("src");
        $(".maoni div").css("background-image", "url(" + temp + ")");

        // 让猫腻图进行动画！
        $(".maoni div").animate({direction: "vertical" ,width:150 }, 400, function () {
            //在动画执行完毕之后，让猫腻的宽度恢复为0
            $(".maoni div").css("width", 0);
            $(".tuul li").eq(nowimg).show().siblings().hide();
        });}
})