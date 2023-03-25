import sales from "../public/cisco"

export default function Home() {
	console.log(sales.length)
	return (
		<div className="h-screen w-full flex justify-center items-center">
			Welcome to the Cisco Dashboard
		</div>
	)
}
