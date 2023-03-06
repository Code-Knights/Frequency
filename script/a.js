function frequencyTable(data) {
  const max = Math.max.apply(null, data);
  const min = Math.min.apply(null, data);

  // 1 Range -> r = max - min
  const r = max - min;

  // 2 Perkiraan banyak kelas -> k = 1 + 3,3log(n)
  const k = Math.ceil(1 + 3.3 * Math.log10(data.length));

  // 3 lebar kelas c = r / k
  const c = Math.ceil(r / k);

  // 4 tepi bawah kelas kelas pertama a1 = min - ((k * c) - r) / 2
  const a1 = min - (k * c - r) / 2;

  console.log(
    "Tepi Bawah | Tepi Atas | Tengah | Frekuensi | Frekuensi Relatif"
  );

  let a = a1;
  for (let i = 0; i < k; i++) {
    const a2 = a + c - 1;
    const midpoint = (a + a2) / 2;
    const frequency = data.filter((x) => x >= a && x <= a2).length;
    const relativeFrequency = frequency / 100;

    console.log(
      `${a} - ${a2} | ${midpoint} | ${frequency} | ${relativeFrequency.toFixed(
        2
      )}%`
    );

    a = a2 + 1;
  }
}

const data = [
  6, 4, 5, 2, 3, 6, 11, 5, 4, 5, 6, 7, 27, 6, 2, 2, 5, 5, 4, 9, 2, 4, 8, 3, 4,
  11, 12, 3, 8, 3, 8, 2, 33, 9, 34, 3, 6, 13, 40, 39, 26, 7, 6, 23, 5, 9, 11, 7,
  17, 2, 6, 2, 6, 4, 5, 7, 8, 5, 8, 14, 20, 5, 24, 5, 26, 5, 4, 40, 6, 9, 7, 7,
  4, 5, 2, 9, 16, 6, 5, 7, 8, 6, 8, 12, 34, 15, 10, 9, 4, 25, 9, 6, 25, 9, 5, 7,
  13, 10, 2, 5, 2, 5, 6, 4, 5, 28, 25, 5, 5, 4, 4, 2, 11, 5, 18, 9, 9, 9, 6, 22,
  16,
];

frequencyTable(data);
