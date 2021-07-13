import Visual from './Visual';

class Dashboard {
  private visuals: Visual[];
  private domain: string;

  constructor() {
    this.visuals = [];
    this.domain = "";
  }
}

export default Dashboard;