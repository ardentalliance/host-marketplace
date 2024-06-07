// eslint-disable-next-line
<template>
<v-app>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click="drawer =! drawer"></v-app-bar-nav-icon>
  <v-app-bar-title>KPS Host Marketplace</v-app-bar-title>
  </v-app-bar>
 <v-navigation-drawer v-model="drawer" temporary>
    <!-- User in Nav and Logout-->
        <v-list>
          <v-list-item class="px-2" >
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link >
            <v-list-item-content >
              <v-list-item-title class="text-h6">
                {{username || 'Username'}}
              </v-list-item-title>
              <v-list-item-subtitle v-on:click="logout">log out</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

      <v-divider></v-divider>
      <!-- Navigation Links-->
      <v-list dense nav class="primary" dark>
        <v-list-item v-for="item in items" :key="item.title" link >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Dashboard body-->

    <v-main>
      <v-sheet max-height="100%"  color="primary">
      <v-container>
        <v-row>
          <template>
            <v-col v-for="m in 2" :key="m" class="pa-3 ma-2 white" cols="12">
              <strong class="text-h5"><center>Category {{ n }}</center></strong>
            </v-col>

            <v-col v-for="j in 18" :key="`${n}${j}`" cols="10" md="2" >
              <v-sheet height="150"></v-sheet>
            </v-col>
          </template>
        </v-row>
      </v-container>
      </v-sheet>
    </v-main>
</v-app>
</template>

<style>
.v-app-bar-title__content{
  width: 300px !important;
}
</style>

<script setup>
import { ref } from 'vue'

const drawer = ref(null)
</script>

<script>
  export default {
    data () {
      return {
        // Navi items
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Host List', icon: 'mdi-laptop' },
          { title: 'Create New Host', icon: 'mdi-plus' },
          // Line below should only be available to admins
          { title: 'Manage Hosts', icon: 'mdi-pencil' },
          { title: 'Account Settings', icon: 'mdi-cog'},
        ],
        username:this.$route.params.username
      }
    },
    
    methods: {
      logout() {
        this.$router.replace({name:'login'})
      }
    }
  }
</script>