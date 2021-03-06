import {GameState} from '../gameState'
let g = new GameState().state;
export class RainEmitter{

	constructor() {
    	this.emitter = game.add.emitter(game.world.centerX, 0, 400);
    	this.initEmitter();
  	}

	initEmitter(){
        this.emitter.width = game.world.width;
        this.emitter.angle = -3;
        this.emitter.makeParticles('rain');

		this.emitter.minParticleScale = 0.1;
		this.emitter.maxParticleScale = 0.5;

		this.emitter.setYSpeed(300, 500);
		this.emitter.setXSpeed(-5, 5);

		this.emitter.minRotation = 0;
		this.emitter.maxRotation = 0;
	}

	start(){
		this.emitter.start(false, 800, 5, 0);
	}

}

export class JuiceEmitters{

	spawnJumpEmitters(){
		this.emitter1 = game.add.emitter(0, 0, 100);
   		this.emitter1.makeParticles('particle');
		this.emitter1.gravity = 200;

		this.emitter1.x = g.player.x;
    	this.emitter1.y = g.player.y + 5;
		this.emitter1.start(true, 2000, null, 20);
	}

	spawnKillRedSlimeEmitters(redSlime){
		this.emitterRed = game.add.emitter(0, 0, 100);
   		this.emitterRed.makeParticles('red-particle');
		this.emitterRed.gravity = 50;
		this.emitterRed.setScale(1.0, 0, 1.0, 0, 1500);
   		this.emitterRed.x = redSlime.x + 15;
    	this.emitterRed.y = redSlime.y + 25;
		this.emitterRed.start(true, 3000, null, 20);
	}

	spawnPlayerBoostEmitters(){
		this.emitter3 = game.add.emitter(0, 0, 100);
   		this.emitter3.makeParticles('particle2');
		this.emitter3.gravity = 50;
		this.emitter3.setScale(1.0, 0, 1.0, 0, 2000);

  		this.emitter3.x = g.player.x;
    	this.emitter3.y = g.player.y;
		this.emitter3.start(true, 5000, null, 500);
	}

  	spawnPlayerKillEmitters(){
  		this.emitter2 = game.add.emitter(0, 0, 100);
   		this.emitter2.makeParticles('particle2');
		this.emitter2.gravity = 50;
		this.emitter2.setScale(1.0, 0, 1.0, 0, 2000);

  		this.emitter2.x = g.player.x + 15;
    	this.emitter2.y = g.player.y + 25;
		this.emitter2.start(true, 600, null, 600);
  	}
}
