'use client'
import { useState } from "react"
import {Button} from "@nextui-org/react";
export default function App() {
    const [isMore, setCount] = useState(false);
    const moreData='더 보기 데이타를 가져 왔어요'
    
    if(isMore)
    {
        return (
            <div>
            <div >asfdasf afdafasf as fsafas fas fasf af asf f afasfasf</div>
           <div> more data</div>
           <Button  onClick={()=>setCount(false)}>더보기</Button>
            </div>
        )
    }
     
     return (
            <div>
            <div >asfdasf afdafasf as fsafas fas fasf af asf f afasfasf</div>
            <Button  onClick={()=>setCount(true)}>더보기</Button>
            </div>
        )
}