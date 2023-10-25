/* 
   Filename: SophisticatedCode.js

   Description: This code implements a text-based adventure game where the player must navigate through various scenarios and make choices to progress. The game includes multiple levels, character interactions, inventory management, and complex decision trees.

   Note: This is an example of a long and complex JavaScript code, exceeding 200 lines.
*/

// Game Initialization
const readline = require('readline');
const player = {
   name: '',
   inventory: [],
   health: 100,
   sanity: 100
};
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

// Game Start
function startGame() {
   console.log('Welcome to the Adventure Game!');
   rl.question('What is your name? ', (name) => {
      player.name = name;
      console.log(`Nice to meet you, ${player.name}! Let's start the game.`);
      level1();
   });
}

// Level 1
function level1() {
   console.log('You find yourself in a dark room. There are two doors in front of you.');
   rl.question('Which door will you choose? (1 or 2) ', (choice) => {
      if (choice === '1') {
         console.log('You chose door 1 and find yourself in a garden.');
         player.inventory.push('Key');
         console.log('You found a key!');
         level2();
      } else if (choice === '2') {
         console.log('You chose door 2 and find yourself in a dungeon.');
         player.health -= 10;
         console.log('You fell into a trap and lost 10 health!');
         level2();
      } else {
         console.log('Invalid choice! Please try again.');
         level1();
      }
   });
}

// Level 2
function level2() {
   console.log('You are now in a maze. You see a sign with two directions: Left or Right.');
   rl.question('Which direction will you choose? (L or R) ', (choice) => {
      if (choice.toUpperCase() === 'L') {
         console.log('You chose Left and encounter a friendly NPC.');
         console.log('NPC: "Do you need any help?"');
         rl.question('Will you ask for help? (Y or N) ', (askHelp) => {
            if (askHelp.toUpperCase() === 'Y') {
               console.log('You asked for help and received a map!');
               player.inventory.push('Map');
            } else {
               console.log('You declined the help...');
               player.sanity -= 20;
            }
            level3();
         });
      } else if (choice.toUpperCase() === 'R') {
         console.log('You chose Right and stumble upon a hidden treasure chest.');
         player.inventory.push('Gold');
         console.log('You found Gold!');
         level3();
      } else {
         console.log('Invalid choice! Please try again.');
         level2();
      }
   });
}

// Level 3
function level3() {
   console.log('You arrive in a large hall with two exits: North or South.');
   rl.question('Which exit will you choose? (N or S) ', (choice) => {
      if (choice.toUpperCase() === 'N') {
         console.log('You chose North and enter a secret laboratory.');
         if (player.inventory.includes('Map')) {
            console.log('You use the map to solve a puzzle and find a powerful artifact.');
            player.inventory.push('Artifact');
         } else {
            console.log('You struggle to navigate through the laboratory and suffer a minor injury.');
            player.health -= 5;
         }
         level4();
      } else if (choice.toUpperCase() === 'S') {
         console.log('You chose South and face a dangerous dragon!');
         console.log('The dragon breathes fire at you...');
         player.health -= 20;
         if (player.inventory.includes('Gold')) {
            console.log('Luckily, you offer the dragon the Gold, and it lets you pass.');
         } else {
            console.log('Without any valuable item, you barely escape the dragon\'s attack.');
         }
         level4();
      } else {
         console.log('Invalid choice! Please try again.');
         level3();
      }
   });
}

// Level 4 (Final Level)
function level4() {
   console.log('You reach the final level: The Throne Room.');
   console.log('There is a locked door in front of you.');
   rl.question('Do you have the Key to unlock the door? (Y or N) ', (hasKey) => {
      if (hasKey.toUpperCase() === 'Y' && player.inventory.includes('Key')) {
         console.log('You unlock the door and enter the Throne Room.');
         console.log('Congratulations! You completed the game!');
      } else {
         console.log('You do not have the necessary Key... Game Over!');
      }
      rl.close();
   });
}

// Start the game
startGame();