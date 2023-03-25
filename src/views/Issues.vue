<template>
    <div >
        
            <v-list>
        <v-card outlined>
      <v-list-item
        v-for="item in issues"
        :key="item._id"
      >


        <v-list-item-content>
            <v-list-item-title >{{item.title}}</v-list-item-title>
            <v-list-item-subtitle >{{item.description}}</v-list-item-subtitle>
          </v-list-item-content>

        
      </v-list-item>
    </v-card>
    </v-list>
        
        
         
    </div>
</template>

<script>

import issuesList from '../data/issues.json'
    export default {

        data() {
            return {
                issues: issuesList
            }
        },
        
    }
</script>


<style lang="scss" scoped>


</style>