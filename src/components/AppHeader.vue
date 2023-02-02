<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header>
    <h1>Logo</h1>
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'homepage' }">Home page</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'about-us' }">Chi siamo</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'contact-us' }">Contatti</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
