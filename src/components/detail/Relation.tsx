
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function App() {

    const list = [0,1,2];

    return (

        <div>
            <p className="text-lg font-bold">관련상품</p>
       
        <div className="flex flex-row gap-6 ">
            
            {list.map((item: number, index) => {
                let result: string = `/images/relation/${item}.webp`;
               
                 return (
                    < Card radius="none"   shadow="none" className="border-none ">
                        <CardBody>
                            <Image src={result} radius="none"></Image>
                        </CardBody>
                        <CardFooter>
                            <div className="">
                                <span>32<em>%</em></span>
                                <p>시엔 프린팅 티셔츠(T)	</p>									<span>23,600</span>
                            </div>

                        </CardFooter>
                    </Card>
                
                )})}

        </div >
        </div>

    )

}