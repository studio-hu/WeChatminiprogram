// pages/enter/enter.js
import Toast from '@vant/weapp/toast/toast';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        fileList: [],
        // 法人姓名
        name: '',
        // 身份证号
        IdCard: '',
        nameError: false,
        IdCardError: false
    },
    // 法人姓名输入
    handlename(e) {
        console.log('e', e);
        let name = e.detail
        let reg_name = /^[\u4e00-\u9fa5]{2,4}$/
        let nameError = !reg_name.test(name)
        this.setData({
            name,
            nameError
        })
    },
    // 身份证号输入
    handleIdCard(e) {
        let IdCard = e.detail
        let reg_IdCard = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
        let IdCardError = !reg_IdCard.test(IdCard)
        this.setData({
            IdCard,
            IdCardError
        })
    },
    afterRead(event) {
        const {
            file
        } = event.detail;
        console.log('e', event);
        // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
        wx.uploadFile({
            url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
            filePath: file.url,
            name: 'file',
            formData: {
                user: 'test'
            },
            success(res) {
                // 上传完成需要更新 fileList
                const {
                    fileList = []
                } = this.data;
                fileList.push({
                    ...file,
                    url: res.data
                });
                this.setData({
                    fileList
                });
            },
        });
    },
    // 下一步处理函数
    nextStep() {
        let {
            name,
            IdCard,
            nameError,
            errorMessage
        } = this.data
        if (name === '') {
            Toast.fail('法人姓名不能为空！');
            return;
        }
        if (IdCard === '') {
            Toast.fail('身份证号码不能为空！');
            return;
        }
        if (nameError) {
            Toast.fail('法人姓名格式不正确！');
            return;
        }
        if (errorMessage) {
            Toast.fail('身份证号码格式不正确！');
            return;
        }

        wx.navigateTo({
            url: '../companyQualification/companyQualification',
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