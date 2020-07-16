import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/authReducer';
import contactsReducer from './contacts/contactsReducer';
import themeReducer from './theme/themeReducer';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
  whitelist: ['themeConfig'],
};

const rootReducer = {
  contacts: contactsReducer,
  theme: persistReducer(themePersistConfig, themeReducer),
  auth: persistReducer(authPersistConfig, authReducer),
};

export default rootReducer;