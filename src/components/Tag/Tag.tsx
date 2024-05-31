import styles from './Tag.module.css';
import cn from "classnames";
import {TagProps} from "@/components/Tag/Tag.props";


export function Tag({ children, size = 'small', color = 'transparent', href, ...props }: TagProps) {
    return(
        <div className={cn(styles.tag, {
            [styles.small]: size === 'small',
            [styles.medium]: size === 'medium',
            [styles.transparent]: color === 'transparent',
            [styles.primary]: color === 'primary',
            [styles.red]: color === 'red',
            [styles.grey]: color === 'grey',
            [styles.green]: color === 'green',
        })}{...props}>{href ? <a href={href}>{children}</a> : <>{children}</>}</div>
    );
}