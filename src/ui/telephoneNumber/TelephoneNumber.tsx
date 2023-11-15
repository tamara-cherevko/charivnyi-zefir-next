import { businessConfigs } from '@/lib/businessConfigs'
import React from 'react'

const TelephoneNumber = () => {
  const phone = businessConfigs.phoneNumber
  return (
    <a
      href={`tel:${phone}`}
      data-content={phone}
      data-type="phone"
      className="text-purple no-underline text-sm font-normal font-verdana hover:text-black"
    >
      {phone}
    </a>
  )
}
export default TelephoneNumber
