<template>
  <div>
    <div class="header">
      <a href="/" class="logo">
        <h1>南昌航空大学</h1>
      </a>
      <nav class="navbar">
        <ul>
          <li><a href="#">我的信息</a></li>
          <li><a href="#" @click="toParty">入党申请填写</a></li>
          <li><a href="#" @click="toMoney">奖学金申报</a></li>
          <li><a href="#">成绩查询</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
name: "head_student",
  methods:{
  toMoney() {
    if (this.$route.name === 'money') return;
    this.$navTo('/student/money')
  },
    toParty() {
      if (this.$route.name === 'party') return;
      this.$navTo('/student/party')
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/header.css";
</style>