export const selectCatalogList = (state) => state.campers.items; 
export const selectCamper = (state) => state.campers.camper; 
export const selectIsLoading = (state) => state.campers.isLoading; 
export const selectError = (state) => state.campers.error; 
export const selectTotalCampers = (state) => state.campers.total; 