<template>
      <div class="center">
        <v-avatar
        color="primary"
        size="56"
        ></v-avatar>
        <v-row >
            <v-col cols="10" offset="1" md="6" offset-md="3" lg="4" offset-lg="4">
              <!-- for md it takes up 6 columns width so 12-6 = 6 columns remain, so 3 columns on each side so 3 col offset -->
                <v-sheet class="bg-deep-purple pa-12" rounded>
   
   <v-form
     v-model="form"
     @submit.prevent="onSubmit"
   >
     <v-text-field
       v-model="email"
       :readonly="loading"
       :rules="[required]"
       class="mb-2"
       clearable
       label="Email"
     ></v-text-field>

     <v-text-field
       v-model="password"
       :readonly="loading"
       :rules="[required]"
       clearable
       label="Password"
       placeholder="Enter your password"
     ></v-text-field>

     <br>

     <v-btn
       :disabled="!form"
       :loading="loading"
       block
       color="success"
       size="large"
       type="submit"
       variant="elevated"
     >
       Sign In
     </v-btn>
   </v-form>
 
</v-sheet>

            </v-col>
            
 
        </v-row>
        

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>