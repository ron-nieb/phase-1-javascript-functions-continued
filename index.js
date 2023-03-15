// code your solution here
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  console.log(saturdayFun()); // This Saturday, I want to roller-skate!
  console.log(saturdayFun("bathe my dog")); // This Saturday, I want to bathe my dog
  
  const mondayWork = function(activity='go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  console.log(mondayWork()); // This Monday, I will go to the office.
  console.log(mondayWork("work from home")); // This Monday, I will work from home.

  function wrapAdjective(highlight = "*") {
    return function(adjective = "special") {
      return `You are ${highlight}${adjective}${highlight}!`;
    }
  }
  const highlightStar = wrapAdjective("*");
console.log(highlightStar()); // You are *special*!
console.log(highlightStar("a hard worker")); // You are *a hard worker*!

const highlightBar = wrapAdjective("||");
console.log(highlightBar()); // You are ||special||!
console.log(highlightBar("a dedicated programmer")); // You are ||a dedicated programmer||!

    

