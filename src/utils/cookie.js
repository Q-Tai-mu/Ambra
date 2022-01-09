/*
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2022-01-07 13:00:21
 * @LastEditTime: 2022-01-08 17:02:03
 * @LastEditors: MArio
 */
const { session } = require('electron').remote

const Cookie = {}

Cookie.getCookie = (url,DedeUserID, DedeUserID__ckMd5, SESSDATA, Expires, bili_jct) => {
    return new Promise(((resolve, reject) => {
        // 查询所有与设置的 URL 相关的所有 cookies.
        session.defaultSession.cookies.get({domain:".bilibili.com",url:url, DedeUserID: DedeUserID, DedeUserID__ckMd5: DedeUserID__ckMd5, SESSDATA: SESSDATA, Expires: Expires, bili_jct: bili_jct })
            .then((cookies) => {
                resolve(cookies)
            }).catch((error) => {
                reject(error)
            })
    }))

}

Cookie.setCookie = (url,DedeUserID, DedeUserID__ckMd5, SESSDATA, Expires, bili_jct) => {
    const cookie = {domain:".bilibili.com",url:url, DedeUserID: DedeUserID, DedeUserID__ckMd5: DedeUserID__ckMd5, SESSDATA: SESSDATA, Expires: Expires, bili_jct: bili_jct }
    session.defaultSession.cookies.set(cookie).then((resp) => {
        console.log(resp);
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = Cookie