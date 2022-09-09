<template>    
    <div v-if="recipes" class="fav-recipe" >
        <SmRecipe  v-for="recipe in recipes" :key="recipe.id" :img="recipe.image" :title="recipe.title" :id="recipe.id" :sumary="recipe.summary" /> 
    </div>    
</template>

<script setup>    
import SmRecipe from '../modules/SmRecipe.vue'
import {userStore} from '@/stores/user'
import axios from 'axios'
import { ref } from 'vue';

    const recipes=ref([])
    const user = userStore()

    user.favRecipe.forEach(element => {
        console.log(element); 
    axios
    .get(`https://api.spoonacular.com/recipes/${element}/information?apiKey=${user.apiKEY}&includeNutrition=false`)
    .then(r => recipes.value.push(r.data) )
        console.log(recipes.value);
    });
</script>

<style lang="scss">
    .fav-recipe{
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 20px; 
    }

</style>