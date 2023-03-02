process.stdin.resume();
process.stdin.setEncoding("utf-8");
// Input collected as string
var stdin_input = "";

//main function called with input 
process.stdin.on("data", function (input) {
  stdin_input += input;
});

process.stdin.on("end", function () {
  main(stdin_input);
});

//Input is split into an array of strings, using trim() to remove spaces,
//and split('\n') to split the input into an array at each newline character
function main(input) {
  input = input.trim().split("\n");
// first line of input is processed to get the number of check-ins and the threshold value of K
  var n = parseInt(input[0].split(" ")[0]);
  var K = parseInt(input[0].split(" ")[1]);

//array to hold check-in and check-out times
  var times = [];

//loop through each line of input containing check-in and out times
// times are split and converted to numbers and added to times array with a value of 1 for check-in and -1 for check-out
// Allows us to keep track of the customers present at each point in time.
  for (var i = 1; i <= n; i++) {
    var checkIn = parseInt(input[i].split(" ")[0]);
    var checkOut = parseInt(input[i].split(" ")[1]);
    times.push([checkIn, 1]);
    times.push([checkOut, -1]);
  }

//times array is sorted in ascending order by time, with check-ins sorted before check-outs. 
//if they occur at same time, check-outs are sorted before check-ins
  times.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  var currentCustomers = 0;
  var maxCustomers = 0;
  var maxPeriodStart = 0;
  var maxPeriodEnd = 0;

//loops through each time in the 'times' array, keeping track of number of customers present through "currentCustomers"
  for (var i = 0; i < times.length; i++) {
    currentCustomers += times[i][1];
//If the currentCustomers variable is above the maxCustomers variable 
//the rest of the variables are updated (maxCustomers, maxPeriodStart, maxPeriodEnd)
//loop through sorted list of times to keep track of number of customers currently in hotel
//for each check-in or out, adjust the current numbers of customers
//if current > max - update maxCustomers and set start time of the maximum period to current time
//if current number of customers is less than or equal to max # of customers so far
// and the end time has not been set yet, we set end time of Max period to current time
    if (currentCustomers > maxCustomers) {
      maxCustomers = currentCustomers;
      maxPeriodStart = times[i][0];
      maxPeriodEnd = null;
    } else if (currentCustomers <= maxCustomers && maxPeriodEnd === null) {
      maxPeriodEnd = times[i][0];
    }
  }

//calculate duration of the maximum period by subtracting the start time from the end time
  var P = maxPeriodEnd - maxPeriodStart;
//if maximum number of customers exceed threshold of K, we output that duration
  if (maxCustomers > K) {
    process.stdout.write("The duration of the P period is " + P + ".\n");
  } else {
    process.stdout.write("0\n");
  }
}