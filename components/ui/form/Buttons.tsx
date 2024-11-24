'use client'
import { useFormStatus } from "react-dom";
import { Button } from "../button";
import { Loader } from 'lucide-react';

type btnSize = 'default' | 'lg' | 'sm'

type SubmitButtonProps = {
    className?: string,
    size?: btnSize,
    text?: string
}

export const SubmitButton = ({ className, size, text }: SubmitButtonProps) => {
    //code
    const { pending } = useFormStatus();

    return <Button
        disabled={pending}
        className={`${className} capitalize `}
        size={size}
        type="submit"
    >
        {
            pending
                ? <Loader className="animate-spin" />
                : <p>{text}</p>
        }


    </Button>
}


