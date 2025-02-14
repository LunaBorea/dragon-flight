import Phaser from 'phaser'

export default class Pipes extends Phaser.GameObjects.Group {
    topPipe: Phaser.GameObjects.Rectangle;
    bottomPipe: Phaser.GameObjects.Rectangle;
    velocity: number;
    gapY: number;
    gapSize: number;
    
    constructor(scene: Phaser.Scene, x: number) {
        super(scene);

        x *= 300; // Horizontal gap between pipes
        this.velocity = -175;
        this.gapY = Phaser.Math.Between(50, 350)
        this.gapSize = 185 // Vertical gap between pipes

        this.topPipe = new Phaser.GameObjects.Rectangle(scene, 850 + x, this.gapY, 50, 600, 0x0000ff);
        scene.add.existing(this.topPipe);
        scene.physics.add.existing(this.topPipe);
        this.topPipe.setOrigin(0, 1);
        (this.topPipe.body! as Phaser.Physics.Arcade.Body).setVelocityX(this.velocity).setImmovable(true).allowGravity = false;

        this.bottomPipe = new Phaser.GameObjects.Rectangle(scene, 850 + x, this.gapY + this.gapSize, 50, 600, 0x0000ff);
        scene.add.existing(this.bottomPipe);
        scene.physics.add.existing(this.bottomPipe);
        this.bottomPipe.setOrigin(0, 0);
        (this.bottomPipe.body! as Phaser.Physics.Arcade.Body).setVelocityX(this.velocity).setImmovable(true).allowGravity = false;
    }

    update() {

        // If pipe moves off-screen, resets position and gap
        if (this.topPipe.x < -50) {
            this.topPipe.x = 850;
            this.bottomPipe.x = 850;
            
            this.gapY = Phaser.Math.Between(50, 350)

            this.topPipe.y = this.gapY
            this.bottomPipe.y = this.gapY + this.gapSize
        }

    }
}