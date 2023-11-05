
import { Menu } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from '@/components/ui/sheet'
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import Link from "next/link"

const MobileSidebar = () => {
  return (
    <div className="hidden max-sm:flex mr-2">
        <Sheet>
            <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition-all">
                <Menu className="h-5 w-5 cursor-pointer"/>
            </SheetTrigger>
            <SheetContent side={"left"} className="bg-white">
            <div className='border-b flex items-center w-full justify-center'>
                <Image
                    src={"/logo.png"}
                    alt='logo'
                    width={80}
                    height={80}
                    style={{objectFit: "contain"}}
                    className='cursor-pointer mb-2'
                />
            </div>
            <div className='grid grid-cols-1 gap-4 mt-10'>
                {NAV_LINKS.map((item) => (
                    <Link href={item.href} key={item.key} className="flex items-center justify-center">
                        <div className=' hover:text-lg transition-all '>
                            {item.label}    
                        </div>
                    </Link>
                ))}
            </div>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileSidebar