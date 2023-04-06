// pages/testupload/testupload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList: [],
  },
  afterRead(event) {
    const {
      file
    } = event.detail;
    // console.log('file', file);
    let fileList = []
    fileList.push(...this.data.fileList, {
      url: file.url
    })
    this.setData({
      fileList
    })
  },
  submit() {
    let {
      fileList
    } = this.data
    // console.log('filelist',fileList);
    const uploadTasks = fileList.map((file, index) => this.uploadFilePromise(`test/my-photo${index}.png`, file));
    Promise.all(uploadTasks).then(res => {
      wx.showToast({
        title: '上传成功',
        icon: 'none'
      });
      console.log('res', res);
    }).catch(err => {
      console.log('err', err);
    })
  },
  uploadFilePromise(fileName, chooseResult) {
    return wx.cloud.uploadFile({
      cloudPath: fileName,
      filePath: chooseResult.url
    });
  },
  delete(event) {
    // console.log('e',event);
    const {
      file
    } = event.detail;
    console.log('e', file);
    const fileList = this.data.fileList.filter(item => item.url != file.url)
    this.setData({
      fileList
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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