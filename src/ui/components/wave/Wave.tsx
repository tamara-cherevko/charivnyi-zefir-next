const Wave = () => (
  <div className="absolute top-0 left-0 w-[200%] h-full z-10 ">
    <div className="absolute top-0 left-0 right-0 bottom-0 m-auto">
      <WaveItem position="top" backgroundImage={'/images/wave-top.png'} />
      <WaveItem position="middle" backgroundImage={'/images/wave-mid.png'} />
      <WaveItem position="bottom" backgroundImage={'/images/wave-bot.png'} />
    </div>
  </div>
)

const WaveItem = ({ position, backgroundImage }: { position: string; backgroundImage: string }) => {
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

  const props = (waveProperties as any)[position]

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
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: props.backgroundSize,
          animation: `waveAnimation ${props.animationDuration} infinite alternate`,
          animationDelay: props.animationDelay || '0',
        }}
      ></div>
    </div>
  )
}

export default Wave
