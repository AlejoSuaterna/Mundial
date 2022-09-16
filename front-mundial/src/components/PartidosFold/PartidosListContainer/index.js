import Data from "../../Data"
import PartidosList from "../PartidosLIst"
import { useState,useEffect } from "react"

export default function PartidosListContainer(){

    const getFetch = new Promise((res,rej)=>{
        if(Data){
            res(Data)
        } else{
            rej(console.log("No hay datos"))
        }
    })

    const[data,setData]=useState([])

    useEffect(()=>{
        getFetch.then((resp)=>setData(resp))
        .catch(err=>console.log(err))
        .finally(()=>console.log("datos traidos"))
    },[])

    return(
        <div className="container">
            <PartidosList data ={data}/>
        </div>
    )
}