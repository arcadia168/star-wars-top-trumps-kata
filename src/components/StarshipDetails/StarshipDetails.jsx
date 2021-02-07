import './StarshipDetails.css';

function StarshipDetails(props) {
    const { hyperdriveRating } = props;

    //TODO: Show other details props from the API, later, with unit tests.
    return (
      <div className="starship-details" data-testid="starship-details">
        <p>Hyperdrive rating is: {hyperdriveRating}</p>
      </div>
    );
};

export default StarshipDetails;
