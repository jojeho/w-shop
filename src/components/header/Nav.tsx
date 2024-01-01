
import React from "react";
import { ButtonGroup, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { Logo } from "./Logo";
import { Input } from "@nextui-org/react";
import Search from "../home/Search"
import { SearchIcon } from "../home/SearchIcon"

function Menu({title , url}) {
  return (
    <Link href="/">
      <div className="flex flex-col items-center text-sm  gap-1">
        {/* <SearchIcon></SearchIcon> */}
        <img src={url} className="h-8"></img>
        <p className="text-sm text-black">{title}</p>
      </div>
    </Link>
  )
}

export default function Nav() {
  return (
    <Navbar className="py-5" classNames={{base:"relative"}}>
      <NavbarBrand >
        <Logo />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarItem>
          <Search></Search>
        </NavbarItem>
        <NavbarItem>
          <Menu title="출첵" url="./images/home/nav/출첵.png"></Menu>
        </NavbarItem>
        <NavbarItem>
        <Menu title="좋아요" url="./images/home/nav/좋아요.png"></Menu>
        </NavbarItem>
        <NavbarItem>
        <Menu title="장바구니" url="./images/home/nav/장바구니.png"></Menu>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
