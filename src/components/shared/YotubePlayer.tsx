import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

interface YotubePlayerProps {
  readonly videoUrl: string
  readonly width: string
  readonly height: string
}
export default function YotubePlayer({
  videoUrl,
  width,
  height,
}: YotubePlayerProps) {
  const [hasWindow, setHasWindow] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true)
    }
  }, [])
  return (
    <>
      {hasWindow && (
        <ReactPlayer
          url={videoUrl}
          width={width}
          height={height}
          autoPlay={true}
        />
      )}
    </>
  )
}
