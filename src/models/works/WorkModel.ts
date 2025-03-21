export interface WorkModel {
  name: string;
  desc: string;
  from: Date;
  to?: Date;
  roles: string[];
  stacks: string[];
  portfolio: WorkPortfolioModel[];
}

enum WorkPortfolioType {
  GIT_REPO = "Git Repo",
  PLAYSTORE = "Play Store",
  APPSTORE = "App Store",
  WEBSITE = "Website",
}

interface WorkPortfolioModel {
  type: WorkPortfolioType;
  url: string;
}
