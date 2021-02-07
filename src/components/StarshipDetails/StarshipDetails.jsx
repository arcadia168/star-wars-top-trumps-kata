import './StarshipDetails.css';

function StarshipDetails(props) {
    const { hyperdriveRating } = props;

    //TODO: Show other details props from the API, later, with unit tests.
    return (
      <div className="starship-details" data-testid="starship-details">
        <h1>Hyperdrive rating is: {hyperdriveRating}</h1>
      </div>
    );
};

export default StarshipDetails;
