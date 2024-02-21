

const PerfumeCard = (props) => {
    return (
      <div className="perfume-card">
        <img id="imagep" src={props.img} alt={props.title} />
        <div id="desc">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        </div>
      </div>
    );
  };

  export default PerfumeCard;