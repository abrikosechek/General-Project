<template>
  <div class="w-full h-full relative">
    <img
    class="w-full h-full"
      :src="require(`@/static/projects/${img}.jpg`)"
      alt="article"
      @mouseenter="hovered = true"
      @mouseleave="hovered = false"
    />

    <transition-group name="fade">
      <div
        v-if="hovered"
        class="bg-[rgba(0,0,0,.5)] inset-0 absolute z-[1]"
        @mouseenter="hovered = true"
        @mouseleave="hovered = false"
      />

      <div
        v-if="hovered"
        class="absolute flex justify-between p-[15px] inset-[10px] top-[auto] bg-white gap-[10px] z-[10]"
        @mouseenter="hovered = true"
      >
        <div class="flex flex-col justify-between h-full gap-[2px]">
          <p class="text-sm font-bold">
            {{ title }}
          </p>
          <p class="text-[12px] leading-[1.5em] font-medium text-alt">
            {{ text }}
          </p>
        </div>

        <button class="bg-primary border-0 p-[15px] m-0">
          <Icon class="w-[25px] h-[25px] fill-white" :name="'arrow-right'" />
        </button>
      </div>
    </transition-group>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";

export default {
  components: {
    Icon,
  },
  props: {
    img: {
      default: "1",
      type: String,
    },
    title: {
      default: "Title",
      type: String,
    },
    text: {
      default: "Text of article",
      type: String,
    },
  },
  data() {
    return {
      hovered: false,
    };
  },
};
</script>

<style scoepd lang="scss"></style>
