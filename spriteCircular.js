function Sprite() {
  this.x = 100;
  this.y = 100;
  this.w = 20;
  this.h = 20;
  this.vx = 0;
  this.vy = 0;
  this.raio = 20;
  this.cor = "blue";
}

Sprite.prototype.desenhar = function (ctx) {
  ctx.fillStyle = this.cor;
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.save();
  ctx.beginPath();
  ctx.arc(0, 0, this.raio, 0, Math.PI*2, false);
  ctx.fillStyle = this.cor;
  ctx.fill();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  ctx.restore();
}

Sprite.prototype.mover = function (dt) {
  this.x = this.x + this.vx * dt;
  this.y = this.y + this.vy * dt;
}

Sprite.prototype.perseguir = function (alvo){
  this.ax = 0.5*(alvo.x - this.x) - 0.9*this.vx;
  this.ay = 0.5*(alvo.y - this.y) - 0.9*this.vy;
}

Sprite.prototype.impoeLimites = function(x, y, w, h){
  if(this.x - this.raio < x ) {
      this.x = x + this.raio;
      this.vx = 0;
    }
    if(this.x + this.raio > x + w) {
      this.x = x + w - this.raio;
      this.vx = 0;
    }
    if(this.y - this.raio < y ) {
      this.y = y + this.raio;
      this.vy = 0;
    }
    if(this.y + this.raio > y + h) {
      this.y = y + h - this.raio;
      this.vy = 0;
    }
};

Sprite.prototype.colidiuCom = function (alvo) {
  var dist = Math.pow(Math.pow(alvo.x - this.x,2)+Math.pow(alvo.y - this.y,2),0.5);
  if (dist < this.raio + alvo.raio){
    return true;
  }else {
    return false;
  }
};
