/**
 * Created by admin on 2017/9/15.
 */
//树叶飘落
window.onload = function () {
    var LeafScene = function (el) {
        this.viewport = el;
        this.world = document.createElement('div');
        this.leaves = [];

        this.options = {
            numLeaves: 20,
            wind: {
                magnitude: 1.2,
                maxSpeed: 12,
                duration: 300,
                start: 0,
                speed: 0
            },
        };

        this.width = this.viewport.offsetWidth;
        this.height = this.viewport.offsetHeight;

        // animation helper
        this.timer = 0;

        this._resetLeaf = function (leaf) {

            // place leaf towards the top left
            leaf.x = this.width * 2 - Math.random() * this.width * 1.75;
            leaf.y = -10;
            leaf.z = Math.random() * 200;
            if (leaf.x > this.width) {
                leaf.x = this.width + 10;
                leaf.y = Math.random() * this.height / 2;
            }
            // at the start, the leaf can be anywhere
            if (this.timer == 0) {
                leaf.y = Math.random() * this.height;
            }

            // Choose axis of rotation.
            // If axis is not X, chose a random static x-rotation for greater variability
            leaf.rotation.speed = Math.random() * 10;
            var randomAxis = Math.random();
            if (randomAxis > 0.5) {
                leaf.rotation.axis = 'X';
            } else if (randomAxis > 0.25) {
                leaf.rotation.axis = 'Y';
                leaf.rotation.x = Math.random() * 180 + 90;
            } else {
                leaf.rotation.axis = 'Z';
                leaf.rotation.x = Math.random() * 360 - 180;
                // looks weird if the rotation is too fast around this axis
                leaf.rotation.speed = Math.random() * 3;
            }

            // random speed
            leaf.xSpeedVariation = Math.random() * 0.8 - 0.4;
            leaf.ySpeed = Math.random() + 1.5;

            return leaf;
        }

        this._updateLeaf = function (leaf) {
            var leafWindSpeed = this.options.wind.speed(this.timer - this.options.wind.start, leaf.y);

            var xSpeed = leafWindSpeed + leaf.xSpeedVariation;
            leaf.x -= xSpeed;
            leaf.y += leaf.ySpeed;
            leaf.rotation.value += leaf.rotation.speed;

            var t = 'translateX( ' + leaf.x + 'px ) translateY( ' + leaf.y + 'px ) translateZ( ' + leaf.z + 'px )  rotate' + leaf.rotation.axis + '( ' + leaf.rotation.value + 'deg )';
            if (leaf.rotation.axis !== 'X') {
                t += ' rotateX(' + leaf.rotation.x + 'deg)';
            }
            leaf.el.style.webkitTransform = t;
            leaf.el.style.MozTransform = t;
            leaf.el.style.oTransform = t;
            leaf.el.style.transform = t;

            // reset if out of view
            if (leaf.x < -10 || leaf.y > this.height + 10) {
                this._resetLeaf(leaf);
            }
        }

        this._updateWind = function () {
            // wind follows a sine curve: asin(b*time + c) + a
            // where a = wind magnitude as a function of leaf position, b = wind.duration, c = offset
            // wind duration should be related to wind magnitude, e.g. higher windspeed means longer gust duration

            if (this.timer === 0 || this.timer > (this.options.wind.start + this.options.wind.duration)) {

                this.options.wind.magnitude = Math.random() * this.options.wind.maxSpeed;
                this.options.wind.duration = this.options.wind.magnitude * 50 + (Math.random() * 20 - 10);
                this.options.wind.start = this.timer;

                var screenHeight = this.height;

                this.options.wind.speed = function (t, y) {
                    // should go from full wind speed at the top, to 1/2 speed at the bottom, using leaf Y
                    var a = this.magnitude / 2 * (screenHeight - 2 * y / 3) / screenHeight;
                    return a * Math.sin(2 * Math.PI / this.duration * t + (3 * Math.PI / 2)) + a;
                }
            }
        }
    }

    LeafScene.prototype.init = function () {

        for (var i = 0; i < this.options.numLeaves; i++) {
            var leaf = {
                el: document.createElement('div'),
                x: 0,
                y: 0,
                z: 0,
                rotation: {
                    axis: 'X',
                    value: 0,
                    speed: 0,
                    x: 0
                },
                xSpeedVariation: 0,
                ySpeed: 0,
                path: {
                    type: 1,
                    start: 0,

                },
                image: 1
            };
            this._resetLeaf(leaf);
            this.leaves.push(leaf);
            this.world.appendChild(leaf.el);
        }

        this.world.className = 'leaf-scene';
        this.viewport.appendChild(this.world);

        // set perspective
        this.world.style.webkitPerspective = "400px";
        this.world.style.MozPerspective = "400px";
        this.world.style.oPerspective = "400px";
        this.world.style.perspective = "400px";

        // reset window height/width on resize
        var self = this;
        window.onresize = function (event) {
            self.width = self.viewport.offsetWidth;
            self.height = self.viewport.offsetHeight;
        };
    }

    LeafScene.prototype.render = function () {
        this._updateWind();
        for (var i = 0; i < this.leaves.length; i++) {
            this._updateLeaf(this.leaves[i]);
        }

        this.timer++;

        requestAnimationFrame(this.render.bind(this));
    }

    // start up leaf scene
    var leafContainer = document.querySelector('.falling-leaves'),
        leaves = new LeafScene(leafContainer);

    leaves.init();
    leaves.render();
};

