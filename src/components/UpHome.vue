<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-12-21 18:00:15
 * @LastEditTime: 2022-01-09 16:35:58
 * @LastEditors: MArio
-->
<template>
  <div id="UpHome">
    <div class="upHomeHeader">
      <img
        class="upHomeImg"
        src="https://i0.hdslb.com/bfs/space/265ecddc52d74e624dc38cf0cff13317085aedf7.png@2560w_400h_100q_1o.webp"
      />
      <div class="upHomeBottom">
        <div class="upHomeHeadPortrait">
          <img class="upHomeHeadPortraitImg" :src="upImg" />
        </div>
        <div class="upHomeHeadPortraitTitle">{{ upName }}</div>
        <div class="upHomeHeadFollow">关注</div>
      </div>
    </div>
    <div class="upHomeTab">
      <div class="n-tab-links">
        <div class="ypHomeTabHome" @click="toggleOptions('TabS1')">
          <div class="ypHomeTab-in">
            <div class="upHomeIcon">
              <svg
                t="1640757941161"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5300"
                width="22"
                height="22"
              >
                <path
                  d="M939.175079 484.343103 557.721321 107.755166c-1.927909-2.289136-5.950526-6.025227-11.568477-9.730619-10.06217-6.627954-20.757766-10.001795-31.783891-10.001795-11.855002 0-22.820752 3.40454-32.597419 10.092869-6.477528 4.458545-9.942443 8.465812-11.4334 10.454096L89.606831 484.373803c-6.522554 6.417153-10.107195 14.973016-10.107195 24.071232 0 9.06854 3.584642 17.624403 10.107195 24.041556 11.990079 11.900028 29.494755 8.495488 46.169529-7.92346l25.592888-25.306362 41.892109-40.08495 0 389.497968c0 48.143487 39.617299 87.308485 88.317465 87.308485l148.993382 0L440.572204 687.670975c0-19.160385 15.84692-34.736129 35.30918-34.736129l77.020164 0c19.47761 0 35.293831 15.575744 35.293831 34.736129l0 248.307296 149.008732 0c48.685839 0 88.332814-39.164998 88.332814-87.308485L825.536926 461.189777l67.484997 66.355267c11.508102 7.531534 21.842471 11.538801 30.217209 11.538801 6.236028 0 11.44875-2.169409 15.936971-6.598278 6.507204-6.417153 10.092869-14.94334 10.122545-24.041556C949.297624 499.346819 945.712983 490.789932 939.175079 484.343103z"
                  p-id="5301"
                  fill="#00c091"
                ></path>
              </svg>
            </div>
            主页
          </div>
          <div v-if="tabTable === 'TabS1'" class="ypHomeTab-en"></div>
          <div v-else class=""></div>
        </div>
        <div class="ypHomeTabHome" @click="toggleOptions('TabS2')">
          <div class="ypHomeTab-in">
            <div class="upHomeIcon">
              <svg
                t="1640759713162"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="8870"
                width="25"
                height="25"
              >
                <path
                  d="M880.4 436.9c23.9-23.9 10-64.8-23.5-69.2l-204.7-26.9c-13.3-1.7-24.9-9.9-31-21.9l-93.9-183.8c-15.4-30.1-58.6-29.5-73.1 1l-88.8 186.3c-5.8 12.1-17.1 20.6-30.4 22.7l-203.8 32.5c-33.4 5.3-46.2 46.6-21.6 69.8l149.8 142c9.7 9.2 14.3 22.7 12.2 35.9l-32.1 203.9c-5.3 33.4 30 58.3 59.7 42.2L480.5 773c11.8-6.4 26-6.6 37.9-0.5l184 93.5c30.1 15.3 64.7-10.6 58.6-43.8l-37.7-202.9c-2.4-13.2 1.8-26.7 11.2-36.2l145.9-146.2z"
                  p-id="8871"
                  fill="#fb7299"
                ></path>
                <path
                  d="M656.7 280.7c38.5 45.8 145.6 50 145.6 50 11.4-0.7 17-14.1 9.6-22.7l-45.4-52.6c-3-3.4-4-8.1-2.9-12.4l17.5-67.2c2.9-11-8.1-20.5-18.6-16.1l-64 27c-4.2 1.8-8.9 1.3-12.7-1.1L627.3 148c-9.6-6.1-22 1.4-21.1 12.7 0 0.1 7.9 69.3 50.5 120z"
                  p-id="8872"
                  fill="#fb7299"
                ></path>
              </svg>
            </div>
            动态
          </div>
          <div v-if="tabTable === 'TabS2'" class="ypHomeTab-en"></div>
          <div v-else class=""></div>
        </div>
        <div class="ypHomeTabHome" @click="toggleOptions('TabS3')">
          <div class="ypHomeTab-in">
            <div class="upHomeIcon">
              <svg
                t="1640759841302"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="11390"
                width="22"
                height="22"
              >
                <path
                  d="M737.28 80.65024a30.72 30.72 0 0 1 11.24352 41.96352L689.2544 225.28H839.68a122.88 122.88 0 0 1 122.88 122.88v491.52a122.88 122.88 0 0 1-122.88 122.88H184.32a122.88 122.88 0 0 1-122.88-122.88V348.16a122.88 122.88 0 0 1 122.88-122.88h150.40512l-59.24864-102.66624a30.72 30.72 0 1 1 53.20704-30.72L405.68832 225.28H618.2912l77.02528-133.38624A30.72 30.72 0 0 1 737.28 80.62976z"
                  fill="#02b5da"
                  p-id="11391"
                  data-spm-anchor-id="a313x.7781069.0.i55"
                  class="selected"
                ></path>
                <path
                  d="M450.68288 456.3968l163.6352 100.43392c19.6608 12.06272 26.39872 38.8096 15.07328 59.74016-3.66592 6.7584-8.94976 12.36992-15.33952 16.22016l-163.6352 98.79552c-19.72224 11.91936-44.76928 4.52608-55.95136-16.4864A45.9776 45.9776 0 0 1 389.12 693.51424v-199.20896c0-24.1664 18.39104-43.74528 41.0624-43.74528 7.20896 0 14.27456 2.00704 20.50048 5.8368z"
                  fill="#FFFFFF"
                  p-id="11392"
                ></path>
              </svg>
            </div>
            投稿
          </div>
          <div v-if="tabTable === 'TabS3'" class="ypHomeTab-en"></div>
          <div v-else class=""></div>
        </div>
      </div>
      <div class="n-statistics">
        <div class="n-data n-bf">
          <p class="n-data-k">关注数</p>
          <p id="n-bf" class="n-data-v">{{ StreamlineStatistics.follow }}</p>
        </div>
        <div class="n-data n-bf">
          <p class="n-data-k">粉丝数</p>
          <p id="n-bf" class="n-data-v">{{ StreamlineStatistics.fans }}</p>
        </div>
        <div class="n-data n-bf">
          <p class="n-data-k">获赞数</p>
          <p id="n-bf" class="n-data-v">{{ StreamlineStatistics.fabulous }}</p>
        </div>
        <div class="n-data n-bf">
          <p class="n-data-k">播放数</p>
          <p id="n-bf" class="n-data-v">{{ StreamlineStatistics.play }}</p>
        </div>
        <div class="n-data n-bf">
          <p class="n-data-k">阅读数</p>
          <p id="n-bf" class="n-data-v">{{ StreamlineStatistics.read }}</p>
        </div>
      </div>
    </div>
    <div class="upHomeNode" v-if="tabTable === 'TabS1'">
      <div class="upHomeModel">
        <div class="i-pin-part">
          <img data-v-3421314f="" :src="recommend.href" class="i-pin-cover" />
          <div class="upHome-pin-Right">
            <span class="i-pin-title">{{ recommend.title }}</span>
            <div class="upHomeSan">
              <div class="upHomePlay">
                <div class="upHomeIcon">
                  <svg
                    t="1640749384721"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2395"
                    width="12"
                    height="12"
                  >
                    <path
                      d="M938.666667 138.666667v746.666666a53.393333 53.393333 0 0 1-53.333334 53.333334H138.666667a53.393333 53.393333 0 0 1-53.333334-53.333334V138.666667a53.393333 53.393333 0 0 1 53.333334-53.333334h746.666666a53.393333 53.393333 0 0 1 53.333334 53.333334z m-230.12 342.173333l-266.666667-175.966667A37.333333 37.333333 0 0 0 384 336.033333V688a37.333333 37.333333 0 0 0 57.9 31.16l266.666667-176a37.333333 37.333333 0 0 0 0-62.32z"
                      fill="#5C5C66"
                      p-id="2396"
                    ></path>
                  </svg>
                </div>
                <span>{{ recommend.PlaybackVolume }}</span>
              </div>
              <div class="upHomeDeu">
                <div class="upHomeIcon">
                  <svg
                    t="1640753028873"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="3324"
                    width="12"
                    height="12"
                  >
                    <path
                      d="M861.2 59H164.8C75.6 59 3 131.6 3 220.9v416.9C3 727 75.6 799.6 164.8 799.6h201.5L527.2 965l162.2-165.5h171.8c89.2 0 161.8-72.6 161.8-161.8V220.9C1023 131.6 950.4 59 861.2 59z m132.4 578.7c0 73-59.4 132.4-132.4 132.4H677.1L527.4 922.9 378.8 770.1h-214c-73 0-132.4-59.4-132.4-132.4V220.9c0-73 59.4-132.4 132.4-132.4h696.3c73 0 132.4 59.4 132.4 132.4l0.1 416.8z"
                      fill="#333234"
                      p-id="3325"
                    ></path>
                    <path
                      d="M216.3 279.7h492.8v29.4H216.3v-29.4zM795.2 294.4c0 9.3 7.6 16.9 16.9 16.9 9.3 0 16.9-7.6 16.9-16.9 0-9.3-7.6-16.9-16.9-16.9-9.4 0-16.9 7.5-16.9 16.9zM216.3 425.6h492.8V455H216.3v-29.4z m595.8-2.2c-9.3 0-16.9 7.6-16.9 16.9s7.6 16.9 16.9 16.9c9.3 0 16.9-7.6 16.9-16.9s-7.5-16.9-16.9-16.9zM216.3 545.8h492.8v29.4H216.3v-29.4z m595.8-2.2c-9.3 0-16.9 7.6-16.9 16.9s7.6 16.9 16.9 16.9c9.3 0 16.9-7.6 16.9-16.9 0-9.4-7.5-16.9-16.9-16.9z"
                      fill="#333234"
                      p-id="3326"
                    ></path>
                  </svg>
                </div>
                <span>{{ recommend.bulletChat }}</span>
              </div>
              <div class="upHomDate">
                <div class="upHomeIcon">
                  <svg
                    t="1640753193965"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="4447"
                    width="12"
                    height="12"
                  >
                    <path
                      d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m191.2 604L488.8 544H480V256h64v246.4l191.2 110.4-32 55.2z"
                      p-id="4448"
                    ></path>
                  </svg>
                </div>
                <span>{{ recommend.date }}</span>
              </div>
            </div>
            <div class="i-info-roll NeworldEcro">
              <span class="i-pin-desc">{{ recommend.describe }}</span>
            </div>
          </div>
        </div>
        <div class="info-Line"></div>
        <div class="info-LieTab">
          <div class="info-left-Part">
            <div class="info-left-Eri">
              <span class="info-text-Bo">
                TA的视频
                <span class="count">{{ video }}</span>
              </span>
            </div>
            <div class="info-left-Eri">
              <span class="info-text-Tn"> 最新发布 </span>
              <div class="ypHomeTab-jm"></div>
            </div>
            <div class="info-left-Eri">
              <span class="info-text-Tn"> 最多播放 </span>
            </div>
            <div class="info-left-Eri">
              <span class="info-text-Tn"> 最多收藏 </span>
            </div>
          </div>
          <div class="info-right-Part">
            <div class="info-Bottom">
              <span class="info-bottom-text">更多</span>
              <div class="info-bottom-right">
                <svg
                  t="1640770651272"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="12339"
                  width="12"
                  height="12"
                >
                  <path
                    d="M658.56 557.392L322.536 221.384l45.248-45.256 336.016 336.008z"
                    p-id="12340"
                  ></path>
                  <path
                    d="M704.088 512.2L364.12 852.16l-45.256-45.248 339.976-339.976z"
                    p-id="12341"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="info-BottomLe">
              <div class="info-bottom-left">
                <svg
                  t="1640770931805"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="13290"
                  width="13"
                  height="13"
                >
                  <path
                    d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z"
                    fill="#3D3D3D"
                    p-id="13291"
                  ></path>
                </svg>
              </div>
              <span class="info-bottom-text">播放全部</span>
            </div>
          </div>
        </div>
        <div class="info-Body Neworldscro">
          <div
            class="info-boyTab-Card"
            v-for="item in DefaultHeaders"
            :key="item.id"
          >
            <div class="info-boy-Img-Card">
              <img class="img-card" :src="item.pic" />
            </div>
            <div class="info-boy-Text-Card">
              <span>{{ item.title }}</span>
            </div>
            <div class="upHomeSan-i">
              <div class="upHomePlay">
                <div class="upHomeIcon">
                  <svg
                    t="1640749384721"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2395"
                    width="12"
                    height="12"
                  >
                    <path
                      d="M938.666667 138.666667v746.666666a53.393333 53.393333 0 0 1-53.333334 53.333334H138.666667a53.393333 53.393333 0 0 1-53.333334-53.333334V138.666667a53.393333 53.393333 0 0 1 53.333334-53.333334h746.666666a53.393333 53.393333 0 0 1 53.333334 53.333334z m-230.12 342.173333l-266.666667-175.966667A37.333333 37.333333 0 0 0 384 336.033333V688a37.333333 37.333333 0 0 0 57.9 31.16l266.666667-176a37.333333 37.333333 0 0 0 0-62.32z"
                      fill="#5C5C66"
                      p-id="2396"
                    ></path>
                  </svg>
                </div>
                <span>{{ item.play }}</span>
              </div>
              <div class="upHomDate">
                <div class="upHomeIcon">
                  <svg
                    t="1640753193965"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="4447"
                    width="12"
                    height="12"
                  >
                    <path
                      d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m191.2 604L488.8 544H480V256h64v246.4l191.2 110.4-32 55.2z"
                      p-id="4448"
                    ></path>
                  </svg>
                </div>
                <span>{{ item.created }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="upHomeModelRight">
        <span class="auth-description">
          <a
            href="https://account.bilibili.com/account/official/home?spm_id_from=333.999.0.0"
            title="个人认证"
            target="_blank"
            class="auth-icon personal-auth"
          ></a>
          {{ authentication }}
        </span>
      </div>
      <div class="upHomeModelRight2">
        <span class="info-title">个人资料</span>
        <div class="info-Line"></div>
        <div class="info-personal">
          <div class="info-uid">
            <span class="info-command">UID</span>
            <span class="info-value">{{ uid }}</span>
          </div>
          <div class="info-birth">
            <span data-v-32ccf620="" class="info-command">生日</span>
            <span data-v-32ccf620="" class="info-value">{{ birthday }}</span>
          </div>
        </div>
      </div>
      <div class="upHomeModelRight3">
        <span class="info-title">公告</span>
        <div class="info-Line"></div>
        <div id="i-ann-display" class="i-ann-content NeworldEcro">
          {{ Notice }}
        </div>
      </div>
    </div>
    <div class="upHomeNode" v-if="tabTable === 'TabS2'">
      <div class="upHomeDynamic NeworldEcro">
        <div
          class="upHomeModelDynamic"
          v-for="item in dynamicData"
          :key="item.id"
        >
          <div class="ypHomeModelDynamicTitle" v-if="item.card.state == 'on'">
            <div class="yp-home-title-Left-card">
              <img class="yp-home-title-Left-card-Img" :src="upImg" />
            </div>
            <div class="yp-home-title-Right-card">
              <div>
                <span class="hom-title-right-text">{{ upName }}</span>
              </div>
              <div>
                <span
                  class="hom-title-right-value"
                  v-if="item.card.state == 'on'"
                  >{{ item.card.ctime }}</span
                >
                <span
                  class="hom-title-right-value"
                  v-if="item.card.state == 'off'"
                >
                  {{ item.card.item.timeStart }}
                </span>
                <span
                  class="hom-title-right-value"
                  v-if="item.card.state == 'onDub'"
                >
                  {{ item.card.item.origin.ctime }}
                </span>
              </div>
            </div>
          </div>
          <div class="yp-aid-Template" v-if="item.card.state == 'on'">
            <div class="yp-aid-tile-card NeworldEcro">
              <span class="yp-span" v-if="item.card.state == 'on'">{{
                item.card.dynamic
              }}</span>
            </div>
            <div class="yp-img">
              <img
                class="yp-img-in"
                v-if="item.card.state == 'on'"
                :src="item.card.pic"
              />
            </div>
            <div class="yp-details">
              <div class="yp-title-details-div NeworldEcro">
                <span class="yp-details-title">{{ item.card.title }}</span>
              </div>
              <div class="yp-title-details-div NeworldEcro">
                <span class="yp-details-text">{{ item.card.desc }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="upHomeModelRight2">
        <span class="info-title">个人资料</span>
        <div class="info-Line"></div>
        <div class="info-personal">
          <div class="info-uid">
            <span class="info-command">UID</span>
            <span class="info-value">{{ uid }}</span>
          </div>
          <div class="info-birth">
            <span data-v-32ccf620="" class="info-command">生日</span>
            <span data-v-32ccf620="" class="info-value">{{ birthday }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="upHomeNode" v-if="tabTable === 'TabS3'">
      <div class="upHomeDynamicHomeMore"></div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import axios from "axios";
const fs = require("fs");
export default {
  name: "UpHome",
  data() {
    return {
      dynamicData: [],
      dynamicId: "435931665",
      url: "https://space.bilibili.com/",
      urlB: "https://api.bilibili.com/x/relation/stat?vmid=", //关注数，粉丝数
      upName: "步束",
      upImg:
        "https://i1.hdslb.com/bfs/face/1a3b774ae05cb4f0ccadd06467304ba9083c0e58.jpg@240w_240h_1c_1s.webp",
      recommend: {
        href: "http://i1.hdslb.com/bfs/archive/2f80d77b9d504223e8c27792e3c10da44c740919.jpg@560w_350h_100Q_1c.webp",
        title: "送给正处于低谷期的你《她曾活过啊》翻唱",
        PlaybackVolume: "24.5万",
        bulletChat: "318",
        date: "11-19",
        describe: "生きていたんだよな Coverあいみょん",
      },
      authentication: " bilibili个人认证：bilibili 知名音乐UP主、直播高能主播",
      uid: "393402835", //435931665,353116,393402835
      birthday: "03-01",
      Notice:
        "   粉丝群 （一）428667864（已满） （二）943197074每周五开直播，禁止上传录播录像。",
      video: "15",
      StreamlineStatistics: {
        follow: "0",
        fans: "38万",
        fabulous: "72.6万",
        play: "1306.8万",
        read: "0",
      },
      DefaultHeaders: [],
    };
  },
  computed: {
    view: {
      get() {
        return this.$store.getters.getView;
      },
      set(val) {
        this.SET_VIEW(val);
      },
    },
    overallbackgroundColor: {
      get() {
        return this.$store.getters.getOverallbackgroundColor;
      },
      set(val) {
        this.SET_OVERALLBACKHROUNDCOLOR(val);
      },
    },
    uPid: {
      get() {
        return this.$store.getters.getUPid;
      },
      set(val) {
        this.SET_UPID(val);
      },
    },
    tabTable: {
      get() {
        return this.$store.getters.getTabTable;
      },
      set(val) {
        this.SET_TABTABLE(val);
      },
    },
  },
  created() {
    this.doInit();
  },
  watch: {
    uPid: function (newValue, oldValue) {
      console.log(oldValue);
      console.log(newValue);
      this.uid = newValue;
    },
    tabTable: function (newValue, oldValue) {
      console.log(oldValue);
      console.log(newValue);
      if (this.tabTable == "TabS1") {
        //重写加载首页
      } else if (this.tabTable == "TabS2") {
        //赋值动态id
        this.dynamicMethod();
        //每次加载12条动态，当用户滚动到最底时，我们取上一波动态最后一条数据中的next_offset的值，再次请求即可获取新的12条数据
      } else if (this.tabTable == "TabS3") {
        //查看所有投稿
      }
    },
    uid(newValue, oldValue) {
      console.log(oldValue);
      console.log(newValue);
      console.log("up__id发生了改变");
      this.$Loading.start();
      setTimeout(this.doInit, 5000);
    },
  },
  methods: {
    ...mapMutations([
      "SET_TABTABLE",
      "SET_UPID",
      "SET_VIEW",
      "SET_OVERALLBACKHROUNDCOLOR",
    ]),
    doInit() {
      //请求urlA
      axios
        .get("https://api.bilibili.com/x/space/acc/info?mid=" + this.uid)
        .then((resp) => {
          console.log("通道A");
          this.upName = resp.data["data"]["name"];
          this.upImg = resp.data["data"]["face"];
          this.birthday = resp.data["data"]["birthday"];
          var info = {
            modular: "UpHome",
            Date: new Date(),
            uid: this.uid,
            describe: "通道A请求成功",
          };
          let str = JSON.stringify(info, "", "\t");
          fs.writeFile("./info.json", str, { flag: "a+" }, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            //文件写入成功。
          });
        })
        .catch((err) => {
          var info = {
            modular: "UpHome",
            Date: new Date(),
            uid: this.uid,
            describe: "通道A请求异常",
          };
          let str = JSON.stringify(info, "", "\t");
          fs.writeFile("./info.json", str, { flag: "a+" }, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            //文件写入成功。
          });
          this.$Message.error("通道A请求异常");
          console.log(err);
        });
      //请求urlB
      axios
        .get("https://api.bilibili.com/x/relation/stat?vmid=" + this.uid)
        .then((resp) => {
          console.log("通道B");
          this.StreamlineStatistics.follow = this.toMoney(
            resp.data["data"]["following"]
          );
          this.StreamlineStatistics.fans = this.toMoney(
            resp.data["data"]["follower"]
          );
          var info = {
            modular: "UpHome",
            Date: new Date(),
            uid: this.uid,
            describe: "通道B请求成功",
          };
          let str = JSON.stringify(info, "", "\t");
          fs.writeFile("./info.json", str, { flag: "a+" }, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            //文件写入成功。
          });
        })
        .catch((err) => {
          var info = {
            modular: "UpHome",
            Date: new Date(),
            uid: this.uid,
            describe: "通道B请求异常",
          };
          let str = JSON.stringify(info, "", "\t");
          fs.writeFile("./info.json", str, { flag: "a+" }, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            //文件写入成功。
          });
          this.$Message.error("通道B请求异常");
          console.log(err);
        });
      //请求urlC
      axios
        .get("https://api.bilibili.com/x/space/upstat?mid=" + this.uid)
        .then((resp) => {
          console.log("通道C");
          this.StreamlineStatistics.follow = this.toMoney(
            resp.data["data"]["following"]
          );
          this.StreamlineStatistics.fans = this.toMoney(
            resp.data["data"]["follower"]
          );
          var info = {
            modular: "UpHome",
            Date: new Date(),
            uid: this.uid,
            describe: "通道C请求成功",
          };
          let str = JSON.stringify(info, "", "\t");
          fs.writeFile("./info.json", str, { flag: "a+" }, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            //文件写入成功。
          });
        })
        .catch((err) => {
          var info = {
            modular: "UpHome",
            Date: new Date(),
            uid: this.uid,
            describe: "通道C请求异常",
          };
          let str = JSON.stringify(info, "", "\t");
          fs.writeFile("./info.json", str, { flag: "a+" }, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            //文件写入成功。
          });
          this.$Message.error("通道c请求异常");
          console.log(err);
        });
      //请求urlD
      axios
        .get("https://api.bilibili.com/x/space/notice?mid=" + this.uid)
        .then((resp) => {
          console.log("通道D");
          this.Notice = resp.data["data"];
          var info = {
            modular: "UpHome",
            Date: new Date(),
            uid: this.uid,
            describe: "通道D请求成功",
          };
          let str = JSON.stringify(info, "", "\t");
          fs.writeFile("./info.json", str, { flag: "a+" }, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            //文件写入成功。
          });
        })
        .catch((err) => {
          var info = {
            modular: "UpHome",
            Date: new Date(),
            uid: this.uid,
            describe: "通道D请求异常",
          };
          let str = JSON.stringify(info, "", "\t");
          fs.writeFile("./info.json", str, { flag: "a+" }, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            //文件写入成功。
          });
          this.$Message.error("通道D请求异常");
          console.log(err);
        });
      //请求urlE
      axios
        .get(
          "https://api.bilibili.com/x/space/arc/search?mid=" +
            this.uid +
            "&pn=1&ps=25&index=1"
        )
        .then((resp) => {
          console.log("通道E");
          var DefaultHeaders = resp.data["data"]["list"]["vlist"];

          for (var i = 0; i < DefaultHeaders.length; i++) {
            DefaultHeaders[i].play = this.toMoney(DefaultHeaders[i].play);
            DefaultHeaders[i].created =
              new Date(DefaultHeaders[i].created * 1000).getUTCMonth() +
              "-" +
              new Date(DefaultHeaders[i].created * 1000).getDate();
          }
          this.DefaultHeaders = DefaultHeaders;
          var info = {
            modular: "UpHome",
            Date: new Date(),
            uid: this.uid,
            describe: "通道E请求成功",
          };
          let str = JSON.stringify(info, "", "\t");
          fs.writeFile("./info.json", str, { flag: "a+" }, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            //文件写入成功。
          });
        })
        .catch((err) => {
          var info = {
            modular: "UpHome",
            Date: new Date(),
            uid: this.uid,
            describe: "通道E请求异常",
          };
          let str = JSON.stringify(info, "", "\t");
          fs.writeFile("./info.json", str, { flag: "a+" }, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            //文件写入成功。
          });
          this.$Message.error("通道E请求异常");
          console.log(err);
        });
      //请求通道F
      axios
        .get("https://api.bilibili.com/x/space/top/arc?vmid=" + this.uid)
        .then((resp) => {
          this.recommend.href = resp.data["data"]["pic"];
          this.recommend.title = resp.data["data"]["title"];
          this.recommend.PlaybackVolume = this.toMoney(
            resp.data["data"]["stat"]["view"]
          );
          this.recommend.bulletChat = this.toMoney(
            resp.data["data"]["stat"]["danmaku"]
          );
          this.recommend.date =
            new Date(resp.data["data"]["pubdate"] * 1000).getUTCMonth() +
            "-" +
            new Date(resp.data["data"]["pubdate"] * 1000).getDate();
          this.recommend.describe = resp.data["data"]["desc"];
          var info = {
            modular: "UpHome",
            Date: new Date(),
            uid: this.uid,
            describe: "通道F请求成功",
          };
          let str = JSON.stringify(info, "", "\t");
          fs.writeFile("./info.json", str, { flag: "a+" }, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            //文件写入成功。
          });
        })
        .catch((err) => {
          var info = {
            modular: "UpHome",
            Date: new Date(),
            uid: this.uid,
            describe: "通道F请求异常",
          };
          let str = JSON.stringify(info, "", "\t");
          fs.writeFile("./info.json", str, { flag: "a+" }, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            //文件写入成功。
          });
          this.$Message.error("通道F请求异常");
          console.log(err);
        });
      axios
        .get("https://api.bilibili.com/x/space/navnum?mid=" + this.uid)
        .then((resp) => {
          this.video = resp.data["data"]["video"];
        })
        .catch((err) => {
          var info = {
            modular: "UpHome",
            Date: new Date(),
            uid: this.uid,
            describe: "通道G请求异常",
          };
          let str = JSON.stringify(info, "", "\t");
          fs.writeFile("./info.json", str, { flag: "a+" }, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            //文件写入成功。
          });
          this.$Message.error("通道G请求异常");
          console.log(err);
        });
      this.$Loading.finish();
    },
    /**
     * @description:  js将数字转换成万 并且保留两位小数
     * @param {*} num
     * @return {*}
     */
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
    /**
     * @description: 主页，动态，投稿直接切换
     * @param {*}
     * @return {*}
     */
    toggleOptions(val) {
      this.tabTable = val;
    },
    dynamicMethod() {
      console.log(
        "https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history?host_uid=" +
          this.uid +
          "&offset_dynamic_id=0"
      );
      axios
        .get(
          "https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/space_history?host_uid=" +
            this.uid +
            "&offset_dynamic_id=0"
        )
        .then((resp) => {
          var all = resp.data["data"]["cards"];
          var allPs = new Array();
          //  console.log(resp.data["data"]["cards"]);
          for (var i = 0; i < all.length; i++) {
            // 除去多余反斜杠，转换为对象 ,这里出现一个问题，card，这个可能会是对象而不是字符串.....,

            var project = JSON.parse(all[i]["card"]);
            //.replace(/[\\]/g, "")

            console.log(project);
            //动态大体存在两种情况，一种是带aid（视频）动态，一种是纯动态
            // 通过设置自定义的属性字段，判断vue该以那种模板渲染动态
            //序列化时间  1640595005 转为12-30 格式
            // 注意；动态大致分为多种，所以取时间参数时，需要分别取法，这里暂时只查看到4种，
            // A情况
            if (project["aid"]) {
              project["state"] = "on";
              project["ctime"] =
                new Date(project["ctime"] * 1000).getUTCMonth() +
                "-" +
                new Date(project["ctime"] * 1000).getDate();
              console.log("A");
            } else {
              // //B情况
              // //这里取不到aid，有一种情况，请查看format.1641047901905.json文件，携带aid请查看format.1641047916936.json
              project["state"] = "off";
              // //这了还有一种特殊情况，UP主的动态是纯文本动态，这里标准的item-upload_time是取不到时间的
              // //特殊处理下
              // if (project["item"]["upload_time"]) {
              //   project["item"]["timeStart"] =
              //     new Date(
              //       project["item"]["upload_time"] * 1000
              //     ).getUTCMonth() +
              //     "-" +
              //     new Date(project["item"]["upload_time"] * 1000).getDate();
              //   console.log("B");
              // } else {
              //   //这里还需要判断下 C情况
              //   if (project["item"]["timeStart"]) {
              //     project["item"]["timeStart"] =
              //       new Date(
              //         project["item"]["timestamp"] * 1000
              //       ).getUTCMonth() +
              //       "-" +
              //       new Date(project["item"]["timestamp"] * 1000).getDate();
              //     console.log("C");
              //   } else {
              //     if (project["origin"]) {
              //       //D情况
              //       var doubleAnalysis = JSON.parse(project["origin"]);
              //       console.log("d");
              //       console.log(doubleAnalysis);
              //       // project["state"] = "onDub";
              //       // doubleAnalysis["ctime"] =
              //       //   new Date(doubleAnalysis["ctime"] * 1000).getUTCMonth() +
              //       //   "-" +
              //       //   new Date(doubleAnalysis["ctime"] * 1000).getDate();
              //       // project["origin"] = doubleAnalysis;
              //     }
              //   }
              // }
            }
            if (project["state"] == "on") {
              all[i]["card"] = project;
              allPs.push(all[i]);
            }
          }

          this.dynamicData = allPs;
        })
        .catch((err) => {
          var avb = err;
          var info = {
            modular: "UpHome",
            Date: new Date(),
            uid: this.uid,
            describe: "通道dynamic请求异常",
            einfo: avb,
          };
          let str = JSON.stringify(info, "", "\t");
          fs.writeFile("./info.json", str, { flag: "a+" }, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            //文件写入成功。
          });
          this.$Message.error("通道dynamic请求异常");
          console.log(err);
        });
    },
  },
};
</script>

