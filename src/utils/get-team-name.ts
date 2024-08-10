const teamNameMap: { [key: string]: string } = {
  "Augsburg": "Augsburg",
  "Bayer Leverkusen": "Leverkusen",
  "Bayern": "Bayern",
  "Bochum": "Bochum",
  "Borussia Dortmund": "Dortmund",
  "Borussia Mönchengladbach": "Mgladbach",
  "Eintracht Frankfurt": "Frankfurt",
  "Freiburg": "Freiburg",
  "Heidenheim": "Heidenheim",
  "Hoffenheim": "Hoffenheim",
  "Holstein Kiel": "Holstein Kiel",
  "Mainz 05": "Mainz 05",
  "RB Leipzig": "RB Leipzig",
  "St. Pauli": "St. Pauli",
  "Stuttgart": "Stuttgart",
  "Union Berlin": "Union Berlin",
  "Werder Bremen": "W. Bremen",
  "Wolfsburg": "Wolfsburg"
};

export function getTeamName(inputName: string): string {
  return teamNameMap[inputName] || inputName;
}