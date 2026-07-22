// import "../styles/features.css";

export default function Features(){
    return(
        <section className="features" id="features">
            <h2>Why Choose Our Platform</h2>

            <div className="feature-grid">
                <div className="feature-card">
                    <h3>Fast Performance</h3>
                    <p>Optimized React architecture for Speed.</p>
                </div>
                <div className="feature-card">
                    <h3>Scalable Structure</h3>
                    <p>Component-ased desin for growth.</p>
                </div>
                <div className="feature-card">
                    <h3>Fast Performance</h3>
                    <p>Best practices baked into every layer.</p>
                </div>
            </div>
        </section>
    );
}