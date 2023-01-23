import { createNavigationContainerRef } from '@react-navigation/native'
//Переименовали файл
export const navigationRef = createNavigationContainerRef()

export function navigate(name) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name)
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack()
  }
}
