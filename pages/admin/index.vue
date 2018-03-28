<template>
  <section class="">
    <h2 class="title">Admin Dashboard for Child Routes</h2>
    <h5 class="subheading">The index page inside the admin folder</h5>

		<h1 class="title">Admin Dashboard</h1>
    <h2 class="subheading">The routes below are are using <code>nuxt-child</code></h2>
    <v-flex xs12 id="adminNav">
      <nuxt-link class="adminNavRoute" to="/admin">Dashboard Home</nuxt-link>
      <nuxt-link class="adminNavRoute" to="/admin/settings">Settings</nuxt-link>
      <nuxt-link class="adminNavRoute" to="/admin/items">Database Example</nuxt-link>
    </v-flex>
    <v-divider></v-divider>
    <v-flex id="adminChild" xs12>
      <nuxt-child :key="$router.fullPath"></nuxt-child>
    </v-flex>
  </section>
</template>

<script>
export default {
}
</script>

<style>
.avatar {
  max-width: 100px;
}
.avatar img {
  max-width: 100%;
}

#adminNav {
  display: flex;
  flex-flow: row wrap;
  /*justify-content: space-around;*/
  margin-bottom: 1em;
}
.adminNavRoute {
  margin: .25em .5em;
  padding: .25em;
}
#adminChild {
  margin-top: 1em;
}
</style>
