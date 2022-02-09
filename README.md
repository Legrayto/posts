# posts

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

<v-card max-width="375" class="mx-auto">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> John Leider </v-list-item-title>
            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-list two-line>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo"> mdi-phone </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>(650) 555-1234</v-list-item-title>
            <v-list-item-subtitle>Mobile</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon>mdi-message-text</v-icon>
          </v-list-item-icon>
        </v-list-item>

        <v-list-item>
          <v-list-item-action></v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>(323) 555-6789</v-list-item-title>
            <v-list-item-subtitle>Work</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon>mdi-message-text</v-icon>
          </v-list-item-icon>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo"> mdi-email </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>aliconnors@example.com</v-list-item-title>
            <v-list-item-subtitle>Personal</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-action></v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>ali_connors@example.com</v-list-item-title>
            <v-list-item-subtitle>Work</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo"> mdi-map-marker </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>1400 Main Street</v-list-item-title>
            <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
