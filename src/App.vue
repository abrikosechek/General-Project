<template>
  <div id="app">
    <Header />
    <Sponsors />
    <Services />
    <Different />
    <News />
    <Projects />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Sponsors from "@/components/Sponsors.vue";
import Services from "@/components/Services.vue";
import Different from "@/components/Different.vue";
import News from "@/components/News.vue";
import Projects from "@/components/Projects.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Header, Sponsors, Services, Different, News, Projects, Footer },
};
</script>

<style lang="scss"></style>
