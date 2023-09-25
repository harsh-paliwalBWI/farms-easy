export const getDiscountedPercentage = ({ price, discountedPrice }: any) => {
    return `${((price-discountedPrice) / price) * 100}%`
};
