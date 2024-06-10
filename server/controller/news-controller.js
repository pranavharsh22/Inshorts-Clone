
import news from "../model/new-schema.js"




export const getNews=async(req,res)=>{
    try {
        let data=await news.find({})
        res.status(200).send(data)
    } catch (error) {
        res.status(500).json({message:data.message})
    }

}