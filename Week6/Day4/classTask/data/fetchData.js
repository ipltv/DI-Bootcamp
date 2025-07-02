import axios from "axios";
async function fetchData(url){
    const res = await axios.get(url);
    return res.data;
}

export default fetchData;