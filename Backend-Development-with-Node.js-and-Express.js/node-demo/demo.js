const fs = require('fs');

const text = "Hello, Node!";

fs.writeFile("message.txt", text, (err) => {
    if (err) {
        console.error("Error writing file: ", err);
    } else {
        console.log("File saved successfully.");
    }
});