export interface ImageProps {
  readonly src: string
  readonly alt: string
}

export interface SlideViewProps {
  readonly media0: number
  readonly media768: number
  readonly media1024: number
  readonly media1280: number
}

export interface SwiperProps {
  readonly images: ImageProps[]
  readonly width: number
  readonly height: number
  readonly slideView: SlideViewProps[]
  readonly spaceBetween: number
}
