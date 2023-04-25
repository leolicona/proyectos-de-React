// React hook
import { useState, useEffect } from 'react'

export default function useMousePosition ({ enabled }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event
      setPosition({
        x: clientX,
        y: clientY
      })
    }

    if (enabled) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [enabled])

  return [
    position
  ]
}
