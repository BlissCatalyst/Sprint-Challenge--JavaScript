// 1. Copy and paste your prototype in here and refactor into class syntax.

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods 
// using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CuboidMaker {
    constructor(dimensions) {
        this.length = dimensions.length;
        this.width = dimensions.width;
        this.height = dimensions.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
  }

  // *STRETCH GOAL*
  class CubeMaker extends CuboidMaker {
      constructor(dimensions) {
          super(dimensions);
      }
      volume() {
          return Math.pow(this.length, 3);
      }
      surfaceArea() {
          return 6 * (Math.pow(this.length, 2));
      }
  }
  
  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  });

  // *STRETCH OBJECT*
  const cube = new CubeMaker({
    length: 2
  });

  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130
  console.log(cube.volume()); // 8
  console.log(cube.surfaceArea()); // 24