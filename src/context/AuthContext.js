// AuthContext.js

import React, { createContext, useReducer } from 'react'
import axios from 'axios'
import { API } from '../Api/Post'

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
}

const AuthContext = createContext({
  state: initialState,
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
      return { ...state, isAuthenticated: true, user: action.payload }
    case LOGOUT_SUCCESS:
      return { ...state, isAuthenticated: false, user: null }
    default:
      return state
  }
}

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)
  console.log(state)
  const login = async (values) => {
    try {
      const res = await API('post', '/users/login', values)
      const { token } = res.data.data
      localStorage.setItem('token', token)
      localStorage.setItem('pu-edc-auth-token', res.data.data.token)
      localStorage.setItem('pu-edc-email', res.data.data.email)

      dispatch({ type: LOGIN_SUCCESS, payload: res.data.data })
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
