function Sprite() {
  this.x = 100;
  this.y = 100;
  this.w = 20;
  this.h = 20;
}

Sprite.prototype.desenhar = function (ctx) {
  ctx.fillStyle = this.cor;
  ctx.strokeStyle = 'white';

  ctx.lineWidth = 3;
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.rotate(this.ang*180/Math.PI);
  ctx.fillRect(-this.w/2, -this.h/2, this.w, this.h);
  ctx.strokeRect(-this.w/2, -this.h/2, this.w, this.h);
  ctx.restore();
}

Sprite.prototype.mover = function (dt) {

}

Sprite.prototype.perseguir = function (alvo){
  this.ax = 0.5*(alvo.x - this.x) - 0.9*this.vx;
  this.ay = 0.5*(alvo.y - this.y) - 0.9*this.vy;
}

Sprite.prototype.impoeLimites = function(x, y, w, h){


};

Sprite.prototype.colidiuCom = function (alvo) {

};
