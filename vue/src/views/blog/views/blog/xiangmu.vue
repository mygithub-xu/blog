<template>
    <div class="xm-body">

        <div class="xm-header" >
             <el-image class="bgimg" :src="bgImg"  fit="fill"></el-image>
             <div class="xm-header-jitang">
                <h1>{{xmHeader}}</h1>
                <h2></h2>
             </div>
        </div>
        <div class="xm-card">
            <div  v-for="(item,index) in list" :key="index">
                <div class="box-card" :style="{'background': bgColorList[index%bgColorList.length]}">
                    <div class="box-items">
                        <div class="box-title">{{item.title}}</div>
                        <div class="box-introduce">{{item.description}}</div>
                        <div class="box-time">
                            <span >{{item.createTime}}</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
      return {
          list:[],
          bgColorList:['linear-gradient(90deg, #00b09b,#96c93d)','linear-gradient(90deg, #003973,#E5E5BE)'],
          bgImg:"https://cdn.xn2001.com/20200627151647.jpg",
          xmHeader:"旧岸's Blog",
          xm:"我们拥有决定自己言行的力量，因此会犯错。我们拥有决定自己言行的力量，因此能从错误中重新站起来。"
      };
    },
    created(){
        this.getdata();
    },
    methods: {
      getdata() {
            this.$http.post(this.api.blogProjectListFieldQuery, {
                            number: 1,
                            size: 9999
                        })
                        .then(res => {
                    if (res.data.code == "200") {
                    this.list = res.data.body.records;
                }
            });
      },
    //页数
    handlePage(number, size){
        
    },

    }
}
</script>
<style scoped>

.xm-body{
    margin-top: 60px;
}
.xm-header{
    width: 100%;
    height: 470px;
    position:relative;
    float: left;
}
.xm-header .bgimg{
    height: 470px;
    width: 100%;
}
.xm-header-jitang{
    position:absolute;
    height: 110px;
    width: 80%;
    text-align: center;
    top: 180px;
    left:10%;
}
.xm-header-jitang h1{
    font-weight: 400;
    font-size: 45px;
    color: #ffffff;
    font-family: “Arial”,”Microsoft YaHei”,”黑体”,”宋体”,sans-serif;
    margin-bottom: 40px;
}
.xm-header-jitang h2{
    font-size: 18px;
    color: #ffffff;
    font-family: “Arial”,”Microsoft YaHei”,”黑体”,”宋体”,sans-serif;
}
.xm-card{
    width: 100%;
    min-height: 400px;
    float: left;
}
.box-card{
    margin-top: 20px;
    margin-bottom: 20px;
    width: 50%;
    height: 240px;
    margin-left: 25%;
    background: linear-gradient(90deg, #00b09b,#96c93d);
    transition: transform 0.4s ease;
    border-radius: 20px;
    float: left;
}
.box-card:hover{
    transform: scale(1.05,1.05);
    cursor: pointer;
    box-shadow: 0 0 8px #f3f3f3;
}
.box-items{
    width: 80%;
    margin-top: 70px;
    margin-left: 10%;
    float: left;
    font-size: 18px;
    color: #ffffff;
    text-align: center;
    vertical-align:middle;
}
.box-items .box-title{
    font-size: 30px;
    font-family:  Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
    margin-bottom: 15px;
    color: #ffffff;
}
.box-items .box-introduce{

    margin-bottom: 15px;
}
.box-time span{
    font-size: 15px;
}
/* .box-items .box-git-url{
    font-weight: 100;
    font-size: 15px;
    margin-bottom: 15px;
    color: #ffffff;
}
.box-items .box-web-url{
    font-weight: 100;
    font-size: 15px;
    margin-bottom: 15px;
    color: #ffffff;
} */

</style>