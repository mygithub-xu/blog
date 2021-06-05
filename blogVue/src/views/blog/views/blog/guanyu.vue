
<template>
<div>
    <div class="mine">
        <div class="tim-content qqpc" :style="{'height':screeHeight+'px'}">
            <div class="title" v-bind:style="{'background-color': titleColor,'border-bottom':titleBorder }">
                <div class="zhezhao">
                <div class="firstDiv">
                    <h2>About me</h2>
                    <p>Hi,I'm Jingbo Xu,</p><br>
                    <p>A java programmer</p>
                </div>
                </div>
            </div>
            <div class="circle"></div>
        </div>

        <div class="content-yu">
            <div class="mineIntroduce ">
                <p>高山仰止，景行行止。虽不能至，然心向往之</p>
            </div>
        </div>
        <div class="activebg fisrtbg" id="pic1" v-bind:style="{'background-position-x':positionX,'background-position-y': positionY1+'px' }"></div>
        <div class="content-item">
            <div class="content3 content-item-body">
                <h2 class="content2-title content-item-title">个人资料</h2>
                <div class="content2-1">
                    <p class="content2-sex "> 性别： 男</p> 
                    <p class="content2-hobby"> 爱好： 看电影，打游戏</p> 
                    <p class="content2-constellation"> 星座： 狮子座</p> 
                    <p class="content2-address"> 地区： 江西省</p> 
                    <p class="content2-Personal"> 性格： 阳光</p> 
                    <p >毕业学校：东华理工大学长江学院</p>
                    <p >专业：软件工程</p>
                    <p >ps(个人会的技术及项目，在项目模块中有提到，也会第一时间更新到git) </p>
                </div>
            </div>
        </div>
        <div class="activebg secondbg" id="pic2" v-bind:style="{'background-position-x':positionX,'background-position-y': positionY2+'px' }"></div>
        <div class="content-item">

            <div class="content3 content-item-body">
                <h2 class="content3-title content-item-title">过往如诗</h2>
                <div class="content3-body">
                    <p>2018年暑假，看着对着视频敲出来的打地鼠游戏，我欣喜若狂。一遍一遍的玩着这个非常简陋的小游戏,看着分数一直上涨。<br>
                    2019年2月初，刚学完css，html。就去帮我哥写了个纯静态网站。云服务器的tomcat我都要弄半天，不过，看着输入的网址第一次出现我写的页面，内心压抑不住的激动。<br>
                    2019年6月，刚学完了ssm，用ssm做了一个小型的电商管理后台项目，一个商城项目。后台管理是跟着老师学的，商城是自己跟着教学视频写的。那个时候框架的配置都感觉太难，太繁琐了。
                        为了熟悉这些xm的配置，一遍又一遍的去弄。不过欣慰的是，那次学校组织的生产实习我帮了很多同学的忙，帮他们弄项目<br>
                    2019年7月，我去找工作了。刚过大三的我没经验没项目，找工作异常的艰难。当时那些说学会ssm就能找到工作的人呢？？？何况我还在这个月学了springboot。还是没有任何作用。我开始明白了，
                        我一直注重于框架的学习，注重于项目的形成，但是我对那些基本的概念都没有掌握。于是我开始注册简书，觉得重新学习java，学习那些基础。<br>
                    2019年10月，我在这三个月边复习帮我哥修缮网页。中途还花了半个月的时间写了基于android的一个中控app。每天从早上9电弄到下午10点。多出来的时间就看一下springcloud。然后闲余时间也会刷刷题，投投简历
                        。功夫不负有心人，我终于在广州找到了第一份工作。尽管是一家外包企业，我还是非常惊喜。<br>
                    2020年1月中旬，我在这三个半月学到了非常多东西，虽然公司不加班，但是我经常写代码写到起码0点。这段时间我发现程序员容易掉头发是真的，我也发现我对公司的框架对一些中间件的理解并没有太大的变化。
                        而且我觉得积压的知识太片面，太笼统。需要给我时间去整理。于是，交付完最后一个项目，我辞职了。就算是辞职了，公司依旧叫我参加年会，让我领奖金。我非常非常非常感谢这个公司，
                        到现在我都非常感激，我永远不会忘记我曾跟你们同事过，我永远不会忘记你们对我的，无私的帮助。希望你们越来越好！！！</p>
                    <!-- <p>2020年5月，我用一个毕设项目将之前积累的东西一一复习。我自己模仿公司的编程习惯，模仿git上的管理系统，开发了一个新系统。综合了一系列的东西。redis，shrio，swagger等等，也对vue理解的
                        更加深入。在这几个月，我学东西都是如虎添翼，一个月左右就将uni-app学了。虽然不精通，但是完全可以写一个app了。就这样，我将毕设完成了。我迫不及待的想实验一下我写的框架。应该是我综合起来的框架。</p>
                    <p>2020年5月末，我面了一家公司。面试都没有面，直接看我云服务器上的项目效果就果断应聘了我。我也没去多想，就去了。到了次啊发现是一家养老酒店，这个酒店在我来之前就只有一个开发，然后办公室里面就4个人。
                        这家酒店老板想做一个微信小程序，然后一个人做微信暂且称A吧，我就负责做后台管理系统。这对我来说简直就是轻车熟路，没有任何难度。可是当我做完一个功能节点信心满满给那个A看，他直接就让我改很多地方。
                        第一次就算了，但弄多了我也烦。虽然花不了多少时间，多少有点不是滋味。文档没有一个，啥也不讲清楚，就扔下一句话‘你看微信小程序啊’就直接叫我把后台管理系统做好。我真是欲哭无泪，好在，
                        我也着手写了代码一键生成的工具，所以没用多少天就将后台给写的差不多了。但是公司这几个人天天说要辞职要辞职，我太年轻，一下子被带跑偏了。于是当我后台管理系统差不多可以交付的时候，我就辞职了。这是一次教训，
                        我也明白了，千万不要被别人左右你的想法，要相信你自己的判断。</p>
                    <p>2020年7月没想到我两个礼拜能收到三份offer，很意外，也在情理之中。这家是上海的一家公司。。。。。。。。</p> -->
                </div>
                <div class="lookMore"><el-link type="primary">查看更多</el-link></div>
            </div>

        </div>
        <div class="activebg thirdbg" id="pic3" v-bind:style="{'background-position-x':positionX,'background-position-y': positionY3+'px' }"></div>
        <div class="content-item">

            <div class="content4 content-item-body">
                <h2 class="content4-title content-item-title">人生如歌</h2>
                <div class="content4-body ">
                    <p class="common-font-style">2018年暑假，看着对着视频敲出来的打地鼠游戏，我欣喜若狂。一遍一遍的玩着这个非常简陋的小游戏,看着分数一直上涨。</p>
                    <p class="common-font-style">2019年2月初，刚学完css，html。就去帮我哥写了个纯静态网站。云服务器的tomcat我都要弄半天，不过，看着输入的网址第一次出现我写的页面，内心压抑不住的激动。</p>
                    <p class="common-font-style">2019年6月，刚学完了ssm，用ssm做了一个小型的电商管理后台项目，一个商城项目。后台管理是跟着老师学的，商城是自己跟着教学视频写的。那个时候框架的配置都感觉太难，太繁琐了。
                        为了熟悉这些xm的配置，一遍又一遍的去弄。不过欣慰的是，那次学校组织的生产实习我帮了很多同学的忙，帮他们弄项目</p>
                    <p class="common-font-style">2019年7月，我去找工作了。刚过大三的我没经验没项目，找工作异常的艰难。当时那些说学会ssm就能找到工作的人呢？？？何况我还在这个月学了springboot。还是没有任何作用。我开始明白了，
                        我一直注重于框架的学习，注重于项目的形成，但是我对那些基本的概念都没有掌握。于是我开始注册简书，觉得重新学习java，学习那些基础。</p>
                    <!-- <p>2020年5月，我用一个毕设项目将之前积累的东西一一复习。我自己模仿公司的编程习惯，模仿git上的管理系统，开发了一个新系统。综合了一系列的东西。redis，shrio，swagger等等，也对vue理解的
                        更加深入。在这几个月，我学东西都是如虎添翼，一个月左右就将uni-app学了。虽然不精通，但是完全可以写一个app了。就这样，我将毕设完成了。我迫不及待的想实验一下我写的框架。应该是我综合起来的框架。</p>
                    <p>2020年5月末，我面了一家公司。面试都没有面，直接看我云服务器上的项目效果就果断应聘了我。我也没去多想，就去了。到了次啊发现是一家养老酒店，这个酒店在我来之前就只有一个开发，然后办公室里面就4个人。
                        这家酒店老板想做一个微信小程序，然后一个人做微信暂且称A吧，我就负责做后台管理系统。这对我来说简直就是轻车熟路，没有任何难度。可是当我做完一个功能节点信心满满给那个A看，他直接就让我改很多地方。
                        第一次就算了，但弄多了我也烦。虽然花不了多少时间，多少有点不是滋味。文档没有一个，啥也不讲清楚，就扔下一句话‘你看微信小程序啊’就直接叫我把后台管理系统做好。我真是欲哭无泪，好在，
                        我也着手写了代码一键生成的工具，所以没用多少天就将后台给写的差不多了。但是公司这几个人天天说要辞职要辞职，我太年轻，一下子被带跑偏了。于是当我后台管理系统差不多可以交付的时候，我就辞职了。这是一次教训，
                        我也明白了，千万不要被别人左右你的想法，要相信你自己的判断。</p>
                    <p>2020年7月没想到我两个礼拜能收到三份offer，很意外，也在情理之中。这家是上海的一家公司。。。。。。。。</p> -->
                </div>
                <div class="lookMore"><el-link type="primary">查看更多</el-link></div>
            </div>

        </div>
        <div class="foot">foot</div>
    </div>  
