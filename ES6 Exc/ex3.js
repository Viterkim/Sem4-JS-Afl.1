function Numbers(numbs) {
    var self = this;
    this.nums = numbs;
    this.fives = [];
    this.nums.forEach(function (v) {
        if (v % 5 === 0) {
        self.fives.push(v);
        }
    });
}
var numbers = new Numbers([1,3,5,10,14,20,33,50]);
console.log(numbers.fives);

//With arrow
function Numbers2(numbs) {
        this.nums = numbs;
        this.fives = [];
        this.nums.forEach((v) => {
            if (v % 5 === 0) {
            this.fives.push(v);
            }
        });
    }
    var numbers2 = new Numbers2([1,3,5,10,14,20,33,50]);
    console.log(numbers2.fives);



    //B
    var counter = {
        count: 0,
        inc: () => this.count++
      }
    var func = counter.inc; //Store "reference" to inc
    func();
    console.log(counter.count); //Still zero
    counter.inc();
    console.log(counter.count); //Now one
    