"use client"


import { ComponentProps } from "react"
import { useFormStatus } from "react-dom"


type FormSubButtonProps = {

    children: React.ReactNode,
    className?: string,

} & ComponentProps<"button">




export default function FormSubButton(
    { children, className, ...props }: FormSubButtonProps
) {

    const { pending } = useFormStatus();


    return (
        <button
            {...props}
            className={`${className}`}
            disabled={pending}
        >
            {pending && <span className="loading loading-spinner text-warning" />}
            {children}
        </button>
    )
}

