import { useNavigation as _useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from './types'

export function useNavigation() {
  return _useNavigation<NativeStackNavigationProp<RootStackParamList>>()
}
