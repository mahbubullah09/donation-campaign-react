import { Link } from "react-router-dom";

const SingleCard = ({ card }) => {
  const { id, picture, title, category, card_bg, category_bg, text_color } =
    card || {};

  return (
   <div>
    <Link to={`/details/${id}`}>
    <div className=" cursor-pointer max-[330px]:mx-4 max-[380px]:mx-6 mx-14 md:mx-0 ">
      <div style={{ background:card_bg,  color:text_color}} className={`card card-compact  shadow-xl  bg-opacity-10`} >
        <figure>
          <img 
            src={picture}
            alt=""
          />
        </figure>
        <div className="card-body h-32">
        <div className="card-actions  ">
            <h2 style={{ backgroundColor:category_bg }} className= {` py-1 px-2 rounded-md font-semibold`}>{category}</h2>
          </div>
          <h2 style={{color:text_color }} className={`card-title `}>{title}</h2>
          
         
        </div>
      </div>
    </div>
    </Link>
   </div>
  );
};

export default SingleCard;
