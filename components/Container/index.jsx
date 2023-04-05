export default function index({ children }) {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>{`
        .container {
          margin: 0;
          padding: 1em;
          background-color: #ffffff;
          min-height: 100vh;
        }

        @media only screen and (min-width: 600px) {
          .container {
            max-width: 472px;
            margin: auto;
          }
        }

        @media only screen and (min-width: 768px) {
          .container {
            max-width: 640px;
          }
        }

        @media only screen and (min-width: 990px) {
          .container {
            max-width: 862px;
          }
        }

        @media only screen and (min-width: 1200px) {
          .container {
            max-width: 1072px;
            background-color: #ffffff;
          }
        }

        @media only screen and (min-width: 1600px) {
          .container {
            max-width: 1200px;
            box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
          }
        }
      `}</style>

      <style jsx global>{`
        .container p {
          font-size: 18px;
          line-height: 32px;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
