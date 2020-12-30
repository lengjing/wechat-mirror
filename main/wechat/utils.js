const fetch = require('isomorphic-fetch');

const uuidR = /(?:uuid)\s*=\s*"([^"]+)"/;
exports.getUUID = async function getUUID() {
  const res = await fetch("https://login.wx.qq.com/jslogin?appid=wx782c26e4c19acffb&fun=new&lang=zh_CN");
  const text = await res.text();
  const matched = uuidR.exec(text);

  return matched ? matched[1] : null;
}