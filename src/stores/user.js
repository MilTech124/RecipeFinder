import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('userStore', () => {
  const user = ref(0)
  const loged = ref(false)
  const apiKEY= 'e986cafbb2d84bcf9e6d8281c8b5a8cd'
  const userName='Jarek'
  const uImg='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
  
  const recipeID=ref([       
  {
    "id":"1096165",      
    "comments":[
      {
        "id":1,
        "userName":"Beata",
        "comment":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the",
        "uImg": 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
      },
      {
        "id":2,
        "userName":"George",
        "comment":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
        "like":2,
        "uImg":"https://wac-cdn.atlassian.com/pl/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=506"
      }
    ]
  },
   {
    "id":"680975",      
    "comments":[
      {
        "id":1,
        "userName":"George",
        "comment":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
        "like":3,
        "uImg":"https://icons.iconarchive.com/icons/artua/dragon-soft/512/User-icon.png"
      },
      {
        "id":2,
        "userName":"Beata",
        "comment":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the",
        "like":2,
        "uImg":"https://wac-cdn.atlassian.com/pl/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=506"
      }
    ]
  }
]   
    
  )
  const favRecipe=ref([
    "1096165","680975"
  ])
    

  return { user, loged, apiKEY, recipeID, userName, uImg, favRecipe}
})
