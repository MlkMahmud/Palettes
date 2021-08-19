import Circle from './circle';

function paint() {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const colors = ['#FF0900', '#FF7F00', '#FFEF00', '#00F11D', '#0079FF', '#A800FF'];
  let circlesArray = [];
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function makeCircles() {
    for (let i = 0; i < 500; i += 1) {
      const radius = 1.5;
      const x = Math.random() * (window.innerWidth - radius * 2) + radius;
      const y = Math.random() * (window.innerHeight - radius * 2) + radius;
      const dx = (Math.random() - 0.8);
      const dy = (Math.random() - 0.8);
      const color = colors[Math.floor(Math.random() * colors.length)];
      circlesArray.push(new Circle(ctx, x, y, dx, dy, radius, color));
    }
  }

  makeCircles();

  // Recreate circles on resize to ensure they don't break their new dimensions.
  window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    circlesArray = [];
    // eslint-disable-next-line no-plusplus
    makeCircles();
  };


  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = 0; i < circlesArray.length; i += 1) {
      circlesArray[i].update();
    }
  }

  animate();
}

export default paint;
