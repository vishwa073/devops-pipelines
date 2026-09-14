console.log("Starting tests...");

let count = 0;
const interval = setInterval(() => {
  count++;
  console.log(`its working (check ${count})`);

  if (count === 3) {
    clearInterval(interval);
    console.log("Tests finished successfully!");
  }
}, 1000);
