import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...input){
    return twMerge(clsx(input))
}