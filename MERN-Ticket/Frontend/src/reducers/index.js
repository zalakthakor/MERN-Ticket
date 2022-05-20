import { combineReducers } from 'redux';

import ticket from './ticket'
import user from './user';

export const reducers = combineReducers({ticket, user });