</div>
</template>

<script>

export default {
    name: "home",
    data() {
        return {
            ratio: 0.05,
            positionX: "50%",
            positionY1: 30,
            positionY2: 100,
            positionY3: 150,
            Y1: 0,
            Y2: 0,
            Y3: 0,
            titlePositon: "static",
            titleColor: "transparent",
            titleBorder:"0",
            screeHeight: document.body.clientHeight-160,
            isMobile:false
        }
    },
    components: {
    },
    mounted() {
        this.isMobile = this.$utils._isMobile()
        this.screeHeight =  document.body.clientHeight-160
        if (this.isMobile) {
            this.screeHeight =  this.screeHeight - 160
        }
        window.addEventListener("scroll", this.handleScroll);
        window.onload = () => {
            let pic1 = document.getElementById("pic1");
            let pic2 = document.getElementById("pic2");
            let pic3 = document.getElementById("pic3");
            this.positionY1 = this.Y1 = pic1.offsetTop * this.ratio;
            this.positionY2 = this.Y2 = pic2.offsetTop * this.ratio;
            this.positionY3 = this.Y3 = pic3.offsetTop * this.ratio;
        }
    },
    methods: {
        handleScroll() {
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            
            this.positionY1 = this.Y1 - scrollTop * this.ratio;
            this.positionY2 = this.Y2 - scrollTop * this.ratio;
            this.positionY3 = this.Y3 - scrollTop * this.ratio;

            if (scrollTop > 900) {
                this.titlePositon = "fixed";
                this.titleColor = "#fff";
                this.titleBorder = "1px solid #e5e5e5";
            } else {
                this.titlePositon = "static";
                this.titleColor = "transparent";
                this.titleBorder = "0";
            }
        }
    }
};
</script>

