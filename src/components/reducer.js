
export const initialState = {
    cart: [
//         {
//             id:"1238672",
//             title:"Apple iPhone 14 Pro Max 512GB Gold",
//             price:162999,
//             rating:4,
//             image:"https://m.media-amazon.com/images/I/31DaY6l18YL._SY445_SX342_QL70_FMwebp_.jpg"
          
//     },
//     {
//         id:"1238672",
//         title:"Apple iPhone 14 Pro Max 512GB Gold",
//         price:162999,
//         rating:4,
//         image:"https://m.media-amazon.com/images/I/31DaY6l18YL._SY445_SX342_QL70_FMwebp_.jpg"
      
// },
],
    user: null,
};

export const getCartTotal = (cart) =>
cart?.reduce((amount, item) => item.price + amount, 0);


function reducer(state, action) {
    console.log(action);
switch(action.type) {
    case "ADD_TO_CART":
        //LOgic for adding item in cart
        return {
            ...state, 
            cart: [...state.cart, action.item],
        };
        
        case "REMOVE_FROM_CART":
            //Logic for removing item in cart

            //we cloned the cart
            let newCart= [...state.cart];

            //we check to see if product exists
            const index= state.cart.findIndex(
                (cartItem) => cartItem.id === action.id);
            if(index >= 0){
                //item exist in cart, remove it..
                newCart.splice(index, 1);
                
            } else {
                console.warn(`cant remove product (id: ${action.id}) as its now in cart`);

            }
           return {...state , cart: newCart};
            
        default:
            return state;
}
}

export default reducer;