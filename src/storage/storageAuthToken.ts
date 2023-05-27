import * as SecureStore from 'expo-secure-store'

import { AUTH_TOKEN_STORAGE } from './storageConfig'

type StorageAuthTokenProps = {
  token: string
  refreshToken: string
}

export async function storageSaveAuthToken({
  token,
  refreshToken,
}: StorageAuthTokenProps): Promise<void> {
  await SecureStore.setItemAsync(
    AUTH_TOKEN_STORAGE,
    JSON.stringify({ token, refreshToken }),
  )
}

export async function storageGetAuthToken(): Promise<StorageAuthTokenProps> {
  const storage = await SecureStore.getItemAsync(AUTH_TOKEN_STORAGE)

  const { token, refreshToken }: StorageAuthTokenProps = storage
    ? JSON.parse(storage)
    : {}

  return { token, refreshToken }
}

export async function storageRemoveAuthToken(): Promise<void> {
  await SecureStore.deleteItemAsync(AUTH_TOKEN_STORAGE)
}
