import { Divider } from "@nextui-org/react"
import { Image } from "@nextui-org/react"
export default function Comment() {

    const list = [1,2,3,4,5]

    return (

        <div className="flex flex-col gap-10">
                <div className="w-37" >
                    <center><b>MD COMMENT</b><p>&nbsp;</p>
                        <p align="center">───────────────────</p>
                        <p>모델착용:아이보리(영서),베이지(영서),스카이블루(영서),핑크(MD)</p>
                    </center>
                </div>           
              <div className="flex flex-col  items-center gap-16">
               
               {list.map((item: number, index) => {

                    if (item > 0) {          

                        let result: string = `/images/review/${item}.jpg`;

                        return ( 
                         
                         <Image src={result}  />
                            
                        )
                    }

                })}   
            </div>
        </div>

    )
}