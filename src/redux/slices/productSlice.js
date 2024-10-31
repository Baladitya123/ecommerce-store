import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products:[
        {id:1,name:'bra',price:100,description:'descriptioin of product 1',quantity:1,latest:true,cartegory:'women',image:'/images/women.jpg'},
        {id:2,name:'product 2',price:200,description:'descriptioin of product 2',quantity:1,latest:true,cartegory:'men',image:'/images/man.jpg'},
        {id:3,name:'product 3',price:300,description:'descriptioin of product 3',quantity:1,latest:true,cartegory:'kid',image:'/images/kids.jpg'},
        {id:4,name:'product 4',price:400,description:'descriptioin of product 4',quantity:1,latest:true,cartegory:'women',image:'/images/women.jpg'},
        {id:5,name:'product 5',price:500,description:'descriptioin of product 5',quantity:1,latest:true,cartegory:'men',image:'/images/man.jpg'},
        {id:6,name:'product 6',price:500,description:'descriptioin of product 6',quantity:1,latest:true,cartegory:'kid',image:'/images/kids.jpg'},
        {id:7,name:'product 7',price:500,description:'descriptioin of product 7',quantity:1,latest:true,cartegory:'women',image:'/images/women.jpg'},
        {id:8,name:'product 8',price:500,description:'descriptioin of product 8',quantity:1,latest:true,cartegory:'men',image:'/images/man.jpg'},
        {id:9,name:'product 9',price:500,description:'descriptioin of product 9',quantity:1,cartegory:'kid',image:'/images/kids.jpg'},
        {id:10,name:'product 10',price:500,description:'descriptioin of product 10',quantity:1,cartegory:'women',image:'/images/women.jpg'},
        {id:11,name:'product 11',price:500,description:'descriptioin of product 11',quantity:1,cartegory:'men',image:'/images/man.jpg'},
        {id:12,name:'product 12',price:500,description:'descriptioin of product 12',quantity:1,cartegory:'kid',image:'/images/kids.jpg'},
        {id:13,name:'product 13',price:500,description:'descriptioin of product 13',quantity:1,cartegory:'women',image:'/images/women.jpg'},
        {id:14,name:'product 14',price:500,description:'descriptioin of product 14',quantity:1,cartegory:'men',image:'/images/man.jpg'},
        {id:15,name:'product 15',price:500,description:'descriptioin of product 15',quantity:1,cartegory:'kid',image:'/images/kids.jpg'},
        {id:16,name:'product 16',price:500,description:'descriptioin of product 16',quantity:1,cartegory:'women',image:'/images/women.jpg'},
        {id:17,name:'product 17',price:500,description:'descriptioin of product 17',quantity:1,cartegory:'men',image:'/images/man.jpg'},
        {id:18,name:'product 18',price:500,description:'descriptioin of product 18',quantity:1,cartegory:'kid',image:'/images/kids.jpg'},

    ],
    cart :[],
    totalquantityofcart:0,
    loading:false,
    error:null,
    name:'',
    email:''
};
const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const newProduct = action.payload;
            const existingProduct = state.cart.find(item=>item.id===newProduct.id)
            if(existingProduct){
                existingProduct.quantity+=1;
            }else{
                state.cart.push({...newProduct})
            }
            state.totalquantityofcart+=1;
            console.log('updated cart :',state.cart)
        },
        deleteFromCart:(state,action)=>{
            const productid = action.payload;
            const existingProduct = state.cart.find(item=>item.id===productid)

            if(existingProduct){
               if(existingProduct.quantity===1){
                    state.cart = state.cart.filter(item=>item.id !== productid)
               }else{
                existingProduct.quantity-=1;
               }
               state.totalquantityofcart-=1; 
            }
            console.log('updated cart after removal :',state.cart);
        },
        removeItemCompletely:(state,action)=>{
            const product = action.payload
            state.cart = state.cart.filter((item)=>
                item.id!==product.id
            )
        },
        clearCart:(state,action)=>{
            state.cart=[];
            state.totalquantityofcart=0;
            console.log('cart cleared')
        },
        setCredentials:(state,action)=>{
            console.log(state.email,state.name)
            const credentials = action.payload
            state.name = credentials.name;
            state.email= credentials.email;
            console.log(state.name,state.email);
        },
        clearCredentials:(state,action)=>{
            state.email='';
            state.name='';
        }
    },
})

export const { addToCart ,deleteFromCart,clearCart,removeItemCompletely,setCredentials,clearCredentials} = productSlice.actions;
export const selectAllProducts = (state)=> state.products.products;
export const selectProductById = (state,productId)=>state.products.products.find(product => product.id === productId);
export const selectAllCartItems = (state)=> state.products.cart;
export const getNumberOfItemsInCart = (state)=>state.products.totalquantityofcart;
export const getName = (state)=>state.products.name;
export const getEmail = (state)=>state.products.email;




export default productSlice.reducer;