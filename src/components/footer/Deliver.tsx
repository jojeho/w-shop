import { Button, Link  ,Divider} from "@nextui-org/react";


export default function Deliver() {
    return (

        <dl >
            <dt className="font-bold text-lg mb-2">DELIVERY</dt>
            <dd className="mb-5 text-sm">
                <div ><strong className="text-red-400 bm-5">반품주소(타택배 이용시)</strong></div>
                <div ><address>서울시 구로구 디지털로 257 지층 소녀나라 반품 담당자 앞</address>(운임은 꼭 선불로 보내주셔야 합니다!)</div>
            </dd>
            <dd className="font-bold pb-5">
                <ul className="grid grid-cols-3 grid-rows-2   gap-2   place-items-center  max-w-md">
                <li className="col-span-3 w-full " >
                    <Button className="w-full border-2 border-red-300" variant="ghost">
                        24시간 교환/반품 신청</Button>
                        
                  </li>
                    <li className="">   <Button className="w-full border-2 border-red-300"  variant="ghost">
                       B2B 대량구매문의</Button>
                        </li>
                    <li ><Button variant="ghost" className="w-full border-2 border-red-300">모델지원</Button></li>
                    <li ><Button variant="ghost" className="w-full border-2 border-red-300">제휴문의</Button></li>
                </ul>
            </dd>

            <dd className="max-w-md">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdVFRMhDJrLrcJyMfz9BvmnprLd4fBgS_x7BZD6V6KxPzEKSQ/viewform" target="_blank"><img src="https://img.sonyunara.com/2022/banner/inshop_banner.jpg" /></a>
            </dd>

        </dl>

    )
}