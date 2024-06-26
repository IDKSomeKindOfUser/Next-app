export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products
}


export interface TopPageAdvantage {
    _id: string;
    title: string;
    description: string;
}

export interface HhData {
    _id: string;
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
    updatedAt: Date;
}

export interface TopPageModel {
    _id: string;
    title: string;
    tags: string[];
    secondCategory: string;
    alias: string;
    category: TopLevelCategory;
    seoText: string;
    tagsTitle: string;
    metaTitle: string;
    metaDescription: string;
    firstCategory: string;
    advantages: TopPageAdvantage[];
    createdAt: Date;
    updatedAt: Date;
    hh: HhData;
}


