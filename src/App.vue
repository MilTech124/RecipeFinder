<script>
import { RouterLink, RouterView } from 'vue-router'
import Nav from '@/components/Nav.vue'
import {userStore} from '@/stores/user'

export default {

  components:{Nav, RouterLink, RouterView},

  setup(){    
    // **IMPORTS FROM STORE**
    const user = userStore()
    // **IMPORTS FROM STORE**

    // **FUNCTIONS **
  
     // **FUNCTIONS**

    return{ user }     

  }


}
</script>

<template>
    <header>
      <Nav v-show="user.loged"> </Nav>        
  </header>

  <!-- <button class="user-btn" @click="SU">User</button>     -->
  <RouterView />
</template>

<style>

/* button{
  position:absolute;
  bottom: 10px;
  right: 10px;
  z-index: 100;
} */

</style>
