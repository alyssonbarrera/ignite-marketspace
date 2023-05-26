import AsyncStorage from '@react-native-async-storage/async-storage'

import { AUTH_TOKEN_STORAGE } from './storageConfig'

type StorageAuthTokenProps = {
  token: string
  refreshToken: string
}

export async function storageSaveAuthToken({
  token,
  refreshToken,
}: StorageAuthTokenProps): Promise<void> {
  await AsyncStorage.setItem(
    AUTH_TOKEN_STORAGE,
    JSON.stringify({ token, refreshToken }),
  )
}

export async function storageGetAuthToken(): Promise<StorageAuthTokenProps> {
  const storage = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE)

  const { token, refreshToken }: StorageAuthTokenProps = storage
    ? JSON.parse(storage)
    : {}

  return { token, refreshToken }
}

export async function storageRemoveAuthToken(): Promise<void> {
  await AsyncStorage.removeItem(AUTH_TOKEN_STORAGE)
}
