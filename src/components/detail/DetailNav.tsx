'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export default function App({ids}) {

    const scrolltoHash = function (element_id: string) {
       
        const element = document.getElementById(element_id)
        element?.scrollIntoView({  block: "start", inline: "nearest" });
      }

  return (
    <Navbar
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
    
      <NavbarContent className=" sm:flex gap-4" >
        <NavbarItem isActive>
          <Button variant="ghost|flat" onClick={() => scrolltoHash(ids[0]) }>상품정보</Button>
            
        </NavbarItem>

        <NavbarItem >
           <Button variant="ghost|flat" onClick={() => scrolltoHash(ids[1]) }>관련상품</Button>
        </NavbarItem>

        <NavbarItem>
           <Button variant="ghost|flat" onClick={() => scrolltoHash(ids[2]) }>리뷰</Button>
        </NavbarItem>
      </NavbarContent>      
    </Navbar>
  );
}
