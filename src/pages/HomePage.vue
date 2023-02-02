<template>
  <h1>Homepage</h1>
  <ListProjects />
</template>

<script>
import ListProjects from "../components/ListProjects.vue";

export default {
  nome: "Homepage",
  components: {
    ListProjects,
  },
};
</script>

<style lang="scss" scoped></style>
