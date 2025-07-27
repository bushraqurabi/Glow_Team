import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="hero-section">
        <h1 className="glow-title">Glow</h1>
        <p className="glow-slogan">Make your event glow</p>
        <button className="glow-button">Let's Glow Your Event</button>
      </div>

      <section id="about-us" className="about-us">
        <h2>About Us</h2>
        <p>
          We are a passionate event team dedicated to lighting up your events with futuristic,
          glowing experiences inspired by the vastness of space.
        </p>
        <div className="vision-mission-cards">
          <div className="card glow-card">
            <h3>Vision</h3>
            <p>To illuminate every event with innovation and cosmic energy.</p>
          </div>
          <div className="card glow-card">
            <h3>Mission</h3>
            <p>Creating immersive experiences that make your event truly shine.</p>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="what-we-do">
        <h2>What We Do</h2>
        <div className="services-grid">
          {[
            "Tech Talks",
            "Hackathons",
            "Startup Demos",
            "Networking Events",
            "Workshops",
          ].map((service) => (
            <div key={service} className="card glow-card service-card">
              <div className="service-icon">✨</div>
              <h3>{service}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="meet-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {[
            {
              name: "Alice",
              role: "Founder & CEO",
              fact: "Loves stargazing every night.",
            },
            {
              name: "Bob",
              role: "Lead Designer",
              fact: "Collects meteorites.",
            },
            {
              name: "Charlie",
              role: "Tech Specialist",
              fact: "Can code in zero gravity (theoretically).",
            },
            {
              name: "Dana",
              role: "Event Coordinator",
              fact: "Once planned a space-themed wedding.",
            },
          ].map(({ name, role, fact }) => (
            <div key={name} className="card glow-card team-card">
              <h3>{name}</h3>
              <p><b>{role}</b></p>
              <p><i>{fact}</i></p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact-join" className="contact-join">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="4" required></textarea>
          <button type="submit" className="glow-button">Join Our Team</button>
        </form>
      </section>

      <footer>
        <div className="footer-content">
          <div className="logo glow-title">Glow</div>
          <nav className="footer-nav">
            <a href="#about-us">About</a>
            <a href="#what-we-do">Services</a>
            <a href="#contact-join">Contact</a>
          </nav>
        </div>
        <p className="copyright">© 2025 Glow Team. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
