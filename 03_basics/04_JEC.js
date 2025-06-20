// 🔷 परिभाषा (Definition):
// Execution Context JavaScript का वह environment (परिवेश) है जिसमें किसी code को run (execute) किया जाता है।

// जब भी JavaScript में कोई code चलता है, वह किसी न किसी execution context में ही चलता है।

// 🔷 Execution Context के प्रकार (Types):
// ✅ Global Execution Context (GEC)

// ✅ Function Execution Context (FEC)

// ✅ Eval Execution Context (बहुत rarely यूज़ होता है)

// 🔸 1. Global Execution Context (GEC)
// यह default execution context होता है।

// जब आप कोई भी JS फाइल रन करते हैं, सबसे पहले यह बनाया जाता है।

// इसमें सभी global variables और global functions डिफ़ाइन होते हैं।

// 📌 उदाहरण:

// javascript
// Copy
// Edit
// var a = 10;

// function greet() {
//   console.log("Hello!");
// }
// यहां a और greet() दोनों global scope में हैं, इसलिए ये Global Execution Context में आते हैं।

// 🔸 2. Function Execution Context (FEC)
// जब कोई function call किया जाता है, उसके लिए एक नया execution context बनता है।

// यह local variables, parameters और inner functions को संभालता है।

// 📌 उदाहरण:

// javascript
// Copy
// Edit
// function add(x, y) {
//   var result = x + y;
//   return result;
// }

// add(5, 10); // FEC बनेगा जब ये call होगा
// जब add() call होगा, तब एक नया FEC बनेगा जिसमें x, y, और result होंगे।

// 🔁 Execution Context कैसे काम करता है?
// हर execution context के दो main phases होते हैं:

// 🧪 1. Creation Phase (बनाने की प्रक्रिया):
// Memory allocate होती है।

// Variables को undefined और functions को उनके definitions के साथ memory में रखा जाता है।

// this keyword define होता है।

// ⚙️ 2. Execution Phase (चलाने की प्रक्रिया):
// Actual code line-by-line execute होता है।

// Variables को actual values मिलती हैं।

// 📊 Execution Stack (Call Stack):
// Execution contexts एक stack में add होते हैं जिसे Call Stack कहते हैं।

// 📌 उदाहरण:

// javascript
// Copy
// Edit
// function one() {
//   two();
// }

// function two() {
//   console.log("Inside two");
// }

// one();
// 🧱 Call Stack flow:

// Global Execution Context ➡️

// one() का FEC ➡️

// two() का FEC

// जब function का काम खत्म हो जाता है, उसका execution context stack से हट जाता है।