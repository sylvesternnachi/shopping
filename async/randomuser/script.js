const generateBtn = document.querySelector('.generatebtn');

function generateRandomUser(endpoint){


    fetch(endpoint)
    .then(res => res.json())
    .then(data => {
        fetchUser(data.results[0])
    })
    .catch(error => {
        console.log(error + ' Something went wrong ')
    });

}


function fetchUser(user) {

    const bodyBg = document.querySelector('.dynamic-bg');
        const contentArea = document.querySelector('.content-area');

        console.log(bodyBg)

        console.log(user.gender);

        if(user.gender == 'female'){
            bodyBg.style.background = '#e335afff';
        }else{
            bodyBg.style.background = '#202845ff';
        }

        contentArea.innerHTML = ` 
        

      <div class="card mt-3">
        <img class="card-img-top" src="${user.picture.medium}" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
          <p class="card-text"> Age: 
           ${user.dob.age}
      
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${user.email}</li>
          <li class="list-group-item">+${user.phone}</li>
          <li class="list-group-item">${user.location.city} - ${user.location.country}</li>
        </ul>
        <div class="card-body text-center ">
          <div class="row">
            <div class="col-4">
              <a href="#" class="card-link btn btn-danger my-2 mx-auto">👎</a>
              </div>

              <div class="col-4">
              <a href="#" class="card-link btn btn-primary my-2 mx-auto">❤</a>
              </div>

              <div class="col-4">
              <a href="#" class="card-link btn btn-success my-2 mx-auto">👍</a>
              </div>
            </div>
        </div>
      </div>
        
        `;
    
}

window.addEventListener('load', () => {
    generateRandomUser('https://randomuser.me/api/');
})


generateBtn.addEventListener('click', () => {
    generateRandomUser('https://randomuser.me/api/');
})

