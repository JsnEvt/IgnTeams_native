import AsyncStorage from '@react-native-async-storage/async-storage'

import { GROUP_COLLECTION } from '@storage/storageConfig'

export async function groupsGetAll() {

  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION)

    const groups: string[] = storage ? JSON.parse(storage) : []
    //necessario, pq armazena sempre como texto.
    //e necessario conversao para podermos tratar os dados.

    return groups
  } catch (error) {
    throw error
  }
}

//o tratamento das informacoes e em forma de objeto por isso:
//    const groups: string[] = storage ? JSON.parse(storage) : []
