import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

// eslint-disable-next-line
const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#628D70',
          secondary: '#b0bec5',
          accent: '#8c9eff',
          error: '#b71c1c',
        },
      },
    },
  })

export default new Vuetify({
});
