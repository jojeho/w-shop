import React from "react";
import {Input , Button , Image} from "@nextui-org/react";
// import  {SearchIcon}  from "./SearchIcon";

function SearchIcon()
{
  return (<Image src="./images/home/btn_search.png"></Image>)
}

export default function Search() {
  return (

    
    <Input   variant="bordered"  classNames={{
        inputWrapper:["border-black"]
    }}
      
      endContent={
      
        <Button    isIconOnly   variant="flat|ghost" >
          
          <SearchIcon></SearchIcon>
        </Button>
      }
      className="max-w-xs"
    />
  );
}
