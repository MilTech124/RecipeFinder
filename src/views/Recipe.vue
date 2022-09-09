<template>
    <div v-if="recipe" class="recipe">
        <div class="heading-recipe">  
            <div class="l-img">
                <img :src="recipe.image" alt="">
                <h1>{{recipe.title}}</h1>  
                <div class="recipe-icon">
                    <i class="fa fa-heart fa-3x" aria-hidden="true" style="color:red;" ></i><p>healthy</p>
                    <i class="fa  fa-thumbs-o-up fa-3x" style="color:red;" aria-hidden="true" ></i><p>populat</p>
                    <i class="fa  fa-leaf fa-3x" style="color:green;" aria-hidden="true" ></i><p>vegetarian</p>
                    <i class="fa  fa-pagelines fa-3x" style="color:green;" aria-hidden="true" ></i><p>vegan</p>     
                    <i class="fa  fa-check-circle-o fa-3x" style="color:green;" aria-hidden="true" ></i><p>gluten free</p>
                    <i class="fa  fa-paw fa-3x" style="color:green;" aria-hidden="true" >dairy free</i>
                </div>              
            </div>     
            
            <div class="recipe-info">
                <div class="list-group w-auto">
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
            </div>  
        </div>       
        <pre>{{recipe}}</pre> 
    </div>
</template>

<script>
import axios from 'axios';
import {userStore} from '@/stores/user'
import { ref } from 'vue';

    export default{
        props:["id"],
        setup(props){            
            const recipe=ref(null)
            const user = userStore()
            const image = ref(null)

            axios
            .get(`https://api.spoonacular.com/recipes/${props.id}/information?apiKey=${user.apiKEY}&includeNutrition=false`)
            .then(r=>recipe.value=r.data)

            
            return{recipe, image }

            
        }

    }
    

</script>

<style lang="scss">

    .recipe{
        .heading-recipe{
            display: flex;
            width: 100%;
            
            .l-img{
                flex:0 0 50%;
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
                    bottom: 120px;
                    right: 0;
                    display: flex;                   
                    
                    
                    i{
                        margin-left: 10px;
                        display: flex;
                        background-color: white;
                        width: 4rem; 
                        height: 4rem;   
                        border-radius: 50%; 
                        align-items: center;
                        justify-content: center;                    
                    }
                }
            }
           .recipe-info{            
                
                .rounded-circle {
                    border-radius: 20% !important;
                    width: 50px;
                    height: 50px;
                    text-align-last: center;
                }
            }
        }  
     
 
    }

</style>