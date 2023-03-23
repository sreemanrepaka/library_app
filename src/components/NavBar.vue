<template>
    <div>
        <v-app-bar
      app
      
     
      
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../../src/assets/librarian_image.jpg"
          transition="scale-transition"
          width="40"
        />
        {{ $const.APP_NAME }}

        
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Login</span>
        
      </v-btn>
      <v-btn text>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      
    </v-app-bar>

    </div>
</template>

<script>
    export default {
        
        
    }
</script>

<style lang="scss" scoped>

</style>