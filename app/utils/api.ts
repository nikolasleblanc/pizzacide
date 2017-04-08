interface ITeam {
  id: number,
  name: string,
  eliminated: boolean
};

interface ISeries {
  id: number,
  record: Array<IRecord>,
  completed: boolean
};

interface IRecord {
  id: number,
  team: ITeam,
  wins: number,
  round: IRound
};

interface IRound {
  id: number,
  completed: boolean
};

interface IUser {

}

//1949423728625116
//82b4c92d5a3f9cb0d3397683ce7c4abb

// express sens leafs round 1 victory in a 4-2 series
/*
const myDemoSeries: ISeries = {
  id: 1,
  record: [
    <IRecord>{
      id: 1,
      team: <ITeam>{
        id: 1,
        name: 'Ottawa Senators',
        eliminated: false
      },
      wins: 4,
      round: <IRound>{
        id: 1,
        completed: false
      }
    },
    <IRecord>{
      id: 2,
      team: <ITeam>{
        id: 2,
        name: 'Toronto Maple Leafs',
        eliminated: true
      },
      wins: 2,
      round: <IRound>{
        id: 1,
        completed: false
      }
    }
  ],
  completed: true
};
*/

export const teams: Array<ITeam> = [
  {
    id: 1,
    name: 'Ottawa Senators',
    eliminated: false
  },
  {
    id: 2,
    name: 'Montreal Canadiens',
    eliminated: false
  },
  {
    id: 3,
    name: 'Edmonton Oilers',
    eliminated: false
  },
  {
    id: 4,
    name: 'Washington Capitals',
    eliminated: false
  },
  {
    id: 5,
    name: 'New York Rangers',
    eliminated: false
  },
  {
    id: 6,
    name: 'Columbus Blue Jackets',
    eliminated: false
  },
  {
    id: 7,
    name: 'Boston Bruins',
    eliminated: false
  },
  {
    id: 8,
    name: 'Montreal Canadiens',
    eliminated: false
  },
  {
    id: 9,
    name: 'Chicago Blackhawks',
    eliminated: false
  },
  {
    id: 10,
    name: 'Minnesota Wild',
    eliminated: false
  },
  {
    id: 11,
    name: 'St. Louis Blues',
    eliminated: false
  },
  {
    id: 12,
    name: 'Anaheim Ducks',
    eliminated: false
  },
  {
    id: 13,
    name: 'San Jose Sharks',
    eliminated: false
  },
  {
    id: 14,
    name: 'Calgary Flames',
    eliminated: false
  },
  {
    id: 15,
    name: 'Nashville Predators',
    eliminated: false
  },
  {
    id: 16,
    name: 'Toronto Maple Leafs',
    eliminated: false
  }
];

export const rounds = 4;
export const games = 7;
export const currentRound = 1;
