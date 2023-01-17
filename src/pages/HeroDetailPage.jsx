import { useState, useMemo, memo } from "react";
import { Navigate, useParams, useNavigate, Link } from "react-router-dom";
import { useHeroes } from "../context/HeroesContext";
import {
  getHeroById,
  getHeroImage,
  getComicsByThird,
} from "../helpers/getHeroById";
import { toogleFavorite, existInFavorites } from "../helpers/localFavorite";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { heroesLocalStorage } from "../helpers/localFavorite";

/**
 *  Component HeroDetailPage to show the detail of the hero
 * @component
 * @param {number} heroId - The id of the hero.
 * @param {func} navigate - The function to navigate.
 * @param {object} heroes - The heroes.
 * @param {object} hero - The hero.
 * @param {func} onNavigateBack - The function to navigate back.
 * @param {string} heroImageUrl - The hero image url.
 * @param {array} heroThirdComics - The hero third comics.
 * @param {func} onClickFavorite - The function to click favorite.
 * @param {boolean} isFavorite - The boolean to know if the hero is favorite.
 * @param {func} setIsFavorite - The function to set the favorite.
 * @param {func} toogleFavorite - The function to toogle the favorite.
 * @param {func} existInFavorites - The function to know if the hero is favorite.
 * @param {func} heroesLocalStorage - The function to get the heroes from local storage.
 * @param {func} getHeroById - The function to get the hero by id.
 * @param {func} getHeroImage - The function to get the hero image.
 * @param {func} getComicsByThird - The function to get the comics by third.
 * @param {func} useParams - The function to get the params.
 * @param {func} useNavigate - The function to navigate.
 * @param {func} useState - The function to use state.
 * @param {func} useEffect - The function to use effect.
 * @param {func} Link - The function to link.
 * @param {func} AiOutlineHeart - The function to outline heart.
 * @param {func} AiFillHeart - The function to fill heart.
 * 
 * @returns {JSX.Element} - A JSX element that displays the detail of the hero.
 * @example
 *  
 * const isFavorite = true;
 * const setIsFavorite = () => {};
 * const toogleFavorite = () => {};
 * const existInFavorites = () => {};
 * const heroesLocalStorage = () => {};
 * const getHeroById = () => {};
 * const getHeroImage = () => {};
 * const getComicsByThird = () => {};
 * 
 * const heroId = 1;
 * const navigate = () => {};
 * const heroes = [{ id: 1, name: 'superman' }];
 * const hero = { id: 1, name: 'superman' };
 * const onNavigateBack = () => {};
 * const heroImageUrl = 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087';
 
 * const heroThirdComics = [{ id: 1, name: 'superman' }];
 * return (
 * <HeroDetailPage  />
 * )
 */

const HeroDetailPage = memo(() => {
  const [isFavorite, setIsFavorite] = useState(
    existInFavorites(+useParams().heroId)
  );

  const { heroId } = useParams();
  const navigate = useNavigate();

  const { heroes } = useHeroes();

  const hero = useMemo(() => getHeroById(+heroId, heroes), [heroId, heroes]);

  const heroLocalStorage = heroesLocalStorage();

  if (!hero) {
    return <Navigate to="/" />;
  }

  const onNavigateBack = () => {
    navigate(-1);
  };

  const heroImageUrl = getHeroImage(hero.thumbnail);

  const heroThirdComics = getComicsByThird(hero);

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    toogleFavorite(hero.id);
  };

  const myImageStyle = { width: "250px", height: "250px" };

  return (
    <>
      <div className="row mt-5" style={{ height: "100vh" }}>
        <div className="col-4">
          <img style={myImageStyle} srcSet={heroImageUrl} alt={hero.name} />
        </div>
        <div className="col-8">
          {heroLocalStorage.length > 5 ? (
            <>
              <div>Maximum of favorites added</div>
              <Link to="/favorites">Go to favorites to delete your heroes</Link>
            </>
          ) : (
            <div style={{ width: "80px" }} onClick={onClickFavorite}>
              {isFavorite ? (
                <AiFillHeart className="icon-heart" />
              ) : (
                <AiOutlineHeart className="icon-heart" />
              )}
            </div>
          )}

          <h3>{hero.name}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>description:</b> :
              {hero.description
                ? hero.description
                : "sorry we will soon have the description"}
            </li>
            <li className="list-group-item">
              <b>Comics:</b> {hero.comics.available}
            </li>
            <b>Comics:</b>
            {heroThirdComics.map((comic, index) => {
              return (
                <li key={index} className="list-group-item">
                  {comic}
                </li>
              );
            })}
          </ul>

          <button className="btn btn-outline-info" onClick={onNavigateBack}>
            Back
          </button>
        </div>
      </div>
    </>
  );
});

export default HeroDetailPage;
