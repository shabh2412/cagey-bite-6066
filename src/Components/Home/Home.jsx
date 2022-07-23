// import { HeroBanner } from "../Common/Banners/HeroBanner";
// import { HeroBannerGrid } from "../Common/Banners/HeroBannerGrid";

// import HBannerLeft from "../../assets/HBL.jpg";
// import HBannerCenter from "../../assets/HBC.jpg";
// import HBannerRight from "../../assets/HBR.jpg";
import { Box, Flex } from "@chakra-ui/react";
import { BigBanner, OffersBanner } from "../Common/Banners/Banner";
import { TextBanner } from "../Common/Banners/TextBanner";
import { Carousel } from "../Common/Banners/HeroSlider";

export const Home = () => {
	// // const leftImages = [
	// // 	"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/399fbdb3-e4a4-4961-8a19-ea6b8548e7fc1657716144039-DK_Banner_02.jpg",
	// // 	"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/c12e570d-eab4-43b6-9d22-3c62ab2fab351657716144045-DK_Banner_03.jpg",
	// // 	"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/3d5d42c0-c269-41b7-a6a6-bf5a6745d0dd1657716144067-DK_Banner_06.jpg",
	// // 	"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/7a3a0fd7-1ef9-485b-b0d1-c5d9863a3e731657716144074-DK_Banner_07.jpg",
	// // 	"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/0bbc8f88-03e6-4b50-9550-b7b50343c8911657716144093-DK_Banner_10.jpg",
	// // 	"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/8cc93d26-1e62-4bbf-9fd6-7fb647dde5b71657716144099-DK_Banner_11.jpg",
	// // ];
	// // const centerImages = [
	// // 	"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/c12e570d-eab4-43b6-9d22-3c62ab2fab351657716144045-DK_Banner_03.jpg",
	// // 	"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/07e89c70-5b86-4654-8fc2-675ec89ef4791657716144052-DK_Banner_04.jpg",
	// // 	"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/7a3a0fd7-1ef9-485b-b0d1-c5d9863a3e731657716144074-DK_Banner_07.jpg",
	// // ];
	// const left = <HeroBannerGrid image={HBannerLeft} link="/men" />;
	// const center = <HeroBannerGrid image={HBannerCenter} />;
	// const right = <HeroBannerGrid image={HBannerRight} link="/women" />;

	const omgOffers = [
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/30/180757fc-64ff-41da-a68b-0faa87504b4f1656560959793-Best_of_Tops_-_50-80_off_from_Vero_Moda-_AND_-_More.jpg",
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/30/d80ded53-dd43-42c6-a91c-a4aae534b3b11656560960939-Trendy_Western_Wear_Collection_Starting_199_-_Only_on_Myntra.jpg",
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/30/0ebd2f1a-b3e0-4f54-918d-e2652c2fb4f41656560959869-Curated_Westernwear_selection_from_Defacto-_Missguided-_-_More.jpg",
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/30/966ee33e-ff14-4a29-b81e-4a71227ecdb61656560960077-H-M.jpg",
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/30/43348668-41f6-442e-baa6-628c2bd540161656560960911-Trend_setting_Casualwear.jpg",
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/b9348007-2d7d-4e0d-bc73-f07dc5f3d1b11657703704037-image_jpeg486975670.jpg",
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/30/45c20c9d-e6d0-40b0-bfb5-bd43baa1a4b11656560960538-Pantaloons-Max_.jpg",
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/10/7123c8b6-64a2-4e36-bb4a-c3cb4a039ec41657435355383-roadster.jpg",
	];
	const budgetBuys = [
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/7/f6505a84-c9ad-42e1-9c68-767085cc4fe81657171557392-BudgetBuys_-Loungewear.jpg",
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/7/51a298f5-78d5-4553-b7fc-a76439a9e0f41657171557443-BudgetBuys_T-Shirts.jpg",
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/7/a09d4965-d538-4836-b019-bb33736f1c8b1657171585766-BudgetBuys_Sarees.jpg",
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/7/f1c874b4-b55f-4cb9-b1f6-e766d8ee2c9f1657171585729-BudgetBuys_Bras_Briefs.jpg",
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/7/1d463b37-8041-44d0-af1b-1f23f0770d641657171723720-BudgetBuys_Sandals.jpg",
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/7/e5e8e15f-6d39-41e4-83c2-3943a8714f641657171723691-BudgetBuys_CasualShoes.jpg",
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/7/acadf300-e31c-4494-9909-2dd8478881cf1657171615960-BudgetBuys_Trimmers_Epilators.jpg",
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/7/2d136799-abd8-438d-b10e-8e404dbdcd4f1657171615945-BudgetBuys_Perfumes_BodyMists.jpg",
	];

	const brandsEveryoneCrushingOn = [
		[
			"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/12/f79950d2-9d48-46fe-858a-36f2d84551b41657611146547-Libas_HP-Top-Tile.jpg",
			"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/12/37ce5ba3-cba3-4c4e-b7c6-d1456506721a1657611146561-Vishudh_HP-Top-Tile.jpg",
			"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/11/756175fd-2561-49ce-8e36-ca62bfe2d2881657556366248-Nivea-Day-1-HP-Tile.jpg",
			"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/11/6b24b9e9-8e64-4481-8653-04d17060e7e21657527673741-3.jpeg",
			"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/12/6e52d41b-3889-4afb-8d35-6dd939d063f21657616626400-Tile.jpeg",
			"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/9976aa54-cc16-45d0-a7b9-408d292116211657015332849-fire-boult.jpg",
			"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/12/5d6f0824-3c6d-43ee-b480-03e5b7a351e61657604734083-image_jpeg370525122.jpg",
		],
		[
			"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/12/16f60f19-5db2-4e19-a98d-72173a5272301657611146554-Varanga_HP-Top-Tile.jpg",
			"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/12/afe60b31-14f8-4058-b4e0-7dd8c888242c1657615968224-3.jpeg",
			"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/12/a9824fc5-199e-40dd-95e4-a0c058db2bd11657604734099-image_jpeg1272700364.jpg",
			"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/7ac25c7e-de0a-47ce-a7b5-eb065ede28801657698930177-image_jpeg380683339.jpg",
			"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/11/b059115b-bc84-418b-9cf0-2c8958d8c45b1657521520339-Cortina.jpeg",
			"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/11/774aba37-8300-4ebe-8e02-1ab0ab5ab5111657521520345-Romee.jpeg",
			"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/5/9ae53025-9885-481f-b66a-e3c7f12a00ec1656992170965-H-M-tiles-1.jpg",
		],
	];

	const carouselSlides = [
		"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/1b39ae61-c690-4b92-b3ec-21f337ca9e851656324904938-Roadster_Desk_Banner.jpg",
		"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/26/d3745533-9b5e-4c4b-81cb-dd60be8639381656221544161-Modern-Sarees_Desk.jpg",
		"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/553384ff-be1f-4272-81d6-6f9e43fe5fe51654097949853-Dresses_Desk.jpg",
		"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/9041bdba-b48a-4ed9-8fcb-e1eeb23a74e31654099110315-Sports---Casual-Shoes_Desk.jpg",
		"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/7b1da839-34a4-4e78-b5b5-e18af304e3bd1654099311017-Top-Kurta-Sets_Desk.jpg",
		"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg",
		"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/04ba6fb3-569d-480e-aaec-13c3d74525d41654006667684-Innerwear_Desk--1-.jpg",
		"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg",
	];

	const ohSoMajorBrands = {
		men: [
			"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/8/52bc7a0e-297e-43d5-8814-f7370d0879241657276257233-Highlander.jpg",
			"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/8/5b9cc0cd-9bd3-4808-ab27-e04a4e6e8e301657276257390-Nautica.jpg",
			"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/8/a533d3dd-a385-4d3a-8db4-39fef1d1ea311657276715696-Wrogn.jpg",
			"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/8/07322a6f-f567-42b0-b47d-b529e0e833cb1657276257339-Mast_-_Harbour.jpg",
		],
		women: [
			"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/8/661166ef-68df-4c4b-baa0-4475e3aef0b21657276257178-DressBerry__1.jpg",
			"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/8/713c00cc-6341-4880-92f0-5fbb188755771657276257207-Harvard_1.jpg",
			"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/12/798ac055-b621-4d7c-a428-46f03757cd121657613722037-_1896574772-2F1777736252-2F483419d9_1c82_430e_87a5_57299694ba0a-2Fimage_jpeg2086175105.jpg",
		],
	};

	const categories = [
		[
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aa4658b5-d723-4652-9ea1-00456b355c3a1645602467046-Kurta-Sets.jpg",
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aae4be67-e611-47f4-b94e-92a16a36df731645602467007-Hangbags.jpg",
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0f0be09e-4155-47bf-82e1-51044e7e7fd11645602467052-Kurtas.jpg",
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/dd4414f8-4e1b-4a22-997e-8e06c0a5ff861645602467167-T-Shirts.jpg",
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f9ca5609-b634-42d4-8c08-a8eaebb818b71645602467085-Sarees.jpg",
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0b7869d4-f825-4625-b1db-58ad10a45f301645602467093-Shirts.jpg",
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b34a30a6-504b-4c94-b7e1-61391d536bc51645602467038-Jewellery.jpg",
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b156f76a-26e7-4bce-9941-8a67d3c16f331645602467120-Teens-Wear.jpg",
		],
		[
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/fb091b07-c275-4578-b08d-b4f93dfe9e841645602466976-Beauty.jpg",
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b827f900-ed61-4467-84fa-a6e357787e761645602467079-Plus-Size-Styles_W.jpg",
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/cd083042-3bb2-4231-8b96-0234fc0ed23f1645602467032-Jeans.jpg",
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/736f3951-e67b-414f-bfb1-56e2794d441d1645602467114-Sports-Shoes.jpg",
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d13255df-c846-4dbd-8458-77ccaba4f9eb1645602467142-Trousers.jpg",
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7a774194-94e6-49b5-b8bb-64bf9901bc671645602466989-Casual-Shoes.jpg",
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/5860c3c2-a639-4625-ac1d-4d55406f128a1645602467134-Track-Pants.jpg",
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/07e5c29a-2eab-4b2d-b617-6565ffe1f4701645602467025-Innerwear.jpg",
		],
		[
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/09b3164c-241a-4134-baa1-49b12c56c3901645602466968-Bath-Essentials.jpg",
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/171a820e-96f0-4b11-a138-03953a7e05481645602467153-Trousers_W.jpg",
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/054a056f-33e8-4b6c-b747-9b88d7fce0a11645602467174-Watches.jpg",
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d3c5cd23-392f-40be-8080-99ffb79c27261645602467128-Tops.jpg",
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/355b9499-3345-4457-8b3b-2eeceaecf4561645602467020-Infant-Essentials.jpg",
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7f814546-b705-4d9b-9ab5-1ddfeca786391645602467001-Flip-Flops.jpg",
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/12c3b4aa-8160-442f-b93e-e896eafb1b0a1645602467160-T-Shirts-_-Shorts_Kids.jpg",
			"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/67783047-7fcc-4530-9368-9be75a713e411645602466995-Dresses.jpg",
		],
	];

	const giftCards = [
		"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/ef1e7c6b-bec4-471c-9c36-72fffd975c0c1636738225251-happy-wedding.jpg",
		"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/72f3fe20-f0a5-4894-852c-817b40b285291636738225244-happy-birthday.jpg",
		"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/0b639a7e-20ed-4c37-87b4-279616accc2b1636738225231-house-warming.jpg",
		"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/37fe74de-0cb1-4aec-adc1-41c9de64bc431636738225237-farewell.jpg",
		"https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/934a734c-ebb4-48c4-96d0-018e1e5eb7e21636738225215-milestones.jpg",
	];
	const newTopBrands = [
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/1aaf5e6a-2978-4ed8-9634-1559f530d73b1645860227457-SS22-BestOfBrands-H_M.jpg",
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/3ce3c5e7-6060-4b15-b80b-6ddcd19d385a1645860227491-SS22-BestOfBrands-Max.jpg",
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/96b79372-852b-4e41-904a-ffc47f840d171645860227477-SS22-BestOfBrands-Levis.jpg",
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/ae3f2d8b-4f02-40ab-8233-d9ab9c7be4941645860227438-SS22-BestOfBrands-CKJeans.jpg",
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/426cb519-be57-4970-b23c-edb9e442cb761645860227551-SS22-BestOfBrands-W.jpg",
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/823d5fd5-48e6-4eb1-bd66-1ea70306275a1645860227498-SS22-BestOfBrands-Metro.jpg",
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/fd730d26-ff9d-41e5-af2e-b20f71757b5f1645779089335-BestOfBrands-Nike.jpg",
		"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/b69656bd-7766-45db-96ea-d45df19a7a361645860227484-SS22-BestOfBrands-LP.jpg",
	];

	return (
		<Box>
			{/* <HeroBanner left={left} right={right} center={center} /> */}
			<Carousel slides={carouselSlides} />
			<BigBanner
				src={
					"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/30/50039b9f-a5ac-4da9-9935-18bb325104f81656584152233-Flood_Banner_App---Website-Desktop_Final-2.png"
				}
			/>
			{/* <BigBanner
				src={
					"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/9bf7f9f1-189e-4990-a830-e8eea8b855671657715178137-OMG--Offers-This-Way.jpg"
				}
			/> */}
			<TextBanner title="deal of the day" />
			<OffersBanner images={omgOffers} target="/shop/women" />
			{/* <BigBanner
				src={
					"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/b234ac64-8cf4-4231-ad62-db1bf5b958ed1657715178112-Budget-Buys.jpg"
				}
			/> */}
			<TextBanner title="budget buys" />
			<OffersBanner images={budgetBuys} />
			{/* Brand everyone's crushing on. */}
			{/* <BigBanner src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/575196ba-5c16-485c-a04d-0295ca71c63c1657715178103-Brands-Everyone_s-Crushing-On-.jpg" /> */}
			<TextBanner title="BEST OF MYNTRA EXCLUSIVE BRANDS" />
			{brandsEveryoneCrushingOn?.map((item, index) => (
				<OffersBanner images={item} key={index} target="/shop/women" />
			))}
			{/* Oh So Major Brands */}
			{/* <BigBanner
				src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/4fe15f44-7e23-47ad-86fa-a941660e86a81657715178128-Oh-So-Major-Brands.jpg"
				target="/women"
			/> */}
			<TextBanner title="Oh-So-Major Brands" />
			<Flex>
				<OffersBanner images={ohSoMajorBrands.men} target="/shop/men" />
				<OffersBanner images={ohSoMajorBrands.women} target="/shop/women" />
			</Flex>
			{/* Shop by category */}
			<TextBanner title="categories to bag" />
			{categories?.map((row, index) => (
				<OffersBanner images={row} key={index} />
			))}
			<TextBanner title="GIFTING CARDS" />
			<OffersBanner images={giftCards} />
			<TextBanner title="NEW IN TOP BRANDS" />
			<OffersBanner images={newTopBrands} />
		</Box>
	);
};
