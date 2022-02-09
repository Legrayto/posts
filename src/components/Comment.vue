<template>
  <v-list-item three-line>
    <v-list-item-content>
      <v-list-item-title>{{ comment.name }}</v-list-item-title>
      <v-list-item-subtitle class="font-italic mb-4">
        by:
        <span
          class="text--darken-1 light-blue--text text-decoration-underline"
          >{{ comment.email }}</span
        >
      </v-list-item-subtitle>
      <v-list-item-subtitle class="font-weight-medium">{{
        comment.body
      }}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "Comment",
  props: ["comment"],
};
</script>
