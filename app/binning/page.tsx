import React from "react";

async function GetBins() {
	const res = await fetch("https://binner-1-w7980431.deta.app/binning");
	const data = await res.json();
	return data;
}

async function BinningPage() {
    const bins = await GetBins();
    console.log(bins)

	return <div>BinningPage</div>;
}

export default BinningPage;
