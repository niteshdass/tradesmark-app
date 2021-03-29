
import { API } from '../../config';
import cookie from 'js-cookie'


export const order = data => {

      return fetch(`${API}/order/create`,{
           method:'POST',
           headers:{
                 Accept:'application/json',
                 'Content-Type':'application/json'
           },
           body:JSON.stringify(data) 
      })
      .then(response =>{
          return response.json();

          console.log("data",response.json());

      }).catch( err => console.log(err))
}