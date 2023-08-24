// const data = async function () {
//   const data2 = await fetch(
//     "https://docs.google.com/document/d/1uQCFny5aXfMD9v2TPy3rbE8EHw-xZVdZfj4g-2Yv6IU/edit?usp=sharing"
//   );
//   const data3 = data2.json();
//   console.log(data3);
// };
const data = fetch(
  "https://docs.google.com/document/d/1uQCFny5aXfMD9v2TPy3rbE8EHw-xZVdZfj4g-2Yv6IU/edit?usp=sharing"
).then((resp) => {
  const data2 = resp.json();
});

console.log(data);
