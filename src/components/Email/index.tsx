import { useState } from 'react';
import styles from './style.module.css';

const Email = ()=>{
    const [email, setEmail] = useState("reudismam@gmail.com");
    
    return (
        <>
            <form className={styles.email}>
                    <div className={styles.comece}>
                        <input type="text" />
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