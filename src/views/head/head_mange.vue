<template>
  <div class="header">
    <a class="logo" href="/">
      <h3>南昌航空大学</h3>
    </a>
    <nav class="navbar">
      <ul>
        <li><a href="#" @click="toHome">我的信息</a></li>
        <li><a href="#" @click="toParty">入党审批</a></li>
        <li><a href="#" @click="toStudent_message">学生管理</a>
          <ul class="hide">
            <li><a href="#" @click="toStudent_message">信息管理</a></li>
            <li><a href="#" @click="toStudent_score">成绩管理</a></li>
          </ul>
        </li>
        <li><a href="#" @click="toCadre">班干管理</a>
        </li>
        <li><a href="#" @click="toMoney">奖学金审批</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
name: "head_mange",
  methods:{
  toHome(){
    if (this.$route.name === 'home') return;
    this.$navTo('/teacher/home')
  },
    toParty(){
      if (this.$route.name === 'party') return;
      this.$navTo('/teacher/party')
    },
    toStudent_message(){
      if (this.$route.name === 'student_m') return;
      this.$navTo('/teacher/student_message')
    },
    toStudent_score(){
      if (this.$route.name === 'student_s') return;
      this.$navTo('/teacher/student_score')
    },
    toMoney(){
      if (this.$route.name === 'money') return;
      this.$navTo('/teacher/money')
    },
    toCadre(){
      if (this.$route.name === 'cadre') return;
      this.$navTo('/teacher/cadre')
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/header.css";
</style>