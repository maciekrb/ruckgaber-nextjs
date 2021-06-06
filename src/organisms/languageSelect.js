import React from "react";
import { changeLanguage, useTranslation } from "react-i18next";

import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import Link from 'next/link'

const languageMap = {
  en: { label: "English", dir: "ltr", active: true },
  pl: { label: "Polski", dir: "ltr", active: false },
  es: { label: "Español", dir: "ltr", active: false }
};

const LanguageSelect = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState('en')
  const { t } = useTranslation()

  const [menuAnchor, setMenuAnchor] = React.useState(null)
  React.useEffect(() => {
    const selected = localStorage.getItem("i18nextLng")
    if (selected) {
      setSelectedLanguage(selected)
    }
    document.body.dir = languageMap[selectedLanguage].dir
  }, [menuAnchor]);

  return (
    <div className="d-flex justify-content-end align-items-center language-select-root">
      <Button onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}>
        {languageMap[selectedLanguage].label}
        <ArrowDropDown fontSize="small" />
      </Button>
      <Popover
        open={!!menuAnchor}
        anchorEl={menuAnchor}
        onClose={() => setMenuAnchor(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <div>
          <List>
            <ListSubheader>{t("select_language")}</ListSubheader>
            {Object.keys(languageMap)?.map(item => (
              <ListItem
                button
                key={item}
                onClick={() => {
                  i18next.changeLanguage(item);
                  setMenuAnchor(null);
                }}
              >
                <Link></Link>{languageMap[item].label}
              </ListItem>
            ))}
          </List>
        </div>
      </Popover>
    </div>
  );
};

export default LanguageSelect;
