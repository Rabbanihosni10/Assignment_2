function matchWinner(teamAGoals, teamBGoals) {
    // console.log(typeof teamAGoals, typeof teamBGoals);
  if((typeof teamAGoals==="number") && (typeof teamBGoals==="number")){
      if(teamAGoals>teamBGoals){
        return "Team A Won";
      }
      else if(teamAGoals<teamBGoals){
        return "Team B Won";
      }
      else{
        return "Draw";
      }
  }
  else{
    return "Invalid";
  }
}
console.log(matchWinner(2,1))
console.log(matchWinner(1,3))
console.log(matchWinner(2,2))
console.log(matchWinner("3",2))
