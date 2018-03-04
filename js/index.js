//*******************************    pvll start   *******************************
// ����ͼ���첽����$get
var pvllCharts =  echarts.init(document.getElementById('pvll'));

//��ȡ���ش洢
var localdata=localStorage.getItem("charts");

//�жϴ����localStorageΪ��Ϊ��
if(localdata == null){

    //���localStorageΪ��   pvllͼ��ʼloading����
    pvllCharts.showLoading({
        //�ı�loading��ɫ
        color:'#7bc2ff'
    });

    $.get('data/pvll.json').done(function (data) {
        //1s�Ժ�ȥ������
        setTimeout(function(){

            pvllCharts.hideLoading();

            //����ͼ��
            pvllCharts.setOption(data);

        },1000);

        //��data�ļ�ת�����ַ���������localStorage��

        localStorage.setItem('charts',JSON.stringify(data))
    });

}else{
    //�����Ϊ�� �����ش���ת��Ϊjson����  ���¼���

    pvllCharts.setOption(JSON.parse(localdata));


}


//*******************************    pvll end   *******************************


//*******************************    monuthpvll start   *******************************

var monlocaldata=localStorage.getItem("moncharts");

//	�ڶ���span�����ʱ��������
$('.tab span:last-of-type').click(function(){
    //���Ϊ��   ִ�м��ض���
    if(monlocaldata == null){

        pvllCharts.showLoading({
            //�ı�loading��ɫ
            color:'#7bc2ff'
        });


        //get�������30�������
        $.get('data/monuthpvll.json').done(function (data) {

            //1s�Ժ�ȥ������
            setTimeout(function(){

                pvllCharts.hideLoading();
                //����ͼ��
                pvllCharts.setOption(data);

            },1000);
            //��data�ļ�ת�����ַ���������localStorage��

            localStorage.setItem('moncharts',JSON.stringify(data))

        });
    }else{
        //�����Ϊ�� �����ش���ת��Ϊjson����  ���¼���

        pvllCharts.setOption(JSON.parse(monlocaldata));

    }
});

//*******************************    monuthpvll end   *******************************

//*******************************    tab�л�  start   *******************************


//����л����30�����ݱ�
$(function(){
    $('.tab span').click(function(){

        $(this).addClass('sActive').siblings().removeClass('sActive');

        //��������ť����sActive�������
        if($('.tab span:last-of-type').hasClass('sActive')){

            //��ʼ�������30���ͼ��
            pvllCharts.setOption(JSON.parse(monlocaldata));

        }else{

            //����������7���ͼ��
            pvllCharts.setOption(JSON.parse(localdata))
        }
    })
});

//*******************************    tab�л�  end   *******************************



