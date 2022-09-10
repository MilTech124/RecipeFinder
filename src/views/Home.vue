<template>
<div class="f-recipes">
    <!-- SEARCH INPUT -->
    <div class="logo"><img src="logo.png" alt=""></div>
    <div class="input-group">    
        <input class="form-control form-control-lg" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." v-model="search">
        <datalist id="datalistOptions">
            <option value="pizza"/>
            <option value="rice salad"/>
            <option value="drinks"/>
            <option value="soup"/>
            <option value="chicken pie"/>
        </datalist>
        <button @click="handleSearch" class="btn btn-lg ">Search</button>
    </div>
    <!-- SEARCH INPUT -->
    <!-- SHOW RECIPLE -->
    <div v-if="reciples" class="recipe" >
        <SmRecipe  v-for="recipe in reciples" :key="recipe.id" :img="recipe.image" :title="recipe.title" :id="recipe.id" />
    </div>
    <!-- SHOW RECIPLE -->   
    <button v-if="reciples" @click="skipThis" class="btn btn-lg bg-white ">Load other</button>
</div>
</template>

<script setup>
import SmRecipe from '../modules/SmRecipe.vue'
import {userStore} from '@/stores/user'
import axios from 'axios'
import { ref } from 'vue'

    const user = userStore()
    const reciples = ref(null)
    const search = ref(null)
    const skip = ref(0)

    // FUNCTIONS
    const handleSearch=()=>{
    axios
    .get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${user.apiKEY}&query=${search.value}&number=3&offset=${skip.value}`)
    .then(r=>reciples.value=r.data.results)
    }

    const skipThis=()=>{
        skip.value=skip.value+3
        handleSearch()        
    }
    // FUNCTIONS

</script>

<style lang="scss">
.f-recipes{
    width: 100%;
    height: calc(100vh - 84px);
    margin: auto;
    display: flex;
    padding-top: 5vw;        
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    background-image: url('../assets/image/gallery-bg-2.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    .input-group{
        max-width: 50%;
        min-width: 250px;         
        align-items: center;
        justify-content: center;        

        button{
            border: none;
            background-color:var(--main-item-color);
            color: var(--main-font-color);
            transition: all ease 0.5s;
            &:hover{
                background-color:var(--main-hover-color);  
            }
        }
    }
    .recipe{
        display: flex;
        gap: 5vw;
        flex-wrap: wrap;
        margin: 0 5vw;
        justify-content: center
    }
}
    

</style>