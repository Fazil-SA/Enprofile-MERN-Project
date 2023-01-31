import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  userDetails: '',
  expertDetails: '',
  adminDetails: '',
  userAllDetails:'',
  userToken:'',
  adminToken:'',
  portfolioCreationData:'',
  purchasedTemplateData:''
};


const loginSlice = createSlice({
    name: 'logindetails',
    initialState: INITIAL_STATE,
    reducers: {
      userLoginDetails: (state, action) => {
        let { userDetails } = state;
        userDetails = action.payload;
        return { ...state, userDetails };
      },
      categoryDetails:(state,action)=>{
        let {category} = state;
        category = action.payload;
        return{...state,category}
      },
      expertLoginDetails: (state, action) => {
        let { expertDetails } = state;
        expertDetails = action.payload;
        return { ...state, expertDetails };
      },
      adminLoginDetails: (state, action) => {
        let { adminDetails } = state;
        adminDetails = action.payload;
        return { ...state, adminDetails };
      },
      clearUserLoginDetails: (state, action) => {
        let { userDetails } = state;
        userDetails = false;
        return { ...state, userDetails };
      },
      clearExpertLoginDetails: (state, action) => {
        let { expertDetails } = state;
        expertDetails = false;
        return { ...state, expertDetails };
      },
      clearAdminLoginDetails: (state, action) => {
        let { adminDetails } = state;
        adminDetails = false;
        return { ...state, adminDetails };
      },
      userAllDetails:(state,action)=>{
        let { userAllDetails } = state;
        userAllDetails=action.payload;
        return {...state,userAllDetails}
      },
      clearUserAllDetails: (state, action) => {
        let { userAllDetails } = state;
        userAllDetails = false;
        return { ...state, userAllDetails };
      },
      userToken:(state,action)=>{
        let {userToken}=state;
        userToken=action.payload
        return {...state,userToken}
      },
      clearUserToken:(state,action)=>{
        let{userToken}=state;
        userToken=false;
        return{...state,userToken}
      },
      adminToken:(state,action)=>{
        let {adminToken}=state;
        adminToken=action.payload
        return {...state,adminToken}
      },
      clearAdminToken:(state,action)=>{
        let{adminToken}=state;
        adminToken=false;
        return{...state,adminToken}
      }, 
      portfolioCreationData:(state,action)=>{
        let{ portfolioCreationData } = state;
        portfolioCreationData = action.payload;
        return{...state, portfolioCreationData}
      }, 
      purchasedTemplateData:(state,action)=>{
        let{ purchasedTemplateData } = state;
        purchasedTemplateData = action.payload;
        return{...state, purchasedTemplateData}
      }, 
      clearPortfolioCreationData:(state,action)=>{
        let{ portfolioCreationData } = state;
        portfolioCreationData = false;
        return{...state, portfolioCreationData}
      }, 
      clearPurchasedTemplateData:(state,action)=>{
        let{ purchasedTemplateData } = state;
        purchasedTemplateData = false;
        return{...state, purchasedTemplateData}
      }, 
    },
  });

  export const {
    userLoginDetails,
    expertLoginDetails,
    adminLoginDetails,
    clearUserLoginDetails,
    clearExpertLoginDetails,
    clearAdminLoginDetails,
    userAllDetails,
    clearUserAllDetails,
    userToken,
    clearUserToken,
    categoryDetails,
    adminToken,
    clearAdminToken,
    portfolioCreationData,
    purchasedTemplateData,
    clearPortfolioCreationData,
    clearPurchasedTemplateData
  } = loginSlice.actions;
  

  export default loginSlice.reducer;
