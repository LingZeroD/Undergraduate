<template>
  <div id="div1">
    <h1>奖学金申请填写</h1>
    <div id="div2">
      <font>申请人：&nbsp;&nbsp;</font>
      <input type="text" class="text" v-model="name">
      <p/>
      <font>学 号：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font>
      <input type="text" class="text" v-model="no"/>
      <p/>
      <font>申请金额：</font>
      <input type="text" class="text" v-model="money">
      <p/>
      <font>申请理由：</font>
      <input type="text" class="text" v-model="context" style="width: 230px;"/>
      <p/>
    </div>
    <button @click="add" id="btn" v-show="!success">提交</button>
    <h3 class="message" v-show="success">提交成功</h3>
  </div>

</template>

<script>
export default {
  name: "Money_apply",
  data() {
    return {
      name: '',
      no: '',
      money: '',
      context: '',
      success: false
    }
  },
  methods: {
    add() {
      this.$util.get('/api1/scholarship/insert', {
        'name': this.name,
        'no': this.no,
        'money': this.money,
        'context': this.context
      }).then((data)=>{
        this.success = true;
      })
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}

body {
  background-color: antiquewhite;
  text-align: center;
}

font {
  font-size: x-large;
}

#div2 {
  margin-top: 90px;
}

.text {
  border-radius: 10px;
  height: 30px;
  width: 200px;
  margin-top: 10px;
  font-size: 30px;
}

#btn {
  background: cornflowerblue;
  border: 0;
  margin: 0;
  padding: 5px 20px;
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
  height: 60px;
  font-size: large;
}
.message{
  font-size: x-large;
  color: #0be85d;
}
</style>