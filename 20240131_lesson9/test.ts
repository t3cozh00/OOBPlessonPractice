function generateRandomName() {
  const names = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Henry"];
  const numberOfNames = names.length;

  return names[Math.floor(Math.random() * numberOfNames)];
}




function printRandomNames(count : number) {
  for (let i = 0; i < count; i++) {
    const randomName = generateRandomName();
    console.log(`${randomName}`);
  }
}

// Example: Print 3 random names
printRandomNames(3);
