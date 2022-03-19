<template>
  <tr>
    <td class="mf">{{ item.id }}</td>
    <td >{{ item.no }}</td>
    <td v-if="!item.edited">{{ item.name }}</td>
    <td v-if="!item.edited">{{ item.age }}</td>
    <td v-if="!item.edited">{{ item.nation }}</td>
    <td v-if="!item.edited">{{ item.clazz }}</td>
    <td v-if="!item.edited">{{ item.sex }}</td>
    <td v-if="!item.edited">{{ item.telphone }}</td>
    <td v-if="item.edited">
      <input type="text" v-model="item.name"/>
    </td>

    <td v-if="item.edited">
      <input type="text" v-model="item.age"/>
    </td>
    <td v-if="item.edited">
      <input type="text" v-model="item.nation"/>
    </td>
    <td v-if="item.edited">
      <input type="text" v-model="item.clazz"/>
    </td>
    <td v-if="item.edited">
      <input type="text" v-model="item.sex"/>
    </td>
    <td v-if="item.edited">
      <input type="text" v-model="item.telphone"/>
    </td>


    <td>
      <a class="jiedan" @click="edit">编辑</a>
    </td>
  </tr>
</template>

<script>
export default {
  name: "S_MTable",
  props: ['item'],
  methods: {
    edit() {
      console.log('123333')
      this.$emit('edit');

    }
  },
  destroyed() {
    console.log(323)
  }
}
</script>

<style scoped>
td input{
  margin-left: 25%;
  width: 80%;
}
</style>