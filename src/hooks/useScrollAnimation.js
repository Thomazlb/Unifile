import { useEffect, useRef, useState } from 'react'

/**
 * Hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Margin around root
 * @param {boolean} options.triggerOnce - Only trigger animation once
 */
export const useScrollAnimation = (options = {}) => {
    const {
        threshold = 0.1,
        rootMargin = '0px 0px -50px 0px',
        triggerOnce = true
    } = options

    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        // Respect user's motion preferences
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReducedMotion) {
            setIsVisible(true)
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    if (triggerOnce) {
                        observer.unobserve(element)
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false)
                }
            },
            { threshold, rootMargin }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [threshold, rootMargin, triggerOnce])

    return { ref, isVisible }
}

/**
 * Hook for staggered animations on multiple children
 * @param {number} childCount - Number of children to animate
 * @param {number} staggerDelay - Delay between each child in ms
 */
export const useStaggerAnimation = (childCount, staggerDelay = 100, options = {}) => {
    const { ref, isVisible } = useScrollAnimation(options)

    const getStaggerStyle = (index) => ({
        transitionDelay: isVisible ? `${index * staggerDelay}ms` : '0ms'
    })

    return { ref, isVisible, getStaggerStyle }
}

export default useScrollAnimation
