import styles from './styles.module.css';
export function Footer() {
  return (
    <footer className={styles.footer}>
      <span>Desenvolvido por Alexandre Barros</span>
      <span>©{new Date().getFullYear()}</span>
    </footer>
  );
}
