

export const createApi = (data) => {
      return fetch(`http://localhost:8000/back`, {
          method: 'GET',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
              
          },
         
      })
          .then(response => {
              console.log("response success")
              return response.json();
          })
          .catch(err => {
              console.log("have error")
              console.log(err);
          });
  };