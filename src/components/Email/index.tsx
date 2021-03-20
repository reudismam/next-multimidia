import { useContext, useState } from 'react';
import { HomeContext } from '../../context/HomeContext';
import styles from './style.module.css';

const Email = ()=>{
    const {email, setEmail} = useContext(HomeContext);
    return (
        <>
            <form className={styles.email}>
                    <div className={styles.comece}>
                        <input 
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          type="text" />
                        <button>Get Started</button>
                    </div>
            </form>
            <h1 className={styles.info}>
                {email}
            </h1>
        </>
        
    );
}

export default Email;