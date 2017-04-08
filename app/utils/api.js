"use strict";
;
;
;
;
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
exports.teams = [
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
exports.rounds = 4;
exports.games = 7;
exports.currentRound = 1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQyxDQUFDO0FBTUQsQ0FBQztBQU9ELENBQUM7QUFLRCxDQUFDO0FBTUYsa0JBQWtCO0FBQ2xCLGtDQUFrQztBQUVsQyxxREFBcUQ7QUFDckQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlDRTtBQUVXLFFBQUEsS0FBSyxHQUFpQjtJQUNqQztRQUNFLEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLHFCQUFxQjtRQUMzQixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSx1QkFBdUI7UUFDN0IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLGVBQWU7UUFDckIsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLG9CQUFvQjtRQUMxQixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsZUFBZTtRQUNyQixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLHFCQUFxQjtRQUMzQixVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLEVBQUU7UUFDTixJQUFJLEVBQUUscUJBQXFCO1FBQzNCLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0NBQ0YsQ0FBQztBQUVXLFFBQUEsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNYLFFBQUEsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNWLFFBQUEsWUFBWSxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJVGVhbSB7XG4gIGlkOiBudW1iZXIsXG4gIG5hbWU6IHN0cmluZyxcbiAgZWxpbWluYXRlZDogYm9vbGVhblxufTtcblxuaW50ZXJmYWNlIElTZXJpZXMge1xuICBpZDogbnVtYmVyLFxuICByZWNvcmQ6IEFycmF5PElSZWNvcmQ+LFxuICBjb21wbGV0ZWQ6IGJvb2xlYW5cbn07XG5cbmludGVyZmFjZSBJUmVjb3JkIHtcbiAgaWQ6IG51bWJlcixcbiAgdGVhbTogSVRlYW0sXG4gIHdpbnM6IG51bWJlcixcbiAgcm91bmQ6IElSb3VuZFxufTtcblxuaW50ZXJmYWNlIElSb3VuZCB7XG4gIGlkOiBudW1iZXIsXG4gIGNvbXBsZXRlZDogYm9vbGVhblxufTtcblxuaW50ZXJmYWNlIElVc2VyIHtcblxufVxuXG4vLzE5NDk0MjM3Mjg2MjUxMTZcbi8vODJiNGM5MmQ1YTNmOWNiMGQzMzk3NjgzY2U3YzRhYmJcblxuLy8gZXhwcmVzcyBzZW5zIGxlYWZzIHJvdW5kIDEgdmljdG9yeSBpbiBhIDQtMiBzZXJpZXNcbi8qXG5jb25zdCBteURlbW9TZXJpZXM6IElTZXJpZXMgPSB7XG4gIGlkOiAxLFxuICByZWNvcmQ6IFtcbiAgICA8SVJlY29yZD57XG4gICAgICBpZDogMSxcbiAgICAgIHRlYW06IDxJVGVhbT57XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnT3R0YXdhIFNlbmF0b3JzJyxcbiAgICAgICAgZWxpbWluYXRlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB3aW5zOiA0LFxuICAgICAgcm91bmQ6IDxJUm91bmQ+e1xuICAgICAgICBpZDogMSxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgPElSZWNvcmQ+e1xuICAgICAgaWQ6IDIsXG4gICAgICB0ZWFtOiA8SVRlYW0+e1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ1Rvcm9udG8gTWFwbGUgTGVhZnMnLFxuICAgICAgICBlbGltaW5hdGVkOiB0cnVlXG4gICAgICB9LFxuICAgICAgd2luczogMixcbiAgICAgIHJvdW5kOiA8SVJvdW5kPntcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIGNvbXBsZXRlZDogdHJ1ZVxufTtcbiovXG5cbmV4cG9ydCBjb25zdCB0ZWFtczogQXJyYXk8SVRlYW0+ID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogJ090dGF3YSBTZW5hdG9ycycsXG4gICAgZWxpbWluYXRlZDogZmFsc2VcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIG5hbWU6ICdNb250cmVhbCBDYW5hZGllbnMnLFxuICAgIGVsaW1pbmF0ZWQ6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiAnRWRtb250b24gT2lsZXJzJyxcbiAgICBlbGltaW5hdGVkOiBmYWxzZVxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgbmFtZTogJ1dhc2hpbmd0b24gQ2FwaXRhbHMnLFxuICAgIGVsaW1pbmF0ZWQ6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBpZDogNSxcbiAgICBuYW1lOiAnTmV3IFlvcmsgUmFuZ2VycycsXG4gICAgZWxpbWluYXRlZDogZmFsc2VcbiAgfSxcbiAge1xuICAgIGlkOiA2LFxuICAgIG5hbWU6ICdDb2x1bWJ1cyBCbHVlIEphY2tldHMnLFxuICAgIGVsaW1pbmF0ZWQ6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBpZDogNyxcbiAgICBuYW1lOiAnQm9zdG9uIEJydWlucycsXG4gICAgZWxpbWluYXRlZDogZmFsc2VcbiAgfSxcbiAge1xuICAgIGlkOiA4LFxuICAgIG5hbWU6ICdNb250cmVhbCBDYW5hZGllbnMnLFxuICAgIGVsaW1pbmF0ZWQ6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBpZDogOSxcbiAgICBuYW1lOiAnQ2hpY2FnbyBCbGFja2hhd2tzJyxcbiAgICBlbGltaW5hdGVkOiBmYWxzZVxuICB9LFxuICB7XG4gICAgaWQ6IDEwLFxuICAgIG5hbWU6ICdNaW5uZXNvdGEgV2lsZCcsXG4gICAgZWxpbWluYXRlZDogZmFsc2VcbiAgfSxcbiAge1xuICAgIGlkOiAxMSxcbiAgICBuYW1lOiAnU3QuIExvdWlzIEJsdWVzJyxcbiAgICBlbGltaW5hdGVkOiBmYWxzZVxuICB9LFxuICB7XG4gICAgaWQ6IDEyLFxuICAgIG5hbWU6ICdBbmFoZWltIER1Y2tzJyxcbiAgICBlbGltaW5hdGVkOiBmYWxzZVxuICB9LFxuICB7XG4gICAgaWQ6IDEzLFxuICAgIG5hbWU6ICdTYW4gSm9zZSBTaGFya3MnLFxuICAgIGVsaW1pbmF0ZWQ6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBpZDogMTQsXG4gICAgbmFtZTogJ0NhbGdhcnkgRmxhbWVzJyxcbiAgICBlbGltaW5hdGVkOiBmYWxzZVxuICB9LFxuICB7XG4gICAgaWQ6IDE1LFxuICAgIG5hbWU6ICdOYXNodmlsbGUgUHJlZGF0b3JzJyxcbiAgICBlbGltaW5hdGVkOiBmYWxzZVxuICB9LFxuICB7XG4gICAgaWQ6IDE2LFxuICAgIG5hbWU6ICdUb3JvbnRvIE1hcGxlIExlYWZzJyxcbiAgICBlbGltaW5hdGVkOiBmYWxzZVxuICB9XG5dO1xuXG5leHBvcnQgY29uc3Qgcm91bmRzID0gNDtcbmV4cG9ydCBjb25zdCBnYW1lcyA9IDc7XG5leHBvcnQgY29uc3QgY3VycmVudFJvdW5kID0gMTtcbiJdfQ==