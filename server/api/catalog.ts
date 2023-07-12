export default defineEventHandler(event => {
	return [
		{
			title: "Холодные Закуски",
			id: 1,
			products: [
				{
					id: 1,
					title: "Ягненок",
					description:
						"Фаршированный гречневой кашей,курагой, апельсином и зеленым яблоком",
					price: "620",
					weight: "225",
					img: "/img/catalog/img1.png",
					category: {
						title: "Холодные Закуски",
						id: 1,
					},
				},
				{
					id: 2,
					title: "Индейка",
					description:
						"Фаршированный гречневой кашей,курагой, апельсином и зеленым яблоком",
					price: "450",
					weight: "225",
					img: "/img/catalog/img2.png",
					category: {
						title: "Холодные Закуски",
						id: 1,
					},
				},
				{
					id: 3,
					title: "Гусь",
					description: "Фаршированный яблоками",
					price: "790",
					weight: "225",
					img: "/img/catalog/img3.png",
					category: {
						title: "Холодные Закуски",
						id: 1,
					},
				},
				{
					id: 4,
					title: "Утка",
					description: "Фаршированная рисом, курагой и айвой",
					price: "3230",
					weight: "225",
					img: "/img/catalog/img4.png",
					category: {
						title: "Холодные Закуски",
						id: 1,
					},
				},
				{
					id: 5,
					title: "Ягненок",
					description: "Фаршированная рисом, курагой и айвой",
					price: "900",
					weight: "240",
					img: "/img/catalog/img4.png",
					category: {
						title: "Холодные Закуски",
						id: 1,
					},
				},
			],
		},
		{
			title: "Горячие Закуски",
			id: 1,
			products: [
				{
					id: 6,
					title: "Утка",
					description: "Фаршированная рисом, курагой и айвой",
					price: "3230",
					weight: "225",
					img: "/img/catalog/img4.png",
					category: {
						title: "Горячие Закуски",
						id: 2,
					},
				},
				{
					id: 8,
					title: "Индейка",
					description:
						"Фаршированный гречневой кашей,курагой, апельсином и зеленым яблоком",
					price: "450",
					weight: "225",
					img: "/img/catalog/img2.png",
					category: {
						title: "Горячие Закуски",
						id: 2,
					},
				},
				{
					id: 7,
					title: "Ягненок",
					description:
						"Фаршированный гречневой кашей,курагой, апельсином и зеленым яблоком",
					price: "620",
					weight: "225",
					img: "/img/catalog/img1.png",
					category: {
						title: "Горячие Закуски",
						id: 2,
					},
				},
				{
					id: 9,
					title: "Гусь",
					description: "Фаршированный яблоками",
					price: "790",
					weight: "225",
					img: "/img/catalog/img3.png",
					category: {
						title: "Горячие Закуски",
						id: 2,
					},
				},
				{
					id: 10,
					title: "Гусь",
					description: "Фаршированный яблоками",
					price: "790",
					weight: "225",
					img: "/img/catalog/img3.png",
					category: {
						title: "Горячие Закуски",
						id: 2,
					},
				},
			],
		},
	];
});
