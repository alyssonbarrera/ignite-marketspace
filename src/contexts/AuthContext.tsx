import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from 'react'
import {
  storageSaveUser,
  storageGetUser,
  storageRemoveUser,
} from '@storage/storageUser'

import { UserDTO } from '@dtos/UserDTO'
import { api } from '@services/api'
import {
  storageGetAuthToken,
  storageRemoveAuthToken,
  storageSaveAuthToken,
} from '@storage/storageAuthToken'

export type AuthContextDataProps = {
  user: UserDTO
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  isLoadingUserStorageData: boolean
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO)
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] = useState(true)

  async function userAndTokenUpdate(userData: UserDTO, token: string) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`

    setUser(userData)
  }

  async function storageUserAndTokenSave(
    userData: UserDTO,
    token: string,
    refreshToken: string,
  ) {
    try {
      setIsLoadingUserStorageData(true)

      await storageSaveUser(userData)
      await storageSaveAuthToken({ token, refreshToken })
    } catch (error: any) {
      throw new Error(error)
    } finally {
      setIsLoadingUserStorageData(false)
    }
  }

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post('/sessions', {
        email,
        password,
      })

      if (data.user && data.token && data.refreshToken) {
        await userAndTokenUpdate(data.user, data.token)
        await storageUserAndTokenSave(data.user, data.token, data.refreshToken)
      }
    } catch (error: any) {
      throw new Error(error)
    } finally {
      setIsLoadingUserStorageData(false)
    }
  }

  const signOut = useCallback(async () => {
    try {
      setIsLoadingUserStorageData(true)

      setUser({} as UserDTO)
      await storageRemoveUser()
      await storageRemoveAuthToken()
    } catch (error: any) {
      throw new Error(error)
    } finally {
      setIsLoadingUserStorageData(false)
    }
  }, [])

  async function loadUserData() {
    try {
      setIsLoadingUserStorageData(true)

      const userLogged = await storageGetUser()
      const { token } = await storageGetAuthToken()

      if (userLogged && token) {
        await userAndTokenUpdate(userLogged, token)
      }
    } catch (error: any) {
      throw new Error(error)
    } finally {
      setIsLoadingUserStorageData(false)
    }
  }

  useEffect(() => {
    loadUserData()
  }, [])

  useEffect(() => {
    const subscribe = api.registerInterceptTokenManager(signOut)

    return () => {
      subscribe()
    }
  }, [signOut])

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        isLoadingUserStorageData,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
