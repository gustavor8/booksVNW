import s from "./footer.module.scss";
export default function Footer() {
  return (
    <>
      <footer className={s.footer}>
        <p className={s.infoFooter}>4002-8922</p>
        <section className={s.iconsSection}>
          {/* prettier-ignore */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={s.icons} >
          <i className="fab fa-facebook fa-2x"></i>
        </a>
          {/* prettier-ignore */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={s.icons}
        >
          <i className="fab fa-twitter fa-2x"></i>
        </a>
          {/* prettier-ignore */}
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={s.icons}>
          <i className="fab fa-youtube fa-2x"></i>
        </a>
          {/* prettier-ignore */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={s.icons} >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
          {/* prettier-ignore */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={s.icons} >
          <i className="fab fa-instagram fa-2x" ></i>
        </a>
        </section>
      </footer>
    </>
  );
}
