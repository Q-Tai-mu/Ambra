<template>
    <div id="dynamic">
        <div class="ynamic-TitleCard">
            <div class="dailyNewZhuanLan">动态</div>
            <div class="dailyNewShuaXin" @click="doInit()">
                <div class="dailyNewShuaXinIcon">
                    <div class="ech-rotate360">
                        <svg
                                t="1634446435296"
                                class="icon"
                                viewBox="0 0 1024 1024"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                p-id="25063"
                                width="16"
                                height="16"
                        >
                            <path
                                    d="M274.3 758.2l179.4 138.6c37.6 29 92.1 2.3 92.1-45.2v-38.4c161.1-1.1 291.6-136.3 291.6-303.7 0-36.5-6.1-68.9-16.2-101.3-40.5 117.5-147.8 202.5-275.4 202.5v-36.4c0-47.5-54.5-74.2-92.1-45.2L274.3 667.8c-29.6 22.8-29.6 67.5 0 90.4z"
                                    fill="#2867CE"
                                    p-id="25064"
                            ></path>
                            <path
                                    d="M753.7 268.2L574.3 129.6c-37.6-29-92.1-2.3-92.1 45.2v38.4c-161.1 1.1-291.6 136.3-291.6 303.7 0 36.5 6.1 68.9 16.2 101.3 40.5-117.5 147.8-202.5 275.4-202.5v36.4c0 47.5 54.5 74.2 92.1 45.2l179.4-138.7c29.6-22.8 29.6-67.5 0-90.4z"
                                    fill="#2867CE"
                                    p-id="25065"
                            ></path>
                            <path
                                    d="M483.3 462.8V164c-0.6 3.5-1 7-1 10.8v38.4c-161.1 1.1-291.6 136.3-291.6 303.7 0 36.5 6.1 68.9 16.2 101.3 40.5-117.5 147.8-202.5 275.4-202.5v36.4c0 3.7 0.3 7.3 1 10.7zM545.8 610.8v-36.4c0-3.7-0.4-7.3-1-10.8v298.9c0.6-3.5 1-7 1-10.8v-38.4c161.1-1.1 291.6-136.3 291.6-303.7 0-36.5-6.1-68.9-16.2-101.3-40.5 117.4-147.9 202.5-275.4 202.5z"
                                    fill="#BDD2EF"
                                    p-id="25066"
                            ></path>
                        </svg>
                    </div>
                </div>
                <div class="dailyNewShuaXinText">刷新</div>
            </div>
        </div>
        <div ref="dynamicx"
             class="dynamicModel dynamicscro" @scroll="handleScroll($event)">
            <div class="dynamic-card" v-for="item in dynamicData" :key="item.key">
                <div class="dynamic-title">
                    <div class="dynamic-title-userIcon">
                        <img class="dynamic-img"
                             :src="item.card.owner.face"/>
                    </div>
                    <div class="dynamic-title-userTxt">
                        <div>
                            <span class="dynamic-title-txt-1">{{item.card.owner.name}}</span>
                        </div>
                        <div>
                            <span class="dynamic-title-txt-2">{{item.card.ctime}}号.投稿了视频</span>
                        </div>
                    </div>
                    <div class="dynamic-title-bottom">
                        <svg t="1641800090014" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="2223" width="16" height="16">
                            <path d="M298.666667 586.666667a74.666667 74.666667 0 1 1 0-149.333334 74.666667 74.666667 0 0 1 0 149.333334z m213.333333 0a74.666667 74.666667 0 1 1 0-149.333334 74.666667 74.666667 0 0 1 0 149.333334z m213.333333 0a74.666667 74.666667 0 1 1 0-149.333334 74.666667 74.666667 0 0 1 0 149.333334z"
                                  p-id="2224"></path>
                        </svg>
                    </div>
                </div>
                <div class="dynamic-alias NeworldEcro">
                    {{item.card.dynamic}}
                </div>
                <div class="dynamic-core-Img-div">
                    <img class="dynamic-core-img"
                         :src="item.card.pic"/>
                    <div class="dynamic-core-time">{{item.card.duration}}</div>
                    <div class="dynamic-core-play">
                        <div class="dynamic-core-play-div">
                            <svg t="1641801601778" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="3125" width="18" height="18">
                                <path d="M224 938.713333a53.58 53.58 0 0 1-53.333333-53.433333V138.72a53.333333 53.333333 0 0 1 80.886666-45.666667l618.666667 373.28a53.333333 53.333333 0 0 1 0 91.333334l-618.666667 373.28a53.16 53.16 0 0 1-27.553333 7.766666z m0.046667-810.666666a10.98 10.98 0 0 0-5.333334 1.42 10.466667 10.466667 0 0 0-5.38 9.253333v746.56a10.666667 10.666667 0 0 0 16.18 9.133333l618.666667-373.28a10.666667 10.666667 0 0 0 0-18.266666l-618.666667-373.28a10.386667 10.386667 0 0 0-5.446666-1.586667z"
                                      fill="#5C5C66" p-id="3126"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="dynamic-alias2 NeworldEcro">
                    {{item.card.title}}
                </div>
                <div class="dynamic-summary">
                    <div class="dynamic-summary-ic-play">
                        <div class="dynamic-ic-1">
                            <svg t="1641803491059" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="3330" width="10" height="10">
                                <path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z"
                                      p-id="3331"></path>
                                <path d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z"
                                      p-id="3332"></path>
                            </svg>
                        </div>
                        <div class="dynamic-ic-2">{{item.card.stat.view}}</div>
                    </div>
                    <div class="dynamic-summary-ic-play">
                        <div class="dynamic-ic-1">
                            <svg t="1641803952641" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="4501" width="10" height="10">
                                <path d="M800 128H224C134.4 128 64 198.4 64 288v448c0 89.6 70.4 160 160 160h576c89.6 0 160-70.4 160-160V288c0-89.6-70.4-160-160-160z m96 608c0 54.4-41.6 96-96 96H224c-54.4 0-96-41.6-96-96V288c0-54.4 41.6-96 96-96h576c54.4 0 96 41.6 96 96v448z"
                                      p-id="4502" data-spm-anchor-id="a313x.7781069.0.i15" class="selected"
                                      fill="#1296db"></path>
                                <path d="M240 384h64v64h-64zM368 384h384v64h-384zM432 576h352v64h-352zM304 576h64v64h-64z"
                                      p-id="4503"></path>
                            </svg>
                        </div>
                        <div class="dynamic-ic-2">{{item.card.stat.danmaku}}</div>
                    </div>
                </div>
                <div class="dynamic-card-footer">
                    <div class="dynamic-card-footer-likes">
                        <div class="dynamic-card-footer-likes-left1">
                            <svg t="1641804344832" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="5573" width="16" height="16">
                                <path d="M779.2 881.6h-44.8c-17.6 0-32-14.4-32-32s14.4-32 32-32h44.8c4.8 0 51.2-1.6 62.4-28.8 14.4-36.8 72-264 92.8-347.2 3.2-12.8 11.2-49.6 0-62.4-4.8-4.8-14.4-6.4-20.8-6.4H649.6c-17.6 0-32-14.4-32-32s14.4-32 32-32H912c38.4 0 60.8 16 70.4 30.4 30.4 36.8 17.6 91.2 12.8 116.8v1.6c-8 32-76.8 307.2-94.4 355.2-19.2 51.2-76.8 68.8-121.6 68.8z"
                                      fill="#43484D" p-id="5574"></path>
                                <path d="M331.2 480c-12.8 0-24-8-30.4-20.8-6.4-16 1.6-35.2 17.6-41.6 24-9.6 44.8-27.2 57.6-49.6l8-14.4c35.2-62.4 57.6-134.4 67.2-214.4 1.6-11.2 4.8-20.8 6.4-27.2 9.6-27.2 46.4-56 92.8-59.2 30.4-1.6 86.4 8 126.4 92.8 64 136 0 212.8-3.2 216-11.2 12.8-32 14.4-44.8 3.2-12.8-11.2-14.4-32-3.2-44.8 1.6-1.6 38.4-51.2-6.4-147.2-11.2-24-32-54.4-60.8-56-20.8-1.6-36.8 11.2-40 17.6 0 0-1.6 4.8-1.6 14.4-9.6 88-35.2 168-75.2 238.4l-8 12.8c-19.2 35.2-51.2 64-89.6 78.4-4.8 1.6-8 1.6-12.8 1.6zM777.6 881.6H500.8c-20.8 0-40-3.2-59.2-11.2-52.8-19.2-128-48-128-48l22.4-59.2 128 48c11.2 4.8 24 6.4 36.8 6.4h276.8c17.6 0 32 14.4 32 32s-14.4 32-32 32z"
                                      fill="#43484D" p-id="5575"></path>
                                <path d="M294.4 902.4H97.6c-30.4 0-54.4-25.6-54.4-56V393.6c0-27.2 20.8-65.6 54.4-65.6h196.8c20.8 0 46.4 17.6 46.4 65.6v452.8c0 41.6-24 56-46.4 56z m-187.2-64h169.6V393.6v-1.6H107.2V838.4z"
                                      fill="#229BFF" p-id="5576"></path>
                            </svg>
                        </div>
                        <div class="dynamic-card-footer-likes-left2">
                            {{item.card.stat.like}}
                        </div>
                    </div>
                    <div class="dynamic-card-footer-likes">
                        <div class="dynamic-card-footer-likes-left1">
                            <svg t="1641804559442" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="6493" width="16" height="16">
                                <path d="M512 870.4C267.946667 870.4 68.266667 709.973333 68.266667 512S267.946667 153.6 512 153.6s443.733333 160.426667 443.733333 358.4c0 54.613333-17.066667 109.226667-47.786666 160.426667l34.133333 51.2c15.36 23.893333 15.36 54.613333 0 78.506666-15.36 23.893333-40.96 35.84-68.266667 30.72l-117.76-22.186666C686.08 849.92 600.746667 870.4 512 870.4z m0-648.533333C305.493333 221.866667 136.533333 351.573333 136.533333 512s168.96 290.133333 375.466667 290.133333c80.213333 0 160.426667-20.48 221.866667-56.32l10.24-6.826666 141.653333 25.6s1.706667-1.706667 0-3.413334l-61.44-88.746666 13.653333-18.773334C870.4 607.573333 887.466667 559.786667 887.466667 512c0-160.426667-168.96-290.133333-375.466667-290.133333z"
                                      fill="#3793DF" p-id="6494"></path>
                                <path d="M358.4 529.066667c-29.013333 0-51.2-23.893333-51.2-52.906667s22.186667-52.906667 51.2-52.906667 51.2 23.893333 51.2 52.906667-22.186667 52.906667-51.2 52.906667z m0-68.266667c-10.24 0-17.066667 6.826667-17.066667 15.36s6.826667 15.36 17.066667 15.36 17.066667-6.826667 17.066667-15.36-6.826667-15.36-17.066667-15.36zM648.533333 529.066667c-29.013333 0-51.2-23.893333-51.2-52.906667s22.186667-52.906667 51.2-52.906667 51.2 23.893333 51.2 52.906667-22.186667 52.906667-51.2 52.906667z m0-68.266667c-10.24 0-17.066667 6.826667-17.066666 15.36s6.826667 15.36 17.066666 15.36 17.066667-6.826667 17.066667-15.36-6.826667-15.36-17.066667-15.36z"
                                      fill="#EB4AF4" p-id="6495"></path>
                            </svg>
                        </div>
                        <div class="dynamic-card-footer-likes-left2">
                            {{item.card.stat.reply}}
                        </div>
                    </div>
                    <div class="dynamic-card-footer-likes-right1">
                        <svg t="1641804728673" class="icon" viewBox="0 0 1024 1024" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" p-id="7409" width="12" height="12">
                            <path d="M972.80005 549.914v294.758a128.077 128.077 0 0 1-128 128.128H179.20005a128 128 0 0 1-128-128V179.2c0-70.733 57.19-128 127.872-128h202.317a25.6 25.6 0 0 0 0-51.2H179.07205A179.072 179.072 0 0 0 0.00005 179.2v665.6A179.2 179.2 0 0 0 179.20005 1024h665.6c98.944 0 179.2-80.282 179.2-179.328V549.914a25.6 25.6 0 0 0-51.2 0z"
                                  fill="" p-id="7410"></path>
                            <path d="M960.00005 128c-353.46 0-640 286.54-640 640a25.6 25.6 0 0 0 51.2 0c0-325.197 263.603-588.8 588.8-588.8a25.6 25.6 0 0 0 0-51.2z"
                                  fill="" p-id="7411"></path>
                            <path d="M720.10205 62.157l256 102.4a25.6 25.6 0 0 0 18.996-47.514l-256-102.4a25.6 25.6 0 0 0-18.996 47.514z"
                                  fill="" p-id="7412"></path>
                            <path d="M808.80605 348.467l194.637-189.312a25.6 25.6 0 1 0-35.686-36.71L773.12005 311.757a25.6 25.6 0 1 0 35.686 36.71z"
                                  fill="" p-id="7413"></path>
                        </svg>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import axios from "axios";

    const {session} = require("electron").remote;
    // 做一个弹出，创建时，读取下json文件,如果没有则存储参数，反不需要填写，再判断下cookies，有就发送请求获得动态
    export default {
        name: "dynamic",
        data() {
            return {
                uid: "",
                tab: "",
                dynamicData: [],
                offset_dynamic_id: ""
            }
        },
        watch: {
            uid(newValue, oldValue) {
                //变量改变时，除非查找tab=参数
                console.log(newValue);
                console.log(oldValue);
                axios
                    .get("/dynamic.json")
                    .then((resp) => {
                        this.tab = resp.data['tab'];
                        //参数控制应用是否是第一次在电脑上启用动态，是就弹出窗口，否就直接查询
                    })
                    .catch((err) => {
                        this.$Message.error("dynamic配置文件加载异常");
                        console.log(err);
                    });
            },
            tab(newValue, oldValue) {
                console.log(newValue);
                console.log(oldValue);
                this.doInit();
            }
        },
        created() {
            const BiliCSRF = "DedeUserID";
            const domain = ".bilibili.com";
            //1.判断cookies有没有登录的信息
            session.defaultSession.cookies.get({name: BiliCSRF, domain})
                .then((cookies) => {
                    console.log("查询的cookies");
                    console.log(cookies);
                    if (cookies[0].value) {
                        //有cookies
                        this.uid = cookies[0].value;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        methods: {
            doInit() {
                this.$Loading.start();
                axios.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new?uid=" + this.uid + "5&type_list=" + this.tab + "&from=&platform=web").then((resp) => {
                    var allPs = new Array();
                    //下一页请求，需要使用到新参数 offset_dynamic_id = 【cards-> 最后一个card的->desc中的->dynamic_id_str 参数】
                    var all = resp.data["data"]["cards"];
                    var _this = this;
                    for (var i = 0; i < all.length; i++) {
                        var project = JSON.parse(all[i]["card"]);
                        project["ctime"] =
                            new Date(project["ctime"] * 1000).getUTCMonth() +
                            "-" +
                            new Date(project["ctime"] * 1000).getDate();
                        project["stat"]["view"] = this.toMoney(project["stat"]["view"]);
                        project["duration"] = this.formateTime(project["duration"]);
                        all[i]["card"] = project;
                        allPs.push(all[i]);
                    }
                    _this.offset_dynamic_id = all[all.length - 1]["desc"]["dynamic_id_str"];
                    this.dynamicData = allPs;
                    this.$Message.success("刷新动态成功!");
                    this.$Loading.finish();
                }).catch((err) => {
                    this.$Message.error("动态tab参数加载异常");
                    console.log(err);
                    this.$Loading.finish();
                });
            },
            toMoney(num) {
                if (num > 10000) {
                    let result = num / 10000;
                    result = Math.floor(result * 100) / 100;
                    var s_x = result.toString(); //将数字转换为字符串
                    var pos_decimal = s_x.indexOf("."); //小数点的索引值
                    // 当整数时，pos_decimal=-1 自动补0
                    if (pos_decimal < 0) {
                        pos_decimal = s_x.length;
                        s_x += ".";
                    }
                    // 当数字的长度< 小数点索引+2时，补0
                    while (s_x.length <= pos_decimal + 2) {
                        s_x += "0";
                    }
                    s_x += "万";
                } else {
                    s_x = num;
                }
                return s_x;
            },
            handleScroll(e) {
                if (
                    parseInt(e.srcElement.scrollTop) +
                    parseInt(e.srcElement.offsetHeight) >=
                    parseInt(e.srcElement.scrollHeight.toString()) - 1
                ) {
                    // this.$Message.info("刷新推荐~");
                    this.$refs.dynamicx.scrollTop = e.srcElement.scrollTop - 200;
                    this.lazyloading();
                }
            },
            lazyloading() {
                this.$Loading.start();
                axios.get("https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_history?uid=" + this.uid + "&offset_dynamic_id=" + this.offset_dynamic_id + "&type=8&from=&platform=web").then((resp) => {
                    // var allPs = new Array();
                    console.log(resp.data);
                    var all = resp.data["data"]["cards"];
                    var _this = this;
                    for (var i = 0; i < all.length; i++) {
                        var project = JSON.parse(all[i]["card"]);
                        project["ctime"] =
                            new Date(project["ctime"] * 1000).getUTCMonth() +
                            "-" +
                            new Date(project["ctime"] * 1000).getDate();
                        project["stat"]["view"] = this.toMoney(project["stat"]["view"]);
                        project["duration"] = this.formateTime(project["duration"]);
                        all[i]["card"] = project;
                        // allPs.push(all[i]);
                        this.dynamicData.push(all[i]);
                    }
                    _this.offset_dynamic_id = all[all.length - 1]["desc"]["dynamic_id_str"];
                    // for(var o=0;0<allPs.length;o++) {
                    //     _this.dynamicData.push(allPs[o]);
                    // }
                    this.$Message.success("刷新动态成功!");
                    this.$Loading.finish();
                }).catch((err) => {
                    this.$Message.error("动态tab参数加载异常");
                    console.log(err);
                    this.$Loading.finish();
                });
            },
            formateTime(time) {
                const h = parseInt(time / 3600)
                const minute = parseInt(time / 60 % 60)
                const second = Math.ceil(time % 60)

                const hours = h < 10 ? '0' + h : h
                const formatSecond = second > 59 ? 59 : second
                return `${hours > 0 ? `${hours}:` : ''}${minute < 10 ? '0' + minute : minute}:${formatSecond < 10 ? '0' + formatSecond : formatSecond}`
            }


        }
    }
</script>

<style scoped>
    .dynamic-card-footer-likes-right1 {
        float: right;

    }

    .dynamic-card-footer-likes-right1 :hover {
        background-color: #eaeaea;
        box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
        border-color: rgb(180, 26, 26);
        transition: all 0.2s ease-in-out;
    }

    .dynamic-card-footer-likes-left2 {
        float: left;
        font-size: 13px;
        color: #b7b7b7;
        padding-top: 1px;
        padding-left: 4.5px;
    }

    .dynamic-card-footer-likes-left2:hover {
        background-color: #eaeaea;
        box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
        border-color: rgb(180, 26, 26);
        transition: all 0.2s ease-in-out;
    }

    .dynamic-card-footer-likes-left1 {
        float: left;
        padding-top: 2px;
    }

    .dynamic-card-footer-likes-left1:hover {
        background-color: #eaeaea;
        box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
        border-color: rgb(180, 26, 26);
        transition: all 0.2s ease-in-out;
    }

    .dynamic-card-footer {
        padding-right: 12px;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 35px;
        left: 0;
        padding-left: 12px;

    }

    .dynamic-ic-2 {
        float: left;
        font-size: 13px;
        color: #b7b7b7;
        padding-top: 1px;
        padding-left: 4.5px;
    }

    .dynamic-ic-1 {
        float: left;

    }

    .dynamic-card-footer-likes {
        height: 20px;
        float: left;
        margin-right: 10px;
    }

    .dynamic-summary-ic-play {
        /*width: 15px;*/
        height: 20px;
        float: left;
        margin-right: 10px;
    }

    .dynamic-summary {
        width: 100%;
        height: 30px;
    }

    .dynamic-core-play-div {
        width: 45px;
        height: 45px;
        padding: 15px;
        border-radius: 45px;
        cursor: pointer;
    }

    .dynamic-core-play-div:hover {
        background-color: #eaeaea;
        box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
        border-color: rgb(180, 26, 26);
        transition: all 0.2s ease-in-out;
    }

    .dynamic-core-play {
        text-align: center;
        background-color: #fff;
        border-radius: 45px;
        width: 45px;
        height: 45px;
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.6;
    }

    .dynamic-core-time {
        position: absolute;
        bottom: 5px;
        left: 5px;
        width: 35px;
        height: 18px;
        border-radius: 3px;
        color: #fff;
        font-size: 12px;
        text-align: center;
        opacity: 0.8;
        background-color: #1d1b31;
    }

    .dynamic-core-img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        object-fit: cover;
        object-position: top;
    }

    .dynamic-core-Img-div {
        width: 100%;
        height: 185px;
        /*padding: 10px;*/
        position: relative;
    }

    .dynamic-alias2 {
        width: 100%;
        height: 30px;
        font-size: 11px;
        color: #2a2a2a;
        font-weight: bold;
        padding-top: 8px;
    }

    .dynamic-alias {
        width: 100%;
        height: 50px;
        font-size: 11px;
        color: #2a2a2a;
        font-weight: bold;
    }

    .dynamic-title-bottom {
        width: 30px;
        height: 20px;
        float: right;
        text-align: center;
        padding-top: 3px;
        box-shadow: none;
        cursor: pointer;
    }

    .dynamic-title-bottom:hover {
        background-color: #eaeaea;
        box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
        border-color: rgb(180, 26, 26);
        transition: all 0.2s ease-in-out;
    }

    .dynamic-title-txt-2 {
        font-size: 9px;
        color: #a5a5a5;
        font-weight: bold;
    }

    .dynamic-title-txt-1 {
        font-size: 14px;
        color: #2a2a2a;
        font-weight: bold;
    }

    .dynamic-title-userTxt {
        float: left;
        height: 35px;
        padding-left: 10px;
    }

    .dynamic-img {
        width: 100%;
        height: 100%;
        border-radius: 35px;
    }

    .dynamic-title-userIcon {
        width: 35px;
        height: 35px;
        border-radius: 35px;
        background-color: #dcdcdc;
        float: left;
        margin: 5px;
        margin-right: 0px;
    }

    .dynamic-title {
        width: 100%;
        height: 50px;

    }

    .ynamic-TitleCard {
        width: 100%;
        height: 50px;
    }

    .dynamic-card {
        width: 326.5px;
        height: 390px;
        background-color: #fdfdfd;
        border: 1px solid #e5e5e5;
        border-radius: 5px;
        margin: 2px;
        margin-right: 10px;
        padding: 10px;
        position: relative;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15);
        -webkit-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
        transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
    }

    .dynamic-card:hover {
        box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15);
        transform: translate(0, -5px);
        background-color: #f3f3f3;
        transition-delay: 0s !important;
    }

    .dynamicModel {
        width: 100%;
        height: 91.5%;
        /*display: flex;*/
        /*flex-wrap: wrap;*/
        /*display: grid;*/
        /*grid-template-columns: repeat(auto-fill,180px);*/
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .dynamicscro {
        /* height: 430px; */
        overflow-y: auto;
    }

    .dynamicscro::-webkit-scrollbar {
        /*滚动条整体样式*/
        width: 0px;
        /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }

    .dynamicscro::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
        background: #ebeef0;
    }

    .dynamicscro::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
        border-radius: 10px;
        background: #f1f6fa;
    }

    #dynamic {
        border-radius: 3px;
        width: 85%;
        height: 100%;
        background-color: #f9f9f9;
        border: 1px solid #e5e5e5;
        padding-left: 25px;
        padding-right: 25px;
        padding-top: 20px;
    }
</style>