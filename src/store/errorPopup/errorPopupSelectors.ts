import { TRootState } from '../index'

export const selectErrorMessage =
  (state: TRootState) => state.errorPopup.message