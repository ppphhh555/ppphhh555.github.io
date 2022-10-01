import requests from "./request";
import mock from "./mock"
export  const reqCategoryList  =  ()=>{
   return requests({url:"/product/getBaseCategoryList" , method:"get"});
}
export const reqBannerList = ()=>{
   return mock({url:"/banner",method:"get"})
}
export const reqFloorList = ()=>{
   return mock({url:"/Floor",method:"get"})
}
export const reqSearchList =(params)=>{
   return requests({url:"/list",method:"post",data:params})
}
export const reqGoodsInfo =(skuId)=>{
   return requests({url:`/item/${ skuId }`,method:"get"})
}
export const reqAddOrUpdateCart = (skuId,skuNum)=> requests({url:`/cart/addToCart/${ skuId }/${ skuNum }`,method:"post"});

///api/cart/cartList
export const reqCartList = ()=>{
   return requests({url:"/cart/cartList",method:"get"})
}
///api/cart/deleteCart/{skuId}
export const reqDeleteCart = (skuId) =>{
   return requests({url:`/cart/deleteCart/${skuId}`,method:"DELETE"})
}
///api/cart/checkCart/{skuID}/{isChecked}
export const reqUpdataCart = (skuId,isChecked)=>{
   return requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:"get"})
}
///api/user/passport/sendCode/{phone}
export const reqGetCode = (phone)=>{
   return requests({url:`/user/passport/sendCode/${phone}`,method:"get"})
}
///api/user/passport/register
export const regUserRegister =(data)=>{
   return requests({url:`/user/passport/register`,method:"post",data})
}
///api/user/passport/login
export const reqUserLogin = (data)=>{
   return requests({url:`/user/passport/login`,data,method:"post"})
}
///api/user/passport/auth/getUserInfo
export const reqUserInfo = ()=>{
   return requests({url:`/user/passport/auth/getUserInfo`,method:"get"})
}
///api/user/passport/logout
export const reqLogout = ()=>{
   return requests({url:`/user/passport/logout`,method:"get"})
}
///api/user/userAddress/auth/findUserAddressList
export const reqAddressInfo = ()=>{
   return requests({url:`/user/userAddress/auth/findUserAddressList`,method:"get"})
}

///api/order/auth/trade
export const reqTrade = ()=>{
   return requests({url:"/order/auth/trade",method:"get"})
}
///api/order/auth/submitOrder?tradeNo={tradeNo}
export const reqOrder = (tradeNo,data)=>{
   return requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:"post"})
}
///api/payment/weixin/createNative/{orderId}
///api/payment/weixin/createNative/{orderId}
export const reqPayInfo = (orderId)=>{
   return requests({url:`/payment/weixin/createNative/${orderId}`,method:"GET"})
}

///api/payment/weixin/queryPayStatus/{orderId}
export const reqPayStatus = (orderId)=>{
   return requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:"get"})
}
///api/order/auth/{page}/{limit}
export const reqMyOrder = (page,limit)=>{
   return requests({url:`/order/auth/${page}/${limit}`,method:"get"})
}