<style>
.upHomeDynamicHomeMore {
  width: 100%;
  height: 100%;
  background-color: #fdfdfd;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
}
.yp-title-details-div {
  height: 26px;
  width: 100%;
  padding-left: 5px;
}
.yp-details-text {
  color: #777;
  font-size: 10px;
}
.yp-details-title {
  color: #777;
  font-size: 12.5px;
}
.yp-details {
  width: 300px;
  height: 70px;
  float: left;
}
.yp-img-in {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
  object-position: top;
}
.yp-img {
  width: 110px;
  height: 70px;
  border-radius: 4px;
  background-color: #fdfdfd;
  border: 1px solid #e5e5e5;
  float: left;
}
.yp-span {
  font-size: 10px;
}
.yp-aid-tile-card {
  width: 60%;
  height: 25%;
  padding-left: 10px;
}
.yp-aid-Template {
  width: 100%;
  height: 80%;
}
.hom-title-right-value {
  font-size: 10px;
}
.hom-title-right-text {
  color: #222;
}
.yp-home-title-Right-card {
  float: left;
  height: 32px;
  padding-left: 10px;
}
.yp-home-title-Left-card-Img {
  width: 100%;
  height: 100%;
  border-radius: 32px;
  object-fit: cover;
  object-position: top;
}
.yp-home-title-Left-card {
  width: 34px;
  height: 34px;
  border-radius: 34px;
  background-color: #fdfdfd;
  border: 1px solid #e5e5e5;
  float: left;
  margin-top: 3px;
}
.ypHomeModelDynamicTitle {
  width: 100%;
  height: 30%;
}
.i-info-roll {
  width: 100%;
  height: 40%;
}
.upHomeSan-i {
  height: 25px;
  font-size: 10px;
  padding-left: 3px;
}
.info-boy-Text-Card {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
  margin-top: 2px;
  padding-left: 3px;
}
.img-card {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 4px;
}
.info-boy-Img-Card {
  width: 100%;
  height: 65%;
}
.info-boyTab-Card {
  width: 130px;
  height: 120px;
  background-color: #fdfdfd;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  margin-bottom: 6px;
  -webkit-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
}
.info-boyTab-Card:hover {
  box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15);
  transform: translate(0, -5px);
  background-color: #f3f3f3;
  transition-delay: 0s !important;
}
.info-bottom-left {
  float: left;
  margin-top: 3px;
}
.info-bottom-right {
  float: right;
}
.info-bottom-text {
  color: #6d757a;
  font-size: 12px;
  line-height: 22px;
}
.info-BottomLe {
  border-radius: 5px;
  border: 1px solid #b8c0cc;
  width: 70px;
  height: 25px;
  float: right;
  padding-left: 5px;
  margin-right: 10px;
}
.info-Bottom {
  border-radius: 5px;
  border: 1px solid #b8c0cc;
  width: 45px;
  height: 25px;
  float: right;
  padding-left: 5px;
  margin-right: 10px;
}
.info-right-Part {
  width: 50%;
  height: 100%;
  float: right;
}
.ypHomeTab-jm {
  width: 100%;
  height: 2px;
  background-color: #00a1d6;
  border-radius: 5px;
}
.info-text-Tn {
  font-size: 12px;
}
.count {
  background: #f6fafb;
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #777;
  display: inline-block;
  font-size: 12px;
  line-height: 18px;
  height: 18px;
  margin-left: 1px;
  padding: 0 5px;
  position: relative;
  vertical-align: middle;
}
.info-text-Bo {
  font-size: 18px;
  font-weight: bold;
}
.info-left-Eri {
  float: left;
  margin-left: 5px;
  margin-right: 5px;
}
.info-left-Part {
  width: 50%;
  height: 100%;
  float: left;
}
.info-LieTab {
  width: 100%;
  height: 35px;
}
.info-Body {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 52%;
}
.i-pin-desc {
  color: #99a2aa;
  font-size: 10px;
}
.ypHomeTab-en {
  width: 100%;
  height: 3px;
  background-color: #00a1d6;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
}
.ypHomeTab-in {
}
.ypHomeTabHome {
  height: 100%;
  width: 60px;
  position: relative;
  padding-top: 15px;
  font-size: 15px;
  float: left;
  margin-right: 25px;
  cursor: pointer;
}
.upHomDate {
  float: left;
  height: 12px;
  margin-right: 10px;
}
.upHomeDeu {
  float: left;
  height: 12px;
  margin-right: 10px;
}
.upHomeIcon {
  float: left;
  margin-right: 5px;
}
.upHomePlay {
  float: left;
  height: 12px;
  margin-right: 10px;
}
.upHomeSan {
  height: 30px;
  font-size: 10px;
}
.i-pin-title {
  display: block;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 15px;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}
