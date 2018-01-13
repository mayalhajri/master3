"use strict";
var level = 1;
// Enemies our player must avoid
var Enemy = function (locX, locY) {
    this.sprite = 'images/enemy-bug.png';
    this.x = locX;
    this.y = locY;
    this.argument1 = locX;
    this.argument2 = locY;
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    //sets the speed of the Enemy based on the level
    if (level === 1) {
        for (var i = 0; i < allEnemies.length; i++) {
            allEnemies[i].speed = 100;
        }
    }
    if (level === 2) {
        for (var j = 0; j < allEnemies.length; j++) {
            allEnemies[j].speed = 190;
        }
    }
    if (level === 3) {
        for (var j = 0; j < allEnemies.length; j++) {
            allEnemies[j].speed = 250;
        }
    }
    if (level === 4) {
        //here will show popup to tell player he/she win 
        alertNumber();
        
    }
    // multiplying any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + (this.speed * dt);
    //reset enemy's position
    if (this.x >= 500) {
        this.reset();
    }
    this.checkCollisions();
};
Enemy.prototype.checkCollisions = function () {
    //handling collision with the enemies
    if (player.x >= this.x - 40 && player.x <= this.x + 40) {
        if (player.y >= this.y - 40 && player.y <= this.y + 40) {
            player.x = 200;
            player.y = 400;
        }
    }
};
//reset enemy's position
Enemy.prototype.reset = function () {
    this.x = this.argument1;
    this.y = this.argument2;
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
var Player = function (x, y) {
    this.sprite = 'images/char-horn-girl.png';
    this.x = x;
    this.y = y;
};
//changes and displays the level
Player.prototype.update = function (dt) {
    if (this.y < -18) {
        this.reset();
         level++;
        document.getElementById("myspan")
            .innerHTML = level;
       
    }
};
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function (rcv) {
    if (rcv === 'left' && this.x > 100) this.x = this.x - 90;
    else if (rcv === 'right' && this.x < 380) this.x = this.x + 90;
    else if (rcv === 'up' && this.y > -50) this.y = this.y - 90;
    else if (rcv === 'down' && this.y < 400) this.y = this.y + 90;
};
Player.prototype.reset = function () {
    this.x = 200;
    this.y = 400;
};
// Now instantiate your objects.
var enemy1 = new Enemy(-100, 60);
var enemy2 = new Enemy(-600, 60);
var enemy3 = new Enemy(-165, 140);
var enemy4 = new Enemy(-500, 140);
var enemy5 = new Enemy(-200, 220);
var player1 = new Player(200, 400);
var allEnemies = [enemy1, enemy2
   , enemy3, enemy4, enemy5
];
var player = player1;
//for playing with keyboard
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left'
        , 38: 'up'
        , 39: 'right'
        , 40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});