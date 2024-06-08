import styles from './Layout.module.css';
import {Header} from "@/Layout/Header/Header";
import {Sidebar} from "@/Layout/Sidebar/Sidebar";
import {Footer} from "@/Layout/Footer/Footer";
import {FunctionComponent} from "react";
import {LayoutProps} from "@/Layout/Layout.props";


function Layout({ children }: LayoutProps) {
    return(
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <div className={styles.body}>
                {children}
            </div>
            <div className={styles.footerWrapper}>
                <Footer className={styles.footer}/>
            </div>
        </div>
    );
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T){
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        );
    };
};