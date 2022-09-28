<template>
  <div class="screen flex flex-wrap items-center justify-between gap-[20px] my-[50px]">
    <router-link v-for="(sponsor, index) in sponsors" :key="index" to="/">
      <img :src="require(`@/static/sponsors/${sponsor}.png`)" alt="sponsor" />
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sponsors: ["adira", "adhimix", "holcim", "mnc", "telkomsel"],
    };
  },
};
</script>

<style scoped lang="scss"></style>
