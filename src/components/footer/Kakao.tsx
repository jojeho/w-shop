import { Button, Link, Divider } from "@nextui-org/react";

function Talk() {
    const title_css = "text-lg font-bold row-span-2"

    return (
        <div className="grid grid-cols-2 gap-6 place-items-center">
            <div>
                <p className={title_css}>전화 상담</p>
                <p ><span>평일</span> 11:00 ~ 17:00</p>
                <p ><span>점심</span> 13:00 ~ 14:00</p>
            </div>
            <div>
                <p className={title_css} >톡 상담</p>
                <p ><span>평일</span> 11:00 ~ 17:00</p>
                <p ><span>점심</span> 13:00 ~ 14:00</p>
            </div>
            <Divider className="col-span-2 w-full" ></Divider>

            <div className="col-span-2 pace-items-center">
                <div className="grid grid-cols-2 gap-6 pace-items-center">
                    <div className={title_css}>
                        <p >게시판 상담</p>
                        <Divider></Divider>
                    </div>
               
                <div>
                <p ><span>평일</span> 11:00 ~ 17:00</p>
                <p ><span>점심</span> 13:00 ~ 14:00</p>
                </div>
                </div>
            </div >
        </div>
    )
}

export default function App() {
    const title_css = "text-lg font-bold"
    return (

        <div className="">
            <dl className="flex flex-col gap-2">
                <dt className="text-lg font-bold">CUSTOMER CENTER</dt>
                <dd className="text-lg font-bold">
                    <p>전화보다 빠른 톡 상담</p>
                    <Link>카카오톡 문의하기</Link>
                </dd>
                <dd>
                    <Talk></Talk>
                </dd>
            </dl>
        </div>

    )

}
