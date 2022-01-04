<template>
  <div
    id="dailyNewspaper"
    :style="
      overallbackgroundColor == 'shallow'
        ? 'background-color: #f9f9f9;border: 1px solid #e5e5e5;'
        : 'background-color:#272727;border: 1px solid #1c1c1c;color:#fff;'
    "
  >
    <div class="dailyNewTitleCard">
      <div class="dailyNewZhuanLan">推荐</div>
      <div
        class="dailyNewShuaXin"
        @click="doInit()"
        :style="
          overallbackgroundColor == 'shallow'
            ? ''
            : ' background-color:#343434;border: 1px solid #3b3b3b;'
        "
      >
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
    <div
      ref="box"
      :class="
        overallbackgroundColor == 'shallow'
          ? 'dailyNewDropdownColumn Neworldscro'
          : 'dailyNewDropdownColumn NeworldscroHand'
      "
      @scroll="handleScroll($event)"
    >
      <table>
        <tr v-for="item in dataCard" :key="item.id">
          <td v-for="item2 in item" :key="item2.id">
            <div
              class="dailyNewColumnCard"
              :style="
                overallbackgroundColor == 'shallow'
                  ? ''
                  : 'background-color:#323232;border: 1px solid #232323;'
              "
            >
              <div
                class="dailyNewColumnCardLeft"
                :style="
                  overallbackgroundColor == 'shallow'
                    ? ''
                    : 'background-color:#323232;border: 1px solid #232323;'
                "
              >
                <img class="dailyNewColumnCardLeftImg" :src="item2.src" />
              </div>
              <div class="dailyNewColumnCardRight">
                <div class="dailyDurationOn1">
                  <span
                    class="dailyNewColumnCardRightTitle"
                    :style="
                      overallbackgroundColor == 'shallow'
                        ? ''
                        : 'color:#ffffff;'
                    "
                  >
                    {{ item2.title }}
                  </span>
                </div>
                <div
                  v-if="item2.cover_right_content_description != null"
                  class="dailyDuration"
                >
                  {{ item2.cover_right_content_description }}
                </div>
                <div v-else></div>
                <div class="dailyUp" @click="onUpHomePage(item2.uid)">
                  {{ item2.up_name
                  }}<svg
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
                    <svg
                      t="1639372525531"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="2321"
                      width="10"
                      height="10"
                    >
                      <path
                        d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z"
                        p-id="2322"
                        fill="#cdcdcd"
                      ></path>
                      <path
                        d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z"
                        p-id="2323"
                        fill="#cdcdcd"
                      ></path>
                    </svg>
                    {{ item2.cover_left_text_1 }}
                  </div>
                  <div class="dailyFooterRight">
                    <svg
                      t="1639372596689"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="3414"
                      width="10"
                      height="10"
                    >
                      <path
                        d="M850.879104 96.41591l-676.303067 0c-60.681034 0-110.049418 49.367361-110.049418 110.049418l0 446.200388c0 60.681034 49.367361 110.049418 110.049418 110.049418l90.307795 0L396.936381 931.129846c3.793396 4.838192 9.598612 7.66354 15.746636 7.66354s11.952216-2.825348 15.746636-7.66354l132.052548-168.414711 290.396903 0c60.681034 0 110.049418-49.367361 110.049418-110.049418L960.928522 206.465329C960.928522 145.784294 911.561162 96.41591 850.879104 96.41591zM920.91111 652.665717c0 38.614459-31.416524 70.030983-70.030983 70.030983L550.744419 722.6967c-6.147 0-11.952216 2.825348-15.745612 7.66354L412.683017 886.356107l-122.31579-155.995867c-3.792373-4.838192-9.597589-7.66354-15.745612-7.66354l-100.045577 0c-38.614459 0-70.030983-31.416524-70.030983-70.030983L104.545054 206.465329c0-38.614459 31.416524-70.030983 70.030983-70.030983l676.303067 0c38.614459 0 70.030983 31.416524 70.030983 70.030983L920.910087 652.665717z"
                        p-id="3415"
                        fill="#cdcdcd"
                      ></path>
                      <path
                        d="M272.621051 344.526731c-44.132126 0-80.035848 35.903721-80.035848 80.035848 0 44.132126 35.903721 80.036871 80.035848 80.036871s80.035848-35.904745 80.035848-80.036871C352.655875 380.430452 316.752154 344.526731 272.621051 344.526731zM272.621051 464.582037c-22.065552 0-40.017412-17.951861-40.017412-40.018436 0-22.065552 17.952884-40.017412 40.017412-40.017412 22.065552 0 40.017412 17.951861 40.017412 40.017412C312.638463 446.629153 294.686602 464.582037 272.621051 464.582037z"
                        p-id="3416"
                        fill="#cdcdcd"
                      ></path>
                      <path
                        d="M512.727571 344.526731c-44.132126 0-80.035848 35.903721-80.035848 80.035848 0 44.132126 35.903721 80.036871 80.035848 80.036871 44.132126 0 80.035848-35.904745 80.035848-80.036871C592.763418 380.430452 556.859697 344.526731 512.727571 344.526731zM512.727571 464.582037c-22.065552 0-40.017412-17.951861-40.017412-40.018436 0-22.065552 17.951861-40.017412 40.017412-40.017412 22.065552 0 40.017412 17.951861 40.017412 40.017412C552.746006 446.629153 534.793122 464.582037 512.727571 464.582037z"
                        p-id="3417"
                        fill="#cdcdcd"
                      ></path>
                      <path
                        d="M752.836137 344.526731c-44.131103 0-80.035848 35.903721-80.035848 80.035848 0 44.132126 35.904745 80.036871 80.035848 80.036871s80.035848-35.904745 80.035848-80.036871C832.871985 380.430452 796.96724 344.526731 752.836137 344.526731zM752.836137 464.582037c-22.066575 0-40.017412-17.951861-40.017412-40.018436 0-22.065552 17.951861-40.017412 40.017412-40.017412s40.017412 17.951861 40.017412 40.017412C792.853549 446.629153 774.902712 464.582037 752.836137 464.582037z"
                        p-id="3418"
                        fill="#cdcdcd"
                      ></path>
                    </svg>
                    {{ item2.cover_left_2_content_description }}
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  name: "dailyNewspaper",
  data() {
    return {
      VIDEO_RECOMMEND: "",
      dataCard: [[]],
    };
  },
  created() {
    axios
      .get("/data.json")
      .then((resp) => {
        this.VIDEO_RECOMMEND = resp.data._appBase + "/x/v2/feed/index";
        this.doInit();
      })
      .catch((err) => {
        this.$Message.error("配置文件加载异常");
        console.log(err);
      });
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
  },
  methods: {
    ...mapMutations(["SET_UPID","SET_VIEW", "SET_OVERALLBACKHROUNDCOLOR"]),
    doInit() {
      this.$Loading.start();

      this.dataCard = [[]];
      axios
        .get(this.VIDEO_RECOMMEND)
        .then((resp) => {
          console.log("推荐");
          console.log(resp.data);

          var arr1 = [];
          var items = resp.data.data.items;
          for (var i = 0; i < items.length; i++) {
            var pro = {
              src: items[i]["cover"],
              title: items[i]["title"],
              uid: items[i]["args"]["up_id"],
              cover_right_content_description:
                items[i]["cover_right_content_description"],
              cover_left_2_content_description:
                items[i]["cover_left_2_content_description"],
              cover_left_text_1: items[i]["cover_left_text_1"],
              up_name: items[i]["args"]["up_name"],
            };
            arr1.push(pro);
          }

          var dataCard = arr1.reduce(
            (pre, next, idx) => {
              const inner = pre[~~(idx / 3)];
              if (inner !== undefined) {
                inner.push(next);
              } else {
                pre.push([next]);
              }
              return pre;
            },
            [[]]
          );
          // this.dataCard = dataCard;
          for (var j = 0; j < dataCard.length - 1; j++) {
            this.dataCard.push(dataCard[j]);
          }

          this.$Loading.finish();
        })
        .catch((err) => {
          this.$Message.error("初始化推荐异常");
          console.log(err);
        });
      axios
        .get(this.VIDEO_RECOMMEND)
        .then((resp) => {
          console.log(resp.data);

          var arr1 = [];
          var items = resp.data.data.items;
          for (var i = 0; i < items.length; i++) {
            var pro = {
              src: items[i]["cover"],
              title: items[i]["title"],
              cover_right_content_description:
                items[i]["cover_right_content_description"],
              cover_left_2_content_description:
                items[i]["cover_left_2_content_description"],
              cover_left_text_1: items[i]["cover_left_text_1"],
              up_name: items[i]["args"]["up_name"],
            };
            arr1.push(pro);
          }

          var dataCard = arr1.reduce(
            (pre, next, idx) => {
              const inner = pre[~~(idx / 3)];
              if (inner !== undefined) {
                inner.push(next);
              } else {
                pre.push([next]);
              }
              return pre;
            },
            [[]]
          );
          // this.dataCard = dataCard;
          for (var j = 0; j < dataCard.length - 1; j++) {
            this.dataCard.push(dataCard[j]);
          }

          this.$Loading.finish();
        })
        .catch((err) => {
          this.$Message.error("初始化推荐异常");
          console.log(err);
          this.$Message.error("刷新失败~");
        });

      this.$Message.info("刷新推荐~");
    },
    handleScroll(e) {
      if (
        parseInt(e.srcElement.scrollTop) +
          parseInt(e.srcElement.offsetHeight) >=
        parseInt(e.srcElement.scrollHeight.toString()) - 1
      ) {
        this.$Message.info("刷新推荐~");
        this.$refs.box.scrollTop = e.srcElement.scrollTop - 200;
        axios
          .get(this.VIDEO_RECOMMEND)
          .then((resp) => {
            console.log(resp.data);

            var arr1 = [];
            var items = resp.data.data.items;
            for (var i = 0; i < items.length; i++) {
              var pro = {
                src: items[i]["cover"],
                title: items[i]["title"],
                cover_right_content_description:
                  items[i]["cover_right_content_description"],
                cover_left_2_content_description:
                  items[i]["cover_left_2_content_description"],
                cover_left_text_1: items[i]["cover_left_text_1"],
                up_name: items[i]["args"]["up_name"],
              };
              arr1.push(pro);
            }

            var dataCard = arr1.reduce(
              (pre, next, idx) => {
                const inner = pre[~~(idx / 3)];
                if (inner !== undefined) {
                  inner.push(next);
                } else {
                  pre.push([next]);
                }
                return pre;
              },
              [[]]
            );
            // this.dataCard = dataCard;
            for (var j = 0; j < dataCard.length - 1; j++) {
              this.dataCard.push(dataCard[j]);
            }
            this.$Message.success("刷新成功");
            this.$Loading.finish();
          })
          .catch((err) => {
            console.log(err);
            this.$Message.error("刷新失败~");
          });
      }
    },
    onUpHomePage(uid) {
      this.view = "No6On"; //开启up页面
      this.uPid = uid;//赋予uid
    },
  },
};
</script>

