<template>
    <div >
        
    <v-list>
        
        
      <v-list-item
        v-for="item in books"
        :key="item._id"
      >
      

      <v-list-item-avatar tile>
          <v-img :src="item.img"></v-img>
        </v-list-item-avatar>
        
        <v-list-item-content>
            <v-list-item-title >{{item.title}}</v-list-item-title>
            <v-list-item-subtitle >{{item.description}}</v-list-item-subtitle>
          </v-list-item-content>
        
          <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          v-bind="attrs"
          v-on="on"
          
        >
        <v-icon> mdi-dots-vertical </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item >
          <v-list-item-title>Edit</v-list-item-title>

        </v-list-item>
        <v-list-item>
          <v-list-item-title>Delete</v-list-item-title>

        </v-list-item>
      </v-list>
    </v-menu>


        
         
          
      </v-list-item>

   

    </v-list>
        
        
         
    </div>
</template>

<script>

import booksList from '../data/books.json'
    export default {

        data() {
            return {
                books: booksList
            }
        },
        
    }
</script>


<style lang="scss" scoped>


</style>