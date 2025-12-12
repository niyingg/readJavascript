function* generatorFn(init) {
  console.log(init);
  console.log(yield);
  console.log(yield);
}

let generatorObject = generatorFn("foo");
generatorObject.next("bar");
generatorObject.next("ba1");
generatorObject.next("ba3");

function* generatorFn() {
  yield [1, 2, 3];
}
for (const x of generatorFn()) {
  console.log(x, "=");
}

function* nTimes(n) {
  if (n > 0) {
    yield* nTimes(n - 1);
    yield n - 1;
  }
}
for (const x of nTimes(3)) {
  console.log(x);
}

class Node {
  constructor(id) {
    this.id = id;
    this.neighbors = new Set();
  }

  connect(node) {
    if (node !== this) {
      this.neighbors.add(node);
      node.neighbors.add(this);
    }
  }
}

class RandomGraph {
  constructor(size) {
    this.nodes = new Set();
    for (let i = 0; i < size; ++i) {
      this.nodes.add(new Node(i));
    }

    const threshold = 1 / size;
    for (const x of this.nodes) {
      for (const y of this.nodes) {
        if (Math.random() < threshold) {
          x.connect(y);
        }
      }
    }
  }
  print() {
    for (const node of this.nodes) {
      const ids = [...node.neighbors].map((n) => n.id).join(",");
      console.log(`${node.id}: ${ids}`);
    }
  }

  isConnected() {
    const visitedNodes = new Set();
    function* traverse(nodes) {
      for (const node of nodes) {
        if (!visitedNodes.has(node)) {
          yield node;
          yield* traverse(node.neighbors);
        }
      }
    }
    const firstNode = this.nodes[Symbol.iterator]().next().value;
    for (const node of traverse([firstNode])) {
      visitedNodes.add(node);
    }
    return visitedNodes.size === this.nodes.size;
  }
}

const g = new RandomGraph(6);
g.print();
console.log(g.isConnected());
