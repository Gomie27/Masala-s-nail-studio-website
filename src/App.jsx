
import { useState } from 'react'
import './App.css'

// Decorative satin bow
function SatinBow({ className = '' }) {
  return (
    <img
      src="/images/pink-bow.png"
      alt=""
      aria-hidden="true"
      className={`satin-bow ${className}`}
    />
  )
}

function App() {
  // Mobile navigation
  const [menuOpen, setMenuOpen] = useState(false)

  // Booking information
  const [booking, setBooking] = useState({
    name: '',
    service: '',
    date: '',
    time: '',
  })

  // Change this number to your own for testing.
  // Before publishing, change it back to Masala's number.
  const bookingWhatsAppNumber = '27699297828'

  const links = [
    ['Home', '#home'],
    ["Masala's Journey", '#about'],
    ['Services', '#services'],
    ['Specials', '#specials'],
    ['Gallery', '#gallery'],
    ['Book Now', '#booking'],
    ['Contact', '#contact'],
  ]

  const closeMenu = () => setMenuOpen(false)

  // Today's date in local time
  const today = new Date()

  const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, '0'),
    String(today.getDate()).padStart(2, '0'),
  ].join('-')

  // Update booking fields
  const handleBookingChange = (event) => {
    const { name, value } = event.target

    setBooking((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  // Send booking request through WhatsApp
  const handleBookingSubmit = (event) => {
    event.preventDefault()

    const message = [
      'Hello Masala! 💗',
      '',
      'I would like to request a nail appointment.',
      '',
      `Name: ${booking.name}`,
      `Nail Service: ${booking.service}`,
      `Preferred Date: ${booking.date}`,
      `Preferred Time: ${booking.time}`,
      '',
      '🎀 Nail Inspiration:',
      'I will send a picture of my preferred nail design if I have one.',
      '',
      'Please let me know if this appointment is available.',
      'Thank you! 💅🏽',
    ].join('\n')

    const whatsappURL =
      `https://wa.me/${bookingWhatsAppNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappURL, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="app">

      {/* NAVIGATION */}
      <header className="navbar">
        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          <img
            src="/images/masala-logo.png"
            alt="Masala's Nail Studio"
            className="logo-image"
          />
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav
          id="site-navigation"
          className={`nav-links ${menuOpen ? 'open' : ''}`}
          aria-label="Main navigation"
        >
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              onClick={closeMenu}
            >
              {name}
            </a>
          ))}
        </nav>
      </header>

      <main>

        {/* HOMEPAGE */}
        <section className="hero" id="home">
          <div className="hero-content">

            <div
              className="bow-decoration"
              aria-hidden="true"
            >
              <span className="bow-line"></span>
              <SatinBow className="hero-bow" />
              <span className="bow-line"></span>
            </div>

            <p className="eyebrow">
              WELCOME TO MASALA'S NAIL STUDIO
            </p>

            <h1>
              Pretty nails,
              <span> pretty confidence.</span>
            </h1>

            <p className="hero-description">
              Your next beautiful nail set starts here.
              Explore our services and find your perfect look.
            </p>

            <a
              href="#services"
              className="primary-button"
            >
              Explore Our Services
              <span aria-hidden="true">→</span>
            </a>

          </div>
        </section>

        {/* ABOUT MASALA */}
        <section
          className="content-section about"
          id="about"
        >
          <SatinBow className="section-satin-bow" />

          <p className="section-label">
            THE STORY BEHIND THE BEAUTY
          </p>

          <h2>Masala's Journey</h2>

          <p>
            Every beautiful nail set has a story behind it.
            Get to know the woman behind Masala's Nail Studio,
            her passion for creativity, and her journey.
          </p>

          <p className="coming-soon">
            Her full story is coming soon.
          </p>
        </section>

        {/* SERVICES */}
        <section
          className="content-section services"
          id="services"
        >
          <SatinBow className="section-satin-bow" />

          <p className="section-label">
            MADE JUST FOR YOU
          </p>

          <h2>Our Nail Services</h2>

          <p>
            From classic elegance to bold nail art,
            discover a style that suits you.
          </p>

          <div className="service-grid">

            <div className="service-card">
              <h3>Acrylic</h3>
              <p>
                Strong, durable nail enhancements
                perfect for adding length and custom shapes.
              </p>
            </div>

            <div className="service-card">
              <h3>Gel</h3>
              <p>
                A glossy, long-lasting manicure
                with a beautiful natural finish.
              </p>
            </div>

            <div className="service-card">
              <h3>Gel X</h3>
              <p>
                Lightweight nail extensions for
                a comfortable, natural-looking set.
              </p>
            </div>

            <div className="service-card">
              <h3>Poly Gel</h3>
              <p>
                A flexible nail enhancement combining
                strength with a lightweight feel.
              </p>
            </div>

          </div>
        </section>

        {/* SPECIALS */}
        <section
          className="content-section specials"
          id="specials"
        >
          <SatinBow className="section-satin-bow" />

          <h2>Our Specials</h2>

          <p>
            Keep an eye out for our latest nail specials
            and seasonal offers.
          </p>
        </section>

        {/* GALLERY */}
        <section
          className="content-section gallery"
          id="gallery"
        >
          <SatinBow className="section-satin-bow" />

          <p className="section-label">
            A LITTLE INSPIRATION
          </p>

          <h2>Our Nail Gallery</h2>

          <p>
            Explore beautiful nail designs and find
            inspiration for your next appointment.
          </p>

          <p className="coming-soon">
            Nail photographs and Instagram gallery
            coming soon.
          </p>
        </section>

        {/* BOOKING */}
        <section
          className="content-section booking"
          id="booking"
        >
          <SatinBow className="section-satin-bow" />

          <p className="section-label">
            YOUR NEXT NAIL SET AWAITS
          </p>

          <h2>Book Your Appointment</h2>

          <p>
            Ready for your next beautiful nail set?
            Fill in your details below and send your
            appointment request through WhatsApp.
          </p>

          <form
            className="booking-form"
            onSubmit={handleBookingSubmit}
          >

            {/* CUSTOMER NAME */}
            <div className="form-group">
              <label htmlFor="booking-name">
                Your Full Name
              </label>

              <input
                type="text"
                id="booking-name"
                name="name"
                placeholder="Enter your full name"
                value={booking.name}
                onChange={handleBookingChange}
                required
              />
            </div>

            {/* NAIL SERVICE */}
            <div className="form-group">
              <label htmlFor="booking-service">
                Nail Service
              </label>

              <select
                id="booking-service"
                name="service"
                value={booking.service}
                onChange={handleBookingChange}
                required
              >
                <option value="">
                  Select your nail service
                </option>
                <option value="Acrylic">Acrylic</option>
                <option value="Gel">Gel</option>
                <option value="Gel X">Gel X</option>
                <option value="Poly Gel">Poly Gel</option>
              </select>
            </div>

            {/* PREFERRED DATE */}
            <div className="form-group">
              <label htmlFor="booking-date">
                Preferred Date
              </label>

              <input
                type="date"
                id="booking-date"
                name="date"
                min={localToday}
                value={booking.date}
                onChange={handleBookingChange}
                required
              />
            </div>

            {/* PREFERRED TIME */}
            <div className="form-group">
              <label htmlFor="booking-time">
                Preferred Time
              </label>

              <input
                type="time"
                id="booking-time"
                name="time"
                value={booking.time}
                onChange={handleBookingChange}
                required
              />
            </div>

            {/* NAIL INSPIRATION REMINDER */}
            <div className="inspiration-reminder">
              <span
                className="reminder-icon"
                aria-hidden="true"
              >
                🎀
              </span>

              <div>
                <h3>Have a nail design in mind?</h3>

                <p>
                  Once WhatsApp opens, don't forget
                  to send Masala a picture of your
                  dream nail set! 💅🏽
                </p>
              </div>
            </div>

            {/* BOOKING BUTTON */}
            <button
              type="submit"
              className="primary-button booking-submit"
            >
              Book via WhatsApp
              <span aria-hidden="true">→</span>
            </button>

            <p className="booking-note">
              Your appointment is only confirmed
              when Masala responds via WhatsApp.
              Please attach any nail inspiration
              pictures directly in the chat.
            </p>

          </form>
        </section>

        {/* CONTACT */}
        <section
          className="content-section contact"
          id="contact"
        >
          <SatinBow className="section-satin-bow" />

          <h2>Get In Touch</h2>

          <p>
            We'd love to hear from you!
            Connect with Masala's Nail Studio.
          </p>

          <a
            href="https://wa.me/27699297828"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            WhatsApp: 069 929 7828
          </a>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Masala's Nail Studio.
          All rights reserved.
        </p>
      </footer>

    </div>
  )
}

export default App
