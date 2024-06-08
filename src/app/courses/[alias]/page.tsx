/* eslint-disable @typescript-eslint/no-unused-vars */
import {withLayout} from "@/Layout/Layout";
import axios from "axios";
import { MenuItem } from '../../../../interfaces/menu.interface';
import { TopPageModel } from '../../../../interfaces/page.interface';
import { ProductModel } from '../../../../interfaces/product.interface';

const firstCategory = 0;

export async function generateStaticParams() {
    const {data: menu} = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {firstCategory});
    return menu.flatMap(m => m.pages.map(p => ({ alias: p.alias })));
}

async function fetchPageData(alias: string) {
    const {data: menu} = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`, {firstCategory});
    const {data: page} = await axios.get<TopPageModel>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${alias}`);
    const {data: products} = await axios.post<ProductModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find/`, {
        category: page.category,
        limit: 10,
    });
    return { menu, page, products };
}

export  async function Course({ params }: { params: { alias: string } }) {
    const { menu, page, products } = await fetchPageData(params.alias);

    return (
        <>
            {products && products.length}
        </>
    );
}

export default withLayout(Course);

