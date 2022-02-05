function URL(title) {
  let URL = title.toLowerCase();
  URL = URL.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  URL = "/" + URL.split(" ").join("-");
  return URL;
};
function SRC(title) {
  let SRC = title.toLowerCase();
  SRC = SRC.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  SRC = "/" + SRC.split(" ").join("-") + ".jpg";
  return SRC;
};

function ALT(title) {
  let ALT = title.toLowerCase();
  return ALT;
};

export {
  URL,
  SRC,
  ALT,
};

