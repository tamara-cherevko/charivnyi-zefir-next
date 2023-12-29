import { SecondaryPageLoading } from '@/ui/layouts'
import { ReactNode } from 'react'

export default function Loading({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-12 gap-8 absolute left-0 right-0">
      <div className="col-span-5">
        <div className="bg-gray-100 p-10 mb-8 h-[400px]"></div>
      </div>
      <div className="col-span-7 font-fixel">
        <div className="bg-gray-100 h-[100px] mb-8"></div>
        <div className="bg-gray-100 h-[300px] mb-8 "></div>
      </div>
    </div>
  )
}
