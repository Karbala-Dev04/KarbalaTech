// import "../styles/services.css";

export default function Services(){
    return(
        <section className="services" id="services">
            <h2>Our Services</h2>

            <div className="service-grid">
                <div className="service-card">
                    <h3>Web Development</h3>
                    <p>Modern React-based websites and apps.</p>
                </div>

                <div className="service-card">
                    <h3>UI/UX Design</h3>
                    <p>Clean, Modern, Userfocused interface design.</p>
                </div>

                <div className="service-card">
                    <h3>Performance Optimization</h3>
                    <p>Fast-Loading, scalable web solutions.</p>
                </div>
            </div>
        </section>
    )
}