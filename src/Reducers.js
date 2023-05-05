import { createSlice } from "@reduxjs/toolkit";
import items from "./DataCompFlie/RestTotaltemData";

export const countValue = createSlice({
  name: "counter",
  initialState: {
    value: [],
  },

  reducers: {
    

    add(state, action){
      state.value.push(action.payload)
     
    },
    remove(state, action) {
   
      // return state.value.splice(item=> item.value.i !== action.payload.i)
    //  return state.value.filter((item,i) =>i !== action.payload)
  const value = state.value.filter(meId=> meId !== action.payload.id);
  return{ ...state, value: [...value]}  
  },

  },
});
export const { add, remove,  } = countValue.actions;
export default countValue.reducer;