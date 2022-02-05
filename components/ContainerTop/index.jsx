export default function index({ children }) {
  return (
    <>
      <div className="top">{children}</div>

      <style jsx>{`
        .top {
          margin-bottom: 3em;
        }
      `}</style>
    </>
  );
}
