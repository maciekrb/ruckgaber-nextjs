import React from 'react'
import AppBar from '@mui/material/AppBar'
import Link from '@components/molecules/NavLink'
import LanguagePicker from './LanguagePicker'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import styles from './NavBar.module.css'

interface Item {
  title: string
  href: string
}

const NavBar = ({ items, lang }: { items: Item[]; lang: string }) => {
  return (
    <AppBar position="fixed" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <Typography
          variant="h4"
          color="inherit"
          noWrap
          className={styles.toolbarTitle}
        >
          — Jan Ruckgaber —
        </Typography>
        <nav>
          {items.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.title}
            </Link>
          ))}
          <LanguagePicker lang={lang} />
        </nav>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
