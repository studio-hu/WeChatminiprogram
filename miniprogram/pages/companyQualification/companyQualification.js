// pages/companyQualification/companyQualification.js
import {
    areaList
} from '@vant/area-data';
import Toast from '@vant/weapp/toast/toast';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        steps: [{
                text: '公司资质',
                // desc: '描述信息',
            },
            {
                text: '财务资质',
                // desc: '描述信息',
            },
            {
                text: '店铺信息',
                // desc: '描述信息',
            },
            {
                text: '合同签订',
                // desc: '描述信息',
            },
        ],
        // 店铺名称
        shopName: '',
        // 地区
        fieldValue: '',
        // 详细地址
        detailedAddress: '',
        // 联系人
        contactPerson: '',
        contactPersonError: false,
        // 电话号码
        phoneNumber: '',
        phoneNumberError: false,
        // 营业执照号
        businessLicenseNo: '',
        // 有效期起始
        dateStart: '',
        // 有效期结束
        dateEnd: '',
        // 地区选择弹出层
        show: false,
        // 地区选择数据
        areaList,
        // 有效期起始弹出层控制
        showCalendarStart: false,
        // 有效期结束弹出层控制
        showCalendarEnd: false,
    },
    // 信息填写
    onChange(e) {
        // console.log('e', e);
        let {
            type
        } = e.target.dataset
        let reg_phoneNumber = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/
        let reg_contactPerson = /^[\u4e00-\u9fa5]{2,4}$/
        switch (type) {
            case 'shopName':
                this.setData({
                    shopName: e.detail
                })
                break;
            case 'detailedAddress':
                this.setData({
                    detailedAddress: e.detail
                })
                break;
            case 'contactPerson':
                let contactPersonError = !reg_contactPerson.test(e.detail)
                this.setData({
                    contactPerson: e.detail,
                    contactPersonError
                })
                break;
            case 'phoneNumber':
                let phoneNumberError = !reg_phoneNumber.test(e.detail)
                this.setData({
                    phoneNumber: e.detail,
                    phoneNumberError
                })
                break;
            case 'businessLicenseNo':
                this.setData({
                    businessLicenseNo: e.detail
                })
                break;
        }
    },
    // 地区弹出层展示
    showPopup() {
        this.setData({
            show: true
        });
    },
    // 地区弹出层关闭
    onClose() {
        this.setData({
            show: false
        });
    },
    // 地区处理函数
    determine(e) {
        // console.log(e);
        const {
            values
        } = e.detail
        // console.log(values);
        let areaArray = []
        for (let i = 0; i < values.length; i++) {
            areaArray.push(values[i].name)
        }
        // console.log('new',areaArray);
        this.setData({
            fieldValue: areaArray.join('/'),
            show: false
        })

    },
    // 有效期起始弹出层展示
    onDisplayStart() {
        this.setData({
            showCalendarStart: true
        });
    },
    // 有效期结束弹出层展示
    onDisplayEnd() {
        this.setData({
            showCalendarEnd: true
        });
    },
    // 有效期开始弹出层关闭
    onCloseCalendarStart() {
        this.setData({
            showCalendarStart: false
        });
    },
    // 有效期结束弹出层关闭
    onCloseCalendarEnd() {
        this.setData({
            showCalendarEnd: false
        });
    },
    // 时间格式化函数
    formatDate(date) {
        date = new Date(date);
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
    // 有效期起始确认按钮处理函数
    onConfirmStart(event) {
        console.log('event', event);
        this.setData({
            showCalendarStart: false,
            dateStart: this.formatDate(event.detail),
        });
    },
    // 有效期结束确认按钮处理函数
    onConfirmEnd(event) {
        console.log('event', event);
        this.setData({
            showCalendarEnd: false,
            dateEnd: this.formatDate(event.detail),
        });
    },
    // 下一步处理函数
    nextStep() {
        let {
            shopName,
            fieldValue,
            detailedAddress,
            contactPerson,
            phoneNumber,
            businessLicenseNo,
            dateStart,
            dateEnd,
            contactPersonError,
            phoneNumberError,
        } = this.data
        if (shopName === '' || fieldValue === '' || detailedAddress === '' || contactPerson === '' || phoneNumber === '' || businessLicenseNo === '' || dateStart === '' || dateEnd === '') {
            Toast.fail('信息未填写完整！');
            return
        }
        if(contactPersonError){
            Toast.fail('联系人格式错误！');
            return
        }
        if(phoneNumberError){
            Toast.fail('电话号码格式错误！');
            return
        }
        wx.navigateTo({
            url: '../financialQualification/financialQualification',
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