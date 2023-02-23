import { Container, Icon, Name } from './styles'
import { ButtonIcon } from '@components/ButtonIcon'

type Props = {
  name: string;
  onRemove: () => void;
}

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <Container>
      <Icon />
      <Name>
        {name}
      </Name>

      <ButtonIcon
        icon='close'
        type='SECONDARY'
        onPress={onRemove}
      />
    </Container>
  )
}