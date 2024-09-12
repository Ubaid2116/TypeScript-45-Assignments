// Question 37

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// Answer

function makeShirt(
  size: string = "large",
  text: string = "I love typescript"
): void {
  console.log(`you have order a ${size}, shirt that says ${text}`);
}
makeShirt();
makeShirt("medium");

// part 2 any size different msg
makeShirt("small", "my favourite cartoon is KEYMON ACHE");
