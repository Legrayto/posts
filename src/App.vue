<template>
  <v-app>
    <v-main class="pt-12">
      <keep-alive><router-view /></keep-alive>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
