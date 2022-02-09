<template>
  <v-hover v-slot="{ hover }">
    <v-card
      style="cursor: pointer"
      :elevation="hover ? 10 : 2"
      :class="{ onHover: hover }"
      router
      :to="{
        name: 'Post',
        params: { userName: user.username, postId: post.id },
      }"
    >
      <v-list-item three-line>
        <v-list-item-avatar>
          <v-avatar color="indigo"
            ><span class="white--text">{{
              user.name | initials
            }}</span></v-avatar
          >
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title
            class="font-weight-medium mb-2 d-inline-block text-truncate"
            >{{ user.username }}</v-list-item-title
          >
          <v-divider></v-divider>
          <v-list-item-title class="my-2">{{ post.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ post.body }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text color="info accent-4">Learn More</v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "PostList",
  props: ["id", "post"],
  computed: {
    user() {
      return this.$store.getters.users.find((item) => item.id === this.id);
    },
  },
  filters: {
    initials(name) {
      let [firstName, lastName] = name.split(" ");
      return firstName[0] + lastName[0];
    },
  },
};
</script>

<style lang="scss">
.v-card.onHover {
  background-color: rgba(#fff, 0.8);
}
</style>
