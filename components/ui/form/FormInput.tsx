import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"


type FormInputProps = {
    name: string
    type: string
    label?: string
    defaultValue?: string
    placeholder?: string
    required?: boolean
}


const FormInput = (props: FormInputProps) => {
    const { name, type, label,defaultValue,placeholder } = props
    return (
        <div className="mb-2">
            <Label htmlFor={name}>
                {label}{props.required && <span className=" ml-1 text-red-500">*</span>}
            </Label>
            <Input name={name} type={type} placeholder={placeholder} defaultValue={defaultValue} required={props.required}/>
        </div>
    )
}
export default FormInput