import { SecondaryPageLoading } from '@/ui/layouts'
import { ReactNode } from 'react'

export default function Loading({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-12 gap-8 ">
      <div className="col-span-5">
        <div className="bg-gray-100 p-10 mb-8 h-[420px] skeleton-wave"></div>
      </div>
      <div className="col-span-7 font-fixel">
        <div className="bg-gray-100 h-[80px] w-[50%] mb-8 skeleton-wave"></div>
        <div className="bg-gray-100 h-[80px] w-[100%] mb-8 skeleton-wave"></div>
        <div className="bg-gray-100 h-[80px] w-[100%] mb-8 skeleton-wave"></div>
        <div className="bg-gray-100 h-[80px] w-[40%] mb-8 skeleton-wave"></div>
      </div>
    </div>
  )
}
