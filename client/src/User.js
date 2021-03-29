import React from 'react'

function User() {
      return (
           
            <div className="container mt-3">

            <form>
                   <div className="row ">
                   <div className="col-4">
                         <input type="text" className="form-control" placeholder="Enter code" name="name"/>
                         <button type="submit" className="btn btn-primary mt-3">Submit</button>
                   </div>
                  </div>
            </form>
            </div>
            
         
      )
}

export default User
