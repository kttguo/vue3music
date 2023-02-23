import {createStore} from 'vuex'
import { getMusicLyric } from "@/request/api/item.js"
import { getPhoneLogin } from "@/request/api/home.js"

export default createStore({
  state: {
    //播放列表，获取音乐url
    playList: [{ //playList播放列表，playlist是一个数组
      al: {
        id: 89039055,
        name: "雨爱抖音版",//歌单名字
        pic: 109951164966568500,
        picUrl: "https://p1.music.126.net/2f6UgY8Jc0Dy6jufMdIZeQ==/109951164966568495.jpg",
        pic_str: "109951164966568495"
      },
      id: 1446137141,//歌曲id
      name: "雨爱（抖音版）", //歌曲名
      ar:[{name: "灏灏灏仔"}] //作者名
    }],
    playListIndex: 0, //默认下标为0
    isbtnShow: true, //暂停按钮的显示
    detailShow: false, //歌曲详情页的显示
    lyricList:{},//歌词，从后台拿到数据，使用对象存储
    currentTime:0,//当前时间
    duration:0,//歌曲总时长
    isLogin:false,//判断是否登录
    isFooterMusic:true,// 判断底部组件是否需要显示
    token:"",
    user:{},//用户信息
  },
  mutations: {
    //对应底部组件播放按钮/暂停按钮的值
    updateIsbtnShow: function (state, value) {
      state.isbtnShow = value
    },
    // 将一首歌的数据添加到播放列表
    pushPlayList:function(state,value){
      state.playList.push(value)
    },
    // 将歌曲对应信息传递过来
    updatePlayList: function (state, value) {
      state.playList = value
      // console.log(state.playList);
    },
    //歌单中歌曲的下标，对应index
    updatePlayListIndex: function (state, value) {
      state.playListIndex = value
      // console.log(value); //0,1,2,...
    },
    // 是是否显示歌曲详情页
    updateDetailShow: function (state) {
      state.detailShow = !state.detailShow
    },
    //存储歌词
    updateLyricList:function(state,value){
      state.lyricList=value
    },
    //播放的歌曲当前时间
    updateCurrentTime:function(state,value){
      // console.log(state.currentTime);
      state.currentTime=value
    },
   //歌曲总时长
    updateDuration:function(state,value){
      state.duration=value
    },
    updateIsLogin:function(state,value){
      state.isLogin=true
    },
    updateToken:function(state,value){
      state.token=value
      localStorage.setItem('token',state.token)
    },
    updateUser:function(state,value){
      state.user=value
    }
  },
  actions: {
    getLyric: async function (context, value) {
      let res = await getMusicLyric(value)
      // console.log(res);
      // 存储歌词
      context.commit("updateLyricList",res.data.lrc)
    },
    //获取用户登录密码和状态
    getLogin:async function(context,value){
      let res=await getPhoneLogin(value);
      // console.log(res);
      return res;
    }
  },
  modules: {}
})