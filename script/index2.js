const tableBody = document.getElementById("table-body");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const dataInput = document.getElementById("data-input").value.trim();

  const num = parseInt(dataInput);

  if (dataInput === "") {
    alert("Data tidak boleh kosong!");
    return;
  }

  if (!/^[0-9,]+$/.test(num)) {
    alert("Data harus berupa angka!");
    return;
  }

  if (!isNaN(dataInput)) {
    alert("Data harus lebih dari satu!");
    return;
  }

  const data = dataInput.split(",").map(Number);

  // Clear previous table rows
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }

  frequencyTable(data);
});

function frequencyTable(data) {
  const max = Math.max.apply(null, data.slice(0, -1));
  const min = Math.min.apply(null, data.slice(0, -1));

  // 1 Range -> r = max - min
  const r = max - min;

  // 2 Perkiraan banyak kelas -> k = 1 + 3,3log(n)
  const k = Math.ceil(1 + 3.3 * Math.log10(data.length));

  // 3 lebar kelas c = r / k
  const c = Math.ceil(r / k);

  // 4 tepi bawah kelas kelas pertama a1 = min - ((k * c) - r) / 2
  const a1 = min - (k * c - r) / 2;

  let a = a1;

  for (let i = 0; i < k; i++) {
    const a2 = a + c - 1;
    const midpoint = (a + a2) / 2;
    const frequency = data.filter((x) => x >= a && x <= a2).length;
    const relativeFrequency = frequency / 100;

    const row = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");

    td1.textContent = a;
    td2.textContent = a2;
    td3.textContent = midpoint;
    td4.textContent = frequency;
    td5.textContent = relativeFrequency.toFixed(2) + "%";

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);

    tableBody.appendChild(row);

    a = a2 + 1;
  }
}

//   const darkModeToggle = document.getElementById("dark-mode-toggle");

//   darkModeToggle.addEventListener("change", () => {
//     document.body.classList.toggle("dark-mode");
//   });
