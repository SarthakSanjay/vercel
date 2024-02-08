import express from "express"
import cors from "cors"

const app = express()
app.use(cors())

app.post('/sendRepoUrl',(req,res)=>{
    const repoUrl = req.body.repoUrl

    res.json({})
})
app.listen(3000 , ()=>{
    console.log("port listining on port  3000")
})