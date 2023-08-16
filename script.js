//write a program printing a tree

function printTree(height) {
  let tree = "";

  for (let i = 1; i <= height; i++) {
    // loop to add spaces`
    for (let j = height - i; j >= 0; j--) {
      tree += " ";
    }

    // loop to add stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      tree += "*";
    }

    tree += "\n";
  }

  console.log(tree);
}
printTree(10)