import { Lupa } from "../Icons";
import { useState } from "react";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!keyword) return;
    
    router.push({
      pathname: "/search",
      query: {
        term: keyword,
      },
    });
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          autoComplete="off"
          type="search"
          value={keyword}
          id="search"
          placeholder="Buscar..."
        />
        <button type="submit">
          <Lupa />
        </button>
      </form>
      <style jsx>{`
        h2 {
          color: white;
        }
        form {
          display: flex;
        }
        input {
          width: 850px;
          height: 40px;
          padding: 0 10px;
          border: 0;
          border-radius: 5px 0px 0px 5px;
        }
        input:focus {
          outline: none !important;
        }
        button {
          width: 50px;
          height: 40px;
          cursor: pointer;
          border: 0;
          border-radius: 0px 5px 5px 0px;
        }
      `}</style>
    </>
  );
}
