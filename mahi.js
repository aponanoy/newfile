function fixWeightMachne(a) {
    const valu = [];
  
    if (!Array.isArray(a)) return "invalid input";
    if (a.length <= 0) return [];
    for (const item of a) {
      if (typeof item === "number") {
        if (item >= 1) valu.push(item);
      }
    }
    return valu;
  }
  
  console.log(fixWeightMachne([10,50,-25,null,"mahi"]));




  function countVowels(i) {
    let vowel = "aeiouAEIOU";
    let sum = 0;
  
    if (typeof i === "string") {
      for (const v of i) {
        if (vowel.includes(v)) {
          sum = sum + 1;
        }
      }
      return sum;
    } else {
      console.log("Invalid Input");
    }
  }
  
  console.log(countVowels("Bhumi"));





  function evaluateResult(a) {
    let result = [];
  
    if (!Array.isArray(a)) return "invalid input";
    for (const array of a) {
      if (typeof array !== "number") {
        result.push("Invalid");
        continue;
      }
      if (array < 50) {
        result.push("F");
      }
      if (array >= 50 && array <= 59) {
        result.push("D");
      }
      if (array >= 60 && array <= 69) {
        result.push("C");
      }
      if (array >= 70 && array <= 79) {
        result.push("B");
      }
      if (array >= 80 && array <= 89) {
        result.push("A");
      }
      if (array >= 90) {
        result.push("A+");
      }
    }
  
    return result;
  }
  
  console.log(evaluateResult([90,45,67,"mahi",80,null]));
  






  function createParfectresult(a) {
    let result = "";
       if (
        typeof a !== "object" || 
        a === null || 
        !a.name || 
        typeof a.name !== "string" || 
        a.name.trim() === "" || 
        !a.year || 
        typeof a.year !== "number" || 
        a.year.toString().length !== 4
    ) 
    {
        return "Invalid Input";
    }
    
    for (let value = 0; value < a.name.length; value++) {
      let x= a.name[value];
        if (value === 0) {
            result += x.toUpperCase();  
        } else {
            result += x;
        }
    }
    
    result += a.year;  
    return result;
  }
  console.log(createParfectresult({name:"feni",year:2018}));





  function calculateMonthlyExpenses(a, b) {
    let allammount = 0;
    if (Array.isArray(a) && typeof b === "number") {
        let i = 0;
        while (i < a.length) {
            allammount += a[i];
            i++;
        }
  
        const hisab = allammount - b;
        if (hisab <= 0) {
            return "Some more money";
        }
        return hisab;
    }
     else {
        return "Invalid input";
    }
  }
  console.log(calculateMonthlyExpenses([10000,500,10000],20000));
  