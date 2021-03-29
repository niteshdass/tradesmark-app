import React, { useState } from 'react';
import axios from 'axios';
function MyFile() {
  /** start states */

  const [myfile, setMyfile] = useState('');
  const [myfileName, setMyFileName] = useState('');
 const [myText, setMytext] = useState('');
 
 
  const [error, setError] = useState({
    found: false,
    message: '',
  });
  /** end states */

  // Upload image
  const upload = (e) => {
    setMyfile(e.target.files[0])
    setMyFileName(e.target.files[0].name)
   
  };
    const upload1 = (e) => {
    setMytext(e.target.value)

  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();
     let data = new FormData();
    data.append('categoryImage', myfile);
    data.append('file_name',myfileName);
    data.append('mytext',myText);
 
    axios
      .post('http://localhost:8000/api/signup', data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        setError({
          found: true,
          message: err.response.data.errors,
        });

      });
    
  };

  return (
    <div
      style={{ width: '100vw', height: '100vh' }}
      className='d-flex justify-content-center align-items-center flex-column'
    >
      {error.found && (
        <div
          className='alert alert-danger'
          role='alert'
          style={{ width: '359px' }}
        >
          {error.message}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ width: '359px', marginTop:"100px" }}>
   
         <div className='custom-file mb-3'>
          <input
            type='text'

            placeholder="my teaxt"
            value={myText}
            
            onChange={upload1}
          />
          
        </div>

        <div className='custom-file mb-3'>
          <input
            type='file'
            className='custom-file-input'
            id='inputGroupFile04'
            aria-describedby='inputGroupFileAddon04'
            onChange={upload}
          />
          <label className='custom-file-label' htmlFor='inputGroupFile04'>
            Choose file
          </label>
        </div>
        <button type='submit' className='btn btn-primary w-100'>
          Submit
        </button>
      </form>
 
    </div>
  );
}

export default MyFile;
