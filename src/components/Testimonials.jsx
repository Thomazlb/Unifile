import './Testimonials.css'

const testimonials = [
    {
        id: 1,
        name: 'Alex Chen',
        role: 'Designer',
        initials: 'AC',
        quote: 'Finally, a file tool that just works. No subscriptions, no uploads to some random server. Love the clean interface.'
    },
    {
        id: 2,
        name: 'Sarah Miller',
        role: 'Photographer',
        initials: 'SM',
        quote: 'I batch convert hundreds of images daily. Unifile handles it effortlessly and keeps my original quality intact.'
    },
    {
        id: 3,
        name: 'James Wilson',
        role: 'Developer',
        initials: 'JW',
        quote: 'The compression is incredible. Reduced my assets by 70% without visible quality loss. Essential for any project.'
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials section" id="testimonials">
            <div className="container">
                <div className="testimonials-header">
                    <span className="testimonials-badge">Testimonials</span>
                    <h2 className="testimonials-title">
                        Loved by{' '}
                        <span className="gradient-text">creators</span>
                    </h2>
                    <p className="testimonials-subtitle">
                        See what our users have to say about their experience with Unifile.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="testimonial-quote">
                                <svg className="quote-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                </svg>
                                <p>{testimonial.quote}</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    {testimonial.initials}
                                </div>
                                <div className="author-info">
                                    <span className="author-name">{testimonial.name}</span>
                                    <span className="author-role">{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
