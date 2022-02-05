export default function index({ children }) {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>{`
        .container {
          margin: 0;
          padding: 1em;
          background-color: #ffffff;
          min-height: 800px;
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
            padding: 2em 3em;
          }
        }

        @media only screen and (min-width: 1600px) {
          .container {
            max-width: 1200px;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #ebedef;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
