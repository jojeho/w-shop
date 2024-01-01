'use client'
import React from "react";
import Link from 'next/link'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Divider } from "@nextui-org/react";
import { useRouter ,usePathname  } from 'next/navigation'
const ChevronDown = ({fill, size, height, width, ...props}) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};




export default function DetailNav() {
  const mybut = React.useRef(null)
  const router = useRouter();
  function goto()
{
   
    router.push('/detail');
}
 
  return (
    <Navbar className="bg-white font-bold">

      <NavbarContent isActive>
      <NavbarItem>
        
        <Link href="/detail">신상</Link>
          
        </NavbarItem>

        <Dropdown >
          <NavbarItem >
            <DropdownTrigger  >
              <Button
                disableRipple
                className="font-bold "

                 variant="light"

                endContent={<ChevronDown fill="currentColor" size={16} />}

                ref={mybut}
                // onMouseEnter={()=>mybut.current.click()}           
                // onMouseLeave={()=>mybut.current.click()}
              >

                아우터
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu

            aria-label="ACME features"
           
              // onMouseEnter={()=>mybut.current.click()}
              // onMouseLeave={()=>mybut.current.click()}

                          
            
          >
            <DropdownItem
            className="my-4 border-0"

              showDivider={true}
              key="autoscaling">
              <p > 가디언/조끼</p>
              
            </DropdownItem>

            <DropdownItem
             className="my-4 border-0"

              key="autoscaling">
              야상/점퍼
            </DropdownItem>

            <DropdownItem
             className="my-4 border-0"

              key="autoscaling">
              야상/점퍼
            </DropdownItem>

            <DropdownItem
             className="my-4 border-0"

              key="autoscaling">
              야상/점퍼
            </DropdownItem>

            <DropdownItem
             className="my-4 border-0"

              key="autoscaling">
              야상/점퍼
            </DropdownItem>

            <DropdownItem
             className="my-4 border-0 "

             classNames={
              {
                base:"hover:bg-black-500"
              }
             }
              key="autoscaling">
              야상/점퍼
            </DropdownItem>

         
          </DropdownMenu>
        </Dropdown>

        <NavbarItem >

        <Link href="/detail">베스트</Link>

          {/* <Link href="/detail" color="foreground">
            베스트
          </Link> */}
        </NavbarItem>

        <NavbarItem>
         
        <Link href="/detail">셔츠/블라우스 </Link>
     

        </NavbarItem>

        <NavbarItem>

        <Link href="/detail">트레이닝</Link>

       
             </NavbarItem>

    


        <NavbarItem>

        <Link href="/detail">원피스</Link>
       

        </NavbarItem>

        <NavbarItem>

        <Link href="/detail">팬츠</Link>
          
       
        </NavbarItem>


        <NavbarItem>

        <Link href="/detail">가방</Link>
        

        </NavbarItem>

        <NavbarItem>

        <Link href="/detail">신발</Link>
      
        </NavbarItem>


      </NavbarContent>

    </Navbar>
  );
}
