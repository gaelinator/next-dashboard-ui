import Image from "next/image";
import Link from "next/link";
import { montserrat } from "../layout";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className="h-screen flex">
        {/*LEFT */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-200 p-4">
          <Link href="/" className="flex items-center justify-center gap-1">
            <Image className="object-contain" src="/logog.png" alt="logo" width={32} height={32}/>
            <span className={`${montserrat.className} hidden lg:block font-medium`}>GSchool</span>
          </Link>
          </div>
        {/*RIGHT */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-blue-200">r</div>
    </div>;
  }

  