<template>
  <div>
    <div class="mainbox">
      <div class="chose">

        <div class="box">
          <span>查询条件</span>

          <div class="fanwei">
            <div class="left">
              <input type="text" name="" v-model="no"  placeholder="学号"/>
            </div>
            <div class="rigt">
              <input type="text" name="" v-model="name"  placeholder="姓名"/>
            </div>
          </div>

          <div class="buttons">
            <button @click="searchbyNoAndName">查询</button>
          </div>
        </div>

      </div>

    </div>
    <div class="table">
      <table border="0" cellspacing="0" id="test">
        <tr>
          <th>编号</th>
          <th>学号</th>
          <th>姓名</th>
          <th>申请金额</th>
          <th style="width: 20%;">操作</th>
        </tr>
        <tr v-for="item in items" :key="item">
          <td class="mf">
            {{item.id}}
          </td>
          <td>
            {{item.no }}
          </td>
          <td>
            {{item.name}}
          </td>
          <td>
            {{ item.context }}
          </td>
          <td><button>同意</button> <button>不同意</button></td>
        </tr>
      </table>
    </div>
  </div>

</template>

<script>
export default {
name: "money_manage",
  data() {
    return {
      name: '',
      no:'',
      items: []
    }
  },
  mounted() {
    this.$util.get('/api1/scholarship/getAll').then((data) => {
      this.items = data;
    })
  },
  methods:{
  searchbyNoAndName(){
    this.$util.get('/api1/scholarship/queryByAll',{"no":this.no ,"name": this.name}).then((data)=>{
      this.items = data;
    })
  }
  }
}

</script>

<style scoped>
@import "../../assets/css/style.css";
@import "../../assets/css/foundation.min.css";
@import "../../assets/css/foundation-datepicker.css";

</style>