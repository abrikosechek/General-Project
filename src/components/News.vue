<template>
  <div class="screen mt-[120px]">
    <p class="text-xl">News & Update</p>

    <div
      class="grid grid-flow-row grid-cols-3 justify-between gap-[50px] w-full mt-[40px]"
    >
      <div v-for="(article, index) in articles" :key="index" class="w-full mt-[40px]">
        <img
          class="black-gradient w-full"
          :src="require(`@/static/news/${index + 1}.jpg`)"
          alt="logo"
        />

        <div class="flex items-center gap-[20px] mt-[10px] mx-[15px]">
          <div class="flex flex-col">
            <p class=" text-lg-1">12</p>
            <p class="text-xs font-bold leading-[1em]">Jan</p>
          </div>

          <p class="text-sm font-bold leading-[1.45em] mt-[5px]">
            {{ article.title }}
          </p>
        </div>

        <p class="text-md text-alt font-light mt-[20px] mx-[15px]">
          {{ article.description }}... <router-link class="text-primary font-normal" to="/">Read more</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          title: "Elements of Content in Epoxy Paint",
          description:
            "Epoxy paint and epoxy floor contractor. Have you heard the two terms? And what does that have to do with the construction of existing buildings? Epoxy itself is included in the type of resin",
        },
        {
          title: "5 Right Steps in Warehouse Planning and Construction",
          description:
            "Planning the construction of a warehouse for both industrial, personal and other goods storage must be done carefully.  When the planning is done properly, the construction is",
        },
        {
          title: "The Right Solution to Build a Sturdy Type 45 House",
          description:
            "Having a solid home is certainly everyone's dream. How not, the house is a place where the residents can rest and take shelter from the bad weather",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.black-gradient {
  background: linear-gradient(120deg, #474747 4.14%, #222222 44.22%);
  box-shadow: 0px 10px 15px rgba(151, 151, 151, 0.12);
}
</style>
