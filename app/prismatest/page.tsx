import prisma from "../../lib/prisma";

async function PrismaTest() {
	const product1 = {
		PLID: "ABCDEF",
		productFamily: "GHUASSD",
		businessUnit: "SDFEDFDFD",
		predictedDemand: [300, 232, 332, 292],
	};

	const product2 = {
		PLID: "EFGHIG",
		productFamily: "GHUASSD",
		businessUnit: "SDFEDFDFD",
		predictedDemand: [100, 432, 132, 592]
	};

	const storage = {
		ID: "JSJSAJSA",
		products: {
			create: [product1, product2],
		},
		StorageType: "XL",
		StorageCapacity: 500,
        StorageCost: 1000,
        RemainingCapacity: 100,
        Quarter : 1
    };
    
    await prisma.storage.create({
			data: storage,
		});
	console.log("Successfuly Added")

	return <div>PrismaTest</div>;
}

export default PrismaTest;
