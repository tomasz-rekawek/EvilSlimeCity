import {GameState} from '../gameState'
import {LevelPrototype} from './levelPrototype'
let gState = new GameState().state;
let _ = require( "lodash" );

let lvl = {
	world: {
		bounds: { x1: 0, y1:0, x2: 1705, y2: 376 },
		sprites: [
           { x: 0, y: 0, type: 'game-background'},
           { x: 640, y: 0, type: 'game-background'},
	       { x: 1280, y: 0, type: 'game-background'}
		]
	},
	platforms: [
		{x: 754, y: 172, type: 'tower1' },
		{x: 887, y: 300, type: 'platform' },
		{x: 1169, y: 300, type: 'platform' },
		{x: 1169, y: 272, type: 'tower1' },
		{x: 1310, y: 300, type: 'platform' },
		{x: 1451, y: 300, type: 'platform' },
		{x: 1410, y: 112, type: 'tower1' }
	],
	redSlimes: [
		{x: 1470, y: 10, type: 'monster2' },
		{x: 390, y: 70, type: 'monster2' }
	],
	slowFallers: [
		{x: 20, y: 282, type: 'faller' }
	],
	trampolines: [
		{x: 50, y: 270, type: 'trampoline' },
		{x: 950, y: 270, type: 'trampoline' }
	],
	lava: [
		{x: 0, y: 332, type: 'lava2' },
		{x: 252, y: 332, type: 'lava2' },
		{x: 502, y: 332, type: 'lava2' },
		{x: 754, y: 332, type: 'lava2' },
		{x: 1000, y: 332, type: 'lava2' },
		{x: 1510, y: 352, type: 'lava2' }
	],
	arrows: [ {x: 1230, y: 240, type: 'arrow' } ],
	riders: [ {x: 490, y: 200, type: 'faller' } ]
}

export class Level2 extends LevelPrototype{


	 constructor() {
	 	super();
		let protoLevel = _.cloneDeep( this.prototypeLevel );
		this.levelObj = _.merge( protoLevel, lvl );
 	 }

 	 addStartingText(){
                var levelLabel = game.add.text(110, 278, 'Kill 2 red evil slimes!',
                        {font: '20px Courier', fill: '#fff'});
                setTimeout(function(){
                        levelLabel.kill();
                }, 3000);
    }

    addEndingText(){
        game.add.text(gState.player.x - 200, 100, 'Nice!',
                {font: '40px Courier', fill: '#fff'});
                game.add.text(gState.player.x - 200, 136, 'Get ready for more...',
                {font: '20px Courier', fill: '#fff'});
    }




     handleRidersLogic(){
		this.rider1 = gState.envObjects.riders.children[0];
        if(this.rider1.x > 650){
            this.rider1.body.velocity.x = -100;
        }
     }

     checkForCoolKillText(){
        if( gState.envObjects.redSlimes.countLiving() == 1 ){
                var infoLabel = game.add.text(310, 278, 'One more!',
                        {font: '20px Courier', fill: '#fff'});
                setTimeout(function(){
                        infoLabel.kill();
                }, 3000);
            }
    }

}
