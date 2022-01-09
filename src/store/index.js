/*
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-11-28 20:43:07
 * @LastEditTime: 2022-01-07 22:41:16
 * @LastEditors: MArio
 */


import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        view: 'No1On',
        url: '',
        hurl: '',
        overallbackgroundColor: 'shallow',
        uPid: '',
        tabTable:'TabS1',
        modalTui:false,
    },
    getters: {
        getView: state => {
            return state.view;
        },
        getUrl: state => {
            return state.url;
        },
        getHurl: state => {
            return state.hurl;
        },
        getOverallbackgroundColor: state => {
            return state.overallbackgroundColor
        },
        getUPid: state => {
            return state.uPid;
        },
        getTabTable: state => {
            return state.tabTable;
        },
        getModalTui: state => {
            return state.modalTui;
        }
    },
    mutations: {
        SET_VIEW: (state, payload) => {
            state.view = payload;
        },
        SET_URL: (state, payload) => {
            state.url = payload;
        },
        SET_HURL: (state, payload) => {
            state.hurl = payload;
        },
        SET_OVERALLBACKHROUNDCOLOR: (state, payload) => {
            state.overallbackgroundColor = payload;
        },
        SET_UPID:(state,payload) => {
            state.uPid = payload;
        },
        SET_TABTABLE:(state,payload) => {
            state.tabTable = payload;
        },
        SET_MODALTUI:(state,payload) => {
            state.modalTui = payload;
        }
    }
});