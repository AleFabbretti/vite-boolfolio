<template>
  <div v-if="project">
    <img :src="project.image_url" :alt="project.title" />
    <h1>{{ project.title }}</h1>
    <p>{{ project.description }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SingleProject",
  data() {
    return {
      project: null,
    };
  },
  created() {
    axios
      .get(`http://localhost:8000/api/project/${this.$route.params.slug}`)
      .then((response) => {
        this.project = response.data;
      })
      .catch((err) => {
        console.log(err);
        this.$router.push({ name: "page-404" });
      });
  },
};
</script>

<style lang="scss" scoped></style>
