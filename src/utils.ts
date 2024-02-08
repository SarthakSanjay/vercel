const MAX_LEN = 5;

export function generate(){
    let idString = ""
    const characters = "1234567890qwertyuioplkjhgfdsazxcvbnm"
    for(let i = 0 ; i < MAX_LEN ; i++){
     idString += characters[ Math.floor(Math.random() * characters.length)]   
    }
    return idString
}