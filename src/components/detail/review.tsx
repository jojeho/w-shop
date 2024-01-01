import exp from "constants";

import { Avatar, Badge, Button,  Divider ,Progress} from "@nextui-org/react";
import styles from './review.module.css'
import { CardBody ,Card } from "@nextui-org/react";
import ReviewItem from "./ReviewItem"
export default function Review() {

    const list = ['키:156', '몸무게:43kg', '선택한 옵션:블랙/SHORT']


    return (
        <div className="flex flex-col ">
              <div className="flex flex-row flex-wrap">
                <Card radius="none" shadow="none" className="border-none w-96">
                <CardBody  >
             
                <div className="flex flex-col gap-5  ">
                    <h3 className="font-bold text-md">구매고객 총 평점</h3>
                    <div >
                        <div >4.5</div>
                        <div className={styles.rate}>
                            <span style={{ width: "70%" }}></span>
                        </div>
                    </div>
                </div>
                </CardBody>     
                </Card>

                <Card radius="none" shadow="none" className="border-none w-96">
                    <CardBody>
                    <div className="flex flex-col gap-4  " >
                    <h3 className="font-bold text-md"       >평점 비율</h3>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2 items-center ">
                            <p className="w-36 whitespace-nowrap border border-2 rounded-lg px-4  border-red-300 text-red-300">컬러</p>
                          
                            <span className="whitespace-nowrap">똑같아요</span>
                            <Progress color="danger"   aria-label="Loading..." value={20} className="max-w-sm" />                                                  
                            <span className="rate-percent color-percent">0%</span>
                        </div>
                        <div className="flex flex-row gap-2 items-center ">
                            <span className="w-36 whitespace-nowrap border border-2 rounded-lg px-4 border-red-300 text-red-300">사이즈</span>
                            <span className="whitespace-nowrap">잘 맞아요</span>
                            <Progress color='danger' aria-label="Loading..." value={60} className="max-w-smd"/>
                            <span className="rate-graph"><a className="sizeAvg" data-width="x92.307692307692"></a></span>
                            <span className="rate-percent size-percent">0%</span>
                        </div>
                    </div>
                </div>


                    </CardBody>
                </Card>
                
           <Card radius="none" shadow="none" className="border-none w-96 ">
            <CardBody>
            <div  >
                    <h3 className="font-bold text-md">나와 같은 체형 리뷰 보기</h3>
                    <div >
                        <form>
                            <fieldset className="grid grid-cols-2 grid-rows-2 gap-2 " >                                
                                <div>
                                    <label  >
                                        <div className="flex flex-row px-2 border-solid border-2 gap-2 rounded-lg py-3">
                                            <span className=" px-2 border-solid border-r-2">키</span>
                                            <input  type="text" name="myHeight" placeholder="0" value="160" className="w-12" />
                                            <em  >cm</em>
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <div className="flex flex-row border-solid border-2  gap-2 rounded-lg py-3 ">
                                            <span className="whitespace-nowrap  px-2 border-solid border-r-2">몸무게</span>
                                            <input className="w-12" type="text" name="myWeight"  placeholder="0"  value="80" />
                                            <em className="w-5">kg</em>
                                        </div>
                                    </label>
                                </div>
                                <Button color='primary' className="col-span-2  ">검색</Button>
                              
                            </fieldset>
                        </form>
                    </div>
                </div>

         
            </CardBody>
           </Card>
        
           </div>
           <Divider></Divider>
           {list.map((item,index)=>(
            <>
            
                 <ReviewItem></ReviewItem>
                 <Divider></Divider>
                 </>
           ))}
        
        </div> 
    )
}