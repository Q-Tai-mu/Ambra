<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-12-21 18:00:15
 * @LastEditTime: 2021-12-23 16:33:04
 * @LastEditors: MArio
-->
<template>
  <div id="UpHome">
    <div class="upHomeHeader">
      <img
        class="upHomeImg"
        src="https://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png@2560w_400h_100q_1o.webp"
      />
      <div class="upHomeBottom">
        <div class="upHomeHeadPortrait">
          <img
            class="upHomeHeadPortraitImg"
            src="https://i1.hdslb.com/bfs/face/1a3b774ae05cb4f0ccadd06467304ba9083c0e58.jpg@240w_240h_1c_1s.webp"
          />
        </div>
        <div class="upHomeHeadPortraitTitle">步束</div>
        <div class="upHomeHeadFollow"></div>
      </div>
    </div>
    <div class="upHomeTab"></div>
    <div class="upHomeModel"></div>
  </div>
</template>

<script>
export default {
  name: "UpHome",
};
</script>

<style>
.upHomeModel {
  width: 100%;
  height: 62%;
  background-color: #fdfdfd;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  margin-top: 9px;
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
  float: right;
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
#UpHome {
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
