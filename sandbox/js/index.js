const seed = Math.random() * 100;
const noiseGenerator = new NoiseGenerator(seed);

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(noiseGenerator.perlinNoise(i, j));
  }
}

function setup() {}

function draw() {}
