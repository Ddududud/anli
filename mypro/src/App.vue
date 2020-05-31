<template>
  <div id="app">
    <!-- 24小时流量走势图 -->
    <Tu></Tu>
    <!-- Top10应用以及流量展示 -->
    <Top></Top>
    <!-- 实事流量级人数显示 -->
    <Fachs></Fachs>
    <!-- Top10终端用户分布 -->
    <Terminal></Terminal>
  </div>
</template>

<script>
import Tu from "./components/time"
import Top from "./components/Top"
import Fachs from "./components/Facts"
import Terminal from "./components/terminal"
export default {
  name:'app',
  components:{Tu,Top,Fachs,Terminal}
}
</script>

<style lang="scss">
 *{
  margin: 0;
  padding: 0;
  list-style: none;
}
html,body,#app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

</style>