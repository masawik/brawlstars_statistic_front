import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  message: null as null | string,
}

const errorPopupSlice = createSlice({
  name: 'ERROR_POPUP',
  initialState,
  reducers: {
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload
    },
    clearErrorMessage: (state) => {
      state.message = null
    },
  },
})

export const errorPopupActions = errorPopupSlice.actions
export const errorPopupReducer = errorPopupSlice.reducer