import { S3 } from "aws-sdk";
import fs from 'fs'
const s3 = new S3({
    accessKeyId : '',
    secretAccessKey: '',
    endpoint: ''
})

export const uploadFile = async(fileName: string , localFilePath:string) =>{
    const fileContent = fs.readFileSync(fileName)
    const response =await s3.upload({
        Body: fileContent,
        Bucket: "vercel",
        Key: fileName,
    }).promise()
    return response
}