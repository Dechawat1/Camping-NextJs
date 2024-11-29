import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { provinces} from "@/utils/province"


const CategoryInput = ({ defaultValue }: { defaultValue?: string }) => {
    const name = 'provinces'
    return (
        <div className="mb-2">
            <div className="mb-2">
                <Label className="capitalize" htmlFor={name}>
                    {name}
                </Label>
            </div>

            <Select
                defaultValue={defaultValue || provinces[0].PROVINCE_NAME}
                name={name}
                required
            >
                <SelectTrigger >
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    {
                        provinces.map((item, index) => {
                            return <SelectItem key={item.PROVINCE_ID} value={item.PROVINCE_NAME}>
                                <span className="capitalize flex items-center gap-2">
                                    {item.PROVINCE_NAME}
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