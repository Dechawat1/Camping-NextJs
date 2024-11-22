'use server'
import { profileSchema, validateWithZod } from "@/utils/schemas"


export const createProfileAction = async (prevState: any, formData: FormData) => {
    try {
        const rawData = Object.fromEntries(formData)
        const validateField = validateWithZod(profileSchema, rawData)
        return { message: 'Create Profile Success!!!' }
    } catch (error) {
        console.log(error);
        return { message: error.message || 'An error server' }
    }
}