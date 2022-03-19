<template>
  <div>
    <Head_student></Head_student>
    <div class="content">
      <router-view ></router-view>
    </div>
  </div>
</template>

<script>
import Head_student from "../head/head_student";
export default {
  name: "Main_S",
  components: {Head_student}
}
</script>

<style scoped>

</style>