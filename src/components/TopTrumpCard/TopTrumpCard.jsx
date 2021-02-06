function TopTrumpCard(props) {
    const { name } = props;

    return (
      <div className="TopTrumpCard" data-testid="top-trump-card">
          <h1>{name}</h1>
      </div>
    );
};

export default TopTrumpCard;
