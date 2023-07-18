import { IconMoon, IconSun } from '@tabler/icons-react'
import { useTheme } from 'next-themes'

export default function ThemeToogle() {
  const { theme, setTheme } = useTheme()
  function switchTheme() {
    theme == 'dark' ? setTheme('light') : setTheme('dark')
  }
  return (
    <div className='-mt-2'>
      <button
        className='rounded-full p-2 hover:bg-gray-200 dark:hidden dark:hover:bg-gray-700'
        onClick={switchTheme}
      >
        <IconSun size={30} />
      </button>
      <button
        className='hidden rounded-full p-2 hover:bg-gray-200 dark:block dark:hover:bg-gray-700'
        onClick={switchTheme}
      >
        <IconMoon size={30} />
      </button>
    </div>
  )
}
