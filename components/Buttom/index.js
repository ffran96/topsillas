import Image from "next/image"

const index = ({url,label}) => {
  return (
    <>
      <div className="buttom">
        <a href={url} rel="nofollow noreferrer" target="_blank">
          <Image
            src="/tag-solid.svg"
            alt="tag del butón"
            width="16"
            height="16"
          />
          {label}
        </a>
      </div>
      <style jsx>{`
        .buttom {
          margin-top: 35px;
          display: flex;
          justify-content: center;
        }

        .buttom a {
          padding: 15px;
          color: #ffffff;
          background-color: #E84D0E;
          border-radius: 15px;
          font-weight: 700;
          cursor: pointer;
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .buttom a:hover {
          filter: opacity(85%);
        }
      `}</style>
    </>
  );
};

export default index;
