import { ImageResponse } from "next/og";

// Image de partage par défaut (Open Graph / Twitter), appliquée à toutes les
// pages qui ne définissent pas la leur. Carte de marque CSX (aucun visuel
// dédié n'étant fourni, on reprend l'identité : dégradé + wordmark).
export const alt =
  "CSX Telecom — Opérateur télécom indépendant pour les entreprises";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background:
            "linear-gradient(135deg, #07076a 0%, #0d0da8 55%, #1515dc 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 88, fontWeight: 800, letterSpacing: "-3px" }}>
          CSX Telecom
        </div>
        <div style={{ display: "flex", fontSize: 42, fontWeight: 600, color: "#29abe2", marginTop: 12 }}>
          Opérateur télécom indépendant
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "rgba(255,255,255,0.88)", marginTop: 28 }}>
          Téléphonie IP · VoIP · Internet Pro · Agents IA
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "rgba(255,255,255,0.70)", marginTop: 44 }}>
          Opérateur déclaré ARCEP — Cahors, Occitanie & Pays Basque
        </div>
      </div>
    ),
    { ...size }
  );
}
