<template>
  <v-container>
    <v-row justify="center" v-if="loading">
      <v-col cols="auto">
        <v-progress-circular
          :size="70"
          :width="7"
          fill-height
          color="primary"
          indeterminate
        ></v-progress-circular>
      </v-col>
    </v-row>
    <div v-else>
      <v-row justify="center" align="center">
        <v-col md="6" sm="10">
          <v-select
            :items="users"
            :item-text="(item) => item.username"
            :item-value="(item) => item.id"
            v-model="selected"
            label="Filter Users"
          ></v-select
        ></v-col>
      </v-row>
      <v-row justify="center">
        <v-col md="8" sm="10" v-for="post in posts" :key="post.id">
          <PostList :id="post.userId" :post="post" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Posts",
  data() {
    return {
      selected: "",
    };
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
    users() {
      return this.$store.getters.users;
    },
    loading() {
      return this.$store.getters.load;
    },
  },
  watch: {
    selected(val) {
      this.$store.dispatch("filterPosts", val);
    },
  },
};
</script>
