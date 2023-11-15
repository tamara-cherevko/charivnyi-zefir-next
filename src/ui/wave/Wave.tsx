import React from 'react'
import waveTop from '@/public/images/wave-top.png'
import waveMiddle from '@/public/images/wave-mid.png'
import waveBottom from '@/public/images/wave-bot.png'
import { StaticImageData } from 'next/image'

const Wave = () => (
  <div className="absolute top-0 left-0 w-[200%] h-full z-10 ">
    <div className="absolute top-0 left-0 right-0 bottom-0 m-auto">
      <WaveItem position="top" backgroundImage={waveTop} />
      <WaveItem position="middle" backgroundImage={waveMiddle} />
      <WaveItem position="bottom" backgroundImage={waveBottom} />
    </div>
  </div>
)

const WaveItem = ({ position, backgroundImage }: { position: string; backgroundImage: StaticImageData }) => {
  const waveProperties = {
    top: {
      zIndex: 15,
      opacity: 0.7,
      backgroundSize: '50% 100px',
      animationDuration: '20s',
      animationDelay: '1s',
    },
    middle: {
      zIndex: 10,
      opacity: 0.85,
      backgroundSize: '50% 120px',
      animationDuration: '25s',
    },
    bottom: {
      zIndex: 5,
      opacity: 1,
      backgroundSize: '50% 100px',
      animationDuration: '30s',
    },
  }

  const props = waveProperties[position]

  return (
    <div
      className="absolute w-full overflow-hidden h-full bottom-[-1px] bg-gradient-to-t from-[rgb(245,237,240)] to-[rgb(245,237,240)] z-10 opacity-75"
      style={{
        zIndex: props.zIndex || '1',
        opacity: props.opacity,
      }}
    >
      <div
        className="absolute top-0 left-0 w-[200%] h-full bg-repeat-x bg-top"
        style={{
          transformOrigin: 'center top',
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: props.backgroundSize,
          animation: `waveAnimation ${props.animationDuration} infinite alternate`,
          animationDelay: props.animationDelay || '0',
        }}
      ></div>
    </div>
  )
}

export default Wave
