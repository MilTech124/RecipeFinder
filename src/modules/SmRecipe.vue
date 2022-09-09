<template>
   <router-link :to="{name:'recipe',params:{id:id}}">
    <div class="card" style="width: 18rem;">
        <img :src="img" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5> 
            <p v-if="sumary">{{sumary.slice(0,200).replace(/(<([^>]+)>)/gi, "")}}</p>                
        </div>
        <div v-if="!sumary" class="heart">
            <i class="fa fa-heart fa-2x" aria-hidden="true"></i>
        </div>
    </div>
</router-link>
</template>

<script>

export default{

    props:['title','img',"id","sumary"],

    setup(props){
        console.log(props.id);
        return{}
    }
}



</script>

<style lang="scss" scoped>
.card{
    border: none;
    -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    transition: all ease 0.1s;
    position: relative;   
    card-img-top{
        width: 100%;
        height: 250px;
        object-fit: cover;

    } 
   
    &:hover{
        scale: 1.005;  
        .card-body{
        background-color:var(--main-hover-color);   
        }     
    }
    .card-body{
        background-color: var(--main-item-color);        
       
        h5{
            color: var(--main-font-color);
            text-align: center;            
        }
    }
    .heart{
        right: 5px;
        top: 5px;
        background-color: white;
        border-radius: 50%;
        padding: 10px;
        position: absolute;
        transition: all ease 0.2s;
        cursor: pointer;
        &:hover{
                scale: 1.1;
            }
        i{
            color: red;
            
        }

    }
}

</style>