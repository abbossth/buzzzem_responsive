import {
  FaceBookIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
} from "components/Icons";
import styles from "./Footer.module.scss";
import { Container } from "@mui/material";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__content}>
          <span>© Buzzem 2023</span>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>For partners</li>
          </ul>
          <div className={styles.footer__icons}>
            <a href="#">
              <FaceBookIcon />
            </a>
            <a href="#">
              <TwitterIcon />
            </a>
            <a href="#">
              <InstagramIcon />
            </a>
            <a href="#">
              <YouTubeIcon />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
