import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import Link from 'next/link'
export default function Cards() {

  const list = [
    {
      title: "[MADE/기장별,뱃살커버]인생핏 트레이닝 롱일자 밴딩팬츠 숏/기본/롱",
      img: "/images/home/recoment/0.webp",
      price: "$5.50",
      
  },

    {
        title: "[기모추가!! 숏,기본,롱~2XL]와이드핏 밴딩 데님 팬츠 (5color)",
        img: "/images/home/recoment/1.webp",
        price: "$5.50",
    },
    {
        title: "[2way,힙와이드핏/숏,기본,롱]카이로 기장별 와이드 카고팬츠",
        img: "/images/home/recoment/2.webp",
        price: "$3.00",
    },
    {
        title: "[기획특가]365쭈욱루즈핏T",
        img: "/images/home/recoment/3.webp",
        price: "$10.00",
    },
    {
        title: "[숏,미들,롱/핏감예술]쫀쫀 부츠컷 데님 팬츠",
        img: "/images/home/recoment/4.webp",
        price: "$5.30",
    },
    {
        title: "[골반뽕/볼륨UP] 히든밴딩 몸매보정 패드 부츠컷 청바지",
        img: "/images/home/recoment/5.webp",
        price: "$15.70",
    },


    ////
    {
      title: " [10만장판매/후기인증~2XL]기장별인생와이드슬랙스3종",
      img: "/images/home/recoment/6.webp",
      price: "$5.50",
  },
  {
      title: "(11컬러) 루나 아방핏 빅카라 포켓 후드 니트 가디건",
      img: "/images/home/recoment/7.webp",
      price: "$3.00",
  },
  {
      title: "[기획특가]365쭈욱루즈핏T",
      img: "/images/home/recoment/8.webp",
      price: "$10.00",
  },
  {
      title: "[숏,미들,롱/핏감예술]쫀쫀 부츠컷 데님 팬츠",
      img: "/images/home/recoment/9.webp",
      price: "$5.30",
  },
  {
      title: "산타모니카 레터링 맨투맨",
      img: "/images/home/recoment/10.webp",
      price: "$15.70",
  },


  ////
  {
    title: " [10만장판매/후기인증~2XL]기장별인생와이드슬랙스 [여름기획]입는순간!냉장고와이드팬츠",
    img: "/images/home/recoment/11.webp",
    price: "$5.50",
},
{
    title: "(11컬러) 루나 아방핏 빅카라 포켓 후드 니트 가디건",
    img: "/images/home/recoment/12.webp",
    price: "$3.00",
},
{
    title: "7days시리즈 기장별 박시 후드 2종",
    img: "/images/home/recoment/13.webp",
    price: "$10.00",
},
{
    title: "7037 글로시 빵빵 하이넥 경량 숏패딩",
    img: "/images/home/recoment/14.webp",
    price: "$5.30",
},
// {
//     title: "헌팅턴 레터링 기모 맨투맨",
//     img: "/images/home/recoment/15.webp",
//     price: "$15.70",
// },




]


  return (
    <div className="gap-2 grid grid-cols-5 whitespace-nowrap">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} >
          <CardBody className="overflow-visible p-0">
            <Link href="/detail" >
            <Image             
              radius="sm"
              width="100%"
              height="100%"
              alt={item.title}
              className="w-full object-cover "
              src={item.img}

            />
            </Link>
         
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}