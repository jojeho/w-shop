
import {Card, CardBody ,Badge ,Avatar  ,Button} from "@nextui-org/react";
import styles from './review.module.css'

export default function App()
{
    const list=[0,1,2]
    return (
        <Card radius="none" shadow="none" className="border-none ">
        <CardBody>
        <div className="flex flex-col" >
        <div className="flex flex-row items-center gap-5">

            <Badge content="s" color="primary" placement="bottom-right">
                <Avatar isBordered radius="full" src="/review/user.jpg" />
            </Badge>
            <div>
                <div className="flex flex-row">
                    <div className={styles.rate}>
                        <span style={{ width: "70%" }}></span>
                    </div>
                    <p>5</p>
                </div>
                <div className="flex flex-row gap-2">
                    <div>id</div>
                    <div>2022-11-7</div>
                </div>

            </div>
        </div>

        <div className="flex flex-row gap-6 m-4 items-center">
            {list.map((item, index) => (
                <div className="border-solid border-r-2 pr-4 last:border-0" >{item}</div>
            ))}
        </div>
        
        <div>입고 이게 슬랙스인지 트레이닝복인지 헷갈릴정도의 깔끔한 핏이랑 고급짐,,, 허리밴딩이 너무 쫀쫀하니 잘들어가있고 고</div>
        <div className="flex flex-row gap-6 mt-2">
            <div className="max-w-lg"><b>5</b>명에게 도움이 되었습니다 </div>
            <Button variant="bordered" color="primary">도움이 돼요</Button>
            <Button variant="bordered" color="primary" isIconOnly ><img src="/images/review/comment.png"></img></Button>
        </div>
    </div>
        </CardBody>
     </Card>
    )
}
