// AuthContext.js

import React, { createContext, useReducer } from 'react'
import axios from 'axios'
import { API } from '../Api/Post'

const firstName = localStorage.getItem('pu-edc-firstName')
const lastName = localStorage.getItem('pu-edc-lastName')
const phoneNumber = localStorage.getItem('pu-edc-phoneNumber')
const storedToken = localStorage.getItem('token')
const email = localStorage.getItem('pu-edc-email')

const initialAuthState = {
  isAuthenticated: !!storedToken && !!email,
  firstName,
  lastName,
  phoneNumber,
  email,
  token: storedToken,
  error: null,
}

const AuthContext = createContext({
  state: initialAuthState,
  dispatch: () => {},
})

const SET_ERROR = 'SET_ERROR'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

const authReducer = (state, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload }
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('pu-edc-auth-token', action.payload.token)
      localStorage.setItem('pu-edc-email', action.payload.email)
      localStorage.setItem('pu-edc-firstName', action.payload.firstName)
      localStorage.setItem('pu-edc-lastName', action.payload.lastName)
      localStorage.setItem('pu-edc-phoneNumber', action.payload.phoneNumber)
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
      }
    case LOGOUT_SUCCESS:
      localStorage.removeItem('token')
      localStorage.removeItem('pu-edc-auth-token')
      localStorage.removeItem('pu-edc-email')
      localStorage.removeItem('pu-edc-firstName')
      localStorage.removeItem('pu-edc-lastName')
      localStorage.removeItem('pu-edc-phoneNumber')
      return {
        ...state,
        isAuthenticated: false,
        firstName: null,
        lastName: null,
        phoneNumber: null,
        email: null,
        token: null,
      }
    default:
      return state
  }
}

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState)
  console.log(state)

  const login = async (values) => {
    try {
      const res = await API('post', '/users/login', values)
      console.log(`LOGIN RESPONSE`, res.data.data)
      const { token } = res.data.data
      localStorage.setItem('token', token)
      localStorage.setItem('pu-edc-auth-token', res.data.data.token)
      localStorage.setItem('pu-edc-email', res.data.data.email)
      localStorage.setItem('pu-edc-firstName', res.data.data.firstName)
      localStorage.setItem('pu-edc-lastName', res.data.data.lastName)
      localStorage.setItem('pu-edc-phoneNumber', res.data.data.phoneNumber)
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.data,
      })
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err.response.data.message })
    }
  }

  const logout = async () => {
    try {
      await axios.post('https://example.com/api/logout')
      dispatch({ type: LOGOUT_SUCCESS })
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err.response.data.message })
    }
  }

  return (
    <AuthContext.Provider value={{ state, dispatch, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
