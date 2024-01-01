import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";

// export default function TopNav() {
//     return (<div className='flex flex-row bg-blue-100 justify-end xl:px-72' >
//         <Link >회원가입</Link>
//         <Link>고객센터</Link>
//         <Button>로그인</Button>
//     </div>)
// }

export default function TopNav() {

    return (

        <Navbar height="32px" maxWidth="2xl" >
            <NavbarContent className="gap-4 " justify="end" >
                <NavbarItem >
                    <Link  href="#" size="sm" className="text-black" >
                        회원가입                   
                    </Link>

                </NavbarItem>
               <NavbarItem>
               <Link  href="#" size="sm" className="text-black" >
                        고객센터                   
                    </Link>
                  
                </NavbarItem>
            </NavbarContent>
        </Navbar>

    )
}