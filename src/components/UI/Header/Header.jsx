import { Box, Container, Popover } from "@mui/material";
import Link from "next/link";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import styles from "./Header.module.scss";
import { useRef, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { MenuOpenIcon, MenuCloseIcon } from "components/Icons";

const langs = [
  {
    key: "ru",
    label: "Russian",
    lang: "RU",
  },
  {
    key: "uz",
    label: "Uzbek",
    lang: "UZ",
  },
  {
    key: "en",
    label: "English",
    lang: "EN",
  },
];

const useStyles = makeStyles({
  paper: {
    background: "#fff",
    borderRadius: "4px !important",
    boxShadow:
      "0px 0px 1px rgba(26, 32, 36, 0.32), 0px 12px 24px rgba(91, 104, 113, 0.24)",
    padding: "5px 4px !important",
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
    transform: "translate(0%, 10%) !important",
  },
});

export function Header() {
  const { lang } = useTranslation("common");
  const { asPath } = useRouter();
  const divRef = useRef(null);
  const [open, setOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const classes = useStyles();

  const handleClose = () => {
    setOpen(null);
  };

  const handleClick = () => {
    setOpen(divRef.current);
  };

  const handleMenuBtnClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.box}>
          <Link href="/" passHref>
            <img src="/images/MainLogo.svg" alt="main logo" />
          </Link>
          <nav>
            <div className={styles.MenuBtn} onClick={() => handleMenuBtnClick() }>
              { menuOpen ?  <MenuCloseIcon /> : <MenuOpenIcon /> } 
            </div>
            <ul>
              <li>
                <Link href="/">
                  <a>HOME</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>CATEGORIES</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>ABOUT US</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.langs} ref={divRef} onClick={handleClick}>
            <div className={styles.langs__content}>
              {langs.map((l) => {
                if (l.key === lang) {
                  return l.lang;
                }
              })}
            </div>
          </div>
        </div>
      </Container>
      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        classes={{ paper: classes.paper }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {langs.map((item, index) => {
          return (
            <Link
              href={asPath}
              locale={item.key}
              replace={true}
              key={`${index}${item.label}`}
              passHref
            >
              <div
                onClick={handleClose}
                className={styles.popover}
                style={{ color: item?.key == lang && "var(--primary-color)" }}
              >
                {item.label}
              </div>
            </Link>
          );
        })}
      </Popover>
    </header>
  );
}
