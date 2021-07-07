/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable one-var */

import '../scss/style.scss';
import { pageLoader } from './app/webpage-loader';
import { getUsers } from './app/user-profiles';
import { showUserPosts } from './app/user-posts';

pageLoader();
getUsers();
showUserPosts();
