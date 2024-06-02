import {ParagraphProps} from "@/components/Paragraph/Paragraph.props";
import {Header} from "@/Layout/Header/Header";
import {Sidebar} from "@/Layout/Sidebar/Sidebar";
import {Footer} from "@/Layout/Footer/Footer";
import {FunctionComponent} from "react";


function Layout({ children }: ParagraphProps) {
    return(
        <>
            <Header />
            <div>
                <Sidebar />
                <div>
                    {children}
                </div>
            </div>
            <Footer />
        </>
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