/** Cold polar HUD chrome (sky / ice) — shared by game HUD and lobby panels. */
export const POLAR_HUD = {
  border: "rgba(147, 51, 234, 0.2)",
  barBorder: "rgba(147, 51, 234, 0.2)",
  barInset: "rgba(168, 85, 247, 0.2)",
  connectorFrom: "rgba(255,255,255,0.2)",
  connectorVia: "rgba(147, 51, 234, 0.2)",
  connectorTo: "rgba(191, 90, 242, 0.2)",
  marker: "#c4b5fd",
  markerRing: "rgba(221, 214, 255, 0.2)",
} as const;

/** Tiny corner L-brackets (sky hairline). Parent should be `relative overflow-hidden`. */
export function HudCornerLs() {
  return null;
}
