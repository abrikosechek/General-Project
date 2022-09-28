<template>
  <div class="black-gradient w-full mt-[120px]">
    <div class="screen flex justify-between gap-[50px] pt-[80px] pb-[100px] text-white">
      <div class="flex flex-col gap-[30px]">
        <p class="text-md font-semibold">General Project</p>
        <p class="text-sm font-normal max-w-[580px] text-alt">
          is a general contractor company based in Jakarta. More than 25 years of
          experience in building and carving out Indonesia's development.
        </p>
      </div>

      <div class="flex gap-[50px]">
        <div class="flex flex-col gap-[30px]">
          <p class="text-md font-semibold">Company</p>

          <div class="flex flex-col gap-[30px] text-alt">
            <router-link class="text-sm font-normal" to="/">About</router-link>
            <router-link class="text-sm font-normal" to="/">How It Works</router-link>
            <router-link class="text-sm font-normal" to="/">Term</router-link>
            <router-link class="text-sm font-normal" to="/">Privacy Policy</router-link>
          </div>
        </div>
        
        <div class="flex flex-col gap-[30px]">
          <p class="text-md font-semibold">More</p>
          
          <div class="flex flex-col gap-[30px] text-alt">
            <router-link class="text-sm font-normal" to="/">Documentation</router-link>
            <router-link class="text-sm font-normal" to="/">License</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.black-gradient {
  background: linear-gradient(120deg, #474747 4.14%, #222222 44.22%);
}
</style>
