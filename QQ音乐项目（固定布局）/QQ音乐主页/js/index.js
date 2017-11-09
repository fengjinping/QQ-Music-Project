/**
 * Created by guopj on 2017/9/17.
 */


//------------------------入口函数
$(function(){



    //------------------------------------------------------------------------固定定位-----

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

    //$dwlid.eq(1).mouseenter(function(){
    //    $(this).text("意见反馈");
    //    $(this).css("backgroundColor","#31c27c");
    //});
    //$dwlid.eq(1).mouseleave(function(){
    //    $(this).text("");
    //    $(this).css("background","url('../images/ji11.png') -50px -120px");
    //})
















    //--------------------------------------------------------------------------------第一个轮播图效果
    //----------移入banner后两次按钮的动画
    $("#banner").mouseenter(function(){
        $("#banner .anniul").stop().animate({left:-75},400)
    });
    $("#banner").mouseenter(function(){
        $("#banner .anniur").stop().animate({right:-75},400)
    });
    $("#banner").mouseleave(function(){
        $("#banner .anniul").stop().animate({left:-143},400)
    });
    $("#banner").mouseleave(function(){
        $("#banner .anniur").stop().animate({right:-143},400)
    })

    //---------移入和移出banner  左侧  按钮的动画
    $("#banner .anniul").mouseenter(function(){
        $(this).stop().animate({width:80},400).css("backgroundColor","#31c27c");
    })
    $("#banner .anniul").mouseleave(function(){
        $(this).stop().animate({width:68},400).css("backgroundColor","rgba(255, 255, 255, 0.2)");
    })
    //---------移入和移出banner  右侧  按钮的动画
    $("#banner .anniur").mouseenter(function(){
        $(this).stop().animate({width:80},400).css("backgroundColor","#31c27c");
    })
    $("#banner .anniur").mouseleave(function(){
        $(this).stop().animate({width:68},400).css("backgroundColor","rgba(255, 255, 255, 0.2)");
    })

    //---------点击banner 右侧按钮  的事件
    //获取keshi1的ul
    var $ul1=$("#banner .xia ul");
    var $ol1=$("#banner .xia ol");
    var $ol1li=$("#banner .xia ol li");
    $ol1li.eq(0).css("backgroundColor","#fff")
    var num=0;
    $("#banner .anniur").click(function(){
        if(num>3){
            $ul1.css("left",0);
            num=0;
        };
        count=num;
        num++;
        $ul1.animate({left:-num*1200},200)
        $ol1li.eq(num==4?0:num).css("backgroundColor","#fff").siblings().css("backgroundColor","#6c6c6c");

    })
    //---------点击banner 左侧按钮  的事件
    $("#banner .anniul").click(function(){
        if(num<=0){
            $ul1.css("left",-4800);
            num=4;
        };
        count=num;
        num--;
        $ul1.animate({left:-num*1200},200)
        $ol1li.eq(num==4?0:num).css("backgroundColor","#fff").siblings().css("backgroundColor","#6c6c6c");
    })
    //---------点击banner 底部按钮  的事件
    var count;
    $ol1li.click(function(){
        $(this).css("backgroundColor","#fff").siblings().css("backgroundColor","#6c6c6c");

        count=$(this).index();
        num=count;
        //console.log(count);
        $ul1.animate({left:-count*1200},200)
    })

    //---------移入banner的li事件
    var num1;
    var $pic1=$("#banner .keshi1 .pic1");
    var $lis=$("#banner .keshi1 li");
    var $imgxia=$("#banner .keshi1 .imgxia");
    var $bofang=$("#banner .keshi1 .bofang");

    $lis.mouseenter(function(){
        num1=$(this).index();
        $pic1.eq(num1).stop().css("opacity",0.9).animate({
            width:320,
            height:320,
            left:-10,
            top:-10
        },200)
        $imgxia.eq(num1).css("backgroundColor","#31c27c")
        $bofang.eq(num1).stop().fadeIn(200);
    })
    //---------移出banner的li事件
    $lis.mouseleave(function(){

        num1=$(this).index();
        $bofang.stop().eq(num1).fadeOut(200);
        $pic1.eq(num1).stop().css("opacity",1).animate({
            width:300,
            height:300,
            left:0,
            top:0
        },200)
        $imgxia.eq(num1).css("backgroundColor","rgba(0, 0, 0, 0.7)");
        $bofang.eq(num1).stop().fadeOut(200);
    })
//    -----------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------克隆第一个轮播图效果
    //----------移入remen后两次按钮的动画
    $("#remen").mouseenter(function(){
        $("#remen .anniul").stop().animate({left:-75},400)
    });
    $("#remen").mouseenter(function(){
        $("#remen .anniur").stop().animate({right:-75},400)
    });
    $("#remen").mouseleave(function(){
        $("#remen .anniul").stop().animate({left:-143},400)
    });
    $("#remen").mouseleave(function(){
        $("#remen .anniur").stop().animate({right:-143},400)
    })

    //---------移入和移出banner  左侧  按钮的动画
    $("#remen .anniul").mouseenter(function(){
        $(this).stop().animate({width:80},400).css("backgroundColor","#31c27c");
    })
    $("#remen .anniul").mouseleave(function(){
        $(this).stop().animate({width:68},400).css("backgroundColor","rgba(0, 0, 0, 0.2)");
    })
    //---------移入和移出banner  右侧  按钮的动画
    $("#remen .anniur").mouseenter(function(){
        $(this).stop().animate({width:80},400).css("backgroundColor","#31c27c");
    })
    $("#remen .anniur").mouseleave(function(){
        $(this).stop().animate({width:68},400).css("backgroundColor","rgba(0, 0, 0, 0.2)");
    })
    //---------点击remen 右侧按钮  的事件
    //获取keshi1的ul
    var $ul2=$("#remen .xia ul");
    var $ol2=$("#remen .xia ol");
    var $ol2li=$("#remen .xia ol li");
    $ol2li.eq(0).css("backgroundColor","#ccc")
    var numem=0;
    $("#remen .anniur").click(function(){
        if(numem>3){
            $ul2.css("left",0);
            numem=0;
        };
        countem=numem;
        numem++;
        $ul2.animate({left:-numem*1200},200)
        $ol2li.eq(numem==4?0:numem).css("backgroundColor","#ccc").siblings().css("backgroundColor","#6c6c6c");

    })
    //---------点击remen 左侧按钮  的事件
    $("#remen .anniul").click(function(){
        if(numem<=0){
            $ul2.css("left",-4800);
            numem=4;
        };
        countem=numem;
        numem--;
        $ul2.animate({left:-numem*1200},200)
        $ol2li.eq(num==4?0:numem).css("backgroundColor","#ccc").siblings().css("backgroundColor","#6c6c6c");
    })
    //---------点击remen 底部按钮  的事件
    var countem;
    $ol2li.click(function(){
        $(this).css("backgroundColor","#ccc").siblings().css("backgroundColor","#6c6c6c");

        countem=$(this).index();
        numem=countem;
        //console.log(count);
        $ul2.animate({left:-countem*1200},200)
    })

//---------移入remen的li事件
    var numem1;
    var $pic2=$("#remen .keshi2 .pic2");
    var $lisem=$("#remen .keshi2 li");
    var $imgxiaem=$("#remen .keshi2 .imgxia");
    var $bofangem=$("#remen .keshi2 .bofangem");

    $lisem.mouseenter(function(){
        numem1=$(this).index();
        $pic2.eq(numem1).stop().css("opacity",0.9).animate({
            width:320,
            height:320,
            left:-10,
            top:-10
        },200)
        $imgxiaem.eq(numem1).css("backgroundColor","#31c27c")
        $bofangem.eq(numem1).stop().fadeIn(400);
    })
    //---------移出remen的li事件
    $lisem.mouseleave(function(){

        numem1=$(this).index();
        $bofang.stop().eq(numem1).fadeOut(200);
        $pic2.eq(numem1).stop().css("opacity",1).animate({
            width:300,
            height:300,
            left:0,
            top:0
        },200)
        $imgxiaem.eq(numem1).css("backgroundColor","#333");
        $bofangem.eq(numem1).stop().fadeOut(400);
    })


//------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------精彩推荐-----------


    //----------移入jingCai后两次按钮的动画
    $("#jingCai").mouseenter(function(){
        $("#jingCai .anniul").stop().animate({left:-75},400)
    });
    $("#jingCai").mouseenter(function(){
        $("#jingCai .anniur").stop().animate({right:-75},400)
    });
    $("#jingCai").mouseleave(function(){
        $("#jingCai .anniul").stop().animate({left:-143},400)
    });
    $("#jingCai").mouseleave(function(){
        $("#jingCai .anniur").stop().animate({right:-143},400)
    })

    //---------移入和移出jingCai  左侧  按钮的动画
    $("#jingCai .anniul").mouseenter(function(){
        $(this).stop().animate({width:80},400).css("backgroundColor","#31c27c");
    })
    $("#jingCai .anniul").mouseleave(function(){
        $(this).stop().animate({width:68},400).css("backgroundColor","rgba(0, 0, 0, 0.2)");
    })
    //---------移入和移出banner  右侧  按钮的动画
    $("#jingCai .anniur").mouseenter(function(){
        $(this).stop().animate({width:80},400).css("backgroundColor","#31c27c");
    })
    $("#jingCai .anniur").mouseleave(function(){
        $(this).stop().animate({width:68},400).css("backgroundColor","rgba(0, 0, 0, 0.2)");
    })


    //标注了每个图片要运动到的位置
    var config = [

        {
            width:751,
            height:300,
            top: 0,
            left: 224,
            opacity: 1,
            zIndex: 4
        },//2
        {
            width: 608,
            height:244,
            top: 28,
            left: 592,
            opacity: 0.9,
            zIndex: 3
        },//3
        {
            width: 608,
            height:244,
            top: 28,
            left: 816,
            opacity: 0,
            zIndex: 3
        },//4
        {
            width: 608,
            height:244,
            top: 28,
            left: 816,
            opacity: 0,
            zIndex: 3
        },
        {
            width: 608,
            height:244,
            top: 28,
            left: -224,
            opacity: 0,
            zIndex: 3
        },//0
        {
            width: 608,
            height:244,
            top: 28,
            left: -224,
            opacity: 0,
            zIndex: 3
        },//0
        {
            width: 608,
            height:244,
            top: 28,
            left: 0,
            opacity: 0.9,
            zIndex: 3
        },//1



    ];//config其实就是一个配置单 规定了每张图片的大小位置层级透明度
    //1 获取元素
    var anniuLeft=$("#jingCai .anniul")[0];
    var anniuRight=$("#jingCai .anniur")[0];
    var jcbox=document.getElementById("jcbox");
    var slide=jcbox.children[0];//可视区
    var list=slide.children[0];//要运动的ul
    var lis=list.children;//要运动的li

    //2 设置每个li的默认显示位置
    changePos();


    var flag = true;//节流阀的开关，值为true，表示可以执行
    //设置五个标签的自定义属性值
    for (var i = 0; i < lis.length; i++) {
        lis[i].flag = true;
    }

    //4 右按钮点击操作
    anniuLeft.onclick = function () {
        if (flag) {
            //点击按钮后，只能执行一次效果,采用变量控制的方式
            flag = false;
            for (var i = 0; i < lis.length; i++) {
                lis[i].flag = false;
            }


            //将数组config中的第一个元素删除掉，并添加到config的最后
            config.push(config.shift());

            //根据config中的新位置，重新设置li的运动
            changePos();
        }

    };

    //5 左按钮点击操作
    anniuRight.onclick = function () {
        if (flag) {
            flag = false;
            //将数组的最后一个元素移动到数组最前面
            config.unshift(config.pop());
            changePos();
        }
    };

    //---------点击jingCai 底部按钮  的事件
    var $jcolli=$("#jcbox ol li ")
    //var countem;
    $jcolli.click(function(){
        var i=$(this).index();
        $(this).css("backgroundColor","#ccc").siblings().css("backgroundColor","#6c6c6c");
        if (flag) {
            flag = false;
            //将数组的最后一个元素移动到数组最前面

            var arr= config.splice(config.length-i,i);
            console.log(arr);
            for (var i=arr.length-1; i>=0; i--) {
                config.unshift(arr[i]);
            }
            //if(i=0){
            //    config = [
            //
            //        {
            //            width:751,
            //            height:300,
            //            top: 0,
            //            left: 224,
            //            opacity: 1,
            //            zIndex: 4
            //        },//2
            //        {
            //            width: 608,
            //            height:244,
            //            top: 28,
            //            left: 592,
            //            opacity: 0.9,
            //            zIndex: 3
            //        },//3
            //        {
            //            width: 608,
            //            height:244,
            //            top: 28,
            //            left: 816,
            //            opacity: 0,
            //            zIndex: 3
            //        },//4
            //        {
            //            width: 608,
            //            height:244,
            //            top: 28,
            //            left: 816,
            //            opacity: 0,
            //            zIndex: 3
            //        },
            //        {
            //            width: 608,
            //            height:244,
            //            top: 28,
            //            left: -224,
            //            opacity: 0,
            //            zIndex: 3
            //        },//0
            //        {
            //            width: 608,
            //            height:244,
            //            top: 28,
            //            left: -224,
            //            opacity: 0,
            //            zIndex: 3
            //        },//0
            //        {
            //            width: 608,
            //            height:244,
            //            top: 28,
            //            left: 0,
            //            opacity: 0.9,
            //            zIndex: 3
            //        },//1
            //
            //
            //
            //    ];
            //    changePos();
            //}else{
            //    changePos();
            //}
            //console.log(config);
            changePos();
        }

    })



    function changePos() {
        for (var i = 0; i < config.length; i++) {
            animate(lis[i], config[i], function () {
                //此处可以保证运动执行完毕
                //由于此效果中每个元素的运动位置相近，所以在设置时进行简单的判断即可，不用进行精确的判断方式
                flag = true;
            });
        }
    }

    function animate(element, datas, fn) {

        clearInterval(element.timer);
        element.timer = setInterval(function () {

            //1 设置假设条件：假设本轮定时器执行后可以进行清除
            var flag = true;

            //先对获取到的数据进行遍历，对每一组数据进行相同操作即可
            for (var k in datas) {
                //针对透明度和层级进行单独处理
                if (k == "opacity") {
                    var styleName = k;
                    var target = datas[k] * 100;

                    //opacity是c3属性，使用getStyle获取后不会出现"auto"
                    //js中的小数进行加减计算会出现精度问题
                    var current = getStyle(element, styleName) * 100;
                    var step = (target - current) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    current = current + step;
                    //设置透明度时，除以设置过的对应倍数
                    element.style[styleName] = current / 100;

                    if (current != target) {
                        flag = false;
                    }

                } else if (k == "zIndex") {
                    //层级为整数值，所以不需要设置运动效果,直接设置为指定值即可
                    element.style.zIndex = datas[k];
                } else {
                    //styleName： 实际上是k
                    //target： 实际上是obj[k]
                    var styleName = k;
                    var target = datas[k];

                    //下面这段代码可以让某一个样式运动到指定的位置
                    var current = parseInt(getStyle(element, styleName)) || 0;
                    var step = (target - current) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    current = current + step;
                    element.style[styleName] = current + "px";

                    //此位置原来是书写清除定时器的代码位置，但是某个样式运动完毕并不能进行清除，其他样式可能没到，使用假设成立法解决
                    //2 找到假设失败的条件：如果某个样式运动时没有到达指定位置，阻止清除
                    if (current != target) {
                        flag = false;
                    }
                }
            }

            //需要整体检测，只有每个样式都到达了指定位置才可以设置清除
            //3 验证flag的值
            if (flag) {
                clearInterval(element.timer);
                if (typeof fn == "function") {
                    fn();
                }
            }

        }, 5);
    }
    function getStyle(element, styleName) {
        //currentStyle   getComputedStyle
        if (element.currentStyle) {
            return element.currentStyle[styleName];
        } else {
            return getComputedStyle(element, null)[styleName];
        }
    }



//------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------排行榜部分-----------

    var $bjtp=$("#main .paiHang .bjtp");
    var $bjtpbf=$("#main .paiHang .bjtp>i");
    $bjtp.mouseenter(function(){
        $bjtpbf.eq($(this).index()).stop().fadeIn(400);
        $bjtp.eq($(this).index()).animate({top:-15},100).css("opacity",0.9)
    })
    $bjtp.mouseleave(function(){
        $bjtpbf.eq($(this).index()).stop().fadeOut(400);
        $bjtp.eq($(this).index()).animate({top:0},100).css("opacity",1)
    })


//------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------MV首播--------
    var $mv=$("#main .MVsb .foot li");
    var $mvimg=$("#main .MVsb .foot li img");
    var $em=$("#main .MVsb .foot li em");


    $mv.mouseenter(function(){
        $mvimg.eq($(this).index()).stop().animate({
            width:320,
            left:-10,
            top:-6
        },200);
        $em.eq($(this).index()).stop().fadeIn(300);
    })


    $mv.mouseleave(function(){
        $mvimg.eq($(this).index()).stop().animate({
            width:300,
            left:0,
            top:0
        },200);
        $em.eq($(this).index()).stop().fadeOut(300);
    })












});



















//--------------------------------------------------------附加模块效果


