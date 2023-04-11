import IProduct from "../types/productsType";

const PRODUCTS : IProduct[] = [
    {id: 1, price: '$49.99', stocked: true, name: 'Starlit Bracelet', image: require("../files/StarlitBracelet.jpg")},
    {id: 2, price: '$9.99', stocked: true, name: 'Star Navy Bracelet', image: require("../files/StarNavyBracelet.jpg")},
    {id: 3, price: '$29.99', stocked: false, name: 'Star Taupe Hoop Earrings', image: require("../files/StarTaupeHoopEarrings.jpg")},
    {id: 4, price: '$99.99', stocked: true, name: 'Sunlit Drop Earrings', image: require("../files/SunlitDropEarrings.jpg")},
    {id: 5, price: '$399.99', stocked: false, name: 'Sunseeker Bracelet', image: require("../files/SunseekerBracelet.jpg")},
    {id: 6, price: '$199.99', stocked: true, name: 'Universe Necklace', image: require("../files/UniverseNecklace.jpg")},
    {id: 7, price: '$399.99', stocked: false, name: 'Sunseeker Gold Earrings', image: require("../files/SunseekerGoldEarrings.jpg")},
    {id: 8, price: '$199.99', stocked: true, name: 'Water Element Necklace', image: require("../files/WaterElementGoldNecklace.jpg")},
    {id: 9, price: '$399.99', stocked: false, name: 'Unfold White Earrings', image: require("../files/UnfoldwhiteEarrings.jpg")},
    {id: 10, price: '$199.99', stocked: true, name: 'Today Necklace', image: require("../files/TodayNecklace.jpg")},
    {id: 11, price: '$199.99', stocked: true, name: 'Sun Peach Earrings', image: require("../files/SunPeachHuggieEarrings.jpg")},
    {id: 12, price: '$199.99', stocked: true, name: 'Unfold Hearts Ring', image: require("../files/UnfoldHeartsignetringivory.jpg")}
];
export default PRODUCTS;