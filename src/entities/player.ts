import Phaser from 'phaser'

export default class Player extends Phaser.GameObjects.Rectangle {
    jumpStrength: number;
    jumpKey: Phaser.Input.Keyboard.Key;
    firstJump: boolean;
    isJumping: boolean;
    
    constructor (scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 40, 40, 0xe6dc2c)

        this.jumpStrength = 400;
        this.jumpKey = scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        this.firstJump = true
        this.isJumping = false

        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.body!.setCollideWorldBounds(true)
    }

    update() {
        if (this.firstJump == true) {
            this.body!.position.y = 300
        }

        if (this.jumpKey.isDown && !this.isJumping) {
            this.isJumping = true
            this.body!.velocity.y = -this.jumpStrength
            if (this.firstJump == true) {
                this.firstJump = false
            }
        }
        if (!this.jumpKey.isDown) {
            this.isJumping = false
        }
    }
}