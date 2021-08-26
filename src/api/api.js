import * as axios from 'axios';

const instanse = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': 'c4a20f9b-9191-419b-99e6-5b4bc7a1e6f8'
   }
});

export const getUsers = (currentPage=1, pageSize=10) => {
   return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
   .then(response => response.data);
}

// export const getUsers2 = (currentPage=1, pageSize=10) => {
//    return axios.get(`follow?page=${currentPage}&count=${pageSize}`)
//    .then(response => response.data);
// }