<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-12-14 10:30:13
 * @LastEditTime: 2021-12-24 11:47:08
 * @LastEditors: MArio
-->
<template>
  <div id="hot">
    <div class="dailyNewTitleCard">
      <div class="dailyNewZhuanLan">热门</div>
    </div>
    <div
      ref="hotB"
      class="dailyNewDropdownColumn Neworldscro"
      @scroll="handleScroll($event)"
    >
      <table>
        <tr v-for="item in dataCard" :key="item.id">
          <td v-for="item2 in item" :key="item2.id">
            <div class="dailyNewColumnCard">
              <div class="dailyNewColumnCardLeft">
                <img class="dailyNewColumnCardLeftImg" :src="item2.pic" />
              </div>
              <div class="dailyNewColumnCardRight">
                <div class="dailyDurationOn1">
                  <span class="dailyNewColumnCardRightTitle">
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
                <div class="dailyUp">
                  {{ item2.owner
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
                    {{ item2.view }}
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
                    {{ item2.danmaku }}
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
export default {
  name: "hot",
  data() {
    return {
      PopularGRPC: "",
      PopularGRPCN: "",
      PN: 1,
      dataCard: [[]],
    };
  },
  created() {
    axios
      .get("/data.json")
      .then((resp) => {
        this.PopularGRPC =
          resp.data._apiBase + "/x/web-interface/popular?ps=20&pn=1";
        this.PopularGRPCN =
          resp.data._apiBase + "/x/web-interface/popular?ps=20&pn=";
        this.doInit();
      })
      .catch((err) => {
        this.$Message.error("配置文件加载异常");
        console.log(err);
      });
  },
  methods: {
    doInit() {
      axios
        .get(this.PopularGRPC)
        .then((resp) => {
          console.log("热门");
          console.log(resp.data);

          var arr1 = [];
          var list = resp.data.data.list;
          for (var i = 0; i < list.length; i++) {
            var pro = {
              title: list[i]["title"],
              pic: list[i]["pic"],
              owner: list[i]["owner"]["name"],
              view: list[i]["stat"]["view"],
              danmaku: list[i]["stat"]["danmaku"],
              cover_right_content_description: this.getLocalTime(
                list[i]["ctime"]
              ),
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
          for (var j = 0; j < dataCard.length - 1; j++) {
            this.dataCard.push(dataCard[j]);
          }
          this.$Loading.finish();
        })
        .catch((err) => {
          this.$Message.error("初始化推荐异常");
          console.log(err);
        });
    },
    getLocalTime(nS) {
      // parseInt() 函数可解析一个字符串，并返回一个整数。
      // js中时间操作单位是毫秒。
      // toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果。
      // replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
      // replace(/:\d{1,2}$/,' ')验证替换以：开始有一位或二位数字的结束字符串，就是秒；替换为空
      let time = new Date(parseInt(nS) * 1000)
        .toLocaleString()
        .replace(/:\d{1,2}$/, " ")
        .replace(/\//g, "-");
      // 找出出现空格的位置
      let space_position = time.indexOf(" ");
      // 截取并返回数据
      return time.slice(0, space_position);
    },
    handleScroll(e) {
      if (
        parseInt(e.srcElement.scrollTop) +
          parseInt(e.srcElement.offsetHeight) >=
        parseInt(e.srcElement.scrollHeight.toString()) - 1
      ) {
        this.$Message.info("刷新热门~");
        this.$refs.hotB.scrollTop = e.srcElement.scrollTop - 200;
        this.PN = this.PN + 1;
        axios
          .get(this.PopularGRPCN + this.PN)
          .then((resp) => {
            console.log("热门");
            console.log(resp.data);

            var arr1 = [];
            var list = resp.data.data.list;
            for (var i = 0; i < list.length; i++) {
              var pro = {
                title: list[i]["title"],
                pic: list[i]["pic"],
                owner: list[i]["owner"]["name"],
                view: list[i]["stat"]["view"],
                danmaku: list[i]["stat"]["danmaku"],
                cover_right_content_description: this.getLocalTime(
                  list[i]["ctime"]
                ),
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
            for (var j = 0; j < dataCard.length - 1; j++) {
              this.dataCard.push(dataCard[j]);
            }
            this.$Message.success("刷新成功");
            this.$Loading.finish();
          })
          .catch((err) => {
            this.$Message.error("刷新异常~");
            console.log(err);
          });
      }
    },
  },
};
</script>

<style>
#hot {
  border-radius: 3px;
  width: 85%;
  height: 100%;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  padding-left: 15px;
  padding-right: 25px;
  padding-top: 20px;
}
</style>
