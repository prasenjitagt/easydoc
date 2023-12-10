"use client"

import { ComponentProps } from "react"
import { useFormStatus } from "react-dom"


type formSubButtonProps = {
    children: React.ReactNode,
    className?: string,

} & ComponentProps<"button">

const FormSubButton = ({ children, className, ...props }: formSubButtonProps) => {

    const { pending } = useFormStatus();


    return (
        <button
            {...props}
            disabled={pending}
            className={`btn btn-info ${className}`}
        >
            {pending && <span className="loading loading-spinner text-primary" />}
            {children}

        </button>
    )
}

export default FormSubButton