import React from "react";

export default function Card( { img, descripcion, subtitulo } ) {
  return (
    <div class="proyecto">
      <div class="overlay"></div>
      <img src={img} alt="" />
      <div class="info">
        <h4>{descripcion}</h4>
        <p>{subtitulo}</p>
      </div>
    </div>
  );
}


