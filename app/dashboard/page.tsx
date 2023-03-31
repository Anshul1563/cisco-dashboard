"use client";
import sales from "../../public/cisco.json";
import Line from "./nivoline";

import React, { useEffect, useState } from "react";

function Dashboard() {
	// let sales = sales.slice(0,100)
	const [unit, setUnit] = useState("");
	const [family, setFamily] = useState("");
	const [plid, setPlid] = useState("");
	const [BUs, setBUs] = useState<string[]>([]);
	const [PFs, setPFs] = useState<string[]>([]);
	const [plids, setPlids] = useState<string[]>([]);
	const [data, setData] = useState([]);

	useEffect(() => {
		const BUs: string[] = [];
		sales.map((sale) => {
			if (!BUs.includes(sale["Business Unit"])) {
				BUs.push(sale["Business Unit"]);
			}
		});
		setBUs(BUs);
	}, []);

	useEffect(() => {
		if (unit !== "") {
			let families = sales
				.filter((sale) => {
					return unit == sale["Business Unit"];
				})
				.map((sale) => {
					return sale["Product Family"];
				});
			families = [...new Set(families)];
			setPFs(families);
		}
	}, [unit]);

	useEffect(() => {
		if (family !== "") {
			let newPlids = sales
				.filter((sale) => {
					return family == sale["Product Family"];
				})
				.map((sale) => {
					return sale["PLID"];
				});
			newPlids = [...new Set(newPlids)];
			setPlids(newPlids);
		}
	}, [family]);

	const BUelements = BUs.map((BU) => {
		return (
			<div
				onClick={() => {
					setUnit(BU);
					setFamily("");
					setPlid("");
					
				}}
				className={
					"border-2 border-blue-500 py-2 rounded-sm px-6 cursor-pointer " +
					(unit == BU ? " bg-blue-500" : "")
				}
				key={BU}
			>
				{BU}
			</div>
		);
	});

	const PFelements = PFs.map((PF) => {
		return (
			<div
				onClick={() => {
					setFamily(PF);
					setPlid("");
				}}
				className={
					"border-2 border-blue-500 py-2 rounded-sm px-6 cursor-pointer " +
					(family == PF ? " bg-blue-500" : "")
				}
				key={PF}
			>
				{PF}
			</div>
		);
	});

	const PLIDelements = plids.map((PLID) => {
		return (
			<div
				onClick={() => setPlid(PLID)}
				className={
					"border-2 border-blue-500 py-2 rounded-sm px-6 cursor-pointer " +
					(plid == PLID ? " bg-blue-500" : "")
				}
				key={PLID}
			>
				{PLID}
			</div>
		);
	});

	useEffect(() => {
		if (plid == "") setData([]);
		const PLIDsales = sales.filter((sale) => {
			return sale["PLID"] == plid;
		});

		let data: any = { id: plid, color: "hsl(120, 100%, 50%)" };
		data["data"] = PLIDsales.map((sale) => {
			return { x: sale["Booking_Date"], y: sale["Booked_Qty"] };
		}).sort((a, b) => {
			const date1 = new Date(a.x);
			const date2 = new Date(b.x);

			return date1 - date2;
		});
		setData(data);
	}, [plid]);

	console.log(data)

	return (
		<div className=" flex flex-col p-10">
			<div className="flex flex-col gap-4 bg-slate-100 p-4">
				<div className="flex flex-col gap-4">
					<div className="text-xl font-bold">Business Units</div>
					<div className="flex gap-4 flex-wrap">{BUelements}</div>
				</div>
				<div className="flex flex-col gap-4">
					<div className="text-xl font-bold">Product Families</div>
					<div className="flex gap-4 flex-wrap">{PFelements}</div>
				</div>
				<div className="flex flex-col gap-4">
					<div className="text-xl font-bold">PLIDs</div>
					<div className="flex gap-4 flex-wrap">{PLIDelements}</div>
				</div>
			</div>
			<div className="h-[70vh] flex justify-center items-center">
				{plid ? <Line data={[data]} /> : <div className ="font-bold text-xl">Please Select a PLID</div>}
			</div>
		</div>
	);
}

export default Dashboard;
