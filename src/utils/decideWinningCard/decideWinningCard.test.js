import decideWinningCard from './decideWinningCard';

describe('Decide Winning Card Utility', () => {
    describe('When deciding between starship type cards', () => {
        it('Should decide that the card with the highest hyperdrive rating is the winner', () => {
            const starships = [
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

            const winningCard = decideWinningCard(starships, 'starships');

            expect(winningCard).toEqual({
                name: 'Death Star',
                hyperdriveRating: '4.0'
            });
        });
    });

    describe('When deciding between different character type cards', () => {
        it('Should declare the card with the largest height as the winner', () => {
            const characters = [
                {
                    "name": "Luke Skywalker",
                    "height": "172",
                    "mass": "77",
                    "hair_color": "blond",
                    "skin_color": "fair",
                    "eye_color": "blue",
                    "birth_year": "19BBY",
                    "gender": "male",
                    "homeworld": "http://swapi.dev/api/planets/1/",
                    "films": [
                        "http://swapi.dev/api/films/1/",
                        "http://swapi.dev/api/films/2/",
                        "http://swapi.dev/api/films/3/",
                        "http://swapi.dev/api/films/6/"
                    ],
                    "species": [],
                    "vehicles": [
                        "http://swapi.dev/api/vehicles/14/",
                        "http://swapi.dev/api/vehicles/30/"
                    ],
                    "starships": [
                        "http://swapi.dev/api/starships/12/",
                        "http://swapi.dev/api/starships/22/"
                    ],
                    "created": "2014-12-09T13:50:51.644000Z",
                    "edited": "2014-12-20T21:17:56.891000Z",
                    "url": "http://swapi.dev/api/people/1/"
                },
                {
                    "name": "C-3PO",
                    "height": "167",
                    "mass": "75",
                    "hair_color": "n/a",
                    "skin_color": "gold",
                    "eye_color": "yellow",
                    "birth_year": "112BBY",
                    "gender": "n/a",
                    "homeworld": "http://swapi.dev/api/planets/1/",
                    "films": [
                        "http://swapi.dev/api/films/1/",
                        "http://swapi.dev/api/films/2/",
                        "http://swapi.dev/api/films/3/",
                        "http://swapi.dev/api/films/4/",
                        "http://swapi.dev/api/films/5/",
                        "http://swapi.dev/api/films/6/"
                    ],
                    "species": [
                        "http://swapi.dev/api/species/2/"
                    ],
                    "vehicles": [],
                    "starships": [],
                    "created": "2014-12-10T15:10:51.357000Z",
                    "edited": "2014-12-20T21:17:50.309000Z",
                    "url": "http://swapi.dev/api/people/2/"
                },
                {
                    "name": "R2-D2",
                    "height": "96",
                    "mass": "32",
                    "hair_color": "n/a",
                    "skin_color": "white, blue",
                    "eye_color": "red",
                    "birth_year": "33BBY",
                    "gender": "n/a",
                    "homeworld": "http://swapi.dev/api/planets/8/",
                    "films": [
                        "http://swapi.dev/api/films/1/",
                        "http://swapi.dev/api/films/2/",
                        "http://swapi.dev/api/films/3/",
                        "http://swapi.dev/api/films/4/",
                        "http://swapi.dev/api/films/5/",
                        "http://swapi.dev/api/films/6/"
                    ],
                    "species": [
                        "http://swapi.dev/api/species/2/"
                    ],
                    "vehicles": [],
                    "starships": [],
                    "created": "2014-12-10T15:11:50.376000Z",
                    "edited": "2014-12-20T21:17:50.311000Z",
                    "url": "http://swapi.dev/api/people/3/"
                },
                {
                    "name": "Darth Vader",
                    "height": "202",
                    "mass": "136",
                    "hair_color": "none",
                    "skin_color": "white",
                    "eye_color": "yellow",
                    "birth_year": "41.9BBY",
                    "gender": "male",
                    "homeworld": "http://swapi.dev/api/planets/1/",
                    "films": [
                        "http://swapi.dev/api/films/1/",
                        "http://swapi.dev/api/films/2/",
                        "http://swapi.dev/api/films/3/",
                        "http://swapi.dev/api/films/6/"
                    ],
                    "species": [],
                    "vehicles": [],
                    "starships": [
                        "http://swapi.dev/api/starships/13/"
                    ],
                    "created": "2014-12-10T15:18:20.704000Z",
                    "edited": "2014-12-20T21:17:50.313000Z",
                    "url": "http://swapi.dev/api/people/4/"
                },
            ];

            const winningCard = decideWinningCard(characters, 'characters');

            expect(winningCard).toEqual({
                "name": "Darth Vader",
                "height": "202",
            },);
        });
    });
});
