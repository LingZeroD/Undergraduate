<template>
  <div>
    <head_mange></head_mange>
    <div class="content">
        <router-view ></router-view>
    </div>
  </div>
</template>

<script>


import Head_mange from "../head/head_mange";
export default {
name: "Main",
  components: {Head_mange},
}
</script>

<style scoped>
.content{
  padding-top: 8%;
}
</style>