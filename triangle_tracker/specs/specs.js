//describe('leapYear', function() {
  //it("is false for a year that is not divisible by 4", function() {
    //expect(leapYear(1999)).to.equal(false);
  //});

  //it("it is true for most years divisible by 4", function() {
    //expect(leapYear(2012)).to.equal(true);
  //});

  //it("it is true for all years divisible by 400", function() {
    //expect(leapYear(2000)).to.equal(true);
  //});
//});
describe('triangleTracker', function() {
  it("is false for triangles where the length of one side is greater than or equal to the sum of the other two sides", function() {
    expect(triangleTracker(16,2,3)).to.equal(false);
  });
});
