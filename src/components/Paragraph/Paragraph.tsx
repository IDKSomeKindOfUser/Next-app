import styles from './Paragraph.module.css';
import {ParagraphProps} from "@/components/Paragraph/Paragraph.props";
import cn from "classnames";


export function Paragraph({ children, size = 'medium', ...props }: ParagraphProps) {
    return(
        <p className={cn(styles.p, {
            [styles.small]: size === 'small',
            [styles.medium]: size === 'medium',
            [styles.large]: size === 'large',
        })}{...props}>{children}</p>
    );
}