import axios from "axios"

let data = localStorage.getItem('data') ?  JSON.parse(localStorage.getItem('data')) : {};


export let axiosAuth = axios.create({
  headers: {
    Authorization : `Bearer ${ data.tokens?.access?.token }`
    }   
  }
)

export let axiosAuthUpload = axios.create({
    headers: {
      Authorization : `Bearer ${data.tokens?.access?.token}`,
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/json" 
      }
    }
  )


