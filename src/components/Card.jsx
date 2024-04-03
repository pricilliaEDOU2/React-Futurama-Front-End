import "../assets/Styles/card.css";

const Cards = ({ data }) => {
  return (
    <div className="card">
      <div className="card-front">
        <img className="card-image" src={data.images.main} alt="" />
        <p>{data.name.first + " " + data.name.middle + " " + data.name.last}</p>
      </div>
      <div className="card-back">
        <img className="card-image" src={data.images.main} alt="" />
        <div className="card-back-text">
          {data.age ? <p>Age : {data.age}</p> : ""}
          {data.gender ? <p>Gender : {data.gender}</p> : ""}
          {data.species ? <p>Species :{data.species}</p> : ""}
          {data.occupation ? <p>{data.occupation}</p> : ""}
        </div>
      </div>
    </div>
  );
};
export default Cards;