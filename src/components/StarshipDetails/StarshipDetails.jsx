import './StarshipDetails.css';

function StarshipDetails(props) {
    const { hyperdrive_rating } = props;

    //TODO: Show other details props from the API, later, with unit tests.
    return (
      <div className="StarshipDetails" data-testid="starship-details">
        <h1>Hyperdrive rating is: {hyperdrive_rating}</h1>
      </div>
    );
};

export default StarshipDetails;
