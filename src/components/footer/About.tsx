import { Divider } from "@nextui-org/react"

export default function App()
{
	const li_css="border-solid border-r-1 pr-3 whitespace-nowrap"
    return(
        <div className="font-san font-medium text-sm py-5">
			<dl className="flex flex-col gap-2">
				<dt className="text-md"><strong>ABOUT SONA</strong></dt>
				<dd>
					<ul className="flex flex-row gap-2 flex-wrap">
						<li className={li_css}>상호 : 에스엔패션그룹(주)</li>						
						<li className={li_css} ><address>사업장소재지 : 서울특별시 구로구 디지털로 257 지층</address></li>
						<li className={li_css} >안내전화 : 1599-8861 </li>
						<li className={li_css}>대표이사 : 구길리</li>
						<li className={li_css}>개인정보관리책임자 : 표창욱</li>
						<li>제휴/광고문의 : <a href="mailto:help@sonyunara.com">sonyunara01@gmail.com</a></li>
					</ul>
				</dd>
				<dd>
					<ul className="flex flex-row">
						<li>사업자등록번호 : 215-87-38531  [사업자정보확인]</li>
						<li>통신판매업 신고번호 : 2015-서울구로-1525</li>
					</ul>
				</dd>
				<dd>COPYRIGHT (C) 2013 SONA ALL RIGHTS RESERVED.</dd>
			</dl>
		</div>
    )
}