export default function Info() {
	const title_css="text-lg font-bold mb-2"
	return (
		<dl className="flex flex-col ">
			<dt className={title_css}>ABOUT US</dt>

			<dd className="mb-10"><a href="/intro/membership_guide.php">멤버십 안내</a></dd>
	
			<dt  className={title_css}>GUIDE</dt>
			<dd><a href="/intro/use.php">이용약관</a></dd>
			<dd className="mb-10"><a href="/intro/privacy.php">개인정보 처리방침</a></dd>
			<dt  className={title_css}>FAMILY SITE</dt>
			<dd><a href="https://attrangs.co.kr/?enterc=sonyunara_PC" target="_blank">아뜨랑스</a></dd>
		</dl>
	)
}