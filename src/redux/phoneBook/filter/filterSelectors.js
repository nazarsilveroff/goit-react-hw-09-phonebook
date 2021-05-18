import { createSelector} from '@reduxjs/toolkit'
import { getAllItems } from '../items/itemsSelectirs';
export const getFilter = (state) => state.contacts.filter;


export const getFilteredContacts = createSelector([getAllItems, getFilter], (items,filter) => {
    const formatedFilter = filter?.toLowerCase(); 
    return items?.filter((contact) =>
      contact.name.toLowerCase().includes(formatedFilter)
    );
});



// getFilteredContacts = () => {
//   return this.props.contacts.items?.filter((contact) =>
//     contact.name
//       .toLowerCase()
//       .includes(this.props.contacts.filter?.toLowerCase())
//   );
// };