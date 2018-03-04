/**
 * Created by Administrator on 2017/12/26.
 */
// 绘制图表异步请求$get

//*******************************    broswer start   *******************************
//获取元素
var broswerEachers = echarts.init(document.getElementById('broswer'));

//获取本地存储
var broLocalData=localStorage.getItem("broCharts");

//判断储存的localStorage为不为空
if(broLocalData == null){

    //broswer图表开始loading动画
    broswerEachers.showLoading({

        //改变loading颜色
        color:'#7bc2ff'

    });

    //broswer图表获取json数据
    $.get('data/broswer.json').done(function (data) {

        //1s以后去除动画
        setTimeout(function(){

            broswerEachers.hideLoading();
            data.push = function(data){

//    				遍历对象 加强循环  json文件追加数据的方法
                for(var x in data){

                    this[x] = data[x];
                }
            };

            //追加图表背景色
            data.push({
//					backgroundColor:["#efedee"],
            });

            //绘制图表
            broswerEachers.setOption(data);

            //将data文件转换成字符串保存在localStorage里

            localStorage.setItem('broCharts',JSON.stringify(data))
        },1000)
    });

}else{

    //如果不为空 将本地储存转换为json对象  重新加载

    broswerEachers.setOption(JSON.parse(broLocalData));
}
//*******************************    broswer end   *******************************




//*******************************    usercz start   *******************************
//获取元素
var userczCharts = echarts.init(document.getElementById('usercz'));


//获取本地存储
var uczLocalData=localStorage.getItem("uczCharts");

//判断储存的localStorage为不为空
if(uczLocalData == null){

    //				开始loading动画
    userczCharts.showLoading({

        //          改变loading颜色
        color:'#7bc2ff'

    });
    //usercz图表获取json数据
    $.get('data/usercz.json').done(function (data) {

        //1s以后去除动画
        setTimeout(function(){

            userczCharts.hideLoading();

            //绘制图表
            userczCharts.setOption(data);

        },1000);

        localStorage.setItem('uczCharts',JSON.stringify(data))

    },1000);


}else{

    //如果不为空 将本地储存转换为json对象  重新加载

    userczCharts.setOption(JSON.parse(uczLocalData));
}


//*******************************    usercz end   *******************************



//pvll图表开始loading动画

//pvll图表获取json数据
$.get('data/usercz.json').done(function (data) {
    //1s以后去除动画
    setTimeout(function(){

        userczCharts.hideLoading();
        //绘制图表
        userczCharts.setOption(data);

    },1000)
});


//按需加载
$(function(){
    $(window).scroll(function(){
        console.log($(window).scrollTop());
        if(($(window).scrollTop() >850)){

//usersbei  start
            var usersbeiChart = echarts.init(document.getElementById('usersbei'));

            //获取本地存储
            var sbeilocaldata=localStorage.getItem("sbeiCharts");

            //判断储存的localStorage为不为空
            if(sbeilocaldata == null){

                //如果localStorage为空   pvll图表开始loading动画
                usersbeiChart.showLoading({
                    //改变loading颜色
                    color:'#7bc2ff'
                });

                $.get('data/usersbei.json').done(function (data) {
                    //1s以后去除动画
                    setTimeout(function(){

                        usersbeiChart.hideLoading();

                        //绘制图表
                        usersbeiChart.setOption(data);

                    },1000);

                    //将data文件转换成字符串保存在localStorage里

                    localStorage.setItem('sbeiCharts',JSON.stringify(data))
                });

            }else{
                //如果不为空 将本地储存转换为json对象  重新加载

                usersbeiChart.setOption(JSON.parse(sbeilocaldata));

            }
// usersbei  end
//  phone  start
            var phoneCharts = echarts.init(document.getElementById('phonesbei'));


            //获取本地存储
            var phoneLocalData=localStorage.getItem("pCharts");

            //判断储存的localStorage为不为空
            if(phoneLocalData == null){

                //如果localStorage为空   pvll图表开始loading动画
                phoneCharts.showLoading({
                    //改变loading颜色
                    color:'#7bc2ff'
                });

                $.get('data/phonesbei.json').done(function (data) {
                    //1s以后去除动画
                    setTimeout(function(){

                        phoneCharts.hideLoading();

                        //绘制图表
                        phoneCharts.setOption(data);

                    },1000);

                    //将data文件转换成字符串保存在localStorage里

                    localStorage.setItem('pCharts',JSON.stringify(data))
                });

            }else{
                //如果不为空 将本地储存转换为json对象  重新加载

                phoneCharts.setOption(JSON.parse(phoneLocalData));

            }


//  phone  end

        };

        if(($(window).scrollTop() >1420)){
//area start
            var areaChart =  echarts.init(document.getElementById('area'));

            //获取本地存储
            var areaLocalData=localStorage.getItem("aCharts");
            console.log(areaLocalData);
            //判断储存的localStorage为不为空
            if(areaLocalData == null){

                //如果localStorage为空   pvll图表开始loading动画
                areaChart.showLoading({
                    //改变loading颜色
                    color:'#7bc2ff'
                });

                $.get('data/area.json').done(function (data) {
                    //1s以后去除动画
                    setTimeout(function(){

                        areaChart.hideLoading();

                        //绘制图表
                        areaChart.setOption(data);

                    },1000);

                    //将data文件转换成字符串保存在localStorage里

                    localStorage.setItem('aCharts',JSON.stringify(data));
                });

            }else{
                //如果不为空 将本地储存转换为json对象  重新加载

                areaChart.setOption(JSON.parse(areaLocalData));

            }
//area end
        };
        if(($(window).scrollTop() >1800)){
//***************    fxpvll  start   *****************
//					获取元素
            var fxpvlCharts =  echarts.init(document.getElementById('fxpvll'));

            //获取本地存储
            var  fxpvllLocalData=localStorage.getItem("fxpvllCharts");


            //判断储存的localStorage为不为空
            if(fxpvllLocalData == null) {

                //开始loading动画
                fxpvlCharts.showLoading({

                    //改变loading颜色
                    color:'#7bc2ff'

                });

                //fxpvll图表获取json数据
                $.get('data/pvll.json').done(function (data) {

                    //1s以后去除动画
                    setTimeout(function () {

                        fxpvlCharts.hideLoading();

                        //绘制图表
                        fxpvlCharts.setOption(data);

                    }, 1000);

                    localStorage.setItem('fxpvllCharts', JSON.stringify(data));

                });
            }else{

                //如果不为空 将本地储存转换为json对象  重新加载

                fxpvlCharts.setOption(JSON.parse(fxpvllLocalData));
            }

//***************    fxpvll  end   *****************

        }
    })
})