<style>
.dailyUp {
  color: #bcbabe;
  cursor: pointer;
}
.dailyFooterRight {
  float: right;
  height: 100%;
}
.dailyFooterLeft {
  float: left;
  height: 100%;
}
.dailyFooter {
  width: 100%;
  height: 15%;
  position: absolute;
  bottom: 0;
  color: #d2cece;
  text-align: center;
  font-size: 12px;
}
.dailyDurationOn1 {
  height: 35%;
  overflow: hidden;
  white-space: revert;
  text-overflow: ellipsis;
}
.dailyDuration {
  margin-top: 20%;
  background-color: #d0d0d0;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  width: 50%;
  text-align: center;
  color: #fffdfd;
  overflow: hidden;
  white-space: nowrap;
}
.dailyNewColumnCardRightTitle {
  color: #7e758e;
  font-size: 13px;
}
.dailyNewColumnCardRight {
  float: left;
  margin-left: 5px;
  height: 100%;
  width: 52%;
  padding-top: 5px;
  position: relative;
}
.dailyNewColumnCardLeftImg {
  width: 100%;
  height: 100%;
  border-radius: 5px;

  object-fit: cover;
  object-position: top;
}
.dailyNewColumnCardLeft {
  float: left;
  width: 40%;
  height: 90%;
  margin: 8px;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
}
.dailyNewColumnCard {
  width: 310px;
  height: 180px;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15);
  margin: 5px;
  margin-right: 15px;
  -webkit-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
}
.dailyNewColumnCard:hover {
  box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15);
  transform: translate(0, -5px);
  background-color: #f3f3f3;
  transition-delay: 0s !important;
}
.dailyNewDropdownColumn {
  width: 100%;
  height: 91.5%;
  display: flex;
  justify-content: space-evenly;
}
.dailyNewShuaXinText {
  float: left;
}
.dailyNewShuaXinIcon {
  float: left;
  padding-top: 2px;
  margin-right: 3px;
}
.dailyNewShuaXin {
  float: right;
  width: 70px;
  height: 30px;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding-top: 4px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  padding-left: 7px;
}
.dailyNewShuaXin:hover {
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease-in-out;
}
.dailyNewZhuanLan {
  float: left;
  text-align: left;
  font-size: 30px;
  font-weight: bold;
}
.dailyNewTitleCard {
  width: 100%;
  height: 60px;
}
#dailyNewspaper {
  border-radius: 3px;
  width: 85%;
  height: 100%;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 20px;
}
.Neworldscro {
  /* height: 430px; */
  overflow-y: auto;
}
.Neworldscro::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 7px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.Neworldscro::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  background: #ebeef0;
}

.Neworldscro::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  border-radius: 10px;
  background: #f1f6fa;
}

.NeworldscroHand {
  /* height: 430px; */
  overflow-y: auto;
}
.NeworldscroHand::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 7px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.NeworldscroHand::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  background: #9d9d9d;
}

.NeworldscroHand::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  border-radius: 10px;
  background: #272727;
}
</style>
