import { HeroBanner } from "../Common/Banners/HeroBanner";
import { HeroBannerGrid } from "../Common/Banners/HeroBannerGrid";

import HBannerLeft from "../../assets/HBL.jpg";
import HBannerCenter from "../../assets/HBC.jpg";
import HBannerRight from "../../assets/HBR.jpg";
import { Box } from "@chakra-ui/react";
import { BigBanner, OffersBanner } from "../Common/Banners/Banner";

export const Home = () => {
	// const leftImages = [
	// 	"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/399fbdb3-e4a4-4961-8a19-ea6b8548e7fc1657716144039-DK_Banner_02.jpg",
	// 	"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/c12e570d-eab4-43b6-9d22-3c62ab2fab351657716144045-DK_Banner_03.jpg",
	// 	"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/3d5d42c0-c269-41b7-a6a6-bf5a6745d0dd1657716144067-DK_Banner_06.jpg",
	// 	"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/7a3a0fd7-1ef9-485b-b0d1-c5d9863a3e731657716144074-DK_Banner_07.jpg",
	// 	"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/0bbc8f88-03e6-4b50-9550-b7b50343c8911657716144093-DK_Banner_10.jpg",
	// 	"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/8cc93d26-1e62-4bbf-9fd6-7fb647dde5b71657716144099-DK_Banner_11.jpg",
	// ];
	// const centerImages = [
	// 	"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/c12e570d-eab4-43b6-9d22-3c62ab2fab351657716144045-DK_Banner_03.jpg",
	// 	"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/07e89c70-5b86-4654-8fc2-675ec89ef4791657716144052-DK_Banner_04.jpg",
	// 	"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/7a3a0fd7-1ef9-485b-b0d1-c5d9863a3e731657716144074-DK_Banner_07.jpg",
	// ];
	const left = <HeroBannerGrid image={HBannerLeft} link="/men" />;
	const center = <HeroBannerGrid image={HBannerCenter} />;
	const right = <HeroBannerGrid image={HBannerRight} link="/women" />;

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

	return (
		<Box>
			<HeroBanner left={left} right={right} center={center} />
			<BigBanner
				src={
					"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/20/9f1183fd-d166-47c4-b6f9-31527983f3121658298113270-mst-desk-B-1-At----599--2-At----999--1-.jpg"
				}
			/>
			<BigBanner
				src={
					"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/9bf7f9f1-189e-4990-a830-e8eea8b855671657715178137-OMG--Offers-This-Way.jpg"
				}
			/>
			<OffersBanner images={omgOffers} />
			<BigBanner
				src={
					"https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/b234ac64-8cf4-4231-ad62-db1bf5b958ed1657715178112-Budget-Buys.jpg"
				}
			/>
			<OffersBanner images={budgetBuys} />
			<BigBanner src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/13/575196ba-5c16-485c-a04d-0295ca71c63c1657715178103-Brands-Everyone_s-Crushing-On-.jpg" />
		</Box>
	);
};
