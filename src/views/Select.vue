<template>
  <div class="d-flex flex-row" style="width: 100%; height: 100%;">
    <div region="west" class="west"
         style="text-align: center; width: 55%;background-color: antiquewhite;">

      <h2 style="text-align: center;color:deepskyblue;margin-top: 20px;">学&nbsp;&nbsp;&nbsp;&nbsp;生</h2>
      <img :src="require('../assets/img/student.jpg')" @click="toStudent" >
    </div>
    <div region="center" class="center flex-fill"
         style="text-align: center;background-color:blanchedalmond ;" >
      <h2 style="text-align: center;color:deepskyblue;margin-top: 20px;">辅导员</h2>
      <img :src="require('../assets/img/teacher2.jpg')" @click="toTeacher">


    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  methods:{
    toTeacher(){
      this.$navTo('/teacher');
    },
    toStudent(){
      this.$navTo('/student');
    }
  }

}
</script>

<style scoped>
@import "../assets/css/home.css";
</style>