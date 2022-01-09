<template>
  <div
    id="titleBlock"
    :style="
      overallbackgroundColor == 'shallow'
        ? ''
        : 'color:#ffffff;background-color: #202020;'
    "
  >
    <!-- <at-modal v-model="modal2" :styles="{ top: '25%', width: '330px' }">
      <div slot="header" style="text-align: center">
        <span>二维码扫描登录</span>
      </div>
      <div style="text-align: center">
        <img id="imgSrc" src="" />
        <div>
          <a @click="refresh()">刷新</a>
        </div>
      </div>
      <div slot="footer">
        <at-button style="width: 100%" type="error" @click="closeModal2"
          >关闭</at-button
        >
      </div>
    </at-modal> -->
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
      <div class="titleText">哔哩</div>
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

    <div class="userTim">
      <div class="userBk" @click="login()">
        <div class="aside-user-divT" v-if="userIst == 'on'">
          <img class="aside-user-Img" :src="userImg" />
        </div>
        <div v-if="userIst == 'off'">
          <svg
            t="1641563526954"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3169"
            data-spm-anchor-id="a313x.7781069.0.i7"
            width="24"
            height="24"
          >
            <path
              d="M512 148.5c49.1 0 96.7 9.6 141.5 28.5 43.3 18.3 82.2 44.5 115.6 77.9 33.4 33.4 59.6 72.3 77.9 115.6 18.9 44.8 28.5 92.4 28.5 141.5s-9.6 96.7-28.5 141.5c-18.3 43.3-44.5 82.2-77.9 115.6-33.4 33.4-72.3 59.6-115.6 77.9-44.8 18.9-92.4 28.5-141.5 28.5s-96.7-9.6-141.5-28.5c-43.3-18.3-82.2-44.5-115.6-77.9-33.4-33.4-59.6-72.3-77.9-115.6-18.9-44.8-28.5-92.4-28.5-141.5s9.6-96.7 28.5-141.5c18.3-43.3 44.5-82.2 77.9-115.6s72.3-59.6 115.6-77.9c44.8-18.9 92.4-28.5 141.5-28.5m0-50C283.6 98.5 98.5 283.6 98.5 512S283.6 925.5 512 925.5 925.5 740.4 925.5 512 740.4 98.5 512 98.5z"
              p-id="3170"
              data-spm-anchor-id="a313x.7781069.0.i6"
              class="selected"
              fill="#e6e6e6"
            ></path>
            <path
              d="M512 401m-106 0a106 106 0 1 0 212 0 106 106 0 1 0-212 0Z"
              p-id="3171"
            ></path>
            <path
              d="M514.5 540.8c-105.1 0-195 68.8-231.6 166.2 28.2 27.9 60.4 50.1 95.9 65.9 40.2 18 83 27.1 127.1 27.1s86.9-9.1 127.1-27.1c38.9-17.4 73.8-42.3 103.8-74.1 1.4-1.5 2.7-3 4.1-4.4-39.2-90.6-125.8-153.6-226.4-153.6z"
              p-id="3172"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="userTimNo">
      <div class="userModel" v-if="userModel == 'on'">
        <div class="user-img-Div">
          <div class="user-img-frame">
            <img class="user-img-cak" :src="userImg" />
          </div>
        </div>
        <div class="user-info-Text-Name">
          <span>{{ userName }}</span>
        </div>
        <div class="user-info-scp">
          <div class="user-info-left">
            <div class="user-info-vip">
              <span v-if="userVip == ''">未开头会员</span>
              <span v-else>{{ userVip }}</span>
            </div>
          </div>
          <div class="user-info-right">
            <div class="user-info-level">
              <span>Lv.{{ userLevel }}</span>
            </div>
          </div>
        </div>
        <div class="user-info-san">
          <table>
            <tr>
              <td>
                <div class="user-info-tab">
                  <div class="user-info-tab-txt1">{{ bo1 }}</div>
                  <div class="user-info-tab-txt2">关注</div>
                </div>
              </td>
              <td>
                <div class="user-info-tab">
                  <div class="user-info-tab-txt1">{{ bo2 }}</div>
                  <div class="user-info-tab-txt2">粉丝</div>
                </div>
              </td>
              <td>
                <div class="user-info-tab">
                  <div class="user-info-tab-txt1">{{ bo3 }}</div>
                  <div class="user-info-tab-txt2">硬币</div>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div class="user-info-Options">
          <div class="user-info-card">
            <div class="DaoHanCardLeftProssNo"></div>
            <div class="DaoHanCardIcon">
              <svg
                t="1641692814308"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5571"
                width="15"
                height="15"
              >
                <path
                  d="M368.435396 1014.626174c20.229318-71.01884 43.894256-140.980565 66.405979-211.290658q9.706228-30.331964 19.016039-60.784055c2.270393-7.447849-3.940152-15.280102-11.580203-15.208026-4.889152 0-10.414975 0-14.739533 2.630772a12.361026 12.361026 0 0 0-1.105165 20.301394c6.510861 5.189469 19.052077 4.120342 24.337647-2.402532 3.099266-3.832038 4.588836-8.336785 2.486621-13.117823a12.012659 12.012659 0 0 0-10.97957-7.387786c-33.635445 0.504532-67.27089-0.132139-100.906336-0.312329-16.901811-0.096101-33.803622-0.060063-50.705433 0.300317-15.964824 0.348367-31.881597 1.201266-47.858433 0.76881-26.65609-0.792835-54.957915-4.684937-69.997764-29.310888a54.62156 54.62156 0 0 1-6.967342-16.973887c-1.561646-6.95533-0.816861-14.415191-0.840886-21.622786q-0.084089-25.767153-0.336355-51.534307c-0.54057-68.099764-0.600633-136.103426 3.291469-204.119101 3.687886-64.507979 15.736583-128.054944 34.476331-189.800011a745.853982 745.853982 0 0 1 33.635445-90.094942q10.114659-22.463672 21.358508-44.446839c7.291684-14.18695 15.616457-27.545027 23.917204-41.107318 4.240469-6.895266 8.288735-13.898646 11.904545-21.130268l-21.959141-9.26176c-2.030139 5.87419-5.706013 11.231836-9.538051 16.084951l18.871887 14.559342c3.603798-7.507912 8.252697-14.343115 12.625305-21.382533h-20.757875c11.724355 17.03395 21.118254 35.437344 29.86347 54.141054 4.324557 9.237735 8.516975 18.535533 12.841532 27.773268 4.432671 9.477988 8.553013 19.784849 14.210976 28.602141 3.087253 4.805064 8.841317 8.817292 14.679469 8.817291s12.204861-4.600848 17.34628-7.00338q13.05776-6.006329 26.535963-10.907494a386.807618 386.807618 0 0 1 57.925042-16.433317 340.703033 340.703033 0 0 1 117.940285-2.690836c20.529634 3.159329 40.939142 8.589051 60.736004 14.871672 18.223204 5.778089 34.272116 18.199178 53.228092 21.622786 8.168608 1.48957 15.304128-2.090203 18.211191-10.054596 1.849949-5.093367 3.964177-10.126671 6.114443-15.123937q6.77514-15.796647 14.222988-31.232914a592.596479 592.596479 0 0 1 34.236078-61.540851h-20.7819c4.372608 7.051431 9.045532 13.886634 12.625305 21.382533l18.871887-14.559343c-3.832038-4.805064-7.495899-10.21076-9.538051-16.08495l-21.959141 9.26176c16.325204 27.953457 31.977698 56.303332 46.368864 85.289878q10.715292 21.622786 20.42152 43.666015c2.943101 6.727089 5.213494 13.658393 8.048482 20.421521 2.991152 7.207595 6.426773 14.018773 9.021507 21.334482 10.811393 30.319951 16.949862 62.52589 23.905191 93.890942s13.213925 63.186586 17.814773 95.128246c2.294418 15.90476 1.609696 32.30204 2.018127 48.362965 0.420443 16.62552 0.900949 33.239027 1.30938 49.864548 0.828873 33.347141 1.393468 66.718308 0.792835 100.077461-0.300316 16.817723-0.900949 33.563369-1.898 50.309016-0.900949 15.171988-1.009063 30.920584-5.64595 45.503952-7.339735 23.136381-25.719103 46.561066-50.753484 51.077826-15.616457 2.810962-32.097825 3.123291-47.894471 3.796-16.529419 0.696734-33.07085 0.876924-49.612281 0.792836-32.794559-0.168177-65.577105-1.35743-98.383677-1.201266q-12.553229 0-25.094445 0.372392c-13.069773 0.348367-16.901811 20.661773-3.195367 23.592862a43.113433 43.113433 0 0 0 10.282836 0.54057c2.762912-0.072076 6.643 0.18019 9.225722-0.756797 11.736368-4.240469 10.967558-18.667672 0-23.172419-4.420658-1.813912-11.844482-0.336354-16.313191-0.204216-7.315709 0.216228-14.259026 7.579988-11.580203 15.208027 24.493812 69.673422 44.446838 140.920502 66.069624 211.554936q9.369874 30.560204 19.29233 60.940219a12.276937 12.276937 0 0 0 14.775571 8.408861c6.006329-1.657747 10.426988-8.589051 8.408861-14.77557-23.184432-70.466257-42.945256-141.989629-65.444966-212.624064q-9.610127-30.031647-19.953026-59.835054l-11.580203 15.208026c3.279456-0.096101 6.570924-0.192203 9.85038-0.240253h2.07819c1.885987-0.120127 1.285355 0.961013-2.006114-0.384405v-23.304558c3.363545-1.201266 3.279456-0.324342 1.069127-0.252266-1.297367 0-2.606747 0.120127-3.904115 0.156165s-2.570709 0.072076-3.856063 0.060063c-1.66976 0-5.213494-0.840886 0 0.264278l-3.195367 23.592863c67.835485-1.825924 135.743046 4.048266 203.53048-1.873975 16.433317-1.441519 31.881597-3.003165 46.344838-11.616241a97.386626 97.386626 0 0 0 32.049774-31.461154 107.669462 107.669462 0 0 0 16.060925-40.20637c2.943101-17.358292 3.327507-35.449357 4.15638-53.011864 3.219393-68.640333 0.096101-137.328717-1.405481-205.96905-0.192203-8.889368 0-17.778735-1.201266-26.596027q-1.741836-12.853545-3.808012-25.659039c-2.61876-16.205077-5.621924-32.338078-8.889368-48.423029-6.655013-32.698458-13.862608-65.420941-22.391596-97.686942a333.519463 333.519463 0 0 0-17.033951-47.690256c-3.039203-7.027405-5.357646-14.331102-8.408861-21.382533q-5.045317-11.70033-10.426988-23.256508c-13.994748-30.151774-29.50309-59.594801-45.876344-88.521284q-6.114443-10.811393-12.385052-21.514672c-6.679038-11.436051-26.523951-3.928139-21.95914 9.26176 3.495684 10.066608 9.165659 18.391381 15.712557 26.692128 3.603798 4.636886 11.568191 4.288519 15.772622 0.936988 4.92519-3.916127 5.742051-9.934469 3.099266-15.49633-3.603798-7.507912-8.252697-14.343115-12.625305-21.382533a12.156811 12.156811 0 0 0-20.745862 0 584.355795 584.355795 0 0 0-31.076749 55.078041q-6.811178 13.730469-13.021722 27.749242-3.327507 7.483887-6.510861 15.039849-1.681772 3.964177-3.339519 7.940368l-1.753848 4.252481c-0.264278 0.636671-2.042152 3.507696-0.732773 1.66976l4.312545-4.312545 0.888937-0.312329h6.390734c-10.487051-1.922025-19.556609-6.799165-28.986546-11.52014a197.83648 197.83648 0 0 0-32.818584-12.661343 410.160227 410.160227 0 0 0-72.424321-15.051861 370.110022 370.110022 0 0 0-138.325768 11.808444 437.705254 437.705254 0 0 0-74.418422 28.638178l9.26176-1.201265c0.708747 0.156165 1.693785 1.53762 1.994102 1.021076a30.031647 30.031647 0 0 0-2.138254-4.072292q-1.681772-3.255431-3.315494-6.534886c-2.402532-4.87714-4.805064-9.80233-7.123506-14.739533-4.468709-9.502013-8.781254-19.088115-13.213925-28.602141-8.865342-18.980001-18.34333-37.671698-30.247875-54.957914-5.10538-7.423823-15.760609-8.048481-20.745862 0-4.372608 7.051431-9.045532 13.886634-12.625305 21.382533-2.570709 5.393684-1.946051 11.724355 3.099266 15.49633 4.324557 3.231405 12.012659 3.820026 15.772621-0.936988 6.546899-8.300747 12.216874-16.613507 15.712558-26.692128 4.432671-12.769456-15.85671-21.442596-21.95914-9.26176-7.327722 14.643431-16.517406 28.169685-25.022369 42.128395-8.697165 14.259026-15.832684 29.743344-23.016255 44.807218-14.715507 30.848508-28.001508 62.321675-38.668749 94.803904-20.890014 63.667092-35.052939 129.532501-40.494673 196.334898-5.681988 69.769523-5.321608 139.959489-4.805064 209.89719l0.384405 52.531357c0.096101 16.349229-1.71781 33.635445 3.940153 49.251902 5.273557 14.595381 14.415191 27.917419 26.764204 37.311319 11.436051 8.661127 25.430799 13.850596 39.509635 16.193064 33.383179 5.561861 67.391017 2.114228 101.014449 1.873975 34.836711-0.252266 69.673422 0.552582 104.510133 0.516544q12.841532 0 25.683065-0.204215l-8.49295-20.505609q-0.912962 1.021076 0.336354-0.096101a5.237519 5.237519 0 0 1 2.402532-1.285355c-1.970076 0.696734 2.330456-0.264278 0.888937 0a6.23457 6.23457 0 0 1-1.573658 0c2.750899 0.36038 2.907063-0.576608 6.210544 2.786937l3.087254 5.297583v-0.168177l-1.201266 9.26176 0.096101-0.168178-4.312544 4.312545q-3.675874 1.30938-1.693785 0.732772-2.594734 0.264278-0.973026 0.108114c1.681772 0.132139 3.603798-0.18019 5.28557-0.192202l-11.580203-15.208027c-21.50266 70.718523-45.467914 140.656224-67.27089 211.266633q-9.369874 30.307939-18.103077 60.80808c-4.240469 14.895697 18.931951 21.250394 23.172419 6.390735z"
                  fill="#2CA6E0"
                  p-id="5572"
                ></path>
                <path
                  d="M630.203247 456.782318a63.438852 63.438852 0 0 1-11.111709 89.554372c-25.538913 19.676735-62.766143 16.457343-84.821385-6.883254a64.195649 64.195649 0 0 1-16.817723-50.020711l-2.979139 5.189468 1.201266-0.58862-9.03352-5.189469a63.366776 63.366776 0 0 1-51.870661 69.024739c-31.232913 5.814127-62.862244-13.850596-71.895764-44.146522a63.871308 63.871308 0 0 1 10.919507-57.528624c2.018127-2.534671 2.474608-6.006329 0-8.49295-2.090203-2.090203-6.462811-2.558696-8.49295 0a76.724853 76.724853 0 0 0-15.868722 61.336637 74.898929 74.898929 0 0 0 27.292761 45.443889 75.331384 75.331384 0 0 0 121.916475-65.625156c-0.40843-4.612861-4.805064-7.375773-9.033519-5.189469a7.027405 7.027405 0 0 0-4.180405 6.318659 64.940434 64.940434 0 0 0-0.228241 8.589051 78.310524 78.310524 0 0 0 1.922026 14.643431 73.901878 73.901878 0 0 0 11.063658 25.29866 75.391448 75.391448 0 0 0 134.457692-20.625735c7.339735-24.085381 1.645734-50.05675-13.898646-69.601346-2.018127-2.546684-6.378722-2.114228-8.49295 0-2.510646 2.510646-2.030139 6.006329 0 8.49295z"
                  fill="#2CA6E0"
                  p-id="5573"
                ></path>
              </svg>
            </div>
            <div class="user-CardText">个人中心</div>
            <div class="DaoHanCardRightIcon">
              <svg
                t="1641653233571"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4948"
                width="12"
                height="12"
              >
                <path
                  d="M724.529245 490.752075L342.766527 108.889366c-11.698858-11.698858-30.697002-11.698858-42.39586 0s-11.698858 30.697002 0 42.39586l381.762718 381.862709c11.698858 11.698858 30.697002 11.698858 42.39586 0 11.798848-11.698858 11.798848-30.697002 0-42.39586z"
                  p-id="4949"
                ></path>
                <path
                  d="M724.629235 489.852163c-11.698858-11.698858-30.697002-11.698858-42.395859 0l-381.962699 381.962699c-11.698858 11.698858-11.698858 30.697002 0 42.39586s30.697002 11.698858 42.395859 0l381.962699-381.962699c11.698858-11.698858 11.698858-30.697002 0-42.39586z"
                  p-id="4950"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="user-info-Options">
          <div class="user-info-card">
            <div class="DaoHanCardLeftProssNo"></div>
            <div class="DaoHanCardIcon">
              <svg
                t="1641692692410"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3831"
                width="14"
                height="14"
              >
                <path
                  d="M515.904 511.936m-416 0a416 416 0 1 0 832 0 416 416 0 1 0-832 0Z"
                  fill="#AEECFF"
                  p-id="3832"
                ></path>
                <path
                  d="M942.528 585.024a38.272 38.272 0 0 1-38.208 38.144H466.432a38.208 38.208 0 0 1-38.144-38.144V298.688c0-20.992 17.152-38.144 38.144-38.144h437.888c20.992 0 38.208 17.152 38.208 38.144v286.336z"
                  fill="#CCCCCC"
                  p-id="3833"
                ></path>
                <path
                  d="M466.432 298.688h437.888V584.96H466.432z"
                  fill="#E8E8E8"
                  p-id="3834"
                ></path>
                <path
                  d="M795.328 357.056H247.808a38.272 38.272 0 0 0-38.144 38.144v305.344c0 20.992 17.152 38.144 38.144 38.144h365.12l80.96 104 80.832-104h20.672a38.272 38.272 0 0 0 38.208-38.144V395.2a38.4 38.4 0 0 0-38.272-38.144z"
                  fill="#0093FF"
                  p-id="3835"
                ></path>
                <path
                  d="M631.552 700.48H247.808v-305.28h547.52v305.28h-39.296l-62.208 79.872z"
                  fill="#FFFFFF"
                  p-id="3836"
                ></path>
                <path
                  d="M388.992 542.592m-38.144 0a38.144 38.144 0 1 0 76.288 0 38.144 38.144 0 1 0-76.288 0Z"
                  fill="#0093FF"
                  p-id="3837"
                ></path>
                <path
                  d="M521.472 542.592m-38.208 0a38.208 38.208 0 1 0 76.416 0 38.208 38.208 0 1 0-76.416 0Z"
                  fill="#0093FF"
                  p-id="3838"
                ></path>
                <path
                  d="M654.08 542.592m-38.144 0a38.144 38.144 0 1 0 76.288 0 38.144 38.144 0 1 0-76.288 0Z"
                  fill="#0093FF"
                  p-id="3839"
                ></path>
              </svg>
            </div>
            <div class="user-CardText">消息</div>
            <div class="DaoHanCardRightIcon">
              <svg
                t="1641653233571"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4948"
                width="12"
                height="12"
              >
                <path
                  d="M724.529245 490.752075L342.766527 108.889366c-11.698858-11.698858-30.697002-11.698858-42.39586 0s-11.698858 30.697002 0 42.39586l381.762718 381.862709c11.698858 11.698858 30.697002 11.698858 42.39586 0 11.798848-11.698858 11.798848-30.697002 0-42.39586z"
                  p-id="4949"
                ></path>
                <path
                  d="M724.629235 489.852163c-11.698858-11.698858-30.697002-11.698858-42.395859 0l-381.962699 381.962699c-11.698858 11.698858-11.698858 30.697002 0 42.39586s30.697002 11.698858 42.395859 0l381.962699-381.962699c11.698858-11.698858 11.698858-30.697002 0-42.39586z"
                  p-id="4950"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="user-info-Options">
          <div class="user-info-card">
            <div class="DaoHanCardLeftProssNo"></div>
            <div class="DaoHanCardIcon">
              <svg
                t="1641692607131"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2923"
                width="14"
                height="14"
              >
                <path
                  d="M512 68.266667C266.922667 68.266667 68.266667 266.922667 68.266667 512s198.656 443.733333 443.733333 443.733333 443.733333-198.656 443.733333-443.733333S757.077333 68.266667 512 68.266667z m0 68.266666c207.36 0 375.466667 168.106667 375.466667 375.466667s-168.106667 375.466667-375.466667 375.466667S136.533333 719.36 136.533333 512 304.64 136.533333 512 136.533333z"
                  fill="#444444"
                  p-id="2924"
                ></path>
                <path
                  d="M546.133333 307.2v206.5408l142.148267 126.344533-45.3632 51.029334L477.866667 544.392533V307.2z"
                  fill="#00B386"
                  p-id="2925"
                ></path>
              </svg>
            </div>
            <div class="user-CardText">观看历史</div>
            <div class="DaoHanCardRightIcon">
              <svg
                t="1641653233571"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4948"
                width="12"
                height="12"
              >
                <path
                  d="M724.529245 490.752075L342.766527 108.889366c-11.698858-11.698858-30.697002-11.698858-42.39586 0s-11.698858 30.697002 0 42.39586l381.762718 381.862709c11.698858 11.698858 30.697002 11.698858 42.39586 0 11.798848-11.698858 11.798848-30.697002 0-42.39586z"
                  p-id="4949"
                ></path>
                <path
                  d="M724.629235 489.852163c-11.698858-11.698858-30.697002-11.698858-42.395859 0l-381.962699 381.962699c-11.698858 11.698858-11.698858 30.697002 0 42.39586s30.697002 11.698858 42.395859 0l381.962699-381.962699c11.698858-11.698858 11.698858-30.697002 0-42.39586z"
                  p-id="4950"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="user-Live">
          <div class="user-Live-info"></div>
        </div>
        <div class="user-info-Options">
          <div class="user-info-card">
            <div class="DaoHanCardLeftProssNo"></div>
            <div class="DaoHanCardIcon">
              <svg
                t="1641653682015"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="6808"
                width="14"
                height="14"
              >
                <path
                  d="M874.666667 855.744a19.093333 19.093333 0 0 1-19.136 18.922667H168.469333A19.2 19.2 0 0 1 149.333333 855.530667V168.469333A19.2 19.2 0 0 1 168.469333 149.333333h687.061334c10.581333 0 19.136 8.533333 19.136 18.922667V320h42.666666V168.256A61.717333 61.717333 0 0 0 855.530667 106.666667H168.469333A61.866667 61.866667 0 0 0 106.666667 168.469333v687.061334A61.866667 61.866667 0 0 0 168.469333 917.333333h687.061334A61.76 61.76 0 0 0 917.333333 855.744V704h-42.666666v151.744zM851.84 533.333333l-131.797333 131.754667a21.141333 21.141333 0 0 0 0.213333 29.973333 21.141333 21.141333 0 0 0 29.973333 0.192l165.589334-165.589333a20.821333 20.821333 0 0 0 6.122666-14.976 21.44 21.44 0 0 0-6.314666-14.997333l-168.533334-168.533334a21.141333 21.141333 0 0 0-29.952-0.213333 21.141333 21.141333 0 0 0 0.213334 29.973333L847.296 490.666667H469.333333v42.666666h382.506667z"
                  fill="#3D3D3D"
                  p-id="6809"
                ></path>
              </svg>
            </div>
            <div class="user-CardText">退出登录</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
