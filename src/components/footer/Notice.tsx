import { Divider } from "@nextui-org/react";

export default function Notice() {

    return (

        <div className="flex flex-col gap-2" >
            <Divider></Divider>
            <p className="font-bold text-lg">NOTICE </p>
            <Divider></Divider>
            <ul className="flex flex-col gap-2 whitespace-nowrap" >
                <li>
                    <a href="/board/read.php?index_no=54839&amp;boardid=csnotice">쇼핑몰 배송비 정책 변경 안내  </a>
                </li>
                <li>
                    <a href="/board/read.php?index_no=54067&amp;boardid=csnotice">품절 상품 환불 정책 변경 안내  </a>
                </li>
                <li>
                    <a href="/board/read.php?index_no=53756&amp;boardid=csnotice">2021 새로워진 소나 멤버십  </a>
                </li>
                <li>
                    <a href="/board/read.php?index_no=53494&amp;boardid=csnotice">부정한 방법으로 적립한 젤리,적립금  </a>
                    {/* <a href="/board/read.php?index_no=53494&amp;boardid=csnotice">부정한 방법으로 적립한 젤리,적립금 포인트는 모두 차감됩니다!..  </a> */}
                </li>
                <li>
                    <a href="/board/read.php?index_no=51071&amp;boardid=csnotice">악성고객 접근제한 정책 시행  </a>
                </li>
            </ul>
            <a href="/board/list.php?boardid=csnotice" >더보기</a>
        </div>
    )
}