<template>
    <div id="WatchIstory">
        <div class="ynamic-TitleCard">
            <div class="dailyNewZhuanLan">观看历史</div>
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
        <div ref="watchlstroyx" class="dailyNewDropdownColumn Neworldscro"  @scroll="handleScroll($event)">
            <div
                    class="dailyNewColumnCard" v-for="item in dataCard" :key="item.key">
                <div
                        class="dailyNewColumnCardLeft"

                >
                    <img class="dailyNewColumnCardLeftImg"
                         :src="item.cover"/>
                </div>
                <div class="dailyNewColumnCardRight">
                    <div class="dailyDurationOn1">
                  <span
                          class="dailyNewColumnCardRightTitle"

                  >
                   {{item.title}}
                  </span>
                    </div>
                    <!--                    <div-->
                    <!--                            v-if="item2.cover_right_content_description != null"-->
                    <!--                            class="dailyDuration"-->
                    <!--                    >-->
                    <!--                        {{ item2.cover_right_content_description }}-->
                    <!--                    </div>-->
                    <!--                    <div v-else></div>-->
                    <div class="dailyUp">
                        {{item.author_name}}
                        <svg
                                t="1639373083928"
                                class="icon"
                                viewBox="0 0 1024 1024"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                p-id="4329"
                                width="13"
                                height="13"
                        >
                            <path
                                    d="M800 128H224C134.4 128 64 198.4 64 288v448c0 89.6 70.4 160 160 160h576c89.6 0 160-70.4 160-160V288c0-89.6-70.4-160-160-160z m96 608c0 54.4-41.6 96-96 96H224c-54.4 0-96-41.6-96-96V288c0-54.4 41.6-96 96-96h576c54.4 0 96 41.6 96 96v448z"
                                    p-id="4330"
                                    fill="#bfbfbf"
                            ></path>
                            <path
                                    d="M419.2 544c0 51.2-3.2 108.8-83.2 108.8S252.8 595.2 252.8 544v-217.6H192v243.2c0 96 51.2 140.8 140.8 140.8 89.6 0 147.2-48 147.2-144v-240h-60.8V544zM710.4 326.4h-156.8V704h60.8v-147.2h96c102.4 0 121.6-67.2 121.6-115.2 0-44.8-19.2-115.2-121.6-115.2z m-3.2 179.2h-92.8V384h92.8c32 0 60.8 12.8 60.8 60.8 0 44.8-32 60.8-60.8 60.8z"
                                    p-id="4331"
                                    fill="#bfbfbf"
                            ></path>
                        </svg>
                    </div>
                    <div class="dailyFooter">
                        <div class="dailyFooterLeft">
                            <svg t="1642335070246" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="2139" width="10" height="10">
                                <path d="M844.8 0H198.4c-70.4 0-128 57.6-128 128v896H128l121.6-89.6c6.4-6.4 19.2-6.4 25.6 0L384 1011.2c6.4 6.4 19.2 6.4 25.6 0l108.8-76.8c6.4-6.4 19.2-6.4 25.6 0l108.8 76.8c6.4 6.4 19.2 6.4 25.6 0l108.8-76.8c6.4-6.4 19.2-6.4 25.6 0l121.6 89.6h57.6V128c-19.2-70.4-76.8-128-147.2-128z m-192 499.2l25.6 140.8c0 19.2-12.8 32-25.6 19.2l-121.6-64H512l-121.6 64c-12.8 6.4-32-6.4-25.6-19.2l25.6-128c0-6.4 0-12.8-6.4-19.2L281.6 396.8c-12.8-12.8-6.4-32 12.8-32l134.4-19.2c6.4 0 12.8-6.4 12.8-12.8l57.6-121.6c6.4-12.8 25.6-12.8 38.4 0l57.6 121.6c0 6.4 6.4 12.8 12.8 12.8l134.4 19.2c19.2 0 25.6 25.6 12.8 32l-102.4 102.4z"
                                      fill="#040000" p-id="2140"></path>
                            </svg>
                            {{item.tag_name}}
                        </div>
                        <!--                        <div class="dailyFooterRight">-->
                        <!--                            <svg-->
                        <!--                                    t="1639372596689"-->
                        <!--                                    class="icon"-->
                        <!--                                    viewBox="0 0 1024 1024"-->
                        <!--                                    version="1.1"-->
                        <!--                                    xmlns="http://www.w3.org/2000/svg"-->
                        <!--                                    p-id="3414"-->
                        <!--                                    width="10"-->
                        <!--                                    height="10"-->
                        <!--                            >-->
                        <!--                                <path-->
                        <!--                                        d="M850.879104 96.41591l-676.303067 0c-60.681034 0-110.049418 49.367361-110.049418 110.049418l0 446.200388c0 60.681034 49.367361 110.049418 110.049418 110.049418l90.307795 0L396.936381 931.129846c3.793396 4.838192 9.598612 7.66354 15.746636 7.66354s11.952216-2.825348 15.746636-7.66354l132.052548-168.414711 290.396903 0c60.681034 0 110.049418-49.367361 110.049418-110.049418L960.928522 206.465329C960.928522 145.784294 911.561162 96.41591 850.879104 96.41591zM920.91111 652.665717c0 38.614459-31.416524 70.030983-70.030983 70.030983L550.744419 722.6967c-6.147 0-11.952216 2.825348-15.745612 7.66354L412.683017 886.356107l-122.31579-155.995867c-3.792373-4.838192-9.597589-7.66354-15.745612-7.66354l-100.045577 0c-38.614459 0-70.030983-31.416524-70.030983-70.030983L104.545054 206.465329c0-38.614459 31.416524-70.030983 70.030983-70.030983l676.303067 0c38.614459 0 70.030983 31.416524 70.030983 70.030983L920.910087 652.665717z"-->
                        <!--                                        p-id="3415"-->
                        <!--                                        fill="#cdcdcd"-->
                        <!--                                ></path>-->
                        <!--                                <path-->
                        <!--                                        d="M272.621051 344.526731c-44.132126 0-80.035848 35.903721-80.035848 80.035848 0 44.132126 35.903721 80.036871 80.035848 80.036871s80.035848-35.904745 80.035848-80.036871C352.655875 380.430452 316.752154 344.526731 272.621051 344.526731zM272.621051 464.582037c-22.065552 0-40.017412-17.951861-40.017412-40.018436 0-22.065552 17.952884-40.017412 40.017412-40.017412 22.065552 0 40.017412 17.951861 40.017412 40.017412C312.638463 446.629153 294.686602 464.582037 272.621051 464.582037z"-->
                        <!--                                        p-id="3416"-->
                        <!--                                        fill="#cdcdcd"-->
                        <!--                                ></path>-->
                        <!--                                <path-->
                        <!--                                        d="M512.727571 344.526731c-44.132126 0-80.035848 35.903721-80.035848 80.035848 0 44.132126 35.903721 80.036871 80.035848 80.036871 44.132126 0 80.035848-35.904745 80.035848-80.036871C592.763418 380.430452 556.859697 344.526731 512.727571 344.526731zM512.727571 464.582037c-22.065552 0-40.017412-17.951861-40.017412-40.018436 0-22.065552 17.951861-40.017412 40.017412-40.017412 22.065552 0 40.017412 17.951861 40.017412 40.017412C552.746006 446.629153 534.793122 464.582037 512.727571 464.582037z"-->
                        <!--                                        p-id="3417"-->
                        <!--                                        fill="#cdcdcd"-->
                        <!--                                ></path>-->
                        <!--                                <path-->
                        <!--                                        d="M752.836137 344.526731c-44.131103 0-80.035848 35.903721-80.035848 80.035848 0 44.132126 35.904745 80.036871 80.035848 80.036871s80.035848-35.904745 80.035848-80.036871C832.871985 380.430452 796.96724 344.526731 752.836137 344.526731zM752.836137 464.582037c-22.066575 0-40.017412-17.951861-40.017412-40.018436 0-22.065552 17.951861-40.017412 40.017412-40.017412s40.017412 17.951861 40.017412 40.017412C792.853549 446.629153 774.902712 464.582037 752.836137 464.582037z"-->
                        <!--                                        p-id="3418"-->
                        <!--                                        fill="#cdcdcd"-->
                        <!--                                ></path>-->
                        <!--                            </svg>-->
                        <!--                        2-->
                        <!--                        </div>-->
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import axios from "axios"

    export default {
        name: "WatchIstory",
        data() {
            return {
                dataCard: [],
                max: "",
                view_at: ""
            }
        },
        created() {
            this.doInit();
        },
        methods: {
            doInit() {
                this.$Loading.start();
                axios.get("https://api.bilibili.com/x/web-interface/history/cursor?max=0&view_at=0&business=").then((resp) => {
                        console.log("历史记录");
                        console.log(resp.data);
                        this.dataCard = resp.data["data"]["list"];
                        this.view_at = resp.data["data"]["cursor"]["view_at"];
                        this.max = resp.data["data"]["cursor"]["view_at"];
                        //https://api.bilibili.com/x/web-interface/history/cursor?max=893088615&view_at=1642332220&business=archive
                    this.$Message.success("刷新历史记录成功!");
                    this.$Loading.finish();
                    }
                ).catch((err) => {
                    this.$Message.error("历史记录参数加载异常");
                    console.log(err);
                    this.$Loading.finish();
                });
            },
            handleScroll(e) {
                if (
                    parseInt(e.srcElement.scrollTop) +
                    parseInt(e.srcElement.offsetHeight) >=
                    parseInt(e.srcElement.scrollHeight.toString()) - 1
                ) {

                    this.$refs.watchlstroyx.scrollTop = e.srcElement.scrollTop - 200;
                    this.lazyloading();
                }
            },
            lazyloading() {
                this.$Loading.start();
                axios.get("https://api.bilibili.com/x/web-interface/history/cursor?max=" + this.max + "&view_at=" + this.view_at + "&business=archive").then((resp) => {
                        console.log(resp.data);
                        var dataCards = resp.data["data"]["list"];
                        for(var i=0;i<dataCards.length;i++) {
                            this.dataCard.push(dataCards[i]);
                        }
                        this.view_at = resp.data["data"]["cursor"]["view_at"];
                        this.max = resp.data["data"]["cursor"]["view_at"];
                        this.$Message.success("刷新动态成功!");
                        this.$Loading.finish();
                    }
                ).catch((err) => {
                    this.$Message.error("历史记录参数加载异常");
                    console.log(err);
                    this.$Loading.finish();
                });
            }
        }
    }
</script>

<style scoped>
    #WatchIstory {
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