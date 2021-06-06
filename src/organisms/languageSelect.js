import React from 'react'
import { useRouter } from 'next/router'
import { changeLanguage, useTranslation } from 'react-i18next'
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
  dropdown: {
    color:"#d3d3d3",
    textTransform:"capitalize",
    backgroundColor:"rgb(128,128,128,0.3)",
    boxShadow: "2px 3px #888888",
    borderRadius: "5px",
    marginLeft:"30px"
  }
}))

const LanguageSelect = () => {
  const router = useRouter()
  const classes = useStyles()
  const { t } = useTranslation()

  const [menuAnchor, setMenuAnchor] = React.useState(null)

  return (
    <div className="d-flex justify-content-end align-items-center language-select-root" >
      <Button className={classes.dropdown} onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}>
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
                  router.push(router.pathname, router.pathname, {locale: item})
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
