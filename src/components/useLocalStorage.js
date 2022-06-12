import {useState,useEffect} from "react";

function getSavedData(key,initialValue){
  const savedData =  JSON.parse(localStorage.getItem(key))
  if(savedData) return savedData

  if(initialValue instanceof Function) return initialValue()
  return initialValue
}

export default function useLocalStorage(key,initialValue) {
const [value, setValue] = useState(() =>{
return getSavedData(key,initialValue)
})
useEffect(() =>{
    localStorage.setItem(key,JSON.stringify(value))
},[key,value])

return [value, setValue]
}
