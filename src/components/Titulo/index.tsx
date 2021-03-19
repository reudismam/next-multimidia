import styles from './style.module.css';

interface TituloProps {
    title: string;
}

const Titulo = ({title}:TituloProps)=> {
    return (
        <div className={styles.principal}>
                  <p>
                      {title}
                  </p>
        </div>
    );
}

export default Titulo;