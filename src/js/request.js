import loaderToggle from "./loader"
const request = async (API)=> {
    loaderToggle(true)
    const res = await fetch(API)
    if(!res.ok) {
        loaderToggle(false)
        throw new Error("Something went WRONG !")
    }
    const datas = await res.json()
    loaderToggle(false)
    return datas
}

export default request