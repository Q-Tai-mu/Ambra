<template>
  <div
    id="titleBlock"
    :style="
      overallbackgroundColor == 'shallow'
        ? ''
        : 'color:#ffffff;background-color: #202020;'
    "
  >
    <div class="titleName">
      <div class="iconTitle">
        <svg
          t="1639104345172"
          class="icon"
          viewBox="0 0 1129 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2416"
          width="16"
          height="16"
        >
          <path
            d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0"
            fill="#20B0E3"
            p-id="2417"
          ></path>
          <path
            d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0"
            fill="#20B0E3"
            p-id="2418"
          ></path>
        </svg>
      </div>
      <div class="titleText">腾春阁</div>
    </div>
    <div
      class="fanJu"
      :style="
        overallbackgroundColor == 'shallow'
          ? ''
          : 'border: 1px solid #2e2e2e;border-bottom: 1px solid rgb(154 154 154);background-color: #2d2d2d;'
      "
    >
      <div class="fanJuIcon">
        <svg
          t="1637196715658"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4245"
          width="18"
          height="18"
        >
          <path
            d="M874.666667 814.933333l-209.066667-209.066666C704 554.666667 725.333333 494.933333 725.333333 426.666667c0-166.4-132.266667-298.666667-298.666666-298.666667s-298.666667 132.266667-298.666667 298.666667 132.266667 298.666667 298.666667 298.666666c68.266667 0 128-21.333333 179.2-59.733333l209.066666 209.066667c17.066667 17.066667 42.666667 17.066667 59.733334 0s17.066667-42.666667 0-59.733334zM426.666667 640c-119.466667 0-213.333333-93.866667-213.333334-213.333333s93.866667-213.333333 213.333334-213.333334 213.333333 93.866667 213.333333 213.333334-93.866667 213.333333-213.333333 213.333333z"
            fill="#BBC3C9"
            p-id="4246"
          ></path>
        </svg>
      </div>
      <input
        class="inpputSer"
        placeholder="视频 番剧 UP主..."
        @keyup.enter="search"
        v-model="searchValue"
      />
    </div>
    <div class="Ternarylinkage">
      <div class="BinarylinkageGan" @click="closeWindow()">
        <svg
          t="1636216490127"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="15083"
          width="18"
          height="18"
        >
          <path
            d="M825.76 246.496L560.256 512l265.504 265.504-48.256 48.256-265.536-265.504-265.472 265.504-48.256-48.256 265.472-265.536-265.472-265.472 48.256-48.256L512 463.744l265.504-265.504z"
            fill="#717378"
            p-id="15084"
          ></path>
        </svg>
      </div>

      <div
        :class="
          overallbackgroundColor == 'shallow'
            ? 'Binarylinkage'
            : 'BinarylinkageHand'
        "
        @click="maxWindow()"
      >
        <svg
          t="1636216526439"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="15906"
          width="18"
          height="18"
        >
          <path
            d="M204.8 675.84a10.24 10.24 0 0 1 10.16832 9.04192L215.04 686.08v122.88h194.56a10.24 10.24 0 0 1 10.16832 9.04192L419.84 819.2a10.24 10.24 0 0 1-9.04192 10.16832L409.6 829.44H204.8a10.24 10.24 0 0 1-10.16832-9.04192L194.56 819.2V686.08a10.24 10.24 0 0 1 10.24-10.24z m614.4-10.24a10.24 10.24 0 0 1 10.16832 9.04192L829.44 675.84v143.36a10.24 10.24 0 0 1-9.04192 10.16832L819.2 829.44H614.4a10.24 10.24 0 0 1-1.19808-20.40832L614.4 808.96h194.56V675.84a10.24 10.24 0 0 1 9.04192-10.16832L819.2 665.6zM675.84 399.36a10.24 10.24 0 0 1 10.24 10.24v204.8a10.24 10.24 0 0 1-10.24 10.24H348.16a10.24 10.24 0 0 1-10.24-10.24V409.6a10.24 10.24 0 0 1 10.24-10.24z m-10.24 20.48H358.4v184.32h307.2V419.84zM409.6 194.56a10.24 10.24 0 0 1 1.19808 20.40832L409.6 215.04H215.04v133.12a10.24 10.24 0 0 1-9.04192 10.16832L204.8 358.4a10.24 10.24 0 0 1-10.16832-9.04192L194.56 348.16V204.8a10.24 10.24 0 0 1 9.04192-10.16832L204.8 194.56h204.8z m409.6 0a10.24 10.24 0 0 1 10.16832 9.04192L829.44 204.8v143.36a10.24 10.24 0 0 1-20.40832 1.19808L808.96 348.16V215.04H614.4a10.24 10.24 0 0 1-10.16832-9.04192L604.16 204.8a10.24 10.24 0 0 1 9.04192-10.16832L614.4 194.56h204.8z"
            p-id="15907"
          ></path>
        </svg>
      </div>
      <div
        :class="
          overallbackgroundColor == 'shallow'
            ? 'Binarylinkage'
            : 'BinarylinkageHand'
        "
        @click="minWindow()"
      >
        <svg
          t="1636216576681"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="16743"
          width="18"
          height="18"
        >
          <path
            d="M832 490.666667a21.333333 21.333333 0 1 1 0 42.666666h-640a21.333333 21.333333 0 1 1 0-42.666666h640z"
            fill="#999999"
            p-id="16744"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
