
import { data } from "./constants/data.js"
import news from "./model/new-schema.js"

const DefaultData=async()=>{
    try {
      await news.insertMany(data)
      console.log('Data imported Successfully')  
    } catch (error) {
     console.log('error',error.message)   
    }
}

export default DefaultData;