import CategoriasBox from "/components/CategoriasBox";

const index = () => {
  return (
    <>
      <div className="container">
        <CategoriasBox
          link="/post/sillas-gamers"
          src="/silla-gaming.jpg"
          alt="silla gaming"
          title="Sillas para gamers"
          width={151.5}
          height={250}
        />
        <CategoriasBox
          link="/post/sillas-oficina"
          src="/silla-oficina.jpg"
          alt="silla de oficina"
          title="Sillas de oficina"
          width={151.5}
          height={250}
        />
        <CategoriasBox
          link="/post/puffs"
          src="/puff.jpg"
          alt="puff rojo"
          title="Puffs"
          width={238.167}
          height={250}
        />
        <CategoriasBox
          link="/"
          src="/silla-comedor.jpg"
          alt="silla de comedor de diseño"
          title="Sillas de comedor"
          width={151.5}
          height={250}
        />
        <CategoriasBox
          link="/"
          src="/silla-exterior.jpg"
          alt="silla de exterior"
          title="Sillas de exterior"
          width={151.5}
          height={200}
        />
        <CategoriasBox
          link="/"
          src="/taburete.jpg"
          alt="taburete de cocina"
          title="Taburtes para barra/cocina"
          width={210}
          height={250}
        />
        <CategoriasBox
          link="/"
          src="/sillon-masaje.jpg"
          alt="sillon de masaje"
          title="Sillones de masaje"
          width={250}
          height={250}
        />
        <CategoriasBox
          link="/"
          src="/silla-mecedora.jpg"
          alt="silla mecedora"
          title="Sillas mecedoras"
          width={235}
          height={250}
        />
      </div>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1em;
          margin: 2em 40px 5em 40px;
        }

        .box {
          background-color: white;
          border-radius: 15px;
          height: 300px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          flex-direction: column;
          box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }

        .box:hover {
          transform: scale(1.02);
          filter: opacity(75%);
        }

        .image {
          margin: auto;
        }

        .title-box {
          margin: 0 0 10px 10px;
        }

        @media only screen and (min-width: 600px) {
          .container {
            grid-template-columns: repeat(1, 1fr);
          }
        }

        @media only screen and (min-width: 768px) {
          .container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media only screen and (min-width: 990px) {
          .container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media only screen and (min-width: 1200px) {
          .container {
            grid-template-columns: repeat(3, 1fr);
            margin-left: 150px;
            margin-right: 150px;
          }
        }

        @media only screen and (min-width: 1600px) {
          .container {
            grid-template-columns: repeat(4, 1fr);
            margin-left: 250px;
            margin-right: 250px;
          }
        }
      `}</style>
    </>
  );
};

export default index;
