const { default: axios } = require("axios");
const { useState, useEffect } = require("react");

function Demo(){
  const [data, setData] = useState([])
  useEffect(() => { 
    axios.get("http://localhost/laravel/laravel/public/api/blog")
    .them(res=>{
      setData(res.data);
    })
    .catch(error => console.error(error))

  }, [])
  function rederData(data) {
    if(data.length > 0) {
      return data.map((value, key) =>{
        return(
          <li key ={key}>
            <p> {value.id}</p>
            <p> {vaule.title}</p>
            <p> {value.image}</p>
            <p> {value.description}</p>
            <p> {value.content}</p>
          </li>
        )
      })
    }
  }


}