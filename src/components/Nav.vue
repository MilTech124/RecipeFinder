<template>    
<!-- SIMPLE BOOTSTRAP NAVBAR -->
    <nav class="navbar navbar-expand-md bg-white">
        <div class="container-fluid">        
            <a class="navbar-brand" href="#"><img src="../assets/image/logo.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/favorite" class="nav-link">Favorite</router-link>
                </li>                         
            </ul>
            <router-link  to="/login"><button @click="logOut" class="btn btn-outline-primary" type="submit">Logout</button></router-link>
            </div>
        </div>
    </nav> 
<!-- SIMPLE BOOTSTRAP NAVBAR -->
</template>
<script setup>
import {userStore} from '@/stores/user'

    const user = userStore()

    const logOut = () => {
        user.loged = false
    }
</script>

<style lang="scss">
    .navbar-brand{        
        img{
            max-width: 100px;
        }        
    }
    .navbar-collapse{
            justify-content: flex-end;
        }
</style>