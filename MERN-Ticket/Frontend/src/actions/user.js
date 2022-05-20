import { AUTH } from '../constants/actionTypes';
import * as api from '../api/api.js';

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    console.log(data)

    dispatch({ type: AUTH, data });

    navigate('/home');
  } catch (error) {
 
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    console.log(formData)
    const {data} = await api.signUp(formData)

    // dispatch({ type: AUTH, data });
    navigate('/signin')
   
  } catch (error) {

  }
};
