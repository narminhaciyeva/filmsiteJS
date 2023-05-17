// const row = document.querySelector(".row");

// axios.get('https://jsonplaceholder.typicode.com/posts').then(resp => {

// console.log(resp.data)
//     for (let i = 0; i < resp.data.length; i++) {
        
//        row.innerHTML +=  `<div class="card m-3" style="width: 18rem;">
//           <h5 class="card-title">${resp.data[i].title}</h5>${resp.data[i].body}</p>
//           <p class="card-text">

//         </div>
//       </div>`
       
//     }


    
// });

var film = document.querySelector(".row");
axios.get("https://api.tvmaze.com/shows").then(res =>{
      for(let i=0; i<res.data.length; i++){
        film.innerHTML += ` <div class="card col-2">
        <img src="${res.data[i].image.medium}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${res.data[i].name}</h5>
          <p class="card-text">${res.data[i].externals.imdb}</p>
          <a href="#" class="btn btn-primary">Details</a>
        </div>
      </div>`
      }
})
