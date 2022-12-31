import React from "react";
import "./Header.css";

type Props = {
  handleModeChange: () => void;
  setMode: boolean;
};

export default function Header({
  handleModeChange,
  setMode,
}: Props): JSX.Element {
  return (
    <section className="header">
      <div className="mode-left white-text">
        <ul>
          <li>
            <a
              href="./"
              className="link-decoration"
              style={{
                color: setMode
                  ? "var(--light-text-color)"
                  : "var(--dark-text-color)",
              }}
            >
              Home
              <span className="icon-change">
                <React.Fragment>
                  <span aria-label="Thinking Face">🏘️</span>
                  <span aria-label="Person">🏠</span>
                </React.Fragment>
              </span>
            </a>
          </li>
          <li>
            <a
              href="../portfolio"
              className="link-decoration"
              style={{
                color: setMode
                  ? "var(--light-text-color)"
                  : "var(--dark-text-color)",
              }}
            >
              Portfolio
              <span className="icon-change">
                <React.Fragment>
                  <span aria-label="Hammer">🔨</span>
                  <span aria-label="PaintBrush">🖌️</span>
                </React.Fragment>
              </span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/Edaurd"
              style={{
                color: setMode
                  ? "var(--light-text-color)"
                  : "var(--dark-text-color)",
              }}
            >
              <span
                className="link-decoration"
                style={{
                  color: setMode
                    ? "var(--light-text-color)"
                    : "var(--dark-text-color)",
                }}
              >
                Github
              </span>
              <span className="icon-change">
                <React.Fragment>
                  <span aria-label="OctoHub">🐙</span>
                  <span aria-label="GitCat">😺</span>
                </React.Fragment>
              </span>
            </a>
          </li>
          <li>
            <a
              href="./contact"
              className="link-decoration"
              style={{
                color: setMode
                  ? "var(--light-text-color)"
                  : "var(--dark-text-color)",
              }}
            >
              Contact
              <span className="icon-change">
                <React.Fragment>
                  <span aria-label="Thinking Face">💬</span>
                  <span aria-label="Person">📩</span>
                </React.Fragment>
              </span>
            </a>
          </li>
        </ul>
      </div>
      <button onClick={handleModeChange} className="container-icon">
        {setMode ? (
          <span aria-label="Dark mode icon">🌙</span>
        ) : (
          <span aria-label="Light mode icon">☀️</span>
        )}
      </button>
    </section>
  );
}