<style scoped>
.lookMore{
    margin-top: 20px;

}
.content2-1{
    margin-top: 20px;
}
.content2-1 p{
    margin-top: 15px;
    margin-left: 300px;
    font-size: 22px;
    color: 	#808080;
}
.content-item-title{
    font-size: 35px;
    margin-top: 40px;
    margin-bottom: 10px;
}
.content-item-body {    
    height: 100%;
    margin: 0 auto;
    padding: 20px 20px;
}

.content3-body{
    height: 290px;
    width: 100%;
    line-height: 1.2;
    letter-spacing:1px;
	overflow: hidden;
}
.content3-body p{
    font-family: “Arial”,”Microsoft YaHei”,”黑体”,”宋体”,sans-serif;
    font-size: 16px;
    margin-top: 10px;
    font-weight: 200;
}
.content4-body{
    height: 290px;
    width: 100%;
    line-height: 1.2;
    letter-spacing:1px;
	overflow: hidden;
}
.home {
    height: 100%;
}
.title {
    width: 100%;
    height: 100%;
    position: static;
    background-color: transparent;
    z-index: 10;
    top: 0px;
    left: 0px;
    font-size: 0;
}
.title ul,li{
    float: left;
    list-style: none;
}
.title .item {
    height: 75px;
    line-height: 75px;
    width: 75px;
    text-align: center;
    font-size: 20px;
}
.title .logoLink {
    width: 106px;
    height: 75px;
    overflow: hidden;
    font-size: 0;
    background: transparent
        url(https://sqimg.qq.com/qq_product_operations/im/qqlogo/imlogo_b.png)
        no-repeat left 15px;
    margin-left: 300px;
}
.title .item:hover{
    background-color: #12b7f5;
}
.circle {
    position: absolute;
    width: 100%;
    height: 52px;
    margin-top: -52px;
    background: transparent url(https://sqimg.qq.com/qq_product_operations/im/2018/linearbot.png) repeat-x left top;
    text-align: center;
    z-index: 5;
    bottom: 0;
}
.content-yu{
    background-color: #fff;
    width: 100%;
    height: 150px;
}
.content-item {
    background-color: #fff;
    width: 100%;
    height: 500px;
}
.tim-content {
    position: relative;
    width: 100%;
    margin: 0 auto;
    height: 80%;
}
.qqpc {
    background: url('https://www.whfch.icu/resources/cover.jpg')
        no-repeat center center;
    background-size: cover;
    position: relative;
}
.qqpc .zhezhao{
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
}
.activebg {
    position: relative;
    width: 100%;
    height: 600px;
    background: #fff;
    background-attachment: fixed;
    background-position: center 0;
    background-repeat: no-repeat;
}
.fisrtbg {
    background-image: url(https://sqimg.qq.com/qq_product_operations/im/2015/fisrtbg.jpg);
}
.secondbg {
    background-image: url(https://sqimg.qq.com/qq_product_operations/im/2015/update/avd.jpg);
}
.thirdbg {
    background-image: url(https://sqimg.qq.com/qq_product_operations/im/2015/blog.jpg);
}
.foot {
    background-color: black;
    line-height: 500px;
    color: #fff;
    text-align: center;
    width: 100%;
    font-size: 30px;
    font-weight: bold;
}
.mine{
    width: 100%;
    height: 100%;
}
.firstDiv{
    position:absolute;
    height: 300px;
    width: 60%;
    right: 20%;
    top: 200px;
}
.firstDiv h2{
    font-size: 57px;
    line-height: 72px;
    color: #ffffff;
    font-weight: 600;
    text-transform: capitalize;
}
.firstDiv p{
    font-size: 34px;
    line-height: 40px;
    color: #DCF3FF;
    font-weight: 600;
    text-transform: capitalize;
    display: inline-block;
    padding: 5px 0;
    font-weight: normal;
}
.mineIntroduce{
    height: 100%;
    margin: 0 auto;
    text-align: center;
    font-size: 35px;
}
.mineIntroduce p{
    padding-top: 50px;
}
@media screen and (max-width:600px){
    .mineIntroduce{
        font-size: 20px;
    }
    .content2-1 p{
        margin-top: 5px;
        margin-left: 0px; 
        font-size: 15px;
        line-height: 18px;
    }
    .content-item{
        height: 350px;
    }
    .content-item-title{
        font-size: 26px;
        margin-top: 20px;
    }
    .content3-body{
        height: 200px;
    }
    .content3-body p{
        height: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .content4-body{
        height: 210px;
    }
    .firstDiv{
        top: 50px;
    }
    .firstDiv h2{
        font-size: 30px;
    }
    .firstDiv p{
        font-size: 25px;
    }
    .activebg{
        height: 400px;
    }
    .foot{
        line-height: 250px;
    }
}
@media screen and (min-width:600px){
}

</style>

