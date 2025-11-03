import PosterCard from "../components/poster";
import FeatureCard from "../components/featureCard";
import FilmList from "../components/filmList";
import Comments from "../components/comment";
import AppleIcon from "../assets/icons/apple.svg?react";
import AndroidIcon from "../assets/icons/android.svg?react";
import { Link } from "react-router-dom";
import { POSTERS, FLIST, FCARD, COMMENTS } from "../data/main";

const Home = () => {
  return (
    <>
      <div className="bg-[#121318]">
        <div className="flex flex-col gap-9">
          <div className="flex h-[90vh] justify-center items-end">
            <div className="flex flex-col text-center items-center gap-10 p-7">
              <h1 className="inline-block text-[2rem] text-white">
                Track films you’ve watched. <br /> Save those you want to see.{" "}
                <br /> Tell your friends what’s good.
              </h1>
              <button className="bg-green-600 w-[200px] h-10 text-1xl text-white font-bold rounded-[5px]">
                Get started - it's free
              </button>

              <div className="flex gap-2 items-center">
                <p className="text-[#a2a2a2]">
                  The social network for film lovers. Also availabel on
                </p>
                <div className="flex gap-2">
                  <AppleIcon className="w-6 h-6" aria-hidden />

                  <AndroidIcon className="w-6 h-6" aria-hidden />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-between items-center">
            {POSTERS.map((poster) => (
              <Link to="/film">
                <PosterCard
                  key={poster.id}
                  img={poster.img}
                  watches={poster.watches}
                  likes={poster.likes}
                />
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 items-start">
            <p className="uppercase text-[rgb(195,201,214)] text-[16px]">
              LetterBoxd lets you...
            </p>
            <div className="grid w-full gap-2 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
              {FCARD.map((card) => (
                <FeatureCard
                  key={card.id}
                  img={card.img}
                  description={card.description}
                  className="w-full h-full"
                />
              ))}
            </div>
          </div>

          {/* <section className=" flex flex-col gap-1 text-[rgb(195,201,214)] uppercase ">
            <p className="text-xs">SCAD Savannah Film Festival 2025</p>
            <ul className="flex justify-between gap-2 border-t pt-2 pb-2 border-gray-200/30">
              {FLIST.map((list) => (
                <FilmList key={list.id} image={list.img} />
              ))}
            </ul>
            <p className="text-[18px] capitalize">
              Highlights from the 28th Annual SCAD Savannah Film Festival,
              screening Oct 25–Nov 1, 2025. See the full lineup and follow the
              HQ.
            </p>
          </section> */}
          <section className=" flex flex-col gap-1 text-[rgb(195,201,214)] uppercase text-[16px]">
            <p>Just Reviewed…</p>
            <ul className="flex justify-between gap-2 border-t pt-2 border-gray-200/30">
              {FLIST.map((list) => (
                <FilmList key={list.id} image={list.img} />
              ))}
            </ul>
          </section>

          <article className="flex flex-col gap-3 text-center text-[rgb(195,201,214)] ">
            <h2 className="text-3xl">
              Write and share reviews. Compile your own lists. Share your life
              in film.
            </h2>
            <p>
              Below are some popular reviews and lists from this week.
              <span>Sign up</span> to create your own.
            </p>
          </article>

          <article className="flex flex-col gap-2">
            <div className="flex items-center justify-between uppercase text-[rgb(195,201,214)]">
              <span className="">Popular reviews this week</span>
              <span className="text-xs">More</span>
            </div>
            {COMMENTS.map((comment) => (
              <Comments
                key={comment.id}
                image={comment.image}
                title={comment.title}
                year={comment.year}
                user_name={comment.user_name}
                rate={comment.rate}
                comment={comment.comment}
                like={comment.like}
              />
            ))}
          </article>
        </div>
      </div>
    </>
  );
};
export default Home;
