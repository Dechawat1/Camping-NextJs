'use client'
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const NoDataPage = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center text-center p-8">
            <img
                src="/cute-animation.gif"
                alt="No data"
                className="w-[500px] h-[300px] mb-10"
            />
            <h1 className="text-2xl font-bold text-white-800 mb-4">Oops! ไม่มีข้อมูล</h1>
            <p className="text-white-600 mb-8">
                ลองเลือกหมวดหมู่อื่นดูนะ!
            </p>
            <Button
                variant='default'
                onClick={() => router.back()}
                className="hover:bg-green-400 transition"
            >
                ย้อนกลับ
            </Button>
        </div>
    );
};

export default NoDataPage;
