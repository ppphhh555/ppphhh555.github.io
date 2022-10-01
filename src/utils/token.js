export const setToken = (token)=>{
    localStorage.setItem('Token',token)
}
export const getToken = ()=>{
    localStorage.getItem('Token')
}
export const removeToken = ()=>{
    localStorage.removeItem("Token")
}