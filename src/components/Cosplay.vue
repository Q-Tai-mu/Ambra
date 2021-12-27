<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-12-17 21:14:41
 * @LastEditTime: 2021-12-24 11:47:49
 * @LastEditors: MArio
-->
<template>
  <div id="cosplay">
    <div class="partitionTitle">Cosplay</div>
    <div class="cosplayModImg">
      <img
        class="cosplayImgE"
        src="https://pic.netbian.com/uploads/allimg/211117/001037-16370790379d1e.jpg
"
      />
    </div>
    <div class="CosplayCardModl Neworldscro">
      <div class="CosplayCard" v-for="item in dataCard" :key="item.id">
        <div class="CosplayCardTSvg">
          <img
            class="newWorldImgCardOnImg"
            style="height: 100%"
            :src="item.imgSrc"
          />
          <!-- <img class="partitionCardImg" /> -->
        </div>
        <div class="cosplayTitle">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
var cheerio = require("cheerio");
export default {
  name: "cosplay",
  data() {
    return {
      CURL: "",
      dataCard: [],
    };
  },
  created() {
    axios
      .get("/data.json")
      .then((resp) => {
        this.CURL = resp.data._feiBase + "/category/cosplay";
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
        .get(this.CURL)
        .then((resp) => {
          console.log("COSPLAY");
          var arr1 = [];
          var $ = cheerio.load(resp.data);
          $("a.inn-archive__item__thumbnail__container").each(function (i, e) {
            var pro = {
              name: $(e).children("img").attr("alt"),
              imgSrc: $(e).children("img").attr("src"),
              href: $(e).attr("href"),
            };
            arr1.push(pro);
          });
          this.dataCard = arr1;
        })
        .catch((err) => {
          this.$Message.error("初始化推荐异常");
          console.log(err);
        });
    },
  },
};
</script>

<style>
.cosplayModImg {
  width: 100%;
  height: 180px;
  background-color: #fdfdfd;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  margin: 5px;
}
.cosplayTitle {
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  padding: 3px;
}
.CosplayCardModl {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 67%;
}
.CosplayCardTSvg {
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 3px;
  height: 90%;
}
.cosplayImgE {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}
.newWorldImgCardOnImg {
  width: 100%;
  object-fit: cover;
  object-position: top;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.CosplayCard {
  width: 180px;
  height: 280px;
  background-color: #fdfdfd;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  margin: 5px;
  /* padding-top: 34.5px; */
  -webkit-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  text-align: center;
}
.CosplayCard:hover {
  box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15);
  transform: translate(0, -3px);
  transition-delay: 0s !important;
  background-color: #f7f7f7;
}
#cosplay {
  border-radius: 3px;
  width: 85%;
  height: 100%;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 30px;
}
</style>
