<template>
 <!-- FORM OF COMMENT -->
<div class="form">
    <h2>Comments</h2>
    <div class="row d-flex justify-content-center" id="comment">        
        <div class="card shadow-0 border" style="background-color: #f0f2f5;">
            <div class="card-body p-4">
                <!-- INPUT OF COMMENT -->
                <div class="form-outline mb-4">
                    <input v-on:keyup.enter="addComment" type="text" id="addANote" class="form-control" placeholder="Add Comment..." v-model="text" />                    
                </div>
                <!-- INPUT OF COMMENT -->
                <!-- OUTPUT COMMENTS -->
                <div v-for="recipe in user.recipeID">
                    <div class="flex-reverse" v-if="recipe.id===id" >
                        <div  v-for="comment in recipe.comments">                                
                            <div  class="card mb-4">
                                <div  class="card-body">                                
                                    <img :src="comment.uImg" alt="avatar" width="50" height="50" />
                                    <p>{{comment.comment}}</p>
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex flex-row align-items-center">                                                
                                            <p class="small mb-0 ms-2">{{comment.userId}}</p>
                                        </div>
                                        <div class="d-flex flex-row align-items-center">                            
                                            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                            <p  class="small text-muted mb-0">{{comment.like}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>                            
                    </div> 
                </div>
                <!-- OUTPUT COMMENTS -->                 
            </div>
        </div>        
    </div>
</div>
 <!-- FORM OF COMMENT -->
</template>

<script setup>    
import {userStore} from '@/stores/user'
import { ref,} from 'vue';

const user = userStore();
const props=defineProps({id:String})
const text=ref(null)


const addComment = () => {    
    const flag=ref(true)

    user.recipeID.forEach(element => {      
        if(element.id===props.id && text.value){
            flag.value=false
            const obj = ref({   
                id:element.comments.length + 1,                
                userName:props.id,
                comment:text.value,
                like:0,
                uImg:user.uImg
            })            
            element.comments.push(obj.value)  
        }
    })
   if(flag.value){            
        const obj = ref(
            { 
            id:props.id,
            comments:[
                {             
                id:1,                
                userName:props.id,
                comment:text.value,
                like:0,
                uImg:user.uImg
                }
            ] 
            }
        ) 
        user.recipeID.push(obj.value) 
    }
}
</script>

<style lang="scss">
.flex-reverse{
    display: flex;
    flex-direction: column-reverse;
}

</style>