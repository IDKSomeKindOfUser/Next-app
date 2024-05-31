import { ButtonProps } from "@/components/Button/Button.props";
import styles from "./Button.module.css";
import cn from "classnames";

export function Button({ appearance = 'primary', children, arrow = 'none', ...props }: ButtonProps): JSX.Element {
    return (
        <button className={cn(styles.button,
            {
                [styles.primary]: appearance === 'primary',
                [styles.transparent]: appearance === 'transparent',
            })} {...props}>
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow === 'down',
            })}>
                <svg className={styles.icon} width="5.874908" height="10.000000" viewBox="0 0 5.87491 10" fill="#3B434E" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.71 4.6L1.26 0.15C1.16 0.05 1.02 0 0.87 0C0.73 0 0.59 0.05 0.49 0.15L0.16 0.48C-0.05 0.7 -0.05 1.04 0.16 1.26L3.9 4.99L0.15 8.73C0.05 8.84 0 8.97 0 9.12C0 9.27 0.05 9.4 0.15 9.51L0.48 9.84C0.59 9.94 0.72 10 0.87 10C1.02 10 1.15 9.94 1.26 9.84L5.71 5.38C5.81 5.28 5.87 5.14 5.87 4.99C5.87 4.85 5.81 4.71 5.71 4.6Z"/>
                </svg>
            </span>}
        </button>
    );
}