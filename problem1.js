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
