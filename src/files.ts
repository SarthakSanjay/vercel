import fs from 'fs'
import path from 'path'
export function getPath(folderPath:string){
    let allPathArray:string[] =[]
    const allFilesAndFolder = fs.readdirSync(folderPath)
    allFilesAndFolder.forEach(file => {
        const fullFilePath = path.join(folderPath , file)
        console.log(fullFilePath);
        if(fs.statSync(fullFilePath).isDirectory()){
            allPathArray = allPathArray.concat(getPath(fullFilePath))
        }else{
            allPathArray.push(fullFilePath)
        }

    });
    return allPathArray
}