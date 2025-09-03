function brick() {
    this.length= 12,
    this.width = 23
}
function blueBrick() {
    brick.call(this);
    this.opacity = 0.7,
    this.color = "Blue"
}
const bricking = new blueBrick();
console.log(bricking);
