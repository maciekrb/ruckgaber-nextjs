'use client'
import React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Popover from '@mui/material/Popover'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { usePathname, useRouter } from 'next/navigation'
import { pageNameToSlug, slugToPageName } from '../../locales/namedSlugs'
import enFlag from '../../../public/locales/en.png'
import esFlag from '../../../public/locales/es.png'
import plFlag from '../../../public/locales/pl.png'

const languageMap = {
  en: { label: 'English', icon: enFlag },
  pl: { label: 'Polski', icon: plFlag },
  es: { label: 'Español', icon: esFlag },
}

const LangButton = styled(Button)({
  backgroundColor: 'transparent',
  marginLeft: '2rem',
  color: '#d3d3d3',
  border: '1px solid #d3d3d3',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: '1px solid #ffffff',
  },
})

const LanguageSelect = ({ lang }: { lang: string }) => {
  const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null)
  const pathname = usePathname()
  const router = useRouter()
  const currentSlug = pathname.replace(`/${lang}`, '').replace('/', '') || ''
  const currentPageName = currentSlug ? slugToPageName(currentSlug) : 'home'

  return (
    <>
      <LangButton
        variant="outlined"
        color="info"
        size="small"
        onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}
      >
        {(languageMap as any)[lang].label}
      </LangButton>
      <Popover
        open={!!menuAnchor}
        anchorEl={menuAnchor}
        onClose={() => setMenuAnchor(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <nav>
          <List>
            {Object.keys(languageMap)?.map((item) => (
              <ListItem key={item}>
                <ListItemButton
                  onClick={() => {
                    router.push(pageNameToSlug(currentPageName, item))
                    setMenuAnchor(null)
                  }}
                >
                  <ListItemText primary={(languageMap as any)[item].label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </Popover>
    </>
  )
}

export default LanguageSelect
