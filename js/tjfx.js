/**
 * Created by Administrator on 2017/12/26.
 */
// ����ͼ���첽����$get

//*******************************    broswer start   *******************************
//��ȡԪ��
var broswerEachers = echarts.init(document.getElementById('broswer'));

//��ȡ���ش洢
var broLocalData=localStorage.getItem("broCharts");

//�жϴ����localStorageΪ��Ϊ��
if(broLocalData == null){

    //broswerͼ��ʼloading����
    broswerEachers.showLoading({

        //�ı�loading��ɫ
        color:'#7bc2ff'

    });

    //broswerͼ���ȡjson����
    $.get('data/broswer.json').done(function (data) {

        //1s�Ժ�ȥ������
        setTimeout(function(){

            broswerEachers.hideLoading();
            data.push = function(data){

//    				�������� ��ǿѭ��  json�ļ�׷�����ݵķ���
                for(var x in data){

                    this[x] = data[x];
                }
            };

            //׷��ͼ����ɫ
            data.push({
//					backgroundColor:["#efedee"],
            });

            //����ͼ��
            broswerEachers.setOption(data);

            //��data�ļ�ת�����ַ���������localStorage��

            localStorage.setItem('broCharts',JSON.stringify(data))
        },1000)
    });

}else{

    //�����Ϊ�� �����ش���ת��Ϊjson����  ���¼���

    broswerEachers.setOption(JSON.parse(broLocalData));
}
//*******************************    broswer end   *******************************




//*******************************    usercz start   *******************************
//��ȡԪ��
var userczCharts = echarts.init(document.getElementById('usercz'));


//��ȡ���ش洢
var uczLocalData=localStorage.getItem("uczCharts");

//�жϴ����localStorageΪ��Ϊ��
if(uczLocalData == null){

    //				��ʼloading����
    userczCharts.showLoading({

        //          �ı�loading��ɫ
        color:'#7bc2ff'

    });
    //userczͼ���ȡjson����
    $.get('data/usercz.json').done(function (data) {

        //1s�Ժ�ȥ������
        setTimeout(function(){

            userczCharts.hideLoading();

            //����ͼ��
            userczCharts.setOption(data);

        },1000);

        localStorage.setItem('uczCharts',JSON.stringify(data))

    },1000);


}else{

    //�����Ϊ�� �����ش���ת��Ϊjson����  ���¼���

    userczCharts.setOption(JSON.parse(uczLocalData));
}


//*******************************    usercz end   *******************************



//pvllͼ��ʼloading����

//pvllͼ���ȡjson����
$.get('data/usercz.json').done(function (data) {
    //1s�Ժ�ȥ������
    setTimeout(function(){

        userczCharts.hideLoading();
        //����ͼ��
        userczCharts.setOption(data);

    },1000)
});


//�������
$(function(){
    $(window).scroll(function(){
        console.log($(window).scrollTop());
        if(($(window).scrollTop() >850)){

//usersbei  start
            var usersbeiChart = echarts.init(document.getElementById('usersbei'));

            //��ȡ���ش洢
            var sbeilocaldata=localStorage.getItem("sbeiCharts");

            //�жϴ����localStorageΪ��Ϊ��
            if(sbeilocaldata == null){

                //���localStorageΪ��   pvllͼ��ʼloading����
                usersbeiChart.showLoading({
                    //�ı�loading��ɫ
                    color:'#7bc2ff'
                });

                $.get('data/usersbei.json').done(function (data) {
                    //1s�Ժ�ȥ������
                    setTimeout(function(){

                        usersbeiChart.hideLoading();

                        //����ͼ��
                        usersbeiChart.setOption(data);

                    },1000);

                    //��data�ļ�ת�����ַ���������localStorage��

                    localStorage.setItem('sbeiCharts',JSON.stringify(data))
                });

            }else{
                //�����Ϊ�� �����ش���ת��Ϊjson����  ���¼���

                usersbeiChart.setOption(JSON.parse(sbeilocaldata));

            }
// usersbei  end
//  phone  start
            var phoneCharts = echarts.init(document.getElementById('phonesbei'));


            //��ȡ���ش洢
            var phoneLocalData=localStorage.getItem("pCharts");

            //�жϴ����localStorageΪ��Ϊ��
            if(phoneLocalData == null){

                //���localStorageΪ��   pvllͼ��ʼloading����
                phoneCharts.showLoading({
                    //�ı�loading��ɫ
                    color:'#7bc2ff'
                });

                $.get('data/phonesbei.json').done(function (data) {
                    //1s�Ժ�ȥ������
                    setTimeout(function(){

                        phoneCharts.hideLoading();

                        //����ͼ��
                        phoneCharts.setOption(data);

                    },1000);

                    //��data�ļ�ת�����ַ���������localStorage��

                    localStorage.setItem('pCharts',JSON.stringify(data))
                });

            }else{
                //�����Ϊ�� �����ش���ת��Ϊjson����  ���¼���

                phoneCharts.setOption(JSON.parse(phoneLocalData));

            }


//  phone  end

        };

        if(($(window).scrollTop() >1420)){
//area start
            var areaChart =  echarts.init(document.getElementById('area'));

            //��ȡ���ش洢
            var areaLocalData=localStorage.getItem("aCharts");
            console.log(areaLocalData);
            //�жϴ����localStorageΪ��Ϊ��
            if(areaLocalData == null){

                //���localStorageΪ��   pvllͼ��ʼloading����
                areaChart.showLoading({
                    //�ı�loading��ɫ
                    color:'#7bc2ff'
                });

                $.get('data/area.json').done(function (data) {
                    //1s�Ժ�ȥ������
                    setTimeout(function(){

                        areaChart.hideLoading();

                        //����ͼ��
                        areaChart.setOption(data);

                    },1000);

                    //��data�ļ�ת�����ַ���������localStorage��

                    localStorage.setItem('aCharts',JSON.stringify(data));
                });

            }else{
                //�����Ϊ�� �����ش���ת��Ϊjson����  ���¼���

                areaChart.setOption(JSON.parse(areaLocalData));

            }
//area end
        };
        if(($(window).scrollTop() >1800)){
//***************    fxpvll  start   *****************
//					��ȡԪ��
            var fxpvlCharts =  echarts.init(document.getElementById('fxpvll'));

            //��ȡ���ش洢
            var  fxpvllLocalData=localStorage.getItem("fxpvllCharts");


            //�жϴ����localStorageΪ��Ϊ��
            if(fxpvllLocalData == null) {

                //��ʼloading����
                fxpvlCharts.showLoading({

                    //�ı�loading��ɫ
                    color:'#7bc2ff'

                });

                //fxpvllͼ���ȡjson����
                $.get('data/pvll.json').done(function (data) {

                    //1s�Ժ�ȥ������
                    setTimeout(function () {

                        fxpvlCharts.hideLoading();

                        //����ͼ��
                        fxpvlCharts.setOption(data);

                    }, 1000);

                    localStorage.setItem('fxpvllCharts', JSON.stringify(data));

                });
            }else{

                //�����Ϊ�� �����ش���ת��Ϊjson����  ���¼���

                fxpvlCharts.setOption(JSON.parse(fxpvllLocalData));
            }

//***************    fxpvll  end   *****************

        }
    })
})




