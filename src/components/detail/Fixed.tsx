import { Divider, Button, Image, Card, CardBody } from "@nextui-org/react"


function Cards({ colors }) {
    return (
        <>
            {colors.map((item, index) =>
            (
                <Card>
                    <CardBody>
                        <Image src={
                            `./images/detail/${item}.png`}

                        ></Image>
                    </CardBody>
                </Card>
            ))}
        </>
    )

}

function SizeList() {
    const list=[
        '140(기모)',
        '150(기모)',
        '160(기모)',
        '170(기모)',
        '180(기모)',
          ]


    return (
        <ul className="flex flex-row flex-wrap gap-2">
            {list.map((item)=>(
                <li className="text-md border-2 py-4 px-2 rounded-lg  ">
                    {item}
                </li>
            ))}
         </ul>
       
    )
}

export default function App() {
    const types = ["검은색", "오트밀", "회색"]

    return (
        <div className="w-[618px] font-bold flex flex-col gap-2">
            <div >
                <div className='text-bold text-3xl'>sts28009 [1+1/기획] 쫀쫀 여리핏 유넥 크롭 티셔츠</div>

                <ul className="flex flex-col gap-2">
                    <li >
                        <div className="flex flex-row gap-2" >
                            <span><em className="line-through">22,000</em>원</span>
                            <span className="text-red-300"><em >10</em>%</span>
                            <span ><em >19,800</em>원</span>
                        </div>
                    </li>
                    <Divider className="my-4" />
                    <li>
                        <div className="gap-20 flex flex-row ">
                            <p className="w-20 whitespace-nowrap">배송정보</p>
                            <Button isIconOnly variant="faded" className="w-26">
                                <Image src="./images/detail/출발가능.png"></Image>
                            </Button>

                        </div>
                    </li>

                    <Divider className="my-4" />
                    <li>
                        <div className="gap-20 flex flex-row">
                            <p className="w-20"> 색상</p>
                            <Cards colors={types}></Cards>
                        </div>
                    </li>
                    <Divider className="my-4" />
                    <li>
                        <div className="gap-20 flex flex-row">
                            <p className="w-20">사이즈</p>
                            <div className="flex flex-col">
                                <p>색상을 선택해주세요</p>
                                <SizeList></SizeList>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
            <div>

            </div>
            {/* <div>
                <p>하나 더 구매하시면 총 <em>19,800</em>원이 할인됩니다.</p>
                <p className="text-red-500">Z페이, 네이버페이 결제시 하나더할인 적용불가</p>
            </div> */}

            <Divider></Divider>

            <Divider className="bg-black"></Divider>

            <div className="flex flex-row  justify-between">
                <p className="text-lg">총 결제금액</p><em className="text-red-300">0원</em>
            </div>

            <div className="flex flex-row gap-2 items-center justify-center">
                <Button color='secondary'  className="w-full py-7 ">장바구니</Button>
                <Button  color="primary" className="w-full py-7">구매하기</Button>
            </div>

        </div>
    )
}