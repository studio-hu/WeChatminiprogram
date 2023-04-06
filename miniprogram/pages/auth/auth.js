// pages/auth/auth.js
const app = getApp();
Page({
    /**
     * 组件的初始数据
     */
    data: {

    },
    onLoad(options){
        console.log(app.globalData.userInfo)
    },
    jumpToHome: function() {
        wx.getUserProfile({
          desc: '获取用户信息',
          success:(res)=>{
              console.log(res);
              app.globalData.userInfo=res.userInfo;

          },
          fail:(err)=>{
              console.log(err);
          }
        })
        wx.navigateTo({
            url:'../welcome/welcome',
        })
        // wx.redirectTo({
        //   url: '../home/home',
        // })
    }
    /**
     * 组件的方法列表
     */
    // methods: {

    // }
})
