<template>
  <div class="mainbox">
    <div class="chose">

      <div class="box">
        <span>查询条件</span>

        <div class="fanwei">
          <div class="left">
            <input type="text" v-model="no" placeholder="学号"/>
          </div>
          <div class="rig">
            <input type="text" name="" v-model="name" placeholder="姓名"/>
          </div>
          <div class="rig">
            <input type="text" v-model="clazz" placeholder="班级"/>
          </div>
        </div>

        <div class="buttons">
          <button @click="search">查询</button>
        </div>
        <h3 v-show="show">编辑成功</h3>
      </div>
    </div>
    <div class="table">
      <table border="0" cellspacing="0">
        <thead>
        <th width="10%">编号</th>
        <th width="10%">学号</th>
        <th width="10%">姓名</th>
        <th width="10%">班级</th>
        <th width="10%">学分</th>
        <th width="10%">总成绩</th>
        <th width="5%">排名</th>
        <th width="15%">操作</th>
        </thead>

        <tbody >
        <tr v-for="(item,index) in items" :key="index">
          <td >{{ item.id }}</td>
          <td >{{ item.no }}</td>
          <td v-if="!item.edited">{{ item.name }}</td>
          <td v-if="!item.edited">{{ item.clazz }}</td>
          <td v-if="!item.edited">{{ item.credit }}</td>
          <td v-if="!item.edited">{{ item.score }}</td>
          <td v-if="!item.edited">{{ item.ranks }}</td>


          <td v-if="item.edited">
            <input type="text" v-model="item.name"/>
          </td>
          <td v-if="item.edited">
            <input type="text" v-model="item.clazz"/>
          </td>
          <td v-if="item.edited">
            <input type="text" v-model="item.credit"/>
          </td>
          <td v-if="item.edited">
            <input type="text" v-model="item.score"/>
          </td>
          <td v-if="item.edited">
            <input type="text" v-model="item.ranks"/>
          </td>
          <td>
            <a  class="jiedan" @click="edit(index)">编辑</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>

</template>

<script>
export default {
  name: "Student_grades",
  data() {
    return {
      name: '',
      no: '',
      clazz: '',
      items: [],
      show: false
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
            this.$set(this.items, index, data);
            this.show =true;
          })
        })

      } else {
        this.show =false;
        // this.items[index].edited =true;
        let data = this.items[index];
        data.edited = true;
        this.items.splice(index, 1, data);

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
h3{
  color: #0be85d;
}

td input{
  margin-left: 25%;
  width: 80%;
}
</style>