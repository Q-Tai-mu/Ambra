<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-10-24 12:37:55
 * @LastEditTime: 2021-12-24 11:47:08
 * @LastEditors: MArio
-->
<template>
  <div id="help">
    <div class="SetUpTitle">
      帮助
    </div>
    <div class="SetUpMinTitle">
      <!-- 自愿捐款，打赏作者 -->
      关于本系统的的一些问题
    </div>
    <!-- <div class="helpCardImg">
      <img class="helpImg" src="../assets/WX.jpg" />
    </div>
    <div class="helpCardImg">
      <img class="helpImg" src="../assets/ZFB.jpg" />
    </div> -->
    <div class="Helpsynopsis">
      <div class="HelpsynopsisLeft">
        <span
          >我们不使用你的搜索数据以及与此关联的其他在线活动数据，向你显示更加个性化的广告。
          如果你关闭此设置，可能会看到不太相关的广告。
          即使关闭所有个性化的广告设置，你仍可以看到其他公司的个性化广告，这基于他们从你身上收集的数据。
          有关详细信息，请参阅：问题。</span
        >
      </div>
      <div class="HelpsynopsisRight">
        <img
          class="HelpsynopsisRightImg"
          src="https://s1.jiligamefun.com/images/2020/02/18/4905cf2f49f25166e14e711d48cc6187.jpg"
        />
      </div>
    </div>
    <div class="SetUpstrip">
      <div class="HelpstripCard">
        <div class="SetUpCardLeft">
          <div class="SetUpCardIcon">
          <svg t="1639408885453" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2323" width="26" height="26"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" p-id="2324"></path></svg>
          </div>
          <div class="SetUpCardTitle">
            <div class="SetUpCardTitleTop">Github issue</div>
            <div class="SetUpCardTitleBotton">
              需要反馈应用使用过程中的问题？想提供一些建议？
            </div>
          </div>
        </div>
        <div class="SetUpCardRiht">
          <div class="SetUpCardRihtIcon"></div>
          <div class="SetUpCardRihtTitle"></div>
        </div>
      </div>
    </div>
    <div class="helpCardImg">
      <img class="helpImg" />
    </div>
    <div class="helpCardImg">
      <img class="helpImg" />
    </div>
    <div class="helpCardImg">
      <img class="helpImg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "help",
};
</script>

<style>
.HelpstripCard {
  background-color: #fdfdfd;
  width: 100%;
  height: 65%;
  border: 1px solid #eaeaea;
  border-radius: 6px;
  box-shadow: none;
  margin: 3px;
  position: relative;

}

.HelpsynopsisRightImg {
  width: 95%;
  height: 100%;
  border-radius: 6px;
  overflow: hidden;
  /* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12); */
  object-fit: cover;
  object-position: top;
}
.HelpsynopsisRight {
  width: 40%;
  height: 100%;
  float: right;
}
.HelpsynopsisLeft {
  width: 60%;
  height: 100%;
  float: left;
  padding: 7px;
}
.Helpsynopsis {
  width: 100%;
  height: 80px;
  color: #7c7a7a;
  font-size: 13px;
  margin-bottom: 15px;
}

.helpImg {
  width: 100%;
  height: 100%;
  border-radius: 6px;
    border: 1px solid #dadada;
}
.helpCardImg {
  width: 300px;
  height: 400px;
  border-radius: 6px;
  border: 1px solid #dadada;

  margin: 15px;
  float: left;
}
.helpCardImg:hover {
  /* background-color: #eaeaea; */
  background-color: rgb(204 207 207);
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: rgb(212, 212, 212);
  transition: all 0.2s ease-in-out;
}
#help {
  border-radius: 3px;
  width: 85%;
  height: 100%;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  padding-left: 15px;
  padding-right: 25px;
  padding-top: 30px;
}
</style>
