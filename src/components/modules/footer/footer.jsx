import stylesCSS from "./styles.module.css";
export default function Footer(props) {
  return (
    <div className={stylesCSS.footerContainer}>
      <div className={stylesCSS.footerTextContainer}>
        <p>
          <a
            href={"https://drnareshchauhan.in"}
            target="_blank"
            rel="noopener noreferrer"
          >
            drnareshchauhan.in
          </a>
        </p>
        <p>
          <a
            href={"https://github.com/abhpd-team/OEP-Frontend"}
            target="_blank"
            rel="noopener noreferrer"
          >
            source code
          </a>
        </p>
      </div>
    </div>
  );
}
