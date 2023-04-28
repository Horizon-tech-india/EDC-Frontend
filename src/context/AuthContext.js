import React, { createContext, useReducer, useState } from 'react'

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
      console.log(`logout trigger`)
      localStorage.setItem('token', '')
      localStorage.setItem('pu-edc-auth-token', '')
      localStorage.setItem('pu-edc-email', '')
      localStorage.setItem('pu-edc-firstName', '')
      localStorage.setItem('pu-edc-lastName', '')
      localStorage.setItem('pu-edc-phoneNumber', '')

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
  const [isLoading, setIsLoading] = useState(false)

  console.log(state)

  const login = async (values) => {
    setIsLoading(true)
    try {
      const res = await API('post', '/users/login', values)
      console.log(`LOGIN RESPONSE`, res.data.data)

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.data,
      })
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err.response.data.message })
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    setIsLoading(true)
    try {
      const res = await API('POST', '/logout', {})
      console.log(`LOGOUT RESPONSE`, res.data)
      dispatch({ type: LOGOUT_SUCCESS })
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err.response.data.message })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ state, dispatch, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
