//根据当前设备去设置宽度
function remSize(){
    //获取设备的宽度
    var deviceWidth=document.documentElement.clientWidth || window.innerWidth
    // 超过750，按照750算,一般是750的一半
    if(deviceWidth>=750){
        deviceWidth=750
    }
    if(deviceWidth<=320){
        deviceWidth=320
    }
    //设置rem,假设这里的设计稿为750: 750px-->1rem=100px,375px-->1rem=50px
    document.documentElement.style.fontSize=(deviceWidth/7.5)+'px'
    // 设置字体大小 15p'x
    document.querySelector('body').style.fontSize=0.3+"rem"
}
remSize()
// 当窗口发生变化就调用
window.onresize=function(){
    remSize()
}