import { useContext } from 'react';
import { HomeContext } from '../../context/HomeContext';
import styles from './style.module.css';

interface TituloProps {
    title: string;
}

const Titulo = ({title}:TituloProps)=> {
    const {email} = useContext(HomeContext);
    return (
        <div className={styles.principal}>
                  <p>
                      {title}
                  </p>
        </div>
    );
}

export default Titulo;