<template>
  <header class="relative w-full pb-[50px] min-h-[100vh]">
    <Navbar class="relative z-[2]" />

    <!-- Content -->
    <div class="screen relative text-white z-[2]">
      <p class="text-xxl font-medium tracking-wide">
        We Provide <br />
        Architectural design <br />
        and Construction
      </p>

      <p class="mt-[25px] text-md text-alt leading-[2.2em]">
        More than 100 building and housing projects that we have built. <br />
        The building owner chose us over other contractors in Jakarta, <br />
        because our work is different
      </p>

      <button class="px-[40px] py-[20px] border-[0] text-md font-semibold mt-[50px]">
        Discover More
      </button>

      <!-- Achievements -->
      <div class="flex gap-[50px] mt-[40px]">
        <div
          v-for="(achievement, index) in achievements"
          :key="index"
          class="flex flex-col"
        >
          <p class="text-[36px] leading-[59px] font-bold">
            {{ achievement.number }}
            <span class="text-primary">+</span>
          </p>

          <span class="inline-block max-w-[min-content] text-md text-alt leading-[30px] ">
            {{ achievement.text }}
          </span>
        </div>
      </div>
    </div>

    <!-- Card in the corner -->
    <div
      class="absolute right-0 bottom-0 card flex items-center gap-[50px] w-[745px] py-[35px] text-white z-[2]"
    >
      <p class="flex flex-col gap-[20px] ml-[35px] leading-[1em] text-md">
        General
        <span class="text-lg">Project</span>
      </p>

      <div class="relative">
        <div class="flex items-center gap-[20px]">
          <p class="text-[36px] leading-[1em] font-bold">25</p>
          <p class="text-md leading-[1em]">Years</p>
        </div>
        <p class="text-lg">Operated</p>

        <img
          class="absolute right-[-20px] top-[-10px] w-[20px] aspect-square"
          src="@/static/gear.png"
          alt="gear"
        />
      </div>

      <p class="text-[14px] leading-[21px]">
        As a trusted general project that has been
        <br class="content-none block my-[5px]" />
        operating for 25 years, our commitment is
        <br class="content-none block my-[5px]" />
        always to prioritize our client satisfaction
      </p>
    </div>

    <!-- Building image -->
    <img class="absolute right-0 bottom-0 w-[600px] z-[1]" src="@/static/building.png" alt="" />
  </header>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: { Navbar },
  data() {
    return {
      achievements: [
        {
          number: 300,
          text: "Happy Client",
        },
        {
          number: 900,
          text: "Amazing Projects",
        },
        {
          number: 20,
          text: "Awards Winning",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
header {
  background: linear-gradient(145deg, #373737 4.14%, #222222 44.22%);
}

button {
  background: linear-gradient(120.65deg, #60bbee 0.33%, #0a72ad 93.35%);
  box-shadow: 0px 10px 15px rgba(1, 115, 153, 0.2);
}

.card {
  background: linear-gradient(130.73deg, #399fd8 -6.96%, #0775b4 23.5%, #003756 92.79%);
  box-shadow: 0px 10px 15px rgba(1, 115, 153, 0.2);
}
</style>
