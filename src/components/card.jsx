import React from "react";

function Card({data}) {
  return (
    <>
      <section className="flex justify-center">
        <div className="w-60 h-60 rounded-xl">
          <img
            src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
            alt="Giphy"
            className="rounded-t-xl"
          />
          <div className="glass py-4 relative -top-[3.4rem] text-xs  rounded-b-xl z-10">
            <h1 className="font-mono text-white">
              {data.name}-{data.age}
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;
