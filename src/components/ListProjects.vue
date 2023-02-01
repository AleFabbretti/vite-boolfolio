<template>
  <section>
    <h2>Lista dei Progetti</h2>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="project in projects">
          <CardProject :data="project" />
        </div>
      </div>
    </div>
    <ul></ul>
  </section>
</template>

<script>
import axios from "axios";
import CardProject from "./CardProject.vue";

export default {
  name: "ListProjects",
  components: {
    CardProject,
  },
  data() {
    return {
      projects: [],
    };
  },
  created() {
    axios.get("http://localhost:8000/api/project").then((response) => {
      this.projects = response.data;
    });
  },
};
</script>

<style lang="scss" scoped></style>
