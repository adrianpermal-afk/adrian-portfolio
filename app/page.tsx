export default function Home() {
  return (
    <main style={{ background: "black", color: "white", minHeight: "100vh", padding: "40px" }}>
      <h1>Adrian J. Permal — Director / Producer</h1>
      <p>Cinematic storytelling through film, music, and culture.</p>

      <div style={{ marginTop: "40px", maxWidth: "900px" }}>
        <iframe
          src="https://player.vimeo.com/video/1103941233"
          width="100%"
          height="500"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </main>
  );
}
