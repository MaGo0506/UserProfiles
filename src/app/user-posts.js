/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable one-var */

/**
  * We are making our document body clickable
  * to make data manipulation easier
  */
export const showUserPosts = () => {
  document.body.addEventListener('click', async (e) => {
    const targetBlock = e.target,
      userId = targetBlock.getAttribute('data-id'),
      postWrapper = document.querySelector('.js-postWrapper'),
      showPostBtns = document.querySelectorAll('.js-showPosts');

    /**
      * We are adding pushState method for our user when clicked
      * and also the reset button to reset all other push states
      * and remove posts
      */
    if (targetBlock.classList.contains('js-showPosts')) {
      window.history.pushState({ urlPath: `/${userId}` }, '', `/${userId}`);
    }

    if (targetBlock.classList.contains('js-reset')) {
      window.history.pushState(null, null, '/');
      for (let index = 0; index < showPostBtns.length; index += 1) {
        if (showPostBtns && postWrapper) {
          showPostBtns[index].classList.remove('active');
          showPostBtns[index].parentNode.parentNode.classList.remove('active');
          postWrapper.classList.add('hidden');
        }
      }
    } else if (postWrapper) {
      postWrapper.classList.remove('hidden');
    }

    /**
      * We are giving active classes to the user,
      * that we are showing the posts from
      */
    function userStatus() {
      if (showPostBtns) {
        if (targetBlock.classList.contains('js-userWrapper')) return;
        if (targetBlock.classList.contains('js-showPosts')) {
          for (let index = 0; index < showPostBtns.length; index += 1) {
            if (showPostBtns) {
              showPostBtns[index].classList.remove('active');
              showPostBtns[index].parentNode.parentNode.classList.remove('active');
            }
          }
          if (targetBlock.classList.contains('active') && targetBlock.parentNode.parentNode.classList.contains('active')) {
            targetBlock.classList.remove('active');
            targetBlock.parentNode.parentNode.classList.remove('active');
          } else {
            targetBlock.parentNode.parentNode.classList.add('active');
            targetBlock.classList.add('active');
          }
        }
      }
    }
    userStatus();

    /**
       * Here we are fetching an attribute data-id so that we
       * can then fetch data with the same id number
       * Creating elements and appending them to the HTML
       */
    if (targetBlock.classList.contains('js-showPosts') && targetBlock.classList.contains('active')) {
      const targetId = targetBlock.getAttribute('data-id'),
        answer = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${targetId}`);

      const posts = await answer.json()
        .then((posts) => {
          const postContent = posts.map((post) => {
            if (posts) {
              return `
                  <div class='bg-white rounded p-3 my-3 border border-light js-userId userId' post-id="${post.userId}">
                      <p class='fw-bold js-postTitle postTitle'>${post.userId}: ${post.title}</p>
                      <p class="js-postText postText">${post.body}</p>
                  </div>
              `;
            }
          }).join('');
          if (postWrapper && postContent) {
            postWrapper.innerHTML = postContent;
          }
        /**
          *  Catching the error
          */
        }).catch((error) => {
          if (error) {
            console.log(error);
          }
        });
    }
  });
};
