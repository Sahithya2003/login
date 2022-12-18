import React from "react";

export default function Pic() {
  return (
    <div class="height:100vh">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active pb-0">
            <img src="pic.jpeg" className=" h-screen" alt="png" />
          </div>
          {/* <div class="carousel-item  pb-0">
            <img src="pic2.jpeg" className=" h-screen" alt="png2" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
