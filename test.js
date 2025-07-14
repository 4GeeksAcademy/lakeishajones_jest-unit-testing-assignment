test("3.5 euros should be approximately 3.745 dollars", () => {
  const euros = 3.5;
  const expected = 3.5 * 1.07; // Assuming 1 euro = 1.07 dollars
  expect(fromEuroToDollar(euros)).toBeCloseTo(expected, 2);
});

test("3.5 yen should be approximately 0.02188 pounds", () => {
  const yen = 3.5;
  const expected = 3.5 * 0.00625; // Assuming 1 yen = 0.00625 pounds (confirm this rate!)
  expect(fromYenToPound(yen)).toBeCloseTo(expected, 4);
});

test("3.5 dollars should be approximately 511.61 yen", () => {
  const dollars = 3.5;
  const expected = 3.5 / 1.07 * 156.5; // dollars → euros → yen conversion
  expect(fromDollarToYen(dollars)).toBeCloseTo(expected, 2);
});
