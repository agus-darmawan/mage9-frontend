const ResponsiveThemeVariants = {
  smdark: 'hidden dark:block md:hiden md:dark:hidden',
  smlight: 'block dark:hidden md:hidden ',
  mddark: 'hidden md:dark:block',
  mdlight: 'hidden md:block md:dark:hidden',
}

interface ResponsiveThemeProps {
  readonly children: React.ReactNode
  readonly type: string
}

export default function ResponsiveThemeHandler({
  children,
  type,
}: ResponsiveThemeProps) {
  return (
    <div
      className={
        type === 'smdark'
          ? ResponsiveThemeVariants.smdark
          : type === 'smlight'
          ? ResponsiveThemeVariants.smlight
          : type === 'mddark'
          ? ResponsiveThemeVariants.mddark
          : type === 'mdlight'
          ? ResponsiveThemeVariants.mdlight
          : ''
      }
    >
      {children}
    </div>
  )
}
