import styles from './Footer.module.css';
import {FooterProps} from "@/Layout/Footer/Footer.props";
import { format } from 'date-fns';
import Link from "next/link"; 


export function Footer({ ...props }: FooterProps) {
    return(
        <footer { ...props } className={styles.footer}>
            <p className={styles.privacy}>OwlTop © 2020 - {format(new Date(),'yyyy')}. Все права защищены</p>
            <Link className={styles.link} href={'/'} target={'_blank'}>Пользовательское соглашение</Link>
            <Link className={styles.link} href={'/'} target={'_blank'}>Политика конфиденциальности</Link>
        </footer>
    );
}