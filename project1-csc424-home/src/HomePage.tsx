import { useState } from "react";
import "./HomePage.css";

const HomePage: React.FC = () => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div className="csc-container">
      <header className="csc-header">
        <h1>🚀 Welcome to CSC424</h1>
        <p>Your journey into System Administration & Docker begins here.</p>
      </header>

      <section className="csc-content">
        <div
          className={`csc-card ${hover ? "hovered" : ""}`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <h2>🐳 Dockerizing Everything!</h2>
          <p>
            In this final project, you'll learn how to containerize apps, wire
            up reverse proxies, build efficient Dockerfiles, and run everything
            with Docker Compose.
          </p>
        </div>

        <div className="csc-grid">
          <div className="csc-box">🔥 Build Containers</div>
          <div className="csc-box">🧭 Use Nginx Reverse Proxy</div>
          <div className="csc-box">🛠 Manage Multiple Apps</div>
          <div className="csc-box">🚀 Deploy Like a Pro</div>
        </div>
      </section>

      <footer className="csc-footer">
        <p>Made with ❤️ for CSC424 System Administration</p>
      </footer>
    </div>
  );
};

export default HomePage;
