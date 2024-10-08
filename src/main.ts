export const sumOfTwo = (num1: number, num2: number): number => num1 + num2;

export const findAverage = (...arr: number[]): number =>
  arr.reduce((acc, curr) => acc + curr, 0) / arr.length;

export const findMaximumNumber = (arr: number[]): number => {
  let max = arr[0];
  arr.forEach((currentElmemt: number) => {
    if (currentElmemt > max) {
      max = currentElmemt;
    }
  });

  return max;
};

export const findMinimimNumber = (arr: number[]): number | undefined => {
  if (arr.length === 0) {
    return undefined;
  }

  let min = arr[0];
  arr.forEach((currentElement) => {
    if (currentElement < min) {
      min = currentElement;
    }
  });

  return min;
};

export const fizzBuzz = (limit: number): string => {
  let str: string = "";
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      str = str + " FizzBuzz ";
    } else if (i % 3 === 0) {
      str = str + " Fizz ";
    } else if (i % 5 === 0) {
      str = str + " Buzz ";
    } else {
      str = str + ` ${i.toString()} `;
    }
  }

  console.log(str);
  return str;
};
export const findFactorial = (num: number): number => {
  let fact: number = 1;

  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
};

export const isPrime = (num: number): boolean => {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const calculatePrimeRange = (num1: number, nu2: number): number[] => {
  let primeRange: number[] = [];

  const max = Math.max(num1, nu2);
  const min = Math.min(num1, nu2);

  for (let i = min; i <= max; i++) {
    let isPrime = true;
    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime && i !== 1) {
      primeRange.push(i);
    }
  }

  return primeRange;
};

export const filterEvenNumbers = (arr: number[]): number[] => {
  const filterArray: number[] = [];

  arr.forEach((currElement) => {
    if (currElement % 2 === 0) {
      filterArray.push(currElement);
    }
  });
  return filterArray;
};

export const reverseString = (str: string): string => {
  let reverse: string = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return reverse;
};

export const isPalintrome = (str: string): boolean => {
  let reverse: string = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return reverse === str;
};

export const charaCount = (str: string): {} => {
  const obj: any = {};

  for (let i = 0; i < str.length; i++) {
    let key = str[i];
    if (obj[key]) {
      obj[key] = obj[key] + 1;
    } else {
      obj[key] = 1;
    }
  }

  return obj;
};

interface DataType {
  parentId: number;
  id: number;
  name: string;
}

export const data: DataType[] = [
  { parentId: 1, id: 1, name: "TCS" },
  { parentId: 1, id: 2, name: "Infosys" },
  { parentId: 5, id: 3, name: "Wipro" },
  { parentId: 5, id: 4, name: "HCL" },
  { parentId: 5, id: 5, name: "Amazon" },
];

export const findGrouping = (arr: DataType[]): { [key: number]: string[] } => {
  let obj: { [key: number]: string[] } = {};

  arr.forEach(({ parentId, name }) => {
    if (!obj[parentId]) {
      obj[parentId] = [];
    }

    obj[parentId].push(name);
  });

  return obj;
};

export const toTitleCase = (str: string): string =>
  str[0].toUpperCase() + str.slice(1);

export const removeDuplicateElement = (arr: number[]): number[] => {
  const uniqueArr: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
};

export const conuntFrequency = (arr: number[]): { [key: number]: number } => {
  const frequency: { [key: number]: number } = {};

  arr.forEach((currElement) => {
    if (frequency[currElement]) {
      frequency[currElement] = frequency[currElement] + 1;
    } else {
      frequency[currElement] = 1;
    }
  });

  return frequency;
};

export const findUniqueElement = (arr: number[]): number[] => {
  const result: number[] = [];
  const frequency: { [key: number]: number } = conuntFrequency(arr);

  arr.forEach((currElement) => {
    if (frequency[currElement] === 1) {
      result.push(currElement);
    }
  });

  return result;
};

export const findDuplicateElemnt = (arr: number[]): number[] => {
  const duplicateArr: number[] = [];

  const frequency: { [key: number]: number } = conuntFrequency(arr);

  arr.forEach((currentElement) => {
    if (frequency[currentElement] >= 1) {
      duplicateArr.push(currentElement);
    }
  });

  return duplicateArr;
};

export const filterUniqueElement = (arr: number[]): number[] =>
  arr.filter((currEle) => arr.indexOf(currEle) === arr.lastIndexOf(currEle));

export const filterDuplicateElement = (arr: number[]): number[] =>
  arr.filter((currEle) => arr.indexOf(currEle) !== arr.lastIndexOf(currEle));

export const bubbleSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

export const selectionSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }

  return arr;
};

export const findLongestWord = (sentence: string): string => {
  const words = sentence.split(" ");
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

export const generateFibonacci = (n: number): number[] => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const fibSequence: number[] = [0, 1];
  for (let i = 2; i < n; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }

  return fibSequence;
};

export const mergeObjects = (obj1: {}, obj2: {}): {} => ({ ...obj1, ...obj2 });

export const countOccurrences = (substring: string, string: string): number => {
  let count: number = 0;
  let pos: number = string.indexOf(substring);

  while (pos !== -1) {
    count++;
    pos = string.indexOf(substring, pos + 1);
  }

  return count;
};

export function debounce(func: any, delay: any) {
  let timer: any;
  return function (...args: any) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

export function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return (...args: Parameters<T>): void => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export const productExceptSelf = (nums: number[]): number[] => {
  const length = nums.length;
  const result: number[] = new Array(length).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < length; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
};

export const isBalanced = (s: string): boolean => {
  const stack: string[] = [];
  const bracketMap: { [key: string]: string } = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    debugger;
    if (Object.values(bracketMap).includes(char)) {
      debounce;
      stack.push(char);
    } else if (Object.keys(bracketMap).includes(char)) {
      debugger;
      if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
        debugger;
        return false;
      }
    }
  }

  debugger;
  return stack.length === 0;
};

export const numberPalinrone=(num:number):boolean=>{

  let temp=num;
  let reverseNum=0;

  while(num>0){
    let lastDigit=num%10;
    reverseNum=(reverseNum*10)+lastDigit
    num=num/10
  }
 console.log(reverseNum)
  return reverseNum===temp
}

export const transformData=(arr:any):any=>{

  const groupMap:any={};
  arr.for(({userId,groupIds}:any)=>{
    groupIds.forEach((groupId:any)=>{
      if(!groupMap[groupId]){
        groupMap[groupId]=[]
      }
      groupMap[groupId].push(userId)
    })
  })

  console.log(groupMap)

  return []
}

 const input = [
      { userId: 'user0', groupIds: [ 'groupA', 'groupB', 'groupC' ] },
      { userId: 'user1', groupIds: [ 'groupB', 'groupC' ] },
      { userId: 'user2', groupIds: [ 'groupA', 'groupB' ] },
      ];
  
      const output = [
          { groupId: 'groupA', userIds: [ 'user0', 'user2' ] },
          { groupId: 'groupB', userIds: [ 'user0', 'user1', 'user2' ] },
          { groupId: 'groupC', userIds: [ 'user0', 'user1' ] },
          ];"

console.log(isBalanced("()[]{}"));  // Output: true
console.log(isBalanced("[{()}]"));  // Output: true
console.log(isBalanced("(]"));      // Output: false

// export const arr = [1, 5, 2, 1, 1, 2, 3, 3, 4, 3, 8, 5, 6, 7, -99, -4, 2];
// Output: { '1': [ 'TCS', 'Infosys' ], '5': [ 'Wipro', 'HCL', 'Amazon' ] }"
