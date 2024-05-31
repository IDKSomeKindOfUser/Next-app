import React, {HTMLAttributes} from "react";

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    size?: 'small' | 'medium';
    color?: 'primary' | 'transparent' | 'red' | 'grey' | 'green';
    href?: string;
}