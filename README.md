# 🏕️ Workshop NextJS 15 - Camping Credie  
**By: รอยไถ พัฒนา**

โปรเจกต์นี้เป็น Workshop ที่พัฒนาโดยใช้ **Next.js 15**, **Supabase**, และ **Clerk Authentication** เพื่อสร้างระบบลงทะเบียนและจัดการโปรไฟล์ผู้ใช้สำหรับเว็บแคมป์ปิ้ง "Camping Credie"

---

## 📦 Tech Stack

- Next.js 15
- Supabase (Database + Auth)
- Clerk (Authentication UI)
- PostgreSQL
- Prisma (ORM)

---

## ⚙️ Environment Variables

สำหรับการรันโปรเจกต์นี้ จำเป็นต้องตั้งค่า environment variables ดังนี้

### `.env`

ใช้สำหรับการเชื่อมต่อกับฐานข้อมูล


# Connect to Supabase via connection pooling with Supavisor.
DATABASE_URL="your_supabase_database_url_here"

# Direct connection to the database (used by Prisma migration).
DIRECT_URL="your_direct_database_url_here"

```env.local

### `.env.local`



# Clerk configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"

# Redirect URLs after sign-in / sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL="/profile/create"
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL="/profile/create"

# Supabase configuration
SUPABASE_URL="your_supabase_project_url"
SUPABASE_KEY="your_supabase_anon_or_service_key"










