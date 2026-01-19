import { styled } from '@mui/material/styles'
import MuiButton, { ButtonProps } from '@mui/material/Button'

const Button = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  borderRadius: 0,
  fontWeight: theme.typography.fontWeightMedium,
  fontFamily: theme.typography.fontFamilySecondary,
  padding: theme.spacing(2, 4),
  fontSize: theme.typography.pxToRem(14),
  boxShadow: 'none',
  '&:active, &:focus': {
    boxShadow: 'none',
  },
  '&.MuiButton-sizeSmall': {
    padding: theme.spacing(1, 3),
    fontSize: theme.typography.pxToRem(13),
  },
  '&.MuiButton-sizeLarge': {
    padding: theme.spacing(2, 5),
    fontSize: theme.typography.pxToRem(16),
  },
}))

export default Button
