const index = (props) => {
  return (
    <>
      <div className="buttom">
        <a href={props.url} rel="nofollow noreferrer" target="_blank">
          <i class="fas fa-tag" />
          {props.label}
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
          background-color: #c0392b;
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