const { ipcRenderer } = require("electron");

export default {
  name: "titleBlock",
  data() {
    return {
      searchValue: "",
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
  },
  methods: {
    ...mapMutations(["SET_VIEW", "SET_OVERALLBACKHROUNDCOLOR"]),
    search() {
      console.log(this.searchValue);
    },
    minWindow() {
      // ipcRenderer.send("minWindow");
      ipcRenderer.send("minWindow");
    },
    maxWindow() {
      ipcRenderer.send("maxWindow");
      //  this.$Message.info('目前应用布局，暂不支持最大化')
    },
    closeWindow() {
      ipcRenderer.send("closeWindow");
    },
  },
};
</script>

<style>
.inpputSer {
  outline-style: none;
  border: none;
  border-radius: 3px;
  padding: 8px 14px;
  width: 320px;
  font-size: 14px;
  font-weight: 700;
  font-family: "Microsoft soft";
  float: left;
  background-color: transparent;
}

.fanJuIcon {
  float: left;
  margin-top: 10px;
  margin-left: 8px;
}

.fanJu {
  width: 400px;
  height: 40px;
  border-radius: 6px;
  background-color: #fbfbfb;
  border: 1px solid #e5e5e5;
  border-bottom: 1px solid #868686;
  /*margin-top: 6%;*/
  position: absolute;
  z-index: 101;
  margin-top: 0.5%;
  margin-left: 35%;
  -webkit-app-region: no-drag;
}

.iconTitle {
  width: 16px;
  height: 16px;
  float: left;
}

.titleText {
  float: left;
  margin-left: 10px;
}

.titleName {
  float: left;
  margin-top: 8px;
  margin-left: 10px;
  font-size: 13px;
}

.BinarylinkageSvg {
  margin-top: 10%;
  height: 100%;
}

.BinarylinkageGan {
  width: 28%;
  height: 30px;
  /* background-color: aqua; */
  /* padding-top: 10%; */
  float: right;
  padding: 6px;
  border-top-right-radius: 5px;
  text-align: center;
  -webkit-app-region: no-drag;
  padding-right: 12px;
}

.BinarylinkageGan:hover {
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: #eee;
  transition: all 0.2s ease-in-out;
  background-color: #e81123;
}
.BinarylinkageHand {
  width: 25%;
  height: 30px;
  /* background-color: aqua; */
  /* padding-top: 10%; */
  float: right;
  padding: 6px;
  /* margin-top: 6px; */
  /* padding-top: 6px; */
  text-align: center;
  -webkit-app-region: no-drag;
}
.BinarylinkageHand:hover {
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: #2e2e2e;
  transition: all 0.2s ease-in-out;
  background-color: #2e2e2e;
}
.Binarylinkage {
  width: 25%;
  height: 30px;
  /* background-color: aqua; */
  /* padding-top: 10%; */
  float: right;
  padding: 6px;
  /* margin-top: 6px; */
  /* padding-top: 6px; */
  text-align: center;
  -webkit-app-region: no-drag;
}

.Binarylinkage:hover {
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: #eee;
  transition: all 0.2s ease-in-out;
  background-color: #d3d3d3;
}

.Ternarylinkage {
  width: 120px;
  height: 30px;
  /* background: #009966; */
  float: right;
}

#titleBlock {
  position: fixed;
  z-index: 100;
  height: 33px;
  width: 100%;
  top: 0;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  -webkit-app-region: drag;
  background-color: #f3f3f3;
}
</style>
