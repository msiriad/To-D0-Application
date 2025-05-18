let name=document.querySelector(".name")
let caption=document.querySelector(".caption")
let postBtn=document.querySelector(".postBtn")
let updateBtn=document.querySelector(".updateBtn")
let allPost=document.querySelector(".allPost")
let commentone=document.querySelector(".commentone")
let commenttwo=document.querySelector(".commenttwo")


let person=[]


let indexStore;

postBtn.addEventListener("click",()=>{
    commentone.style.display="block"
    commenttwo.style.display="block"



    if(!name.value){
        commentone.innerHTML="Please Put Your Name"
        commentone.style.color="red"
    }else if(name.value){
        commentone.style.display="none"
    }
    if(!caption.value){
        commenttwo.innerHTML="Please Put Your Feeling"
        commenttwo.style.color="red"
    }else if(caption.value){
        commenttwo.style.display="none"
    }
    if(name.value && caption.value){
        person.push({
            name:name.value,
            caption:caption.value
        })
    
        allPost.innerHTML=""
        layout()
        name.value=""
        caption.value=""

    }




    
   
})

updateBtn.addEventListener("click",()=>{

    person[indexStore].name=name.value
    person[indexStore].caption=caption.value

    allPost.innerHTML=""
    layout()

    name.value=""
    caption.value=""

    postBtn.style.display="block"
    updateBtn.style.display="none"
    
 
})



function layout(){
    person.map(item=>{
        allPost.innerHTML+=`<div class="card mt-5" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.caption}</p>
            <button class="btn btn-primary edit">Edit</button>
            <button class="btn btn-danger delete"><i class="fa-solid fa-trash"></i>Delete</button>
          </div>` 
    })

                let deleteBtn=document.querySelectorAll(".delete")
                let convertDeleteBtn=Array.from(deleteBtn)
                convertDeleteBtn.map((item,index)=>{
                    item.addEventListener("click",()=>{
                        person.splice(index,1)

                        allPost.innerHTML=""
                        layout()
                    
                    })
                    
                })
                

                let editBtn=document.querySelectorAll(".edit")
                let converteditBtn=Array.from(editBtn)
                converteditBtn.map((item,index)=>{
                    item.addEventListener("click",()=>{
                        
                    name.value=person[index].name
                    caption.value=person[index].caption

                    updateBtn.style.display="block"
                    postBtn.style.display="none"


                    indexStore=index
                     
                    })

                })
                


   
    
}

