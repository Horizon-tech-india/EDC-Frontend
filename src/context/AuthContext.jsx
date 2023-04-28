// main file
import React, { createContext, useReducer, useState } from 'react'
import { API } from '../Api/Post'
import { decryptData } from './crypto'
import { authReducer } from './authReducer'

const firstName = localStorage.getItem('pu-edc-fn')
  ? decryptData(localStorage.getItem('pu-edc-fn'))
  : ''
const lastName = localStorage.getItem('pu-edc-ln')
  ? decryptData(localStorage.getItem('pu-edc-ln'))
  : ''
const phoneNumber = localStorage.getItem('pu-edc-pn')
  ? decryptData(localStorage.getItem('pu-edc-pn'))
  : ''
const storedToken = localStorage.getItem('token')
  ? decryptData(localStorage.getItem('token'))
  : ''
const email = localStorage.getItem('pu-edc-m')
  ? decryptData(localStorage.getItem('pu-edc-m'))
  : ''
const role = localStorage.getItem('pu-edc-state')
  ? decryptData(localStorage.getItem('pu-edc-state'))
  : ''
const tokenExpTime = localStorage.getItem('pu-edc-exp')
  ? decryptData(localStorage.getItem('pu-edc-exp'))
  : ''

const initialAuthState = {
  isAuthenticated: !!storedToken && !!email,
  firstName,
  lastName,
  phoneNumber,
  role,
  tokenExpTime,
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
      // const res = await API('POST', '/logout', {})
      // console.log(`LOGOUT RESPONSE`, res.data)
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
