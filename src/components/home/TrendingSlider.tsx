"use client"; // for nextjs 13.4 user
import Link from "next/link";
import React from "react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { useRouter ,usePathname  } from 'next/navigation'
export default function TrendingSlider() {
    const mybut = React.useRef(null)
    const router = useRouter();
    const list = [
        {
            title: "melone",
            img: "/images/ex2/fruit-1.jpg",
            price: "$5.50",
        },
        {
            title: "Tangerine",
            img: "/images/ex2/fruit-2.jpg",
            price: "$3.00",
        },
        {
            title: "Raspberry",
            img: "/images/ex2/fruit-3.jpg",
            price: "$10.00",
        },
        {
            title: "Lemon",
            img: "/images/ex2/fruit-4.jpg",
            price: "$5.30",
        },
        {
            title: "Lemon",
            img: "/images/ex2/fruit-4.jpg",
            price: "$5.30",
        },
        {
            title: "Lemon",
            img: "/images/ex2/fruit-4.jpg",
            price: "$5.30",
        },

        {
            title: "Lemon",
            img: "/images/ex2/fruit-4.jpg",
            price: "$5.30",
        },

        {
            title: "Lemon",
            img: "/images/ex2/fruit-4.jpg",
            price: "$5.30",
        },
        {
            title: "Lemon",
            img: "/images/ex2/fruit-4.jpg",
            price: "$5.30",
        },
        {
            title: "Lemon",
            img: "/images/ex2/fruit-4.jpg",
            price: "$5.30",
        },
        {
            title: "Lemon",
            img: "/images/ex2/fruit-4.jpg",
            price: "$5.30",
        },


    ];


    function slide(slider, b) {
        if (b == true) {
            slider.scrollLeft = slider.scrollLeft - 3000;
        }
        else {
            slider.scrollLeft = slider.scrollLeft + 3000;
        }

    }

    function goto()
    {
        router.push('/detail');
    }

    return (

        <div className="relative " >

            <div className="flex flex-row z-100  overflow-x-scroll scrollbar-hide scroll-smooth gap-5" ref={mybut}>
                {list.map((item, index) => (
                    <img
                        alt={item.title}
                        src={item.img}
                        className="h-full cursor-pointer "
                        onClick={goto}
                        
                    />

                ))}
            </div>

            <Button title="scroll left" variant="ghost|flat" onClick={() => slide(mybut.current, true)}
              className="absolute  top-1/2 left-0 z-10 w-32" >
                <img src="/images/home/control.png" className="ml-[80px]  -rotate-180   "></img>
            </Button>
            <Button title="scroll right"   variant="ghost|flat" onClick={() => slide(mybut.current, false)}
                className="absolute top-1/2 right-0  z-10  w-32"  >
                <img src="/images/home/control.png"  className=" mr-[80px]   "></img>
            </Button>
        </div>


    );
}