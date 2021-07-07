/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
/* eslint-disable one-var */
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */

/**
     * We are fetching data and giving it conditions if it successful or rejected
     * Mapping the data and implementing it to te HTML
     */
export const getUsers = async () => {
  const userWrapper = document.querySelector('.js-userWrapper'),
    img = require('../images/user.jpg'),
    response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (response) {
    if (response.status !== 200) {
      throw new Error('cannot fetch data');
    }
  }

  const data = await response.json()
    .then((data) => {
      const userProfile = data.map((user) => {
        if (data) {
          return `
               <div class="col-md-4 my-3">
                  <div class="card userProfile js-userProfile">
                      <img class="profileImg js-profile-img  rounded-circle" src="${img}" alt="Card image cap"/>
                      <div class="card-body text-center">
                          <h5 class="card-title">${user.name}</h5>
                          <p class="card-text">${user.email}</p>
                          <button class="btn btn-primary showPosts js-showPosts" data-link data-id="${user.id}">Show Posts</button>
                      </div>
                  </div>
               </div>
           `;
        }
      }).join('');
      userWrapper.innerHTML = userProfile;
    }).catch((error) => {
      if (error) {
        console.log(error);
      }
    });
};
