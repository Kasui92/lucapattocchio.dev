import { ReactElement, useEffect, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'

/**
 * MouseScroll
 * @constructor
 */
const MouseScroll = (): ReactElement => {
    const [isInitialTransition, setIsInitialTransition] = useState<boolean>(true)
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setIsScrolled(latest > 100)
    })

    useEffect(() => {
        if (isInitialTransition) {
            setTimeout(() => {
                setIsInitialTransition(false)
            }, 1000)
        }
    }, [isInitialTransition])

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: isScrolled ? 0 : 1,
                y: 0,
                transition: {
                    default: { delay: 1, duration: 0.5, ease: 'easeInOut' },
                    opacity: { delay: isInitialTransition ? 1 : 0, duration: 0.5, ease: 'easeInOut' },
                },
            }}
            className={`sticky bottom-[3%] left-1/2 -translate-x-1/2`}
        >
            <div className="arrow" />
        </motion.div>
    )
}

export default MouseScroll
