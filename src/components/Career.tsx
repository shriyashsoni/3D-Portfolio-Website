import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5><a href="https://www.apnacounsellor.in" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>Apna Counsellor ↗</a></h5>
              </div>
              <h3>2024–NOW</h3>
            </div>
            <p>
              AI-driven EdTech platform for student career counseling and university admissions. Democratized guidance making it affordable (₹250-₹1000), assisting 6,000+ students in 2 years.
              <br/><br/>
              <span style={{color: '#ffd700'}}>Highlights:</span> Represented at MIT Start 2026, IIT Bombay Finalist, Vibecon (by Y Combinator & Emergent).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5><a href="https://apnacoding.site" target="_blank" rel="noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>Apna Coding ↗</a></h5>
              </div>
              <h3>2024–NOW</h3>
            </div>
            <p>
              Web3 open-source layer and Ethereum launchpad securing funds & mentorship for ecosystem projects. Built a global community of 20,000+ developers across India, Dubai, London, and the USA.
              <br/><br/>
              <span style={{color: '#ffd700'}}>Highlights:</span> 50+ Web3 partnerships. Represented at Dubai Function One, India Blockchain Week, and ETH Denver USA.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>Brixs</h5>
              </div>
              <h3>2025–NOW</h3>
            </div>
            <p>
              Web3 AI Agent platform for generating, auditing, and securely deploying smart contracts on-chain. Integrates leading models (Claude, OpenAI, Gemini) to automate Web3 security workflows.
              <br/><br/>
              <span style={{color: '#ffd700'}}>Highlights:</span> Secured 10-20+ ecosystem partnerships. Targeting full platform launch in late 2026.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