.upHome-pin-Right {
  width: 50%;
  height: 100%;
  float: left;
  padding-left: 15px;
}
.i-pin-cover {
  width: 240px;
  height: 150px;
  box-shadow: 0 0 0 1px #e5e9ef;
  border-radius: 4px;
  float: left;
  overflow: hidden;
}
.i-watchlater {
  display: none;
  position: absolute;
  right: 6px;
  bottom: 4px;
  width: 22px;
  height: 22px;
  z-index: 5;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABT0lEQVQ4je3VMYrCQBTG8b/DWASLNKJgJ1hY2sloZeF2gkeYW+wZvIVXsLBJY5UdtLJLk17EIghCwChukWRxFzSaaLdfMwm8/EgemTclgOl02gEmwAAoky8RsAA+tdbrUoJ+AVZO8G9CoCeJ39Sq1+sopbBtO5e23+8xxrDdbi1gIog/vxAKYNs2Sqn0diBIenoP9X2fIAgyccv66WZZZBXvdjtc18UYkwlfJxM+n8+/1pfBefMPPw4LEZcEQcBqteJ0Or0GrlartFotLpcLnucxm83YbDbFYSEE/X6f4XBIpVLhcDjgOA6u63I8HvPDaRqNBuPxmHa7DcS7cT6f36yXj8IAUkq63S7NZpPlcomUtx9/Ck5Tq9UYjUZ3a976u0UQz9OiCcMwvYwk8XHyYYxBKXU9+p5Grybg4m1Hk9Bar4Ee4JC0JWeixOhprdffE/1yRW/TLMYAAAAASUVORK5CYII=)
    no-repeat;
}
.i-pin-c {
  box-shadow: 0 0 0 1px #e5e9ef;
  border-radius: 4px;
  float: left;
  overflow: hidden;
  position: relative;
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease, background-color 0.2s ease;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  word-break: break-word;
  display: block;
}
.i-pin-part {
  width: 100%;
  height: 150px;
}
.n-tab-links {
  display: inline-block;
  height: 100%;
  padding-left: 10px;
  vertical-align: middle;
}
.n-data-v {
  line-height: 16px;
  margin-top: 5px;
  color: #222;
  font-size: 12px;
}
.n-data-k {
  line-height: 14px;
  font-size: 12px;
  color: #99a2aa;
}
.n-data {
  display: flex;

  flex-direction: column;

  justify-content: center;
  float: left;
  width: 58px;
  height: 66px;
  padding: 10px 0;
  text-align: center;
  box-sizing: border-box;
}
.n-statistics {
  float: right;
  height: 100%;
  margin-right: 20px;
}
.i-ann-content {
  position: relative;
  max-height: 184px;
  /* overflow: auto; */
  white-space: pre-line;
  word-break: break-all;
  vertical-align: baseline;
  font-size: 12px;
  height: 60%;
}
.info-value {
  color: #6d757a;
  font-family: Microsoft YaHei;
  font-size: 12px;
  line-height: 16px;
  padding-right: 15px;
}
.info-command {
  display: inline-block;
  width: 24px;
  font-size: 12px;
  font-family: Microsoft YaHei;
  line-height: 16px;
  color: #9499a0;
  margin-right: 16px;
}
.info-birth {
  display: inline-block;
  width: 50%;
  float: right;
}
.info-uid {
  display: inline-block;
  width: 50%;
  float: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.info-personal {
  width: 100%;
}
.info-Line {
  border-bottom: 1px solid #e5e9ef;
  margin-top: 15px;
  margin-bottom: 12px;
}
.info-title {
  line-height: 23px;
  font-size: 12px;
  color: #222;
  font-family: Microsoft YaHei;
}
.personal-auth {
  background-position: -35px -50px;
}

.auth-icon {
  display: inline-block;
  width: 22px;
  height: 23px;
  background-image: url(https://s1.hdslb.com/bfs/static/jinkela/space/assets/user-auth.png);
  background-repeat: no-repeat;
  vertical-align: bottom;
}
.auth-description {
  /* width: 320px; */
  line-height: 20px;
  display: inline-block;
  font-size: 12px;
  color: #222;
  vertical-align: middle;
}
.upHomeNode {
  height: 64%;
  width: 100%;
  padding-top: 10px;
}
.upHomeModelRight3 {
  width: 24%;
  height: 30%;
  background-color: #fdfdfd;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  margin: 3px;
  float: right;
  padding: 10px;
}
.upHomeModelRight2 {
  width: 24%;
  height: 20%;
  background-color: #fdfdfd;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  margin: 3px;
  float: right;
  padding: 10px;
}
.upHomeModelRight {
  width: 24%;
  height: 15%;
  background-color: #fdfdfd;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  margin: 3px;
  float: right;
  padding: 5px;
  padding-top: 13px;
  padding-left: 8px;
}
.upHomeDynamic {
  width: 75%;
  height: 100%;
  float: left;
}
.upHomeModel {
  width: 75%;
  height: 100%;
  background-color: #fdfdfd;
  border: 1px solid #e5e5e5;
  border-radius: 6px;

  float: left;
  padding: 20px;
}
.upHomeModelDynamic {
  width: 100%;
  height: 35%;
  background-color: #fdfdfd;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  float: left;
  padding: 20px;
  margin-bottom: 15px;
  position: relative;
}

.upHomeTab {
  width: 100%;
  height: 60px;
  background-color: #fdfdfd;
  border: 1px solid #e5e5e5;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
.upHomeHeadFollow {
  margin-right: 15px;
  float: right;
  width: 70px;
  height: 35px;
  border-radius: 6px;
  text-align: center;
  background-color: #4c535e;
  /* box-shadow: 0 16px 32px 0 rgb(48 55 66 / 15%); */
  margin-top: 35px;
  color: #fff;
  font-size: 15px;
  padding-top: 6px;
  cursor: pointer;
  box-shadow: none;
  -webkit-app-region: no-drag;
}
.upHomeHeadFollow:hover {
  /* background-color: #eaeaea; */
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: rgb(180, 26, 26);
  transition: all 0.2s ease-in-out;
}
.upHomeHeadPortraitTitle {
  float: left;
  height: 30px;
  font-size: 18px;
  color: #ffff;
  margin-top: 5px;
  margin-left: 5px;
  font-weight: bold;
}
.upHomeHeadPortraitImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 66px;
}
.upHomeHeadPortrait {
  width: 66px;
  height: 66px;
  border-radius: 66px;
  background-color: #fdfdfd;
  border: 1px solid #e5e5e5;
  margin-left: 20px;
  margin-top: 5px;
  float: left;
}
.upHomeBottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
}
.upHomeImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
.upHomeHeader {
  width: 100%;
  height: 200px;
  background-color: #fdfdfd;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  /* margin: 5px; */
  position: relative;
}
.NeworldEcro {
  /* height: 430px; */
  overflow-y: auto;
}
.NeworldEcro::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 0px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.NeworldEcro::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  background: #ebeef0;
}

.NeworldEcro::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  border-radius: 10px;
  background: #f1f6fa;
}
#UpHome {
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
