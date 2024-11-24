import { z, ZodSchema } from 'zod'

//const profileSchema = z.string()
export const profileSchema = z.object({
    firstname: z.string().min(2, { message: "ชื่อต้องมากกว่า 2 ตัว อักษร" }),
    lastname: z.string().min(2, { message: "นามสกุลต้องมากกว่า 2 ตัว อักษร" }),
    username: z.string().min(2, { message: "ชื่อผู้ใช้งานต้องมากกว่า 2 ตัว อักษร" }),
    password: z.string().min(8, { message: "รหัสผ่านต้องมากกว่า 8 ตัวอักษร" }),
    confirmpassword: z.string(),
    email: z.string().email({ message: "รูปแบบอีเมลผู้ใช้งานไม่ถูกต้อง" }),
}).refine((data) => data.password === data.confirmpassword, {
    message: "รหัสผ่านไม่ตรงกัน",
    path: ["confirmpassword"],
});

export const validateWithZod = (schema: ZodSchema, data: unknown) => {
    const result = schema.safeParse(data)
    if (!result.success) {
        const errors = result.error?.errors.map((error) => error.message)
        throw new Error(errors.join(','))
    }
    return result.data
}