import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { categories } from "@/utils/categories"


const CategoryInput = ({ defaultValue }: { defaultValue?: string }) => {
    const name = 'category'
    return (
        <div className="mb-2">
            <div className="mb-2">
                <Label className="capitalize" htmlFor={name}>
                    {name}
                </Label>
            </div>

            <Select
                defaultValue={defaultValue || categories[0].label}
                name={name}
                required
            >
                <SelectTrigger >
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    {
                        categories.map((item, index) => {
                            return <SelectItem key={index} value={item.label}>
                                <span className="capitalize flex items-center gap-2">
                                    <item.icon />
                                    {item.label}
                                </span>
                            </SelectItem>
                        })
                    }

                </SelectContent>
            </Select>

        </div>
    )
}
export default CategoryInput