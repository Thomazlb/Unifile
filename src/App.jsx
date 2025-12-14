import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Comparison from './components/Comparison'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import './App.css'

function App() {
  const scrollAnimateRef = useRef(null)
  const scrollAnimateMainRef = useRef(null)
  const headerRef = useRef(null)
  const footerRef = useRef(null)
  const contentRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    let maxScroll = 0

    const initParallax = () => {
      const windowHeight = window.innerHeight
      const windowWidth = window.innerWidth
      const footerHeight = footerRef.current?.offsetHeight || 400
      const contentHeight = contentRef.current?.offsetHeight || 1000

      // Max scroll = content height (same for mobile and desktop)
      // The footer is fixed positioned, so it doesn't need extra scroll space
      maxScroll = contentHeight

      const heightDocument = windowHeight + maxScroll

      // Set heights
      if (scrollAnimateRef.current) {
        scrollAnimateRef.current.style.height = `${heightDocument}px`
      }
      if (scrollAnimateMainRef.current) {
        scrollAnimateMainRef.current.style.height = `${heightDocument}px`
      }
      if (headerRef.current) {
        headerRef.current.style.height = `${windowHeight}px`
      }
      if (wrapperRef.current) {
        wrapperRef.current.style.marginTop = `${windowHeight}px`
      }

      return { footerHeight, heightDocument, maxScroll }
    }

    const scrollFooter = (scrollY, footerHeight) => {
      if (footerRef.current) {
        if (scrollY >= footerHeight) {
          footerRef.current.style.bottom = '0px'
        } else {
          footerRef.current.style.bottom = `-${footerHeight}px`
        }
      }
    }

    const { footerHeight } = initParallax()

    const handleScroll = () => {
      // Recalculate maxScroll dynamically
      const currentContentHeight = contentRef.current?.offsetHeight || 1000
      const dynamicMaxScroll = currentContentHeight

      let scroll = window.scrollY

      // Clamp scroll to prevent over-scrolling
      if (scroll > dynamicMaxScroll) {
        window.scrollTo(0, dynamicMaxScroll)
        scroll = dynamicMaxScroll
      }

      // Move main content up
      if (scrollAnimateMainRef.current) {
        scrollAnimateMainRef.current.style.top = `-${scroll}px`
      }

      // Parallax background effect on header
      if (headerRef.current) {
        const bgPos = 50 - (scroll * 100 / (dynamicMaxScroll + window.innerHeight))
        headerRef.current.style.backgroundPositionY = `${bgPos}%`
      }

      // Show/hide footer
      scrollFooter(scroll, footerHeight)
    }

    // Initial call
    const measurements = initParallax()
    if (measurements) {
      scrollFooter(window.scrollY, measurements.footerHeight)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', initParallax)

    // Add ResizeObserver to handle content changes (images loading, etc)
    const observer = new ResizeObserver(() => {
      initParallax()
    })

    if (contentRef.current) observer.observe(contentRef.current)
    if (footerRef.current) observer.observe(footerRef.current)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', initParallax)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <CustomCursor />
      <Navbar />

      <div id="scroll-animate" ref={scrollAnimateRef}>
        <div id="scroll-animate-main" ref={scrollAnimateMainRef}>
          <div className="wrapper-parallax" ref={wrapperRef}>
            {/* Fixed Header/Hero */}
            <header ref={headerRef}>
              <Hero />
            </header>

            {/* Scrollable Content */}
            <section className="content" ref={contentRef}>
              <Features />
              <HowItWorks />
              <Comparison />
            </section>

            {/* Fixed Footer */}
            <footer ref={footerRef}>
              <div className="footer-bg-solid"></div>
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

