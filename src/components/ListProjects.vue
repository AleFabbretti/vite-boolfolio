<template>
  <section>
    <h2>Lista dei Progetti</h2>
    <ul>
      <li v-for="project in projects">
        {{ project.title }}
      </li>
    </ul>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "ListProjects",
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
