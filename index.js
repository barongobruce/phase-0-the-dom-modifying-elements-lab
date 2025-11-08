// 1. Remove the <main> element with id="main"
// Get a reference to the element
const mainElement = document.getElementById("main");

// Use the remove() method on the element itself
if (mainElement) {
  mainElement.remove();
}

// ---

// 2. Create the new <h1> element and save it to the variable 'newHeader'
const newHeader = document.createElement("h1");

// ---

// 3. Update the newHeader element's properties

// Set the id to 'victory'
newHeader.id = "victory";

// Set the text content (replace YOUR-NAME with your desired text)
newHeader.textContent = "Baron Bruce is the champion"; // Use your chosen name here

// ---

// 4. Append the newHeader to the body so it appears in the DOM
document.body.append(newHeader);