import axios from "axios";

 const Api = {
    getPersons: async function(){
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        const {data} = await res

        return data
    }

}

export default Api;