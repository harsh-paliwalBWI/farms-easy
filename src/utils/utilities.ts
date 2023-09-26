export const getDiscountedPercentage = ({ price, discountedPrice }: any) => {
    return `${Math.ceil(((price-discountedPrice) / price) * 100)}%`
};
