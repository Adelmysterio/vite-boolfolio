<script>

export default {

  data() {
    return {
      navLinks: [{
        name: "projects",
        label: "Projects"
      }]
    }
  }
}
</script>

<template>
  <nav>
    <ul>
      <li v-for="navLink in navLinks">
        <router-link :to="{ name: navLink.name }">{{ navLink.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss"></style>
