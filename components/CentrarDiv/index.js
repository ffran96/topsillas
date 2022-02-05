export default function index({ children }) {
  return (
    <>
      <div className="centrar">{children}</div>

      <style jsx>{`
        .centrar {
          display: grid;
          place-content: center;
          min-height: 100vh;
        }
      `}</style>
    </>
  );
}
