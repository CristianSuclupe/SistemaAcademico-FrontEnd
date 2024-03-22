import { jwtDecode } from 'jwt-decode'
import { ENV } from '../utils/constants'
import { TokenDecode } from '../types/toke'
import { User } from '../types/user'

export class Token {
  setToken = (token: string) => {
    localStorage.setItem(ENV.TOKEN, token)
  }

  getToken = () => {
    return localStorage.getItem(ENV.TOKEN)
  }

  removeToken = () => {
    localStorage.removeItem(ENV.TOKEN)
  }

  hasExpired = (token: string) => {
    const tokenDecode: TokenDecode = jwtDecode(token)
    const expiredData = tokenDecode.exp * 1000
    const currentData = new Date().getTime()
    if (expiredData > currentData) return true
    return false
  }

  getUser = (token: string) => {
    const user: User = jwtDecode(token)
    return user
  }
}
