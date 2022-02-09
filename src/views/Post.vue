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
      <v-row justify="center" class="mb-6">
        <v-col cols="12" md="10">
          <v-card>
            <v-row>
              <v-col cols="12" md="4">
                <v-list dense>
                  <v-list-item>
                    <v-list-item-avatar color="indigo">
                      <v-avatar
                        ><v-icon color="white">mdi-account</v-icon></v-avatar
                      >
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="text-h6">
                        {{ user.username }}
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        Name:
                        <span class="font-weight-bold">{{ user.name }}</span>
                      </v-list-item-subtitle>
                      <v-list-item-subtitle>
                        Email:
                        <v-hover v-slot="{ hover }">
                          <span
                            class="text--darken-1 light-blue--text"
                            :class="{ 'text-decoration-underline': hover }"
                          >
                            {{ user.email }}
                          </span>
                        </v-hover>
                      </v-list-item-subtitle>
                      <v-list-item-subtitle>
                        Website:
                        <v-hover v-slot="{ hover }">
                          <span
                            class="text--darken-1 light-blue--text"
                            :class="{ 'text-decoration-underline': hover }"
                          >
                            {{ user.website }}
                          </span>
                        </v-hover>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list dense two-line>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="indigo"> mdi-phone </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{ user.phone }}</v-list-item-title>
                      <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider inset></v-divider>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="indigo"> mdi-map-marker </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{
                        user.address.street
                      }}</v-list-item-title>
                      <v-list-item-subtitle>{{
                        user.address.city
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider inset></v-divider>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="indigo"> mdi-briefcase </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{
                        user.company.name
                      }}</v-list-item-title>
                      <v-list-item-subtitle>{{
                        user.company.bs
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="12" md="8">
                <v-divider></v-divider>
                <v-card-title>{{ post.title }}</v-card-title>
                <v-card-text>{{ post.body }}</v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="10"
          ><div class="text-h4">Comments:</div>
          <div class="text-subtitle">
            (you can only leave one comment)
          </div></v-col
        >
        <v-col cols="12" md="10">
          <v-form
            ref="form"
            v-model="valid"
            @submit.prevent="addComment"
            lazy-validation
            :disabled="addedComment"
          >
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.title"
                  :rules="[(v) => !!v || 'Field is required']"
                  label="Title comment"
                  required
                  prepend-icon="mdi-comment"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4">
                <v-text-field
                  v-model="form.email"
                  :rules="emailRules"
                  label="Your email"
                  required
                  prepend-icon="mdi-email"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="form.comment"
                  label="Leave a comment"
                  :rules="[(v) => !!v || 'Field is required']"
                  rows="1"
                  prepend-icon="mdi-comment"
                  required
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row class="pr-2">
              <v-spacer></v-spacer>
              <v-btn
                small
                text
                color="grey darken-1"
                class="mr-4"
                @click="reset"
                :disabled="addedComment"
              >
                Reset Form
              </v-btn>
              <v-btn
                small
                :disabled="!valid || addedComment"
                color="success"
                type="submit"
              >
                Add comment
              </v-btn>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </div>
    <v-row justify="center" v-if="load || loading">
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
    <v-row v-else justify="center">
      <v-col cols="12" sm="10">
        <v-list v-for="comment in comments" :key="comment.id">
          <Comment :comment="comment" />
          <v-divider></v-divider>
        </v-list>
      </v-col>
    </v-row>
    <v-slide-y-reverse-transition>
      <div class="successAlert" v-if="alert">
        <v-alert type="success" class="mb-0">
          <v-row>
            <v-col cols="auto">Comment added</v-col>
            <v-spacer></v-spacer>
            <v-col cols="3">
              <v-progress-circular
                :rotate="360"
                :size="100"
                :value="alertValue"
                color="white"
                reverse
              ></v-progress-circular>
            </v-col>
          </v-row>
        </v-alert>
      </div>
    </v-slide-y-reverse-transition>
  </v-container>
</template>

<script>
import Comment from "../components/Comment";

export default {
  name: "Post",
  components: {
    Comment,
  },
  props: ["userName", "postId"],
  data() {
    return {
      showDetails: false,
      showInfo: false,
      form: {
        comment: "",
        email: "",
        title: "",
      },
      valid: false,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      load: false,
      alert: false,
      alertValue: 100,
    };
  },
  computed: {
    post() {
      return this.$store.getters.post(this.postId);
    },
    user() {
      return this.$store.getters.userByName(this.userName);
    },
    comments() {
      return this.$store.getters.comments;
    },
    loading() {
      return this.$store.getters.load;
    },
    addedComment() {
      return this.comments.length > 5;
    },
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    async addComment() {
      if (!this.$refs.form.validate()) return;
      let comment = { ...this.form, postId: +this.postId };
      this.$refs.form.reset();
      this.load = true;
      await this.$store.dispatch("addComment", comment);
      this.load = false;
      this.onAlert();
    },
    async getComments() {
      this.load = true;
      await this.$store.dispatch("setFilterComments", this.postId);
      this.load = false;
    },
    onAlert() {
      this.alertValue = 100;
      this.alert = true;
      let interval = setInterval(() => {
        this.alertValue -= 10;
      }, 200);
      setTimeout(() => {
        this.alert = false;
        clearInterval(interval);
      }, 2500);
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => vm.getComments());
  },
};
</script>

<style lang="scss">
.successAlert {
  position: fixed;
  padding: 20px;
  right: 0;
  bottom: 0;
  width: 300px;
}
.v-progress-circular {
  max-width: 25px;
  max-height: 25px;
}
</style>
