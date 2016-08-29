import {
	ADD_CONTACTS
} from './mutations';


export const addContacts = ({ dispatch }, contact) => {
  dispatch(ADD_CONTACTS, contact);
};
