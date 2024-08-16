const teamNameMap: { [key: string]: string } = {
  "Bayer Leverkusen": "Leverkusen",
  "Borussia Dortmund": "Dortmund",
  "Borussia Mönchengladbach": "Mgladbach",
  "Eintracht Frankfurt": "Frankfurt",
  "Werder Bremen": "W. Bremen",
  "Paris Saint Germain": "PSG",
  "Saint-Etienne": "St. Etienne",
};

export function getTeamName(inputName: string): string {
  return teamNameMap[inputName] || inputName;
}
