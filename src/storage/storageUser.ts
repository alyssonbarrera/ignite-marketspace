import * as SecureStore from 'expo-secure-store'

import { UserDTO } from '@dtos/UserDTO'
import { USER_STORAGE } from './storageConfig'

export async function storageSaveUser(user: UserDTO): Promise<void> {
  await SecureStore.setItemAsync(USER_STORAGE, JSON.stringify(user))
}

export async function storageGetUser(): Promise<UserDTO> {
  const storage = await SecureStore.getItemAsync(USER_STORAGE)

  const user: UserDTO = storage ? JSON.parse(storage) : {}

  return user
}

export async function storageRemoveUser(): Promise<void> {
  await SecureStore.deleteItemAsync(USER_STORAGE)
}
