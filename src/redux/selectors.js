export const selectItems = state => state.contactsStore.contacts.items;
export const selectFilter = state => state.contactsStore.filter;
export const selectIsLoading = state => state.contactsStore.contacts.isLoading;
export const selectError = state => state.contactsStore.contacts.error;