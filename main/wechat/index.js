const EventEmitter = require('events');
const fetch = require('isomorphic-fetch');
const Contact = require('./contact');
const Room = require('./room');

/**
 * const wc = new WC({name: 'wc'});
 * await wc.login();
 * wc.findContact('wcId')
 * wc.find()
 *  .send('')
 * wc.on('message', ({room, message: {message, type}, from})=>{
 *   
 * })
 * 
 * Room.create('')
 * wc.Room.find('').send('')
 * wc.Contact.find('').send('')
 * 
 * wc.Room
 * 
 * Contact, Message
 * 
 * wc.on('message', (Message)=>{})
 * wc.on('login')
 * wc.on('logout')
 * wc.contacts.find()
 */

const LOGINED = 'LOGINED';
const LOGOUT = 'LOGOUT';
const NOT_LOGINED = 'NOT_LOGINED';

class WeChat extends EventEmitter {
  static LOGINED = LOGINED;
  static LOGOUT = LOGOUT;
  static NOT_LOGINED = NOT_LOGINED;

  constructor(opts = {}) {
    super();
    this.status = NOT_LOGINED;
    this.Room = Room;
    this.Contact = Contact;
    this.rooms = [];
    this.contacts = [];
    this.user = {};
    //
    this.qrcode = null;
    this.qrcodeUrl = null;
  }
  async init() {
    await this.getQrcodeUrl();
    this.checkLogin();
  }
  async getContacts() {

  }
  async getRooms() {

  }
  // async login() {
  //   this.loggingStatus = LOGINED;
  //   this.emit('login');
  // }
  // async logout() {
  //   this.emit('logout');
  // }
  async getQrcodeUrl() {
    const uuid = this.qrcode = await this.getUUID();
    const qrcodeUrl = this.qrcodeUrl = 'https://login.weixin.qq.com/qrcode/' + uuid;

    return qrcodeUrl;
  }
  async getUUID() {
    const uuidR = /(?:uuid)\s*=\s*"([^"]+)"/;
    const res = await fetch("https://login.wx.qq.com/jslogin?appid=wx782c26e4c19acffb&fun=new&lang=zh_CN");
    const text = await res.text();
    const matched = uuidR.exec(text);

    return matched ? matched[1] : null;
  }
  checkLogin() {

  }
}

module.exports = WeChat;
