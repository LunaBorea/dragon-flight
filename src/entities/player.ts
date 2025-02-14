import Phaser from 'phaser'
import GameScene from '../scenes/game-scene';

export default class Player extends Phaser.GameObjects.Rectangle {
    private jumpStrength: number;
    private jumpKey: Phaser.Input.Keyboard.Key;
    private firstJump: boolean;
    private isJumping: boolean;
    private sceneRef: GameScene;
    declare body: Phaser.Physics.Arcade.Body
    
    constructor (scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 40, 40, 0xa81f13)

        this.sceneRef = scene as GameScene;
        this.jumpStrength = 500;
        this.jumpKey = scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        this.firstJump = true
        this.isJumping = false

        scene.add.existing(this)
        scene.physics.add.existing(this);

        this.body.setCollideWorldBounds(true);
    }

    update() {
        if (this.firstJump == true) {
            this.body.position.y = 275
        }

        if (this.jumpKey.isDown && !this.isJumping) {
            this.isJumping = true
            this.body.velocity.y = -this.jumpStrength
            
            if (this.firstJump == true) {
                this.firstJump = false
                this.sceneRef.gameStarted = true;
            }
        }
        if (!this.jumpKey.isDown) {
            this.isJumping = false
        }
    }
}