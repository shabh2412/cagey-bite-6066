import { HeroBanner } from "../Common/Banners/HeroBanner";
import { HeroBannerGrid } from "../Common/Banners/HeroBannerGrid";

import HBannerLeft from "../../assets/HBL.jpg";
import HBannerCenter from "../../assets/HBC.jpg";
import HBannerRight from "../../assets/HBR.jpg";

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
	return <HeroBanner left={left} right={right} center={center} />;
};
