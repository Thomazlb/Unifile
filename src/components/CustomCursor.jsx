import { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

const CustomCursor = () => {
    const cursorRef = useRef(null)
    const [isHovering, setIsHovering] = useState(false)
    const [isTouchDevice, setIsTouchDevice] = useState(false)
    const [isMagnetic, setIsMagnetic] = useState(false)

    useEffect(() => {
        // Detect touch device
        const checkTouch = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
        }
        checkTouch()

        if (isTouchDevice) return

        let mouseX = 0
        let mouseY = 0
        let cursorX = 0
        let cursorY = 0
        let magneticX = 0
        let magneticY = 0

        const handleMouseMove = (e) => {
            mouseX = e.clientX
            mouseY = e.clientY

            // Check for magnetic elements
            const magneticElements = document.querySelectorAll('.hero-btn, .download-btn, .nav-download-btn')
            let foundMagnetic = false

            magneticElements.forEach(el => {
                const rect = el.getBoundingClientRect()
                const centerX = rect.left + rect.width / 2
                const centerY = rect.top + rect.height / 2

                // Magnetic pull radius (how far the effect reaches)
                const magneticRadius = 100
                const distance = Math.sqrt(
                    Math.pow(mouseX - centerX, 2) +
                    Math.pow(mouseY - centerY, 2)
                )

                if (distance < magneticRadius) {
                    foundMagnetic = true

                    // Pull strength (0 = no pull, 1 = full pull to center)
                    const pullStrength = 0.3
                    const pull = 1 - (distance / magneticRadius)

                    magneticX = (centerX - mouseX) * pull * pullStrength
                    magneticY = (centerY - mouseY) * pull * pullStrength

                    setIsMagnetic(true)
                }
            })

            if (!foundMagnetic) {
                magneticX = 0
                magneticY = 0
                setIsMagnetic(false)
            }
        }

        const handleMouseEnter = (e) => {
            const target = e.target
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('hero-btn') ||
                target.classList.contains('feature-block') ||
                target.classList.contains('step-card') ||
                target.classList.contains('feature-icon-large')
            ) {
                setIsHovering(true)
            }
        }

        const handleMouseLeave = () => {
            setIsHovering(false)
        }

        // Smooth cursor animation with lerp
        const animate = () => {
            const cursor = cursorRef.current
            if (!cursor) return

            // Target position includes magnetic offset
            const targetX = mouseX + magneticX
            const targetY = mouseY + magneticY

            // Lerp factor (lower = smoother/slower)
            const cursorLerp = 0.2

            cursorX += (targetX - cursorX) * cursorLerp
            cursorY += (targetY - cursorY) * cursorLerp

            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`

            requestAnimationFrame(animate)
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseover', handleMouseEnter)
        document.addEventListener('mouseout', handleMouseLeave)

        animate()

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseover', handleMouseEnter)
            document.removeEventListener('mouseout', handleMouseLeave)
        }
    }, [isTouchDevice])

    if (isTouchDevice) return null

    return (
        <div
            ref={cursorRef}
            className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isMagnetic ? 'magnetic' : ''}`}
        />
    )
}

export default CustomCursor
