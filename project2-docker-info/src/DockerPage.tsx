import { useState } from "react";
import "./DockerPage.css";

interface DockerTipsResponse {
  steps: string[];
}

const DockerPage: React.FC = () => {
  const [tips, setTips] = useState<string[]>([]);
  const [stopCommand, setStopCommand] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const backendHost = import.meta.env.VITE_BACKEND_HOST;
  const backendPort = import.meta.env.VITE_BACKEND_PORT;

  const getTipsEndpoint = `http://${backendHost}:${backendPort}`;

  //Extra Credit Option. Add the correct endpoint here. You may use .env.local variable if you want to.
  const stopEndpoint = "";

  const getTips = async () => {
    setLoading(true);
    setStopCommand(null);

    try {
      const res = await fetch(`${getTipsEndpoint}/success`);
      const data: DockerTipsResponse = await res.json();
      setTips(data.steps);
    } catch (err) {
      console.error(err);
      setTips(["Error: Could not load tips. Check your backend container."]);
    } finally {
      setLoading(false);
    }
  };

  const getStopCommand = async () => {
    if (!stopEndpoint) {
      setStopCommand("VITE_STOP_ENDPOINT missing in .env.test (extra credit).");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(stopEndpoint);
      const text = await res.text();
      setStopCommand(text);
    } catch (err) {
      console.error(err);
      setStopCommand("Error fetching stop command.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="docker-container">
      <h1 className="docker-title">🐳 Docker Info App</h1>
      <p className="docker-subtitle">
        Learn how to build containers like a pro.
      </p>

      <div className="docker-buttons">
        <button className="docker-btn" onClick={getTips} disabled={loading}>
          {loading ? "Loading..." : "Get Docker Tips"}
        </button>

        <button
          className="docker-btn-secondary"
          onClick={getStopCommand}
          disabled={loading}
        >
          Extra Credit: Get Stop Command
        </button>
      </div>

      <div className="docker-results">
        {tips.length > 0 && (
          <div className="tips-grid">
            {tips.map((t, i) => (
              <div key={i} className="tip-card">
                <span className="tip-number">#{i + 1}</span>
                <p>{t}</p>
              </div>
            ))}
          </div>
        )}

        {stopCommand && (
          <div className="stop-box">
            <h3>Stop All Containers Command</h3>
            <pre>{stopCommand}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default DockerPage;
