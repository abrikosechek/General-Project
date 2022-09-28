<template>
  <div class="screen mt-[95px]">
    <div class="text-xl">
      Our collection <br />
      best projects
    </div>

    <div class="grid grid-cols-4 gap-[30px] w-full mt-[40px]">
      <CardProject
        v-for="(card, index) in cards"
        :key="index"
        :img="(index + 1).toString()"
        :title="card.title"
        :text="card.text"
      />
    </div>
  </div>
</template>

<script>
import CardProject from "@/components/card/Project.vue";

export default {
  components: { CardProject },
  data () {
    return {
      cards: [
        {
          title: "Treasury Tower",
          text: "Project Completed",
        },
        {
          title: "Treasury Tower",
          text: "Project Completed",
        },
        {
          title: "Treasury Tower",
          text: "Project Completed",
        },
        {
          title: "Treasury Tower",
          text: "Project Completed",
        },
      ]
    }
  }
};
</script>

<style scoped lang="scss"></style>
