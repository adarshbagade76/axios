import './App.css';
import React, { useEffect, useState } from 'react';

import axios from 'axios';

function App() {
  const [inputData, setInputData] = useState({ username: '', email: '' })
  const [apidata, setapidata] = useState([]);
  // useEffect(()=>{
  // async function getData(){
  // const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
  // console.log(res.data.name)  
  //  };
  //  getData()
  // });


  // fetcing through javascript//
  //  const getUsers= async()=>{
  //  const store= await fetch('https://jsonplaceholder.typicode.com/posts')
  //  const data=await store.json();
  //  console.log(data)
  // }


  // useEffect(()=>{
  //   getUsers();
  // },[])

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(res)
    setapidata(res.data)

  }
  // axios.post("https://jsonplaceholder.typicode.com/users", { name: inputData.name, email: inputData.email }
  //   .then(response => setapidata({ name: response.data, email: response.data }))
  // )




  return (

    <>
      <form >
        <input type='text' placeholder='username' value={inputData.username} onChange={(e) => setInputData({ username: e.target.value })} name='fn' /><br /><br />
        <input type='text' placeholder='email' value={inputData.email} onChange={(e) => setInputData({ email: e.target.value })} name='fn' /> <br /><br />

        <button type="button" class="btn btn-dark" >ADD</button>
      </form>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th ></th>
            <th scope="col">name</th>
            <th scope="col">email</th>

          </tr>
        </thead>
        <tbody>
          {/* /* map method used to create & display the new array  */}
          {
            apidata.map((item) => {
              return (

                <tr>
                  <th key={item.id}></th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  {/* <td><button type="button" class="btn btn-primary" onClick={()=>onEdit(item,ind)}>Edit</button></td>
      <td><button type="button" class="btn btn-secondary"onClick={()=>deleteItem(ind)}>Delete</button></td> */}
                </tr>)
            })
          }
        </tbody>
      </table>
      {/* <h3>{apidata.title}</h3>
     <p>{apidata.body}</p>  */}

      {/* <h1 className='center'>you choose {num}</h1>
      <select className='center' value={num}
        onChange={(event) => {
          setNum(event.target.value);
        }}

      >
        <option value={'1'}>1</option>
        <option value={'25'}>25</option>
        <option value={'3'}>3</option>
        <option value={'4'}>4</option>
        <option value={'5'}>5</option>
      </select> */}
    </>
  );
}

export default App;



