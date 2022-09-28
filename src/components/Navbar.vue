<template>
  <div class="screen flex justify-between py-[35px]">
    <!-- Logo -->
    <router-link to="/" class="text-md font-medium text-white">
      General
      <br />
      <span class="text-lg font-bold text-primary">Project</span>
    </router-link>

    <!-- Links -->
    <div class="flex gap-[60px] mt-[5px]">
      <router-link
        v-for="(link, index) in links"
        :key="index"
        to="/"
        class="text-md text-alt"
        :class="{'text-[#FFF] font-bold': index == 0}"
      >
        {{ link }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: ['Home', 'Services', 'Find a Team', 'About Us', 'Articles', 'Portfolio', 'Contact Us']
    }
  }
};
</script>

<style scoped lang="scss"></style>
