import React, {HTMLAttributes} from "react";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
}