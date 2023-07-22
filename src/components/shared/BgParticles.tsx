import Particles from 'react-tsparticles'

const BgParticles = () => {
  return (
    <div className='absolute bottom-0 left-0 right-0 top-0 z-10 overflow-hidden'>
      <Particles
        options={{
          background: {
            color: {
              value: '',
            },
            position: '50% 50%',
            repeat: 'no-repeat',
            size: '20%',
          },
          fullScreen: {
            zIndex: -1,
          },
          particles: {
            color: {
              value: ['#ffffff', '#5B8FB9'],
            },
            links: {
              color: 'transparent',
            },
            move: {
              attract: {
                rotate: {
                  x: 600,
                  y: 600,
                },
              },
              enable: true,
              outModes: {
                bottom: 'out',
                left: 'out',
                right: 'out',
                top: 'out',
                default: 'out',
              },
              random: true,
              speed: 1,
            },
            number: {
              density: {
                enable: true,
              },
              value: 30,
            },
            opacity: {
              random: {
                enable: true,
                minimumValue: 0.1,
              },
              value: {
                min: 0,
                max: 1,
              },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0,
              },
            },
            size: {
              random: {
                enable: true,
                minimumValue: 1,
              },
              value: {
                min: 3,
                max: 5,
              },
              animation: {
                speed: 4,
                minimumValue: 0.3,
              },
            },
          },
        }}
      />
    </div>
  )
}

export default BgParticles
