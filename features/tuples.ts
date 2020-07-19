const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// const pepsi: [string, boolean, number] = ['brown', true, 40];

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// タプルは頻繁に利用しない方がいい？
const carSpecs: [number, number] = [400, 3354]; // 一見すると何を示しているのかがわからなくなる

// オブジェクトだとすぐわかる
const carStats = {
  horsepower: 400,
  weight: 3354,
};
