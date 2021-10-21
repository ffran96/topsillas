const index = (props) => {
  return (
    <>
    <buttom>
        <div className="buttom">
          <a
            href={props.url}
            rel="nofollow noreferrer"
            target="_blank"
          >
            {props.label}
          </a>
        </div>
</buttom>

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
                border-radius: 49px;
                font-weight: 600;
                cursor: pointer;
                color: white;
                text-decoration: none;
              }
      
              .buttom a:hover {
                filter: opacity(85%);
              }
      `}</style>

    </>
  )
}

export default index
