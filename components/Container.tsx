import { cn } from "@/lib/utils"

interface ContainerProps{
    children: React.ReactNode,
    className?: string,
}
const Container = ({children, className}: ContainerProps) => {
  return (
    <div className={cn("mx-auto w-full wrapper", className)}>
        {children}
    </div>
  )
}

export default Container