'use strict';

const Controller = require('egg').Controller;
const axios = require('axios');

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }
  async getCode() {
    // console.log(this.ctx.query.code);
    // 获取code
    const code = this.ctx.query.code;
    console.log(code);
    // 用code请求获得access_token
    axios.get(`https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx21174deccc6b6c4b&secret=903087872adb2b41d2a4cea77a53446f&code=${code}&grant_type=authorization_code`).then(function(res) {
      // console.log(res.data);
      const refresh_token = res.data.refresh_token;
      // 刷新access_token
      axios.get(`https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=wx21174deccc6b6c4b&grant_type=refresh_token&refresh_token=${refresh_token}`).then(function(res) {
        // console.log(res.data);
        const access_token = res.data.access_token;
        const openid = res.data.openid;
        axios.get(`https://api.weixin.qq.com/sns/userinfo?access_token=${access_token}&openid=${openid}&lang=zh_CN`).then(function(res) {
          console.log(res.data);
        })
      })
    })
    this.ctx.body = 'ok';
  }
}

module.exports = HomeController;
