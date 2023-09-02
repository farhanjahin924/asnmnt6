data.data.forEach((details) => {

    // console.log(details)
    const div = document.createElement('div')
    div.innerHTML =`
    <div class="card  bg-[#FFF] rounded-none p-2">
                <figure><img class="w-64 h-40" src="${details.thumbnail}"  /></figure>
        
                
                 <div class=" relative bottom-8 left-24 w-fit  ">
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