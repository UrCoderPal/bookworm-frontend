export const authExist=()=>{
    const t = localStorage.getItem("Token")
    if(t)return true;
    else return false;
}