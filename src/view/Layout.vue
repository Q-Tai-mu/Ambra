<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-11-17 17:18:26
 * @LastEditTime: 2022-01-10 23:22:08
 * @LastEditors: MArio
-->
<template>
    <div id="layout" :style="overallbackgroundColor == 'shallow' ? '' : 'background-color: #202020;'">
        <TitleBlock/>
        <Aside v-show="play == 'noPlay'"/>
        <section class="home-section" v-show="play == 'noPlay'">
            <transition name="slide-fade">
                <Dailynewspaper v-show="view === 'No1On'"/>
            </transition>
            <transition name="slide-fade">
                <Hot v-show="view === 'No2On'"/>
            </transition>
            <transition name="slide-fade">
                <RankingList v-show="view === 'No3On'"/>
            </transition>
            <transition name="slide-fade">
                <Partition v-show="view === 'No4On'"/>
            </transition>
            <transition name="slide-fade">
                <Cosplay v-show="view === 'No5On'"/>
            </transition>
            <transition name="slide-fade">
                <Dynamic v-if="view === 'No6On'"/>
            </transition>
            <transition name="slide-fade">
                <UpHome v-show="view === 'No14On'"/>
            </transition>
            <transition name="slide-fade">
                <Fanju v-show="view === 'No7On'"/>
            </transition>
            <transition name="slide-fade">
                <WatchIstory v-show="view === 'Noa8On'"/>
            </transition>
            <transition name="slide-fade">
                <TVplay v-show="view === 'No10On'"/>
            </transition>
            <transition name="slide-fade">
                <Film v-show="view === 'No11On'"/>
            </transition>
            <transition name="slide-fade">
                <Help v-show="view === 'No12On'"/>
            </transition>
            <transition name="slide-fade">
                <Setup v-show="view === 'No13On'"/>
            </transition>
        </section>
        <Playback v-if="play =='Play'"/>
    </div>
</template>

<script>
    import TitleBlock from "../components/TitleBlock";
    import Aside from "../components/Aside.vue";
    import Dailynewspaper from "../components/Dailynewspaper.vue";
    import Setup from "../components/Setup.vue";
    import Help from "../components/Help.vue";
    import Hot from "../components/Hot.vue";
    import RankingList from "../components/RankingList.vue";
    import Partition from "../components/Partition.vue";
    import Cosplay from "../components/Cosplay.vue";
    import TVplay from "../components/TVplay";
    import Film from "../components/Film";
    import Fanju from "../components/Fanju";
    import Dynamic from "../components/Dynamic";
    import UpHome from "../components/UpHome.vue";
    import Playback from "../components/Playback";
    import {mapMutations} from "vuex";
    import WatchIstory from "../components/WatchIstory";

    export default {
        name: "layout",
        components: {
            WatchIstory,
            TitleBlock,
            Aside,
            Dailynewspaper,
            Setup,
            Help,
            Hot,
            RankingList,
            Partition,
            Cosplay,
            TVplay,
            Film,
            Fanju,
            UpHome,
            Dynamic,
            Playback
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
            play: {
                get() {
                    return this.$store.getters.getPlay;
                },
                set(val) {
                    this.SET_PLAY(val);
                }
            }
        },
        methods: {
            ...mapMutations(["SET_PLAY", "SET_VIEW", "SET_OVERALLBACKHROUNDCOLOR"]),
        }
    };
</script>

<style scoped>
    .layoutPan {
        padding-top: 55px;
        width: 100%;
        height: 100%;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 15px;
    }

    #layout {
        width: 100%;
        height: 100%;
        /* min-width: 1334px;
              min-height: 830px; */
        border-block-color: #fff;
        background-color: #f3f3f3;
        border-radius: 5px;
    }
</style>
