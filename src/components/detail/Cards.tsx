'use client'
import React, { useState } from "react";
import { Card, CardFooter, Image, Button, CardBody } from "@nextui-org/react";
import { Meera_Inimai } from "next/font/google";

export default function Cards() {
    const slist = [
        {
            title: "melone",
            img: "/images/detail_card/1.jpg",
            price: "$5.50",
        },
        {
            title: "Tangerine",
            img: "/images/detail_card/2.jpg",
            price: "$3.00",
        },
        {
            title: "Raspberry",
            img: "/images/detail_card/3.jpg",
            price: "$10.00",
        },
        {
            title: "Lemon",
            img: "/images/detail_card/4.jpg",
            price: "$5.30",
        },
        {
            title: "Avocado",
            img: "/images/detail_card/5.jpg",
            price: "$15.70",
        },

    ]

    let [list , setTest] = useState(slist)

    let [mainIndex, setlist] = useState(0)

    function change(isRight)
     {  
        // alert(isRight)
        
        if( isRight==0)
        {
            if( mainIndex == 0)
            {
                mainIndex=list.length-1
            }
            else
            {
                mainIndex=mainIndex-1
            }

            setlist(mainIndex)    
        }
        else
        {
            if( mainIndex == list.length-1)
            {
                mainIndex=0
            }
            else
            {
                mainIndex=mainIndex+1
            }
            
            // alert(mainIndex)
            setlist(mainIndex)
           
        }
     }

      return (

       
        < Card className = "border-none max-w-2xl" radius = "none" >
            <CardBody >
                <div className="flex flex-col gap-2" >
                    <div className="relative ">
                        <Image
                            className="z-100 "
                            src={list[mainIndex].img

                            }
                        />
                        <Button title="scroll left" variant="ghost|flat" onClick={()=>(change(0))}
                            className="absolute  top-1/2 left-0 z-10 w-32" >
                            <img src="/images/home/control.png" className="ml-[80px]  -rotate-180   "></img>
                        </Button>
                        <Button title="scroll right" variant="ghost|flat" onClick={()=>(change(1))}
                            className="absolute top-1/2 right-0  z-10  w-32"  >
                            <img src="/images/home/control.png" className=" mr-[80px]   "></img>
                        </Button>
                    </div>
                </div>
            </CardBody>
            <CardFooter>

                <div className="flex flex-row gap-2 ">
                    {list.map((item, index) => (
                        <Image src={item.img} />
                    ))}
                </div>

            </CardFooter>

        </Card >


    );
}
