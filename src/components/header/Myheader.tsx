import {Divider} from "@nextui-org/react";
import { Logo } from "./Logo";
import TopNav from "./TopNav"
import Nav from "./Nav"
import DetailNav from "./detail_nav"
export default function Myheader() {

  return (
    <section className="light">
        <TopNav></TopNav>
        <Divider></Divider>
        <Nav ></Nav>
        <DetailNav />
    </section>
  )
}