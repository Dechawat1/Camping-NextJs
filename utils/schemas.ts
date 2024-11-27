import { z, ZodSchema } from 'zod'

//const profileSchema = z.string()
export const profileSchema = z.object({
    firstname: z.string().min(2, { message: "ชื่อต้องมากกว่า 2 ตัว อักษร" }),
    lastname: z.string().min(2, { message: "นามสกุลต้องมากกว่า 2 ตัว อักษร" }),
    username: z.string().min(2, { message: "ชื่อผู้ใช้งานต้องมากกว่า 2 ตัว อักษร" }),
})

export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
    const result = schema.safeParse(data);
    if (!result.success) {
      // code
      const errors = result.error?.errors.map((error) => error.message);
      throw new Error(errors.join(","));
    }
    return result.data;
  };