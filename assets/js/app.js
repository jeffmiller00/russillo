import { createBracket } from '/assets/js/bracketry.js'

const ryen_color = "#59C3C3"
const ceruti_color = "#E1CE7A"
const wrapper = document.querySelector('#russillo-bracket')
const options = {
  // getRoundTitleElement: (roundData, roundIndex) => { /* ...return an Element for round title */ },
  // getMatchElement: (roundIndex, matchOrder) => { /* ...return an Element for a whole match OR null */ },
  // getEntryStatusHTML: (entryStatus, context) => { /* ...return an HTML string for contestant's entryStatus */ },
  getNationalityHTML: (player, context) => {
    return `<img style="width: 40px;" src="https://cdn.nba.com/logos/nba/${context.contestantId}/primary/L/logo.svg">`
  },
  getPlayerTitleHTML: (player, context) => {
    var bg_color = "transparent"
    if (player.governor == 'r') {
      // Blue
      bg_color = ryen_color
    } else if (player.governor == 'c') {
      // Yellow
      bg_color = ceruti_color
    }
    return `<div style="background-color: ${bg_color}; padding: 0.5em;">${player.title}</div>`
  },
  // getScoresHTML: (side, match) => { /* ...return an HTML string for side's scores */ },
  // getMatchTopHTML: (match) => { /* ...return an HTML string to be rendered above a match */ },
  getMatchBottomHTML: (match) => {
    /* ...return an HTML string to be rendered underneath a match */
    /*
    if (match.matchStatus === undefined) {
      return ``
    } else {
      // console.log(match)
      if (match.matchWinner == "r") {
        var who_won = "Russillo"
        var bg_color = ryen_color
      } else if (match.matchWinner == "c") {
        var who_won = "Ceruti"
        var bg_color = ceruti_color
      }
      return `<div style="background-color: ${bg_color};">${who_won} wins! ${match.matchStatus}</div>`
    }
    */
    return ``
  },

  mainVerticalPadding: 0,
  // verticalScrollMode: "mixed",
  matchMinVerticalGap: 0,
}
const some_default_options = {}
const some_mobile_options = {}
const data = {
  rounds: [
    { name: "PlayIn Initial" },
    { name: "PlayIn Final" },
    { name: "1st round" },
    { name: "Conf Semi" },
    { name: "Conf Final" },
    { name: "NBA Final" },
    ],
    matches: [
      {
        roundIndex: 0,
        order: 0,
        matchStatus: "0 pts",
        matchWinner: "c",
        sides: [
          {
            contestantId: "1610612758",
            scores: [
              {
                mainScore: "118"
              }
            ],
            isWinner: true
          },
          {
            contestantId: "1610612744",
            scores: [
              {
                mainScore: "94"
              }
            ]
          },

        ]
      },
      {
        roundIndex: 0,
        order: 16,
        matchStatus: "0 pts",
        matchWinner: "c",
        sides: [
          {
            contestantId: "1610612741",
            scores: [
              {
                mainScore: "131"
              }
            ],
            isWinner: true
          },
          {
            contestantId: "1610612737",
            scores: [
              {
                mainScore: "116"
              }
            ]
          },

        ]
      },
      {
        roundIndex: 1,
        order: 0,
        matchStatus: "0 pts",
        matchWinner: "r",
        sides: [
          {
            contestantId: "1610612758",
            scores: [
              {
                mainScore: "98"
              }
            ]
          },
          {
            contestantId: "1610612740",
            scores: [
              {
                mainScore: "105"
              }
            ],
            isWinner: true
          },

        ]
      },
      {
        roundIndex: 1,
        order: 7,
        matchStatus: "0 pts",
        matchWinner: "r",
        sides: [
          {
            contestantId: "1610612740",
            scores: [
              {
                mainScore: "106"
              }
            ]
          },
          {
            contestantId: "1610612747",
            scores: [
              {
                mainScore: "110"
              }
            ],
            isWinner: true
          },
        ]
      },
      {
        roundIndex: 1,
        order: 8,
        matchStatus: "0 pts",
        matchWinner: "c",
        sides: [
          {
            contestantId: "1610612741",
            scores: [
              {
                mainScore: "191"
              }
            ]
          },
          {
            contestantId: "1610612748",
            scores: [
              {
                mainScore: "112"
              }
            ],
            isWinner: true
          },
        ]
      },
      {
        roundIndex: 1,
        order: 15,
        matchStatus: "0 pts",
        matchWinner: "r",
        sides: [
          {
            contestantId: "1610612755",
            scores: [
              {
                mainScore: "105"
              }
            ],
            isWinner: true
          },
          {
            contestantId: "1610612748",
            scores: [
              {
                mainScore: "104"
              }
            ]
          },

        ]
      },
      {
        roundIndex: 2,
        order: 0,
        sides: [
          {
            // OKC Thunder
            contestantId: "1610612760",
            scores: [
              {
                mainScore: "94",
                isWinner: true
              },
              {
                mainScore: "124",
                isWinner: true
              },
              {
                mainScore: "106",
                isWinner: true
              }
            ],
            currentScore: "3"
          },
          {
            // Pelicans
            contestantId: "1610612740",
            scores: [
              { mainScore: "92" },
              { mainScore: "92" },
              { mainScore: "85" },
            ],
            currentScore: "0"
          },

        ]
      },
      {
        roundIndex: 2,
        order: 1,
        sides: [
          {
            // Clippers
            contestantId: "1610612746",
            scores: [
              {
                mainScore: "109",
                isWinner: true
              },
              { mainScore: "93" },
              { mainScore: "90" },
            ],
            currentScore: "1"
          },
          {
            // Mavericks
            contestantId: "1610612742",
            scores: [
              { mainScore: "97" },
              {
                mainScore: "96",
                isWinner: true
              },
              {
                mainScore: "101",
                isWinner: true
              }
            ],
            currentScore: "2"
          },

        ]
      },
      {
        roundIndex: 2,
        order: 2,
        sides: [
          {
            // Timberwolves
            contestantId: "1610612750",
            scores: [
              {
                mainScore: "120",
                isWinner: true
              },
              {
                mainScore: "105",
                isWinner: true
              },
              {
                mainScore: "126",
                isWinner: true
              }
            ],
            currentScore: "3"
          },
          {
            // Suns
            contestantId: "1610612756",
            scores: [
              { mainScore: "95" },
              { mainScore: "93" },
              { mainScore: "109" },
            ],
            currentScore: "0"
          },

        ]
      },
      {
        roundIndex: 2,
        order: 3,
        sides: [
          {
            // Nuggets
            contestantId: "1610612743",
            scores: [
              {
                mainScore: "114",
                isWinner: true
              },
              {
                mainScore: "101",
                isWinner: true
              },
              {
                mainScore: "112",
                isWinner: true
              },
              { mainScore: "108" }
            ],
            currentScore: "3"
          },
          {
            // Lakers
            contestantId: "1610612747",
            scores: [
              { mainScore: "103" },
              { mainScore: "99" },
              { mainScore: "105" },
              {
                mainScore: "119",
                isWinner: true
              }
            ],
            currentScore: "1"
          },

        ]
      },
      {
        roundIndex: 2,
        order: 4,
        sides: [
          {
            // Celtics
            contestantId: "1610612738",
            scores: [
              {
                mainScore: "114",
                isWinner: true
              },
              { mainScore: "101" },
              {
                mainScore: "104",
                isWinner: true
              }
            ],
            currentScore: "2"
          },
          {
            // Heat
            contestantId: "1610612748",
            scores: [
              { mainScore: "94" },
              {
                mainScore: "111",
                isWinner: true
              },
              { mainScore: "84" },

            ],
            currentScore: "1"
          },

        ]
      },
      {
        roundIndex: 2,
        order: 5,
        sides: [
          {
            // Cavs
            contestantId: "1610612739",
            scores: [
              {
                mainScore: "97",
                isWinner: true
              },
              {
                mainScore: "96",
                isWinner: true
              },
              { mainScore: "83" },
              { mainScore: "89" },
            ],
            currentScore: "2"
          },
          {
            // Magic
            contestantId: "1610612753",
            scores: [
              { mainScore: "83" },
              { mainScore: "86" },
              {
                mainScore: "121",
                isWinner: true
              },
              {
                mainScore: "112",
                isWinner: true
              },
            ],
            currentScore: "2"
          },

        ]
      },
      {
        roundIndex: 2,
        order: 6,
        sides: [
          {
            // Bucks
            contestantId: "1610612749",
            scores: [
              {
                mainScore: "109",
                isWinner: true
              },
              { mainScore: "108" },
              { mainScore: "118" },
            ],
            currentScore: "1"
          },
          {
            // Pacers
            contestantId: "1610612754",
            scores: [
              { mainScore: "94" },
              {
                mainScore: "125",
                isWinner: true
              },
              {
                mainScore: "121",
                isWinner: true
              },
            ],
            currentScore: "2"
          },

        ]
      },
      {
        roundIndex: 2,
        order: 7,
        sides: [
          {
            // Knicks
            contestantId: "1610612752",
            scores: [
              {
                mainScore: "111",
                isWinner: true
              },
              {
                mainScore: "104",
                isWinner: true
              },
              { mainScore: "114" },
            ],
            currentScore: "2"
          },
          {
            // 76ers
            contestantId: "1610612755",
            scores: [
              { mainScore: "104" },
              { mainScore: "101" },
              {
                mainScore: "125",
                isWinner: true
              },
            ],
            currentScore: "1"
          },

        ]
      }
    ],
    contestants: {
      1610612760: {
        entryStatus: "1",
        players: [
          {
            title: "Thunder",
            nationality: "OKC",
            governor: 'r'
          }
        ]
      },
      1610612743: {
        entryStatus: "2",
        players: [
          {
            title: "Nuggets",
            nationality: "DEN",
            governor: 'c'
          }
        ]
      },
      1610612750: {
        entryStatus: "3",
        players: [
          {
            title: "Timberwolves",
            nationality: "MIN",
            governor: 'r'
          }
        ]
      },
      1610612746: {
        entryStatus: "4",
        players: [
          {
            title: "Clippers",
            nationality: "LA",
            governor: 'c'
          }
        ]
      },
      1610612742: {
        entryStatus: "5",
        players: [
          {
            title: "Mavericks",
            nationality: "DAL",
            governor: 'c'
          }
        ]
      },
      1610612756: {
        entryStatus: "6",
        players: [
          {
            title: "Suns",
            nationality: "PHX",
            governor: 'r'
          }
        ]
      },
      1610612740: {
        entryStatus: "7",
        players: [
          {
            title: "Pelicans",
            nationality: "NO",
            governor: 'r'
          }
        ]
      },
      1610612747: {
        entryStatus: "8",
        players: [
          {
            title: "Lakers",
            nationality: "LA",
            governor: 'r'
          }
        ]
      },
      1610612758: {
        entryStatus: "9",
        players: [
          {
            title: "Kings",
            nationality: "SAC",
            governor: 'c'
          }
        ]
      },
      1610612744: {
        entryStatus: "10",
        players: [
          {
            title: "Warriors",
            nationality: "GS",
            governor: 'r'
          }
        ]
      },
      1610612738: {
        entryStatus: "1",
        players: [
          {
            title: "Celtics",
            nationality: "BOS",
            governor: 'r'
          }
        ]
      },
      1610612752: {
        entryStatus: "2",
        players: [
          {
            title: "Knicks",
            nationality: "NY",
            governor: 'c'
          }
        ]
      },
      1610612749: {
        entryStatus: "3",
        players: [
          {
            title: "Bucks",
            nationality: "MIL",
            governor: 'c'
          }
        ]
      },
      1610612739: {
        entryStatus: "4",
        players: [
          {
            title: "Cavaliers",
            nationality: "CLE",
            governor: 'r'
          }
        ]
      },
      1610612753: {
        entryStatus: "5",
        players: [
          {
            title: "Magic",
            nationality: "ORL",
            governor: 'c'
          }
        ]
      },
      1610612754: {
        entryStatus: "6",
        players: [
          {
            title: "Pacers",
            nationality: "IND",
            governor: 'c'
          }
        ]
      },
      1610612755: {
        entryStatus: "7",
        players: [
          {
            title: "76ers",
            nationality: "PHI",
            governor: 'r'
          }
        ]
      },
      1610612748: {
        entryStatus: "8",
        players: [
          {
            title: "Heat",
            nationality: "MIA",
            governor: 'c'
          }
        ]
      },
      1610612741: {
        entryStatus: "9",
        players: [
          {
            title: "Bulls",
            nationality: "CHI",
            governor: 'c'
          }
        ]
      },
      1610612737: {
        entryStatus: "10",
        players: [
          {
            title: "Hawks",
            nationality: "ATL",
            governor: 'r'
          }
        ]
      }
    }
}


const bracket = createBracket(data, wrapper, options)
const mediaQuery = window.matchMedia('(max-width: 800px)')

const adjust = () => {
  if (mediaQuery.matches) {
    bracket.applyNewOptions(some_mobile_options)
  } else {
    bracket.applyNewOptions(some_default_options)
  }
}
bracket.setBaseRoundIndex(2)
mediaQuery.addEventListener('change', adjust)

adjust()