const { ipcRenderer } = require("electron");
import qs from "qs";
var QRCode = require("qrcode");
const { session } = require("electron").remote;
// const Cookie = require("../utils/cookie.js");

export default {
  name: "titleBlock",
  data() {
    return {
      userModel: "off",
      bo3: "9",
      bo2: "2",
      bo1: "181",
      userLevel: "5",
      userVip: "年度大会员",
      userName: "盛为梦",
      userIst: "off",
      userImg: "",
      searchValue: "",
      uid: "",
      modal2: false,
      modal3: false,
      oauthKey: "",
      interval: [],
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
    modalTui: {
      get() {
        return this.$store.getters.getModalTui;
      },
      set(val) {
        this.SET_MODALTUI(val);
      },
    },
  },
  created() {
    const BiliCSRF = "DedeUserID";
    const domain = ".bilibili.com";
    //查询
    // 查询所有 cookies。
    session.defaultSession.cookies
      .get({ name: BiliCSRF, domain })
      .then((cookies) => {
        console.log("查询的cookies");
        console.log(cookies);
        if (cookies[0].value) {
          //有cookies, 直接走用户信息接口
          // console.log(cookies[0].value);
          this.uid = cookies[0].value;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  watch: {
    modalTui: function (newValue, oldValue) {
      console.log(oldValue);
      console.log(newValue);
      console.log("nodalTui改变");
      // this.uid = newValue;
      if (newValue == false) {
        for (var i = 0; i < this.interval.length; i++) {
          clearInterval(this.interval[i]);
        }
        this.interval.length = 0;
      }
    },
    modal2(newValue, oldValue) {
      console.log(oldValue);
      console.log(newValue);
      if (newValue == false) {
        for (var i = 0; i < this.interval.length; i++) {
          clearInterval(this.interval[i]);
        }
        this.interval.length = 0;
      }
    },
    uid(newValue, oldValue) {
      console.log(oldValue);
      console.log(newValue);
      this.loginInfo();
    },
  },
  methods: {
    ...mapMutations(["SET_MODALTUI", "SET_VIEW", "SET_OVERALLBACKHROUNDCOLOR"]),
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
    refresh() {
      let options = {
        margin: 0,
        version: 8,
      };
      axios
        .get("http://passport.bilibili.com/qrcode/getLoginUrl")
        .then((resp) => {
          this.oauthKey = resp.data["data"]["oauthKey"];

          QRCode.toDataURL(resp.data["data"]["url"], options)
            .then((url) => {
              console.log(url);
              document.getElementById("imgSrc").src = url;
              this.$Message.success("刷新~");
            })
            .catch((err) => {
              console.error(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    login() {
      console.log("登录" + this.uid);
      if (!this.uid) {
        var _this = this;
        let options = {
          margin: 0,
          version: 8,
        };
        axios
          .get("http://passport.bilibili.com/qrcode/getLoginUrl")
          .then((resp) => {
            this.oauthKey = resp.data["data"]["oauthKey"];

            QRCode.toDataURL(resp.data["data"]["url"], options)
              .then((url) => {
                console.log(url);
                document.getElementById("imgSrc").src = url;
                //开始定时请求登录,2秒一次
                let Interval = setInterval(this.loginTime, 2000);
                _this.interval.push(Interval);
              })
              .catch((err) => {
                console.error(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });

        // this.modal2 = true;
        this.modalTui = true;
      } else if (this.uid && this.userModel == "off") {
        this.userModel = "on";
      } else if (this.uid && this.userModel == "on") {
        this.userModel = "off";
      }
    },
    closeModal2() {
      this.modal2 = false;
      clearInterval(this.interval);
    },
    loginTime() {
      console.log(this.oauthKey);
      var params = { oauthKey: this.oauthKey };
      axios({
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: qs.stringify(params),
        url: "http://passport.bilibili.com/qrcode/getLoginInfo",
      })
        .then((resp) => {
          console.log("请求登录结果");
          console.log(resp.data);
          if (resp.data["status"] == true) {
            console.log("成功扫描");
            console.log(resp.data["data"]);
            //DedeUserID=***&DedeUserID__ckMd5=***&Expires=***&SESSDATA=***&bili_jct=***&gourl=http%3A%2F%2Fwww.bilibili.com"
            var DedeUserIDIndex1 =
              resp.data["data"]["url"].indexOf("?DedeUserID=");
            var DedeUserIDIndex2 = resp.data["data"]["url"].indexOf(
              "&DedeUserID__ckMd5="
            );
            var DedeUserID__ckMd5Index1 = resp.data["data"]["url"].indexOf(
              "&DedeUserID__ckMd5="
            );
            var DedeUserID__ckMd5Index2 =
              resp.data["data"]["url"].indexOf("&Expires=");
            var ExpiresIndex1 = resp.data["data"]["url"].indexOf("&Expires=");
            var ExpiresIndex2 = resp.data["data"]["url"].indexOf("&SESSDATA=");
            var SESSDATAIndex1 = resp.data["data"]["url"].indexOf("&SESSDATA=");
            var SESSDATAIndex2 = resp.data["data"]["url"].indexOf("&bili_jct=");
            var bili_jctIndex1 = resp.data["data"]["url"].indexOf("&bili_jct=");
            var bili_jctIndex2 = resp.data["data"]["url"].indexOf("&gourl=");

            var DedeUserID = resp.data["data"]["url"].substring(
              DedeUserIDIndex1 + 1,
              DedeUserIDIndex2
            );
            var DedeUserID__ckMd5 = resp.data["data"]["url"].substring(
              DedeUserID__ckMd5Index1 + 1,
              DedeUserID__ckMd5Index2
            );
            var SESSDATA = resp.data["data"]["url"].substring(
              SESSDATAIndex1 + 1,
              SESSDATAIndex2
            );
            var Expires = resp.data["data"]["url"].substring(
              ExpiresIndex1 + 1,
              ExpiresIndex2
            );
            var bili_jct = resp.data["data"]["url"].substring(
              bili_jctIndex1 + 1,
              bili_jctIndex2
            );
            var gourl = resp.data["data"]["url"].substring(
              bili_jctIndex2 + 1,
              resp.data["data"]["url"].length
            );
            clearInterval(this.interval);
            console.log(
              "DedeUserID：" +
                DedeUserID.substring(DedeUserID.indexOf("="), DedeUserID.length)
            );
            console.log(
              "DedeUserID__ckMd5：" +
                DedeUserID__ckMd5.substring(
                  DedeUserID__ckMd5.indexOf("="),
                  DedeUserID__ckMd5.length
                )
            );
            console.log(
              "SESSDATA：" +
                SESSDATA.substring(SESSDATA.indexOf("="), SESSDATA.length)
            );
            console.log(
              "Expires：" +
                Expires.substring(Expires.indexOf("="), Expires.length)
            );
            console.log(
              "bili_jct：" +
                bili_jct.substring(bili_jct.indexOf("="), bili_jct.length)
            );
            console.log(
              "gourl：" + gourl.substring(gourl.indexOf("="), gourl.length)
            );
            //写入cookie
            // Cookie.setCookie(
            //    gourl.substring(gourl.indexOf("="),gourl.length),
            //   DedeUserID.substring(DedeUserID.indexOf("="),DedeUserID.length),
            //   DedeUserID__ckMd5.substring(DedeUserID__ckMd5.indexOf("="),DedeUserID__ckMd5.length),
            //   SESSDATA.substring(SESSDATA.indexOf("="),SESSDATA.length),
            //    Expires.substring(Expires.indexOf("="),Expires.length),
            //    bili_jct.substring(bili_jct.indexOf("="),bili_jct.length)
            // );
            this.uid = DedeUserID.substring(
              DedeUserID.indexOf("=") + 1,
              DedeUserID.length
            );
            this.modalTui = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loginInfo() {
      axios
        .get("http://api.bilibili.com/x/space/acc/info?mid=" + this.uid)
        .then((resp) => {
          console.log("个人用户空间详细信息");
          console.log(resp.data);
          this.uid = resp.data["data"]["mid"];
          this.userName = resp.data["data"]["name"];
          this.userImg = resp.data["data"]["face"];
          this.userLevel = resp.data["data"]["level"];
          this.userVip = resp.data["data"]["vip"]["label"]["text"];
          this.userIst = "on";
          this.$Message.success("登录成功");
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get("http://api.bilibili.com/x/web-interface/card?mid=" + this.uid)
        .then((resp) => {
          this.bo1 = resp.data["data"]["card"]["friend"];
          this.bo2 = resp.data["data"]["card"]["fans"];
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get("http://api.bilibili.com/x/space/acc/info?mid=" + this.uid)
        .then((resp) => {
          this.bo3 = resp.data["data"]["coins"];
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.DaoHanCardRightIcon {
  float: right;
  width: 40px;
  height: 100%;
  padding-top: 8px;
  padding-left: 13px;
}
.user-CardText {
  float: left;
  width: 60px;
  height: 100%;
  padding-top: 5px;
  text-align: left;
}
.user-Live-info {
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
  margin-top: 4px;
  margin-bottom: 3px;
}
.user-Live {
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
}
.user-info-card {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  box-shadow: none;
  -webkit-app-region: no-drag;
  cursor: default;
  padding-left: 5px;
}
.user-info-card:hover {
  background-color: #eaeaea;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: rgb(180, 26, 26);
  transition: all 0.2s ease-in-out;
}
.user-info-Options {
  padding: 5px;
  width: 100%;
  height: 35px;
  padding-top: 0px;
  padding-bottom: 0px;
}
.user-info-tab-txt1 {
  font-size: 10px;
  /* padding-left: 8px; */
}
.user-info-tab-txt2 {
  font-size: 12px;
  color: #d2d4d7;
}
.user-info-tab {
  width: 55px;
  height: 35px;
  margin-left: 10px;
  box-shadow: none;
  -webkit-app-region: no-drag;
  cursor: default;
  text-align: center;
}
.user-info-tab:hover {
  background-color: #eaeaea;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  border-color: rgb(180, 26, 26);
  transition: all 0.2s ease-in-out;
}
.user-info-san {
  width: 100%;
  height: 45px;
  /* padding-left: 15px; */
  /* padding-right: 30px; */
}
.user-info-level {
  height: 22px;
  width: 40px;
  background-color: #ff6c00;
  color: #fff;
  text-align: center;
  font-size: 12px;
  border-radius: 5px;
  float: left;
  padding: 2px;
  margin-left: 10px;
}
.user-info-vip {
  height: 22px;
  width: 70px;
  background-color: #fb7299;
  color: #fff;
  text-align: center;
  font-size: 12px;
  border-radius: 5px;
  float: right;
  padding: 2px;
}
.user-info-right {
  float: right;
  width: 50%;
  height: 100%;
}
.user-info-left {
  float: left;
  width: 50%;
  height: 100%;
}
.user-info-scp {
  width: 100%;
  height: 30px;
  margin-top: 6px;
}
.user-info-Text-Name {
  width: 100%;
  height: 25px;
  text-align: center;
  font-size: 15px;
  color: #fb7299;
  padding-top: 3px;
}
.user-img-cak {
  background-color: #dcdcdc;
  border: 1px solid #e5e5e5;
  width: 100%;
  height: 100%;
  border-radius: 25px;
}
.user-img-frame {
  border-radius: 25px;
  width: 45px;
  height: 45px;
  margin: auto;
  /* position: absolute; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.user-img-Div {
  width: 100%;
  height: 45px;
  margin-top: 10px;
}
.userModel {
  width: 220px;
  height: 320px;
  border-radius: 8px;
  background-color: #fdfdfd;
  border: 1px solid #e5e5e5;
  position: absolute;
  z-index: 3;
  box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15);
}
.aside-user-Img {
  width: 100%;
  height: 100%;
  border-radius: 24px;
}
.aside-user-divT {
  width: 24px;
  height: 24px;
  border-radius: 24px;
}
.userBk {
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: #dcdcdc;
  -webkit-app-region: no-drag;
}
.userTimNo {
  width: 30px;
  height: 30px;
  /* background: #009966; */
  float: right;
  padding-top: 35px;
  position: relative;
  margin-right: 75px;
}
.userTim {
  width: 30px;
  height: 30px;
  /* background: #009966; */
  float: right;
  padding-top: 6px;
  position: relative;
}
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
  position: absolute;
}
</style>
