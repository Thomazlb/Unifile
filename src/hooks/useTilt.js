import { useRef, useCallback } from 'react'

/**
 * Hook for 3D tilt effect on mouse movement
 * @param {Object} options - Configuration options
 * @param {number} options.maxTilt - Maximum tilt angle in degrees
 * @param {number} options.perspective - CSS perspective value
 * @param {number} options.scale - Scale on hover
 * @param {number} options.speed - Transition speed in ms
 * @param {boolean} options.glare - Enable glare effect
 */
export const useTilt = (options = {}) => {
    const {
        maxTilt = 15,
        perspective = 1000,
        scale = 1.02,
        speed = 400,
        glare = true
    } = options

    const elementRef = useRef(null)
    const glareRef = useRef(null)

    const handleMouseMove = useCallback((e) => {
        const element = elementRef.current
        if (!element) return

        const rect = element.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const mouseX = e.clientX - centerX
        const mouseY = e.clientY - centerY

        // Calculate rotation based on mouse position
        const rotateX = (mouseY / (rect.height / 2)) * -maxTilt
        const rotateY = (mouseX / (rect.width / 2)) * maxTilt

        element.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`

        // Update glare position
        if (glare && glareRef.current) {
            const glareX = ((e.clientX - rect.left) / rect.width) * 100
            const glareY = ((e.clientY - rect.top) / rect.height) * 100
            glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
        }
    }, [maxTilt, perspective, scale, glare])

    const handleMouseEnter = useCallback(() => {
        const element = elementRef.current
        if (!element) return
        element.style.transition = `transform ${speed}ms ease-out`

        if (glare && glareRef.current) {
            glareRef.current.style.opacity = '1'
        }
    }, [speed, glare])

    const handleMouseLeave = useCallback(() => {
        const element = elementRef.current
        if (!element) return
        element.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`

        if (glare && glareRef.current) {
            glareRef.current.style.opacity = '0'
        }
    }, [perspective, glare])

    const tiltProps = {
        ref: elementRef,
        onMouseMove: handleMouseMove,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        style: {
            transformStyle: 'preserve-3d',
            transition: `transform ${speed}ms ease-out`
        }
    }

    const glareStyle = glare ? {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 'inherit',
        pointerEvents: 'none',
        opacity: 0,
        transition: 'opacity 0.3s ease',
        zIndex: 1
    } : null

    return {
        tiltProps,
        elementRef,
        glareRef,
        glareStyle
    }
}

export default useTilt
