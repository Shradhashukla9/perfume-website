

const PerfumeCard = (props) => {
    return (
      <div className="perfume-card">
        <img id="imagep" src={props.image.src} alt={props.product.title} />
        <div id="desc">
        <h2>{props.product.title}</h2>
        <p>{props.price.currencyCode}  {props.price.amount}</p>
        </div>
      </div>
    );
  };

  export default PerfumeCard;