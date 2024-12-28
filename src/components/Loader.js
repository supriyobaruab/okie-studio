import React from "react";
import "./Loader.css";
import left from "./Loader/row-1-column-1.png";
import right from "./Loader/row-1-column-2.png";
export default function Loader() {
  return (
    <section className="loading">
      <div className="container d-flex justify-content-center align-item-center">
        <div class="loader">
          <img src={left} alt="left" class="left" />
          <img src={right} alt="right" class="right" />
        </div>
      </div>
    </section>
  );
}
