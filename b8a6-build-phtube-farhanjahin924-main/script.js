
const tab = async () => {
    const response = await fetch ('https://openapi.programming-hero.com/api/videos/categories')
    
    const data = await response.json();
    
    // console.log(data);
    const tabId = document.getElementById('all-tabs')
    data.data.forEach((element) => {
        const div = document.createElement('div');
        div.innerHTML=`<a onclick="handleCardData('${element.category_id}')" class="tab btn rounded-none bg-[#13131326] text-[#131313B2]  lg:px-7 ">${element.category}</a> `
        tabId.appendChild(div);
        
    });
    
};

const handleCardData = async (id) =>{
    const response = await fetch (`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await response.json();
    // console.log(data);
    
    const cardsContainer = document.getElementById('cards-container');
    const EmptyContainer = document.getElementById('forEmpty');
    cardsContainer.innerHTML='';
   
    if (data.data.length === 0) {
        EmptyContainer.innerHTML='';
        // Handle t he case when data.data is empty
        // console.log('Data is empty');
        const div = document.createElement('div')
        div.innerHTML =` <div class="flex flex-col justify-center items-center gap-5 pt-9 ">
        <img class="h-36 w-36" src="./Logos/Icon.png" alt="">
        <h4 class="text-[#171717] text-4xl font-semibold text-center">Oops!! Sorry, There is no content here</h4>
     </div>`;
     EmptyContainer.appendChild(div);

    } else {
        data.data.forEach((details) => {
            EmptyContainer.innerHTML='';
            // console.log(details)
            const div = document.createElement('div')
            div.innerHTML =`
            <div class="card   bg-[#FFF] rounded-none p-2">
                        <figure><img class="w-64 h-40" src="${details.thumbnail}"  /></figure>
                
                        
                         <div class=" relative bottom-8 left-32 w-fit  ">
                         <p class="text-white text-xs font-normal bg-[#171717]  rounded-sm">
                         ${details.others.posted_date ? timeCount(details.others.posted_date) : ''}
    
                       </p>
                       
                         </div>
                
                        <div class="card-body  p-0">
                        <div class="flex gap-3 pt-4 pl-20 lg:pl-3 ">
                            
                          <div>
                            <img class="w-12 h-11 rounded-full pl-2 " src="${details.authors[0].profile_picture}" alt="">
                        </div>
                        
                          <div>
                         <h2 class="text-base font-bold">${details.title}</h2>
                
                       <div class="flex gap-5 py-2.5 font-normal text-sm">
                
                         <h3 class="font-normal text-sm text-slate-500">${details.authors[0].profile_name}</h3>
                         <h3>${details.authors[0].verified ? '<img src="./Logos/bluetik.png" alt=""></img>' : ''}</h3>
    
                
                         </div>
                         <h4 class="font-normal text-sm text-slate-500">${details.others.views} views</h4>
                          </div>
                
                       </div>
                        </div>
                
                
                
                      </div>
    
    
            `
            
            
           cardsContainer.appendChild(div) 
            
            
           
         })
          
         
    }
   // try :) 
   const shortViewList = document.getElementById('shortViewList');
   shortViewList.addEventListener('click',()=>{
     

      data.data.sort( 
        (a, b) => 
          parseFloat(b?.others.views.replace("K", "")) - 
          parseFloat(a?.others.views.replace("K", "")) 
      ); 
     
      const cardsContainer = document.getElementById('cards-container');
      const EmptyContainer = document.getElementById('forEmpty');
      cardsContainer.innerHTML='';
      if (data.data.length === 0) {
          EmptyContainer.innerHTML='';
          // Handle t he case when data.data is empty
          // console.log('Data is empty');
          const div = document.createElement('div')
          div.innerHTML =` <div class="flex flex-col justify-center items-center gap-5 pt-9 ">
          <img class="h-36 w-36" src="./Logos/Icon.png" alt="">
          <h4 class="text-[#171717] text-4xl font-semibold text-center">Oops!! Sorry, There is no content here</h4>
       </div>`;
       EmptyContainer.appendChild(div);
    
      } 
      
      else {
          data.data.forEach((details) => {
              EmptyContainer.innerHTML='';
              // console.log(details)
              const div = document.createElement('div')
              div.innerHTML =`
              <div class="card  bg-[#FFF] rounded-none p-2">
                          <figure><img class="w-64 h-40" src="${details.thumbnail}"  /></figure>
                  
                          
                           <div class=" relative bottom-8 left-32 w-fit  ">
                           <p class="text-white text-xs font-normal bg-[#171717]  rounded-sm">
                           ${details.others.posted_date ? timeCount(details.others.posted_date) : ''}
      
                         </p>
                         
                           </div>
                  
                          <div class="card-body  p-0">
                          <div class="flex gap-5">
                              
                            <div>
                              <img class="w-[40px] h-[40px] rounded-full pl-2 " src="${details.authors[0].profile_picture}" alt="">
                          </div>
                          
                            <div>
                           <h2 class="text-base font-bold">${details.title}</h2>
                  
                         <div class="flex gap-5 py-2.5 font-normal text-sm">
                  
                           <h3 class="font-normal text-sm text-slate-500">${details.authors[0].profile_name}</h3>
                           <h3>${details.authors[0].verified ? '<img src="./Logos/bluetik.png" alt=""></img>' : ''}</h3>
      
                  
                           </div>
                           <h4 class="font-normal text-sm text-slate-500">${details.others.views} views</h4>
                            </div>
                  
                         </div>
                          </div>
                  
                  
                  
                        </div>
      
      
              `
              
              
             cardsContainer.appendChild(div) 
              
              
             
           })
            
           
      }
    
  //delete here
   })

}

const timeCount = (seconds) => {
    // console.log(seconds)
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    if (hours > 0) {
        return `${hours} hr ${minutes} min ago`;
    } else {
        return `${minutes} min ago`;
    }

}


handleCardData(1000);

tab ();





// short by view
