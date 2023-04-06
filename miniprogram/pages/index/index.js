const app = getApp();
const db = wx.cloud.database();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        array: [],
        albumName:'',
        checked:false,
        state:"",
        show:false,
        showID:"",
        inputValue:"",
        label:[],
        obtnArry:[
        ],
    },
    bindKeyInput(e) {
        this.setData({
          albumName: e.detail.value
        })
    },

    dealTap:function(e){  
        let string = "obtnArry[" + e.target.dataset.index + "].selected";
        // const checkedicon = "obtnArry[" + e.target.dataset.index + "].selected"; 
        console.log(!this.data.obtnArry[e.target.dataset.index].selected);
        this.setData({
          [string]: !this.data.obtnArry[e.target.dataset.index].selected
        })
        let detailValue = this.data.obtnArry.filter(it => it.selected).map(it => it.name)
        this.setData({
          label: detailValue
        })
        console.log(this.data.label)
      },
      addinput(e){
        this.setData({ 
          show: true,
        });
      },
    //关闭弹出层，但是我这里有取消按钮，所以这个没用了
      //onClose() {
       // this.setData({ show: false });
     // },
     
    //实时获取输入框的值
      bindValue(e){
        this.setData({
          inputValue: e.detail.value
        })
      },
    //确定按钮，添加数组达到添加标签的作用
      onInputValue(){
        this.setData({ 
          show: false ,
          inputValue: this.data.inputValue
        });
        var obtnArry = this.data.obtnArry;
        console.log(this.data.inputValue)
        var newData = { num: obtnArry.length, name: this.data.inputValue, selected: false };
        obtnArry.push(newData);//实质是添加lists数组内容，使for循环多一次
        this.setData({
          obtnArry,
        })
        console.log(this.data.inputValue)
      },
    //取消按钮
    onCancel(){
        this.setData({ show: false });
    },

    oncollectAll(){
        wx.navigateTo({
          url: '../collectAll/collectAll'
        })
      },
    onfood(){
        wx.navigateTo({
          url: '../food/food'
        })
      },
    ondrink(){
        wx.navigateTo({
          url: '../drink/drink'
        })
      },
    onredpacket(){
        wx.navigateTo({
            url: '../redpacket/redpacket'
          })
    },
    onboard(){
        wx.navigateTo({
            url: '../board/board'
          })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            userInfo: app.globalData.userInfo
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})