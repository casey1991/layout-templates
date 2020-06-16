import styles from "./ChipSection.module.scss";
export const ChipSection = () => {
  return (
    <section className={styles.container}>
      <ul className={styles["chips-layout"]}>
        <li>
          <a href="#" className={styles["chip"]}>
            <span className={styles["chip-logo"]} />
            React
          </a>
          <a href="#" className={styles["chip"]}>
            <span className={styles["chip-logo"]} />
            Nextjs
          </a>
          <a href="#" className={styles["chip"]}>
            <span className={styles["chip-logo"]} />
            Git
          </a>
          <a href="#" className={styles["chip"]}>
            <span className={styles["chip-logo"]} />
            MarkDowm
          </a>
          <a href="#" className={styles["chip"]}>
            <span className={styles["chip-logo"]} />
            CSS
          </a>
          <a href="#" className={styles["chip"]}>
            <span className={styles["chip-logo"]} />
            JS
          </a>
          <a href="#" className={styles["chip"]}>
            <span className={styles["chip-logo"]} />
            HTML
          </a>
          <a href="#" className={styles["chip"]}>
            <span className={styles["chip-logo"]} />
            Photoshop
          </a>
        </li>
      </ul>
    </section>
  );
};
export default ChipSection;
