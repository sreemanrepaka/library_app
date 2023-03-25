<template>
    <div >
        
            <v-list>
        <v-card outlined>
      <v-list-item
        v-for="item in authors"
        :key="item._id"
      >


        
        <v-list-item-content>
            <v-list-item-title >{{item.name}}</v-list-item-title>

          </v-list-item-content>

        
      </v-list-item>
    </v-card>
    </v-list>
        
        
         
    </div>
</template>

<script>

import authorsList from '../data/authors.json'
    export default {

        data() {
            return {
                authors: authorsList
            }
        },
        
    }
</script>


<style lang="scss" scoped>


</style>