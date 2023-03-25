<template>
    <div >

    
        
    <v-list>
    <v-row>
        <v-list-item
        v-for="item in employees"
        :key="item._id"
      >
      <v-col >
        <v-card class="pa-2 d-flex justify-space-between" elevation="1" tile>

      <v-list-item-avatar tile>
          <v-img :src="item.img"></v-img>
        </v-list-item-avatar>
        
        
        <v-list-item-content>
            <v-list-item-title >{{item.firstName}} {{ item.middleName }} {{ item.lastName }}</v-list-item-title>
          
          </v-list-item-content>
          <v-btn text>
            <v-icon>\ mdi-dots-vertical ></v-icon>
          </v-btn>
        </v-card>
        </v-col>

      </v-list-item>
   

    </v-row>  
    

    
        
      </v-list>
        
         
    </div>
</template>

<script>

import employeesList from '../data/employees.json'
    export default {

        data() {
            return {
                employees: employeesList
            }
        },
        
    }
</script>


<style lang="scss" scoped>


</style>