import Script from "next/script";

export default function WebBox() {
	return (
		<>
			<Script src="https://webbox3.interalp-touristik.com/app.js" />
			<interalp-ibe language="de" tenant_id="SchmittenhoeheZellamSee" />
		</>
	);
}
