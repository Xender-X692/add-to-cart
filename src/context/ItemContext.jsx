import { createContext,useReducer } from "react";
import reducer from "./ItemReducer";

const ITEMS = [
    {
        id: '1',
        name: 'Xiaomi',
        price: 620.1,
    },{
        id: '2',
        name: 'Samsung',
        price: 730.23,
    },{
        id: '3',
        name: 'Apple',
        price: 932.03,
    },{
        id: '4',
        name: 'Oppo',
        price: 450.20,
    },{
        id: '5',
        name: 'Vivo',
        price: 230.23,
    }
];

const ItemContext = createContext();

export const ItemProvider =({children})=>{
    const [cartItems,dispatch] = useReducer(reducer, []);
    return(
        <ItemContext.Provider value={{items:ITEMS,dispatchCart: dispatch,cartItems:cartItems}}>
            {children}
        </ItemContext.Provider>
    )
}
export default ItemContext;