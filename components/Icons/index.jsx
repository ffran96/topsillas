const Lupa = () => (
  <svg
    viewBox="0 0 24 24"
    alt= "buscar"
    style={{
      width: "25px",
      height: "25px",
    }}
  >
    <g>
      <path d="m20.87 20.17-5.59-5.59A6.956 6.956 0 0 0 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7a6.995 6.995 0 0 0 11.58 5.29l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
    </g>
  </svg>
);

const Arrow = (props) => (
  <svg
    aria-hidden="true"
    data-prefix="fas"
    data-icon="sort-down"
    className="svg-inline--fa fa-sort-down fa-w-10"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    {...props}
  >
    <path
      fill="currentColor"
      d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
    />
  </svg>
);

export { Lupa, Arrow };
