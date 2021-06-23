import React from 'react'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'
import { makeStyles } from '@material-ui/core/styles'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import Button from '@material-ui/core/Button'
import Popover from '@material-ui/core/Popover'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListSubheader from '@material-ui/core/ListSubheader'

const languageMap = {
  en: { label: 'English', dir: 'ltr', active: true },
  pl: { label: 'Polski', dir: 'ltr', active: false },
  es: { label: 'Español', dir: 'ltr', active: false },
}
const useStyles = makeStyles(() => ({
  dropdownBtn: {
    color:"#d3d3d3",
    textTransform:"capitalize",
    backgroundColor:"rgb(128,128,128,0.3)",
    boxShadow: "2px 3px rgb(136,136,136, 0.5)",
    borderRadius: "5px",
    marginLeft:"30px"
  }
}))

const LanguageSelect = () => {
  const router = useRouter()
  const classes = useStyles()
  const t = useTranslations('common')

  const [menuAnchor, setMenuAnchor] = React.useState(null)

  return (
    <div className="d-flex justify-content-end align-items-center language-select-root" >
      <Button className={classes.dropdownBtn} onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}>
        {languageMap[router.locale].label}
        <ArrowDropDown fontSize="small" />
      </Button>
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
        <div>
          <List>
             {Object.keys(languageMap)?.map((item) => (
              <ListItem
                button
                key={item}
                onClick={() => {
                  document.cookie = `NEXT_LOCALE=${item};max-age=604800;domain=ruckgaber.pl`
                  router.push('/', '/', {locale: item})
                  setMenuAnchor(null)
                }}
              >
                {languageMap[item].label}
              </ListItem>
            ))}
          </List>
        </div>
      </Popover>
    </div>
  )
}

export default LanguageSelect
