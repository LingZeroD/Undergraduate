<template>
  <div id="div1">
    <h1>入党申请填写</h1>
    <div id="div2">
      <table>
        <tr>
          <th><font>申请人：</font> <input type="text" class="text" v-model="name">
            <p></p></th>
          <th><font>学 号：</font> <input type="text" class="text" v-model="no">
            <p></p></th>
        </tr>

        <tr>
          <th colspan="2"><font>内容：</font>
            <textarea cols="75" rows="15" style="border-radius: 10px;"v-model="context" ></textarea>
          </th>
        </tr>
      </table>
      <button id="btn" @click="add" v-show="!success">提交</button>
      <h3 class="message" v-show="success">提交成功</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Party_apply",
  data() {
    return {
      name: '',
      no: '',
      context: '',
      success:false
    }
  },
  methods: {
    add() {
      this.$util.get('/api1/party/insert', {
        'name': this.name,
        'no': this.no,
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



font {
  font-size: x-large;
}

#div2 {
  margin-top: 90px;
  text-align: center;
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

table {
  margin: 0 auto;
}
.message{
  font-size: x-large;
  color: #0be85d;
}
</style>