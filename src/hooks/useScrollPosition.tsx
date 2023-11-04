import { useEffect, useState } from 'react'

/**
 * useScrollPosition
 * @constructor
 * @return number
 */
const useScrollPosition = (): number => {
    const [scrollPosition, setScrollPosition] = useState<number>(0)

    /**
     * updateScrollPosition
     * @return void
     */
    const updateScrollPosition = () => {
        setScrollPosition(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', updateScrollPosition, { passive: true })

        return () => window.removeEventListener('scroll', updateScrollPosition)
    }, [])

    return scrollPosition
}

export default useScrollPosition
