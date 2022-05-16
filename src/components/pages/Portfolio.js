import React from 'react';
// import screenshot_forecast from '../../assets/images/Screenshot-ForecastFilms.jpg';
// import screenshot_gameporium from '../../assets/images/Screenshot-Gameporium.jpg';
// import mountain_image from '../../assets/images/mountain-image.jpg';

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-content">
      <h2>Portfolio</h2>
      <div className="mainContainer">
        <div className="smallContainer forcastFilms">
          <div>
            <a href="https://git6548.github.io/ForecastFilms/">
              Forecast Films Delpoyed Site
            </a>
            <a href="https://github.com/git6548/ForecastFilms">Forecast Films Repo</a>
          </div>
        </div>
        <div className="smallContainer gameporium">
          <div>
            <a href="https://morning-lowlands-91275.herokuapp.com/">
              GamePorium Deployed Site
            </a>
            <a href=" https://github.com/git6548/Gameporium">Gameporium Repo</a>
          </div>
        </div>
        {/* <div className="smallContainer project3">
          <div>
            <a href="#">
              Project 3 Deployed Site
            </a>
            <a href="#"> Project 3 Repo
            </a>
          </div>
        </div> */}
      </div>

    </section>
  );
}
