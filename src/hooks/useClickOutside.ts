import { useEffect, useRef, useState } from 'react'

export const useClickOutside = () => {
  const [isClickedOutside, setIsClickedOutside] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        setIsClickedOutside(true)
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  let result: [typeof ref, boolean]
  result = [ref, isClickedOutside]
  return result
}