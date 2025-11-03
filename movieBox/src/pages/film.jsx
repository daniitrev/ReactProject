import "./film.css";
import { icons } from "../assets/index";
import bugonia from "../assets/bugonia.jpg";

function Statistics({ icon, text }) {
  return (
    <>
      <div className="flex gap-2">
        <img src={icons[icon]} alt="" className="w-5 h-5" />
        <span>{text}</span>
      </div>
    </>
  );
}

function Actors({ name, lastName }) {
  return (
    <>
      <button className="bg-[rgb(77,77,90)] w-auto h-auto text-[12px] px-2 rounded-xs">
        {name} {lastName}
      </button>
    </>
  );
}

const Film = () => {
  const cast = [
    { name: "Emma", lastName: "Stone" },
    { name: "Emma", lastName: "Stone" },
    { name: "Emma", lastName: "Stone" },
    { name: "Emma", lastName: "Stone" },
  ];

  return (
    <>
      <main>
        {/* Главная обёртка layout (сетка с левой и правой панелью) */}
        <div className="wrapper ">
          {/*  Левая панель (постер, статистика, кнопки) */}
          <div className="leftPannel flex flex-col items-center gap-4 text-white">
            <img src={bugonia} alt="" className="rounded-[5px]" />
            <div className="flex gap-3 items-center text-xs">
              <Statistics icon="views" text="20k" />
              <Statistics icon="comments" text="12k" />
              <Statistics icon="heart" text="12k" />
            </div>

            {/* Блок "Where to Watch" */}

            <div className="w-[250px] flex flex-col rounded-xs">
              {/* Header контейнер */}
              <div className="flex justify-between p-2 items-center bg-gray-500/30 rounded-xs">
                <span className="uppercase text-xs">Where to watch</span>
                <div>
                  <img src="" alt="" />
                  <a href="">Trailer</a>
                </div>
              </div>

              {/* Верхний контейнер */}
              <div className="flex px-2 items-center h-11 border border-gray-500/30">
                <span className="text-xs">Amazon US</span>
                <span className="bg-gray-600 text-[10px] ml-2 px-2 py-1 rounded-xs">
                  DISC
                </span>
              </div>

              {/* Средний контейнер */}
              <div className="flex items-center text-xs h-11 px-2 border border-gray-500/30">
                <p>
                  Go
                  <span className="bg-orange-400 text-[10px] ml-2 px-2 py-1 rounded-xs">
                    PRO
                  </span>{" "}
                  to customizr this list
                </p>
              </div>

              {/* Нижний контейнер */}
              <div className="flex items-center justify-between text-xs  h-11 border border-gray-500/30 rounded-b-[5px] px-2">
                <a href="">All services</a>
                <span>JustWatch</span>
              </div>
            </div>
          </div>

          {/* Правая панель (описание, актёры, рейтинг) */}
          <div className="rightPannel flex flex-col gap-5 text-white">
            {/* Заголовок */}
            <div className="flex gap-3 items-center">
              <h1 className="text-2xl">Bugonia</h1>
              <a href="#" className="text-xs">
                2025
              </a>
              <p className="text-x">
                Directied by <span>Yourgos Lanthimos</span>
              </p>
            </div>
            <div className="flex ">
              <section className="flex flex-2 flex-col gap-4">
                {/* Информация */}
                <span className="uppercase text-xs">
                  It all starts with something magnificent.
                </span>

                <p className="w-[350px] text-[16px]">
                  Two conspiracy obsessed young men kidnap the high-powered CEO
                  of a major company, convinced that she is an alien intent on
                  destroying planet Earth.
                </p>

                {/* Детали фильма */}
                <div className="flex flex-col gap-2 mt-20">
                  <ul className="flex gap-3 text-green-500">
                    <li>Cast</li>
                    <li>Crew</li>
                    <li>Details</li>
                    <li>Genres</li>
                    <li>Releases</li>
                  </ul>

                  {/* Актеры */}
                  <div className="flex flex-wrap gap-2 max-w-3xl">
                    {cast.map((actor, i) => (
                      <Actors
                        key={i}
                        name={actor.name}
                        lastName={actor.lastName}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs mt-3.5">
                    118 mins More at
                    <span className="bg-gray-700 p-1 ml-2 rounded-xs">
                      IMDB
                    </span>
                    <span className="bg-gray-700 p-1 ml-2 rounded-xs">
                      TMDB
                    </span>
                  </p>
                </div>
              </section>

              <section className="flex flex-1 flex-col w-full gap-4">
                <div className="flex flex-col gap-px w-[250px] text-center justify-center text-xs">
                  <a className=" bg-gray-600 p-2 rounded-xs ">
                    Sign in to log, rate or review
                  </a>
                  <p className=" bg-gray-600 p-2 rounded-xs  ">Share</p>
                </div>

                <div className="flex justify-between text-xs border-b pb-1 border-gray-400/30 ">
                  <p className="uppercase">Ratings</p>
                  <span>501 FANS</span>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Film;
