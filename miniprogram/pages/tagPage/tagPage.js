// pages/tagPage/tagPage.js
import Toast from '@vant/weapp/toast/toast';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tag: [],
        home: '',
        school: '',
        company: '',
        oftenPlace: '',
        // 弹出层
        homeShow: false,
        schoolShow: false,
        companyShow: false,
        oftenPlaceShow: false,
        // 数据
        homeArray: ['1', '2', '3', '4', '5'],
        schoolArray: ['6', '7', '8', '9', '10'],
        companyArray: ['11', '12', '13', '14', '15'],
        oftenPlaceArray: ['16', '17', '18', '19', '20'],


    },
    showPopup(e) {
        // console.log('e', e);
        const {
            type
        } = e.target.dataset
        // console.log('type', type);
        switch (type) {
            case "home":
                this.setData({
                    homeShow: true
                });
                break;
            case "school":
                this.setData({
                    schoolShow: true
                });
                break;
            case "company":
                this.setData({
                    companyShow: true
                });
                break;
            case "oftenPlace":
                this.setData({
                    oftenPlaceShow: true
                });
                break;
        }

    },
    onClose() {
        this.setData({
            homeShow: false,
            schoolShow: false,
            companyShow: false,
            oftenPlaceShow: false
        });
    },
    onCancel() {
        this.setData({
            homeShow: false,
            schoolShow: false,
            companyShow: false,
            oftenPlaceShow: false
        });
    },
    onConfirm(e) {
        console.log('e', e);
        const {
            type
        } = e.target.dataset
        let currentValue = e.detail.value


        switch (type) {
            case "home":
                this.setData({
                    home: currentValue,
                    homeShow: false
                });

                break;
            case "school":
                this.setData({
                    school: currentValue,
                    schoolShow: false,
                });

                break;
            case "company":
                this.setData({
                    company: currentValue,
                    companyShow: false,
                });

                break;
            case "oftenPlace":
                this.setData({
                    oftenPlace: currentValue,
                    oftenPlaceShow: false,
                });

                break;
        }
        this.mergeTag()

    },
    mergeTag() {
        let {
            home,
            school,
            company,
            oftenPlace
        } = this.data
        let tag = [home, school, company, oftenPlace]
        tag = tag.filter(item => item.length > 0)
        console.log('tag', tag);
        this.setData({
            tag
        })
    },
    submit() {
        if (this.data.tag.length < 2) {
            Toast.fail('请至少选择两个标签');
        }
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