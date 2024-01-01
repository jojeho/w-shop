

import Cards from "../../components/detail/Cards"
import Review from "../../components/detail/review"
import Info from "./Info"
// import AA from "./AA"
import Fixed from "../../components/detail/Fixed"
import Comment from "../../components/detail/Comment"
import DetailNav from "../../components/detail/DetailNav" 
import Foldtext from "./FoldText"
import Relation from "../../components/detail/Relation"
import Header from "../../components/header/Myheader"
import { Divider } from "@nextui-org/react"

export default function Home() {
  return (
   
     <div className="flex flex-col  justify-center items-center">
     
      <div className="flex flex-row flex-wrap gap-10 0 justify-between px-32">
       <Cards></Cards>
         <Fixed></Fixed>        
      </div>

      <DetailNav ids={['product_info','relation','review']}/>      
        <section id="product_info">
        <Comment ></Comment>
        </section>
        <div className="divide-x-2 w-full"></div>

        <Divider className="my-5"></Divider> 

        <section id="relation">
       
       
        <Relation></Relation>

        </section>
        <Divider></Divider>
        <section id="review">
        <Review ></Review>
        </section>
       
         {/* <Foldtext></Foldtext> */}

        
    </div>
    
    //  <div className="flex flex-row  bg-red-100 gap-2 px-4 py-10 w-full">
    //     <div className="w-[100px] bg-blue-200">aa</div>
    //     <div className="w-[100px] bg-blue-200">a</div>
    //     <div className="w-[100px] bg-blue-200">a</div>       
    //     <div className="w-[200px] bg-blue-200 shrink-0">a</div>
    //     <div className="w-[100px] bg-blue-200">a</div>
    //     <div className="w-[100px] bg-blue-200">a</div>
    //     <div className="w-[100px] bg-blue-200">a</div>
    //     <div className="w-[100px] bg-blue-200">a</div>
    //  </div>
  )
}