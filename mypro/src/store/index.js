//--->引入vue、vuex模块
import Vue from "vue";
import vuex from 'vuex';
Vue.use(vuex);
// import createPersistedState from "vuex-persist"
// const vuexLocal=new createPersistedState({
//     storage:window.localStorage
// })
//-->创建
var store=new vuex.Store({
    state:{
        
    },
    modules:{
       
    }
})

//--->导出
export default store;