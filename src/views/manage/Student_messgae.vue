<template>

  <div class="student">
    <div class="mainbox">
      <div class="chose">

        <div class="box">
          <span>查询条件</span>

          <div class="fanwei">
            <div class="left">
              <input type="text" v-model="no"  placeholder="学号"/>
            </div>
            <div class="rig">
              <input type="text" name=""  v-model="name" placeholder="姓名"/>
            </div>
            <div class="rig">
              <input type="text"  v-model="clazz" placeholder="班级"/>
            </div>
          </div>

          <div class="buttons">
            <button @click="search">查询</button>
          </div>
        </div>
      </div>

      <div class="table">
        <table border="0" cellspacing="0" id="test">
          <thead>
            <th width="10%">编号</th>
            <th width="10%">学号</th>
            <th width="10%">姓名</th>
            <th width="10%">年龄</th>
            <th width="10%">民族</th>
            <th width="10%">班级</th>
            <th width="10%">性别</th>
            <th width="15%">电话号码</th>
            <th width="15%">操作</th>
          </thead>
          <tbody v-if="show">
            <S_MTable v-for="(item,index) in items" :key="index" :item="item" @edit="edit(index)"></S_MTable>
          </tbody>

        </table>
      </div>

    </div>
  </div>
</template>

<script>
import S_MTable from "./Student_messgaeTable";
export default {
  name: "Student_messgae",
  components: {S_MTable},
  data() {
    return {
      name: '',
      no:'',
      clazz:'',
      items: [],
      show:true
    }
  },
  // computed:{
  //   itemsF:function () {
  //     return this.items.filter(function (item) {
  //       return true;//返回isShow=true的项，添加到activeUsers数组
  //     })
  //   }
  // },
  watch:{
    items(newi){
      this.show = false
      if (true) {
        this.$nextTick(()=>{ // $nextTick 是在 DOM 更新循环结束之后执行延迟回调
          this.show = true
        })
      }
    }
  },
  mounted() {
    this.$util.get('/api1/student/getAll').then((data) => {
      this.items = data;
      this.items.forEach(value => {
        value.edited = false;
      })
    })
  },
  methods: {
    search() {
      this.$util.get('/api1/student/queryByAll', {
        "no": this.no,
        "name": this.name,
        "clazz": this.clazz
      }).then((data) => {
        this.items = data;
        this.items.forEach(value => {
          value.edited = false;
        })
      })
    },
    edit(index) {
      console.log('123333')

      if (this.items[index].edited) {
        this.$util.postJson('/api1/student/update', this.items[index]).then((d) => {
          this.$util.get('/api1/student/selectOne', {"id": this.items[index].id}).then((data) => {
            data.edited = false;
            this.$set(this.items,index,data);
          })
        })

      } else {

        let data =  this.items[index];
        data.edited = true;

        this.items.splice(index,1,data);

      }

      console.log(this.items[index]);
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/style.css";
@import "../../assets/css/foundation.min.css";
@import "../../assets/css/foundation-datepicker.css";

</style>