/** Interlocking U & S monogram with a lotus crest, drawn in the lotus theme colours. */
export function Monogram({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      role="img"
      aria-label="Utsav and Srishti monogram"
    >
      <circle cx="100" cy="100" r="94" className="stroke-gold" strokeWidth="2.5" />
      <circle
        cx="100"
        cy="100"
        r="84"
        className="stroke-ornament"
        strokeWidth="1"
        strokeDasharray="2 5"
      />
      {/* lotus crest */}
      <g transform="translate(100 34)">
        {[-40, 0, 40].map((angle) => (
          <ellipse
            key={angle}
            cx="0"
            cy="-6"
            rx="6"
            ry="13"
            transform={`rotate(${angle})`}
            className="fill-accent"
          />
        ))}
        <circle cy="2" r="3" className="fill-gold" />
      </g>
      {/* U and S, interlocked */}
      <text
        x="78"
        y="132"
        textAnchor="middle"
        className="font-script fill-accent-deep"
        fontSize="96"
      >
        U
      </text>
      <text
        x="122"
        y="158"
        textAnchor="middle"
        className="font-script fill-gold"
        fontSize="96"
      >
        S
      </text>
    </svg>
  );
}
