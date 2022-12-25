import React from "react";
import Image from "next/image";

export default function DateAuthor(props) {
  return (
    <>
      <div className="container">
      <div className="autor">
          <Image
            src={props.authorAvatar}
            className="avatar"
            alt={"Avatar de " + props.nameAvatar}
            width={25}
            height={25}
          ></Image>
        </div>
        <span className="name">{props.nameAvatar}</span>
        <time
          className="datePublished"
          itemProp="datePublished"
          dateTime={props.dateTime}
        >
          {props.date}
        </time>
      </div>
      <style jsx global>{`
        .avatar {
          border-radius: 50%;
        }
      `}</style>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
        }
        .container .name {
          margin-left: 0.5em;
        }
        .datePublished {
          margin-right: 0.5em;
        }
         
           .container .name::after {
          content: "|";
        } 
        
      `}</style>
    </>
  );
}
