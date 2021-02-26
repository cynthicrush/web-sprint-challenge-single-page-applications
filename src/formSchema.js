import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('Nname is required, please fill out')
        .min(2, 'Name must be 2 characters long'),
    size: yup.string()
        .oneOf(['Small: 8-10 inches with 6 slices', 'Medium: 12 inches with 8 slices', 'Large: 14 inch with 10 slices', 'Extra-large: 16-18 inch with 12 slices'], 'Size status is required'),
    sauce: yup.string()
        .oneOf(['originalRed', 'garlicRanch', 'bbqSauce', 'spinachAlfredo'], 'Sauce status is required'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadianBacon: yup.boolean(),
    spicyItaliainSausage: yup.boolean(),
    grilledChicken: yup.boolean(),
    onions: yup.boolean(),
    greenPepper: yup.boolean(),
    dicedTomatos: yup.boolean(),
    backOlives: yup.boolean(),
    roastedGarlic: yup.boolean(),
    artichokeHearts: yup.boolean(),
    threeCheese: yup.boolean(),
    pineapple: yup.boolean(),
    extraCheese: yup.boolean()
})
export default formSchema;