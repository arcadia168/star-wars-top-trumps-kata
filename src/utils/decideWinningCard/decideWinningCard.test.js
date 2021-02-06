import decideWinningCard from './decideWinningCard';

describe('Decide Winning Card Utility', () => {
    describe('When deciding between starship type cards', () => {
        it('Should decide that the card with the highest hyperdrive rating is the winner', () => {
            const exampleStarshipCardsToCompare = [
                {
                    "name": "Sentinel-class landing craft",
                    "model": "Sentinel-class landing craft",
                    "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",
                    "cost_in_credits": "240000",
                    "length": "38",
                    "max_atmosphering_speed": "1000",
                    "crew": "5",
                    "passengers": "75",
                    "cargo_capacity": "180000",
                    "consumables": "1 month",
                    "hyperdrive_rating": "1.0",
                    "MGLT": "70",
                    "starship_class": "landing craft",
                    "pilots": [],
                    "films": [
                        "http://swapi.dev/api/films/1/"
                    ],
                    "created": "2014-12-10T15:48:00.586000Z",
                    "edited": "2014-12-20T21:23:49.873000Z",
                    "url": "http://swapi.dev/api/starships/5/"
                },
                {
                    "name": "Death Star",
                    "model": "DS-1 Orbital Battle Station",
                    "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
                    "cost_in_credits": "1000000000000",
                    "length": "120000",
                    "max_atmosphering_speed": "n/a",
                    "crew": "342,953",
                    "passengers": "843,342",
                    "cargo_capacity": "1000000000000",
                    "consumables": "3 years",
                    "hyperdrive_rating": "4.0",
                    "MGLT": "10",
                    "starship_class": "Deep Space Mobile Battlestation",
                    "pilots": [],
                    "films": [
                        "http://swapi.dev/api/films/1/"
                    ],
                    "created": "2014-12-10T16:36:50.509000Z",
                    "edited": "2014-12-20T21:26:24.783000Z",
                    "url": "http://swapi.dev/api/starships/9/"
                },
                {
                    "name": "Star Destroyer",
                    "model": "Imperial I-class Star Destroyer",
                    "manufacturer": "Kuat Drive Yards",
                    "cost_in_credits": "150000000",
                    "length": "1,600",
                    "max_atmosphering_speed": "975",
                    "crew": "47,060",
                    "passengers": "n/a",
                    "cargo_capacity": "36000000",
                    "consumables": "2 years",
                    "hyperdrive_rating": "2.0",
                    "MGLT": "60",
                    "starship_class": "Star Destroyer",
                    "pilots": [],
                    "films": [
                        "http://swapi.dev/api/films/1/",
                        "http://swapi.dev/api/films/2/",
                        "http://swapi.dev/api/films/3/"
                    ],
                    "created": "2014-12-10T15:08:19.848000Z",
                    "edited": "2014-12-20T21:23:49.870000Z",
                    "url": "http://swapi.dev/api/starships/3/"
                },
            ]

            const winningCardName = decideWinningCard(exampleStarshipCardsToCompare, 'starship');

            expect(winningCardName).toEqual('Death Star');
        });
    });

    //TODO: When deciding between character type cards.
});
