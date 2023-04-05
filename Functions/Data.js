

const peticion = fetch(
    `${process.env.REST_API}/posts/?per_page=1`
  );

  peticion
  .then((res) => res.json())
  .then(( data ) => {
    const  inf  = data;
    console.log(inf);
    return inf
  })
  .catch(console.warn);



