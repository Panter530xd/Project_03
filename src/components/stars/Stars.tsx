interface Props {
  raiting: number;
  totalRatings: number;
}

const Stars = ({ raiting, totalRatings }: Props) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.round(raiting / totalRatings)) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    } else {
      stars.push(<i key={i} className="far fa-star"></i>);
    }
  }
  return <>{stars}</>;
};

export default Stars;