$(function () {
    //-- ------------top 头部导航 start-------- --
    //---------------------------------------------

    //-- ------------top 头部导航 end-------- -


    //---------------电梯按钮 start----------
    var eleColor = ["#fae901", "#fb2292", "#4df5be", "#56f900", "#df0df9"]
    for (var i = 0; i < eleColor.length; i++) {
        $("#elevator .eleDot li").eq(i).css({
            backgroundColor: eleColor[i],
            boxShadow: "1px 1px 10px " + eleColor[i] + ", -1px -1px 10px" + eleColor[i]
        });
        $("#elevator .eletitle li").eq(i).css({
            backgroundColor: eleColor[i],
            boxShadow: "1px 1px 5px " + eleColor[i] + ", -1px -1px 5px" + eleColor[i]
        });
    }

    $(window).scroll(function () {
        var $elevator = $("#elevator");
        var minHeight = $("#top").height() + $("#banner").height() - 150;
        var maxHeight = $("#top").height() + $("#banner").height() + $("#main").height() - 350;
        if ($(this).scrollTop() > minHeight && $(this).scrollTop() < maxHeight) {
            //设置导航盒子定位
            $elevator.css({display: "block", position: "fixed"});
        } else {
            $elevator.css("display", "none");

        }
    });
    $("#elevator .eletitle li").css("width", 0);
    $("#elevator .eleDot span").mouseenter(function () {
        var index = $(this).index;
        $("#elevator .eletitle li").eq(index).css({display: "block"}).animate({width: "70px"});
    });
    //---------------电梯按钮 end----------


    //-- ------------banner 横幅 start-------- --
    //---------------------------------------------

    //banner 右侧轮播图
    var nowimg = 1;

    $(".banner_left_pic").prepend("<div class='maoni'></div>");

    for (var i = 0; i <= 24; i++) {
        $(".maoni").append("<p></p>");
        $(".maoni p").eq(i).css("top", parseInt(i / 5) * 86);
        $(".maoni p").eq(i).css("left", i % 5 * 168);
        $(".maoni p").eq(i).css("background-position", (i % 5 * -168) + "px " + parseInt(i / 5) * -86 + "px");

    }

    $(".banner_left_lis li").click(
        function () {

            if (nowimg < 5) {
                nowimg++;
            } else {
                nowimg = 1;
            }
            $(".banner_left_pic  img").attr("src", "images/banner1" + nowimg + ".jpg");

            $(".maoni p").css("transition", "all 1s ease 0s");
            $(".banner_left_pic").addClass("fei");

            //添加飞的方向：
            $(".maoni p").each(
                function () {
                    $(this).css("-webkit-transform", "rotateX(" + -parseInt(Math.random() * 90) + "deg) rotateY(" + parseInt(Math.random() * 100) + "deg) translateZ(500px)")
                }
            );


            setTimeout(function () {
                $(".baozha").removeClass("fei");
                $(".maoni p").css("transition", "none");
                $(".maoni p").css("background-image", "url(images/banner1" + nowimg + ".jpg)");

                $(".maoni p").css("-webkit-transform", "none");
            }, 1000);
        }
    );

//banner 左侧新闻手风琴
    $("#banner_right li").mouseenter(function () {
        $(this).children().children("img").stop().slideDown()
            .parent().parent().siblings().children().children("img").hide();
        $(this).children().children("span").stop().css({background: "#dddddd", border: 0})
            .parent().parent().siblings().children().children("span").css({
                background: "#fff",
                borderBottomWidth: "1px",
                borderBottomStyle: "dotted",
                borderBottomColor: "#cccccc"
            });
    });


//-- ------------banner 横幅 end-------- --


//-- ------------main 主体 start-------- --
//---------------------------------------------

//-----追星必备-----
    $("#idolator .fl li").mouseenter(function () {
        $(this).transition({
            perspective: '500px',
            rotateY: 360
        });
    });
    $("#idolator .fl li").mouseleave(function () {
        $(this).off("mouseenter");
    });
//main 现场直播live
    $("#main_live .live_conent li img").mouseenter(function () {
        $(this).css({opacity: 1}).parent().parent().siblings().children().children("img").css({opacity: 0.4});
        $(this).transition({scale: 1.3});
    });
    $("#main_live .live_conent li img").mouseleave(function () {
        $(this).css({opacity: 0.4, width: "220px"})
        $(this).transition({scale: 1});
    })

    //高清美图
    $("#main_pretty .pretty_pic1").mouseenter(function(){
        $(this).children("span").animate({opacity:1,bottom:"0px"});
    });
    $("#main_pretty .pretty_pic1").mouseleave(function(){
        $(this).children("span").animate({opacity:0,bottom:"-30px"});
    });
//娱乐头条

    $(function () {
        var oBox = document.getElementById('box');
        var oPag = document.querySelector('#box .pag1');
        var oFront = document.querySelector('#box .pag1 .front');
        var oBack = document.querySelector('#box .pag1 .back');
        var oPag2 = document.querySelector('#box .pag2');

        var iNow = 0;
        var bReady = true;
        oBox.onclick = function () {
            if (bReady == false) return;
            bReady = false;

            iNow++;
            oPag.style.transition = '1s all ease';
            oPag.style.transform = 'rotateY(-180deg)';

            oPag.addEventListener('transitionend', function () {
                oPag.style.transition = 'none';
                oPag.style.transform = 'rotateY(0deg)';

                oFront.style.backgroundImage = oBox.style.backgroundImage = "url(images/headline1" + iNow % 4 + ".jpg)";  //4有几张banner就%几
                oBack.style.backgroundImage = oPag2.style.backgroundImage = "url(images/headline1" + (iNow + 1) % 4 + ".jpg)";
                bReady = true;
            }, false);
        }
    })
    setInterval(function () {
        $("#box").trigger("click")
    }, 2000)
    $(function () {
        $(".btn").click(function () {
            $("#box").fadeToggle();
        })
    })
//$("#headline .movie_lis").each().mouseenter(function(){
//    $("#headline .movie_lis img")
//        .animate({
//        left:50,
//        width:150,
//        height:10,
//        borderBottomLeft:20,
//        borderBottomright:20,
//        },1000);
//    $("#headline .movie_lis img")
//        .animate({
//            height:200
//        })
//})


//明星签名
    var starPos = [
        {
            width: 100,
            top: 0,
            left: 285,
            opacity: 0.6,
            zIndex: 2
        },
        {
            top: 25,
            left: 90,
            opacity: 0.7,
            zIndex: 3
        },
        {
            top: 50,
            left: 0,
            opacity: 0.8,
            zIndex: 4
        },
        {
            top: 75,
            left: 95,
            opacity: 0.9,
            zIndex: 5
        },
        {
            width: 100,
            top: 105,
            left: 285,
            opacity: 1,
            zIndex: 6
        },//1
        {
            top: 95,
            left: 480,
            opacity: 0.9,
            zIndex: 5
        },//2
        {
            top: 50,
            left: 560,
            opacity: 0.8,
            zIndex: 4
        },//3
        {
            top: 25,
            left: 450,
            opacity: 0.7,
            zIndex: 3
        }]//4
    var starPosWid = [100, 150, 200, 250, 200, 150, 100];
    var flag = true;//节流阀的开关，值为true，表示可以执行
    var lis = $("#star .star_lis li");
    var imgs = $("#star .star_lis img");

    function changePos() {
        for (var i = 0; i < starPos.length; i++) {
            lis.eq(i).animate(starPos[i], function () {
                //此处可以保证运动执行完毕
                //由于此效果中每个元素的运动位置相近，所以在设置时进行简单的判断即可，不用进行精确的判断方式
                flag = true;
            });
        }
    }

    function changeWid() {
        for (var i = 0; i < starPosWid.length; i++) {
            lis.eq(i).children("img").animate(starPosWid[i], function () {
                //此处可以保证运动执行完毕
                //由于此效果中每个元素的运动位置相近，所以在设置时进行简单的判断即可，不用进行精确的判断方式
                flag = true;
            });
        }
    }

    changePos();

    $("#star .star_rotate").mouseover(function () {
        $("#star .star_btn").stop().animate({opacity: 1}, 500)
    })
    $("#star .star_rotate").mouseout(function () {
        $("#star .star_btn").stop().animate({opacity: 0}, 500)
    })
    function muMa() {
        for (var i = 0; i < lis.length; i++) {
            lis[i].flag = true;
        }
        //4 右按钮点击操作
        if (flag) {
            //点击按钮后，只能执行一次效果,采用变量控制的方式
            flag = false;
            for (var i = 0; i < lis.length; i++) {
                lis.eq(i).flag = false;
            }

            //将数组starPos中的第一个元素删除掉，并添加到starPos的最后
            starPos.push(starPos.shift());
            //根据starPos中的新位置，重新设置li的运动
            changePos();
            changeWid();
        }
    }

    var timer = setInterval(muMa, 700);
    lis.mouseenter(function () {
        clearInterval(timer);
    }).mouseleave(function () {
        timer = setInterval(muMa, 700);
    });
    lis.click(function(){
        var index1=$(this).index()+1;
        if($(this).css('zIndex')==6){
            document.body.style.backgroundImage = "url(images/" + index1 + ".jpg)"
        }
    });

//设置五个标签的自定义属性值


//-- ------------main 主体 end-------- --


//-- ------------foot 底部 start-------- --
//---------------------------------------------

//-- ------------foot 底部 end-------- --


})
;