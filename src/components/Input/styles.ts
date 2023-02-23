import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  ${({ theme }) => css`
  color: ${theme.COLORS.WHITE};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;
  `}

  border-radius: 6px;
  padding:16px


`