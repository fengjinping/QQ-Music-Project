/**
 * Created by Administrator on 2017/9/17.
 */
//ͼƬЧ��-----------------------------
$(function () {
    //��li��������Ч��
    $(".item li").mouseenter(function () {
        //��ÿ��li��������Ч��
        $(this).css("opacity",0.7).siblings().css("opacity", 1);

    })
    $(".item ul").mouseleave(function () {
        $(this).find("li").css("opacity", 1);
    })
})

//ͼƬ�Ŵ�-----------------------------
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

//���� ������ ͼƬҲ�Ŵ�
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


//fl��λ------------------------
$(function () {
    $(window).scroll(function () {
        //���ҳ��ľ�ȴ���header��nav banner ���ö�λ
        var $top=$("#header").height()+$("#nav").height()+$("#baiyechuang").height();
        var $bottom=$("#header").height()+$("#nav").height()+$("#baiyechuang").height()+$("#main").height()-490 ;

        if($(this).scrollTop()>$top  && ($(this).scrollTop() < $bottom)){
            $("#main .fl").addClass("fixed");
        }else{
            $("#main .fl").removeClass("fixed");
        }
    })

//    �ض�����λ
    //ҳ�����ʱ����⣬���ҳ��ľ����߶�> ������     ���Ӷ�λ��
    $dwlid=$("#nav ol li");
    //-------�̶���λ
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

//�����,����ɫ------------------
$(function () {
    $(".fl a").click(function () {
        $(this).addClass("current").siblings().removeClass();
    });
})



//�ֲ�ͼ

$(function () {
    var nowimg=0 ;
    var mytimer = 0;
    dongdong();
    //���ö�ʱ��
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
        // ��è���ͼƬ�������ź�������ʾ��li�е��Ǹ�ͼƬ
        var temp = $(".tuul li a img").eq(nowimg).attr("src");
        $(".maoni div").css("background-image", "url(" + temp + ")");

        // ��è��ͼ���ж�����
        $(".maoni div").animate({direction: "vertical" ,width:150 }, 400, function () {
            //�ڶ���ִ�����֮����è��Ŀ�Ȼָ�Ϊ0
            $(".maoni div").css("width", 0);
            $(".tuul li").eq(nowimg).show().siblings().hide();
        });}
})