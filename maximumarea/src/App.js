import "./App.css";

function App() {
  const findMaximumAreaTravelled = (arrHeights, n) => {
    var area = 0;
    for (let i = 0; i < n; i++) {
      var left_index;
      var right_index;

      let j;
      for (j = i; j >= 0; j--) {
        if (arrHeights[j] < arrHeights[i]) {
          left_index = j;
          break;
        }
      }
      left_index = j;
      let k;
      for (k = i; k < n; k++) {
        if (arrHeights[k] < arrHeights[i]) {
          right_index = k;
          break;
        }
      }
      right_index = k;

      area = Math.max(area, arrHeights[i] * (right_index - left_index - 1));
    }
    return area;
  };

  const arrHeights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
  return (
    <div className="App">
      <h3>{findMaximumAreaTravelled(arrHeights, arrHeights.length)}</h3>
    </div>
  );
}

export default App;
