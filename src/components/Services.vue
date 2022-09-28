<template>
  <div class="screen py-[50px] bg-light-gray">
    <!-- Intro -->
    <p class="text-xl">
      Our Excellent <br />
      Services
    </p>

    <!-- Cards -->
    <div class="flex justify-between gap-[5px] w-full mt-[100px]">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="flex flex-col gap-[40px] w-[370px]"
      >
        <img
          class="w-full aspect-square"
          :src="require(`@/static/services/${index + 1}.jpg`)"
          alt="card logo"
        />
        <p class="text-lg-1">{{ card.title }}</p>
        <p class="text-md text-alt">{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "Industrial",
          description:
            "Industrial development is our main line of business. We do Factory Construction, Warehouse and others",
        },
        {
          title: "Commercial",
          description:
            "Our experience building in the Commercial field includes Showrooms, Supermalls and Office Buildings",
        },
        {
          title: "Resedential",
          description:
            "Residential development is the beginning that has shaped us to this day. Our development includes Houses & Apartments",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
