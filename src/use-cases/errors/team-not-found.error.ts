export class TeamNotFoundError extends Error {
  private static readonly ERROR_MESSAGE = "Team not found";

  constructor() {
    super("Team not found");
    this.message = TeamNotFoundError.ERROR_MESSAGE;
    this.name = "TeamNotFoundError";
  }
}
