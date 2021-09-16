import * as axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': 'c4a20f9b-9191-419b-99e6-5b4bc7a1e6f8'
   }
});

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data);
   },
   follow(userId) {
      return instance.post(`follow/${userId}`)
   },
   unfollow(userId) {
      return instance.delete(`follow/${userId}`)
   },
   getProfile(userId) {
      console.log('Obsolete method. Please use profileAPI object');
      profileAPI.getProfile(userId);
   }
}

export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/${userId}`);
   }, 
   getStatus(userId) {
      return instance.get(`profile/status/` + userId);
   },
   updateStatus(status) {
      return instance.put(`profile/status`, {status: status} );
   }
}



export const authAPI = {
   me() {
      return instance.get(`auth/me`);
   }
}

