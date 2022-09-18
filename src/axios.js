import axios from "axios";

let instance=axios.create({
     //baseURL:"http://localhost:3001"
     baseURL:"https://hallbooking-server.herokuapp.com"
})

export default instance;