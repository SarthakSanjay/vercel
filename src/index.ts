import express from "express"
import cors from "cors"
import simpleGit from "simple-git"
import { generate } from "./utils"
import { getPath } from "./files"
import path from 'path'
import { uploadFile } from "./aws"
const app = express()
app.use(cors())
app.use(express.json())
app.post('/sendRepoUrl',async(req,res)=>{
    const repoUrl = req.body.repoUrl
    const id = generate()
    await simpleGit().clone(repoUrl , path.join(__dirname ,`output/${id}`) )
    const files =  getPath(path.join(__dirname , `output/${id}`))
    console.log(files);
    files.forEach(async file => {
        await uploadFile(file.slice(__dirname.length + 1) , file)
    })
    res.json({id:id})
})
app.listen(3000 , ()=>{
    console.log("port listining on port  3000")
})