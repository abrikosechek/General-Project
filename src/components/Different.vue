<template>
  <div class="screen my-[50px]">
    <!-- Gradient line -->
    <div class="blue-gradient h-[10px] w-[90px] ml-[15px]"></div>

    <!-- Intro -->
    <div class="flex justify-between w-full mt-[40px]">
      <p class="text-xl">
        What Make Us <br />
        Different?
      </p>

      <p class="text-md text-alt">
        Check out our best service you can possibly orders in building <br />
        your company and don't forget to ask via our email or our <br />
        customer service if you are interested in using our services
      </p>
    </div>

    <!-- Icon cards -->
    <div
      class="grid grid-flow-col auto-cols-[1fr] gap-[50px] justify-between gap-[50px] w-full mt-[65px]"
    >
      <div v-for="(card, index) in cards" :key="index" class="flex flex-col gap-[25px]">
        <div
          class="flex items-center justify-center w-[95px] h-[95px] bg-[rgba(35,_135,_192,_0.3)] rounded-full"
        >
          <div
            class="flex items-center justify-center w-[75px] aspect-square bg-primary rounded-full"
          >
            <img :src="require(`@/static/different/icons/${card.img}.svg`)" alt="icon" />
          </div>
        </div>

        <div class="text-lg-1">
          {{ card.title }}
        </div>

        <div class="text-md text-alt">
          {{ card.description }}
        </div>
      </div>
    </div>

    <!-- Architecture -->
    <div class="flex justify-between gap-[50px] w-full mt-[130px]">
      <div class="relative flex-[0_0_auto] flex items-center pr-[150px]">
        <img
          class="h-[540px] w-[505px] z-[0]"
          src="@/static/different/architecture.jpg"
          alt="..."
        />

        <div
          class="black-gradient absolute right-[0] flex flex-col items-center w-[300px] p-[30px] z-[2]"
        >
          <div
            class="relative flex items-center justify-center w-[100px] aspect-square rounded-full overflow-hidden"
          >
            <img
              class="absolute w-full"
              src="@/static/different/Dianne.jpg"
              alt="Dianne Russell"
            />
          </div>

          <p class="text-lg text-white mt-[30px]">Dianne Russell</p>
          <p class="text-xs text-alt mt-[10px]">
            More than 20 years of experience in the field architecture and has worked on
            project up to 100+
          </p>
        </div>
      </div>

      <div class="flex-[1_1_auto] mt-auto mb-[20px]">
        <p class="text-xl">Meet and talk with our best architecture</p>

        <p class="text-md text-alt mt-[35px]">
          All our teams are professional and competent in their fields and will help you
          realize your dream building with the excellent result.
        </p>

        <div class="flex items-center gap-[50px] mt-[60px]">
          <button
            class="border-[0] px-[40px] py-[20px] bg-primary shadow-[0px_10px_15px_rgba(1,_115,_153,_0.2)] text-sm font-semibold text-white"
          >
            See all team
          </button>

          <router-link class="flex items-center gap-[15px] h-full" to="/">
            <p class="text-md">How it works</p>
            <img src="@/static/icons/arrow-right.svg" alt="-->" />
          </router-link>
        </div>
      </div>
    </div>

    <!-- Story -->
    <div class="flex flex-row-reverse justify-between gap-[75px] w-full mt-[130px]">
      <img
        class="black-gradient h-[470px] w-[575px]"
        src="@/static/different/story.jpg"
        alt="..."
      />

      <div class="flex-[1_1_auto]">
        <p class="text-xl">
          Our Story <br />
          Who we are
        </p>

        <p class="text-md text-alt mt-[35px]">
          Established in 1992, PT. Wahana Cipta operates as a General Contracting company
          with a footprint that we have planted throughout Indonesia. Initially, we
          focused on construction in the field of residential housing development in
          Jakarta. As the company grows, now we are present as a reliable...
        </p>

        <div class="flex items-center gap-[50px] mt-[60px]">
          <button
            class="border-[0] px-[40px] py-[20px] bg-primary shadow-[0px_10px_15px_rgba(1,_115,_153,_0.2)] text-sm font-semibold text-white"
          >
            See more
          </button>
        </div>
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
          img: "case",
          title: "Experienced",
          description:
            "Our experience of 25 years of building and making achievements in the world of development ",
        },
        {
          img: "tag",
          title: "Competitive Price",
          description:
            "The prices we offer you are very competitive without reducing the quality of the company's work in the slightest ",
        },
        {
          img: "clock",
          title: "On Time",
          description: "We prioritize the quality of our work and finish it on time ",
        },
        {
          img: "shield",
          title: "Best Materials",
          description:
            "The material determines the building itself so we recommend that you use the best & quality materials in its class. ",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.blue-gradient {
  background: linear-gradient(90deg, #60bbee -2.22%, #2387c0 67.22%);
}

.black-gradient {
  background: linear-gradient(120deg, #474747 4.14%, #222222 44.22%);
  box-shadow: 0px 10px 15px rgba(151, 151, 151, 0.12);
}
</style>
