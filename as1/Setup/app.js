new Vue({
  el: '#app',  
  data: {
    userHealth: 100,
    monsterHealth: 100,
    showStartButton: true,
    showLog: false,
    gameState: []    
  },
  methods: {
    startNewGame: function() {
      this.userHealth = 100;
      this.monsterHealth = 100;
      this.showStartButton = false;
      this.showLog = false;
      this.gameState = [];
    },
    attack: function() {
      var userHPLost = Math.floor(Math.random() * 10) + 1;
      var monsterHPLost = Math.floor(Math.random() * 10) + 1;
      this.userHealth -= userHPLost;
      this.monsterHealth -= monsterHPLost;
      this.showLog = true;
      this.gameState.push(`Monster hits player for ${userHPLost}`);
      this.gameState.push(`Player hits monster for ${monsterHPLost}`);
    },
    specialAttack: function() {
      var userHPLost = Math.floor(Math.random() * 20) + 10;
      var monsterHPLost = Math.floor(Math.random() * 20) + 10;
      this.userHealth -= userHPLost;
      this.monsterHealth -= monsterHPLost;
      this.showLog = true;
      this.gameState.push(`Monster hits player for ${userHPLost}`);
      this.gameState.push(`Player hits monster for ${monsterHPLost}`);
    },
    heal: function() {
      var userHPGain = Math.floor(Math.random() * 7) + 1;
      var userHPLost = Math.floor(Math.random() * 15) + 1;
      this.userHealth += userHPGain;
      this.userHealth -= userHPLost;
      this.gameState.push(`Monster hits player for ${userHPLost}`);
      this.gameState.push(`Player heals himself for ${userHPGain}`);
      this.showLog = true;
    },
    giveUp: function() {
      this.showStartButton = true
    }

  }
});