<template>
    <div v-if="recipe" class="recipe">
        <div class="heading-recipe">
            <!-- LEFT IMAGE WITH ICONS   -->            
            <div class="l-img">
                <img :src="recipe.image" alt="">
                <h1>{{recipe.title}}</h1>  
                <div class="recipe-icon">
                    <i v-if="recipe.healthScore>4" class="fa fa-heart fa-3x" aria-hidden="true" style="color:red;" ><p>healthy</p></i>
                    <i v-if="recipe.veryPopular" class="fa  fa-thumbs-o-up fa-3x" style="color:red;" aria-hidden="true" ><p>popular</p></i>
                    <i v-if="recipe.vegetarian" class="fa  fa-leaf fa-3x" style="color:green;" aria-hidden="true" ><p>vegetarian</p></i>
                    <i v-if="recipe.vegan" class="fa  fa-pagelines fa-3x" style="color:green;" aria-hidden="true" ><p>vegan</p></i>     
                    <i v-if="recipe.glutenFree" class="fa  fa-check-circle-o fa-3x" style="color:green;" aria-hidden="true" ><p>gluten free</p></i>
                    <i v-if="recipe.dairyFree" class="fa  fa-paw fa-3x" style="color:green;" aria-hidden="true" ><p>dairy free</p></i>
                </div>              
            </div> 
            <!-- LEFT IMAGE WITH ICONS   --> 
            <!-- INGREMENTS -->
            <div class="recipe-info">
                <h2>Ingrements</h2>
                <div v-for="item in recipe.extendedIngredients" class="list-group mx-0 w-auto">
                    <label class="list-group-item d-flex gap-2">
                    <input class="form-check-input flex-shrink-0" type="checkbox" value="" >
                        <span>
                            {{item.name}}
                            <small class="d-block text-muted">{{item.original}}</small>
                        </span>
                    </label>                   
                </div>                                      
            </div>
            <!-- INGREMENTS -->  
        </div> 
        <div class="container">
            <!-- COOKING INFOS -->
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <div  class="rounded-circle flex-shrink-0 ">
                        <i  class="fa fa-clock-o fa-3x" aria-hidden="true"></i>
                    </div>                           
                    <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h6 class="mb-0">Need to make:</h6>
                        <p class="mb-0 opacity-75">in minutes: {{recipe.readyInMinutes}}'</p>
                    </div>                        
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <div  class="rounded-circle  flex-shrink-0 ">
                        <i  class="fa fa-users fa-3x" aria-hidden="true"></i>
                    </div>
                    <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h6 class="mb-0">Servings</h6>
                        <p class="mb-0 opacity-75">for <b>{{recipe.servings}}</b> persons.</p>
                    </div>                        
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <div  class="rounded-circle  flex-shrink-0 ">
                        <i  class="fa fa-book fa-3x" aria-hidden="true"></i>
                    </div>  
                    <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                        <h6 class="mb-0">Summary of recipe</h6>
                        <p class="mb-0 opacity-75" >{{recipe.summary.replace(/(<([^>]+)>)/gi, "")}}</p>
                    </div>                        
                    </div>
                </a>
            </div>
            <!-- COOKING INFOS --> 
            <!-- INSTRUCTIONS  -->
            <h2>Instruction</h2>
            <div class="recipe-step">
                <div v-for="step in recipe.analyzedInstructions[0].steps" class="list-group mx-0 w-auto">
                    <label class="list-group-item d-flex gap-2">
                    <input class="form-check-input flex-shrink-0" type="checkbox" value="" >
                        <span>
                            {{step.step}}                          
                        </span>
                    </label>                   
                </div>
            </div>
            <!-- INSTRUCTIONS  -->
            <!-- COMMENTS MODULE -->
            <Comment :id="id"/> 
            <!-- COMMENTS MODULE -->
        </div>
        <button @click="addFav" class="btn add-fav"> Add to favorite</button>
    </div>
</template>

<script>
import axios from 'axios';
import {userStore} from '@/stores/user'
import { ref } from 'vue';
import Comment from '../modules/Comment.vue';

export default{
props: ["id"],
components: { Comment },  

setup(props) {
    const recipe = ref(null);
    const user = userStore();
    const image = ref(null);
    
    const addFav = () => {
        if(!user.favRecipe.includes(props.id)){
        user.favRecipe.push(props.id)           
        }
    }
    axios
        .get(`https://api.spoonacular.com/recipes/${props.id}/information?apiKey=${user.apiKEY}&includeNutrition=false`)
        .then(r => recipe.value = r.data);
        
    return { recipe, image, addFav };
    },
}  
</script>

<style lang="scss">

.recipe{
    .heading-recipe{
        display: flex;
        width: 100%;     
        @media (max-width: 1000px) { 
            flex-wrap: wrap;;
            }  
        .l-img{
            min-width: 250px;
            min-height: 300px;
            position: relative;
            width: 100%;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            h1{
                position: absolute;
                bottom: 0px;
                right: 0px;
                padding: 50px 20px;
                background-color: var(--main-item-color);
                color: var(--main-font-color);
            }
            .recipe-icon{
                position: absolute;                                  
                top: 10px;
                right: 10px;
                display: flex;
                i{
                    position: relative;
                    margin-left: 10px;
                    display: flex;
                    background-color: white;
                    width: 4rem; 
                    height: 4rem;   
                    border-radius: 50%; 
                    align-items: center;
                    justify-content: center;    
                    &:hover{
                        p{
                            display: flex;
                        }
                    }                
                }
                p{
                    position: absolute;
                    top: 100%;
                    left: 0;
                    display: none;
                    font-size: 2rem;background-color: white;
                    padding: 5px;
                    border-radius: 5px;
                }
            }
        }           
    }  
    .recipe-info{
        width: 100%;
        padding: 0 5em;
    }
    .container{  
        display: flex;
        flex-direction: column;
        padding-top: 50px;        
        margin: auto;
        max-width: 1200px;
    }
    h2{
        padding-top: 50px;
        padding-bottom: 20px;
        }
    .add-fav{
        position: fixed;
        bottom: 2%;
        right:1%;
        background-color: var(--main-item-color);
        color: white;
        font-weight: bold;   
    }
}

</style>