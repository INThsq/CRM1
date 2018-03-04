//*******************************    pvll start   *******************************
// 绘制图表异步请求$get
var pvllCharts =  echarts.init(document.getElementById('pvll'));

//获取本地存储
var localdata=localStorage.getItem("charts");

//判断储存的localStorage为不为空
if(localdata == null){

    //如果localStorage为空   pvll图表开始loading动画
    pvllCharts.showLoading({
        //改变loading颜色
        color:'#7bc2ff'
    });

    $.get('data/pvll.json').done(function (data) {
        //1s以后去除动画
        setTimeout(function(){

            pvllCharts.hideLoading();

            //绘制图表
            pvllCharts.setOption(data);

        },1000);

        //将data文件转换成字符串保存在localStorage里

        localStorage.setItem('charts',JSON.stringify(data))
    });

}else{
    //如果不为空 将本地储存转换为json对象  重新加载

    pvllCharts.setOption(JSON.parse(localdata));


}


//*******************************    pvll end   *******************************


//*******************************    monuthpvll start   *******************************

var monlocaldata=localStorage.getItem("moncharts");

//	第二个span点击的时候发送请求
$('.tab span:last-of-type').click(function(){
    //如果为空   执行加载动画
    if(monlocaldata == null){

        pvllCharts.showLoading({
            //改变loading颜色
            color:'#7bc2ff'
        });


        //get请求最近30天的数据
        $.get('data/monuthpvll.json').done(function (data) {

            //1s以后去除动画
            setTimeout(function(){

                pvllCharts.hideLoading();
                //绘制图表
                pvllCharts.setOption(data);

            },1000);
            //将data文件转换成字符串保存在localStorage里

            localStorage.setItem('moncharts',JSON.stringify(data))

        });
    }else{
        //如果不为空 将本地储存转换为json对象  重新加载

        pvllCharts.setOption(JSON.parse(monlocaldata));

    }
});

//*******************************    monuthpvll end   *******************************

//*******************************    tab切换  start   *******************************


//点击切换最近30天数据表
$(function(){
    $('.tab span').click(function(){

        $(this).addClass('sActive').siblings().removeClass('sActive');

        //如果这个按钮里有sActive这个类名
        if($('.tab span:last-of-type').hasClass('sActive')){

            //开始绘制最近30天的图标
            pvllCharts.setOption(JSON.parse(monlocaldata));

        }else{

            //否则绘制最近7天的图表
            pvllCharts.setOption(JSON.parse(localdata))
        }
    })
});

//*******************************    tab切换  end   *******************************



