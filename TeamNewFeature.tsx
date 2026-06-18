"use client";

export default function TeamNewFeature() {
  return (
    <section className="section feature-lab" id="team-new">
      <div className="section-heading">
        <p>Team New</p>
        <h2>Pulse Lab</h2>
      </div>

      <div className="feature-stage">
        <div className="feature-orbital" aria-hidden="true">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="feature-core">
            <span>Team New</span>
            <strong>Motion engine</strong>
            <small>Tap to wake the glow.</small>
          </div>
          <div className="floating-stat stat-one">1.2x speed</div>
          <div className="floating-stat stat-two">3 states</div>
          <div className="floating-stat stat-three">Live pulse</div>
        </div>

        <div className="feature-copy">
          <p className="feature-lead">
            A Next.js-ready hero module with layered motion, dynamic glow, and reveal states designed for modern landing pages.
          </p>
          <p className="feature-status">
            Drop this component into a Next.js page to reuse the same animated treatment.
          </p>
          <div className="actions">
            <button className="button primary" type="button">
              Ignite Motion
            </button>
            <button className="button secondary" type="button">
              Shift Glow
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
