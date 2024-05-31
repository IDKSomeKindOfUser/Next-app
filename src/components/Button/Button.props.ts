import React, {ButtonHTMLAttributes} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    appearance?: "primary" | "transparent";
    children: React.ReactNode;
    arrow?: "right" | "down" | "none";
}