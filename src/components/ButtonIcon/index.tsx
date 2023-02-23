import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import { ButtonIconStyleProps, Container, Icon } from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  //para fornecer a listagem de icones de VectorIcons
  type?: ButtonIconStyleProps
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  )
}