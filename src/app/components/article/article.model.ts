export class Article{
  title: string;
  link: string;
  vote: number;


  constructor(title: string, link: string, vote?:number){
     this.title = title;
     this.link = link;
     this.vote = vote||0;
  }

  voteUp(): void {
    this.vote += 1;
  }

  voteDown():void {
    this.vote -= 1;
  }

  domain(): string {
    try{
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    }
     catch(err){
    return null
    }
   }


}
