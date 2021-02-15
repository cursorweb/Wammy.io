export class Button {
  /**
   * Creates a button
   * @param {CanvasRenderingContext2D} ctx ctx
   * @param {number} x x
   * @param {number} y y
   * @param {number} width w
   * @param {number} height h
   * @param {(ctx: CanvasRenderingContext2D) => void} draw draw
   */
  constructor(ctx, x, y, width, height, draw) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.draw = draw;
  }
}