import AsyncStorage from '@react-native-async-storage/async-storage'

import { UserDTO } from '@dtos/UserDTO'
import { USER_STORAGE } from './storageConfig'

export async function storageSaveUser(user: UserDTO): Promise<void> {
  await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user))
}

export async function storageGetUser(): Promise<UserDTO> {
  const storage = await AsyncStorage.getItem(USER_STORAGE)

  const user: UserDTO = storage ? JSON.parse(storage) : {}

  return user
}

export async function storageRemoveUser(): Promise<void> {
  await AsyncStorage.removeItem(USER_STORAGE)
}
