const array = [1, 2, 3, [1, 2, 3, [1, 2, 3, 4, 5, [1, 2, 3, 4, 5], [2, 3, 9, 4]]], 1, 3, [2, 3, 9, 4, [2, 3, 9, 4]]]

function generateList(array, nestingLevel = 1, nestingLevelText = '') {
  const ul = document.createElement('ul');
  
  array.forEach(item => {
    const li = document.createElement('li');
    
    if (Array.isArray(item)) {
      const updatedNestingLevelText = `${nestingLevelText}${nestingLevel}.`;
      li.append(generateList(item, nestingLevel + 1, updatedNestingLevelText));
    } else {
      li.innerText = `${nestingLevelText}${item}`;
    }
    
    ul.append(li);
  });

  return ul;
}

const body = document.querySelector('body');

body.append(generateList(array));

// version for all nesting levels as 1.1.1.1.1...

// function generateList(array, nestingLevel = 0) {
//   const ul = document.createElement('ul');
  
//   array.forEach(item => {
//     const li = document.createElement('li');
    
//     if (Array.isArray(item)) {
//       li.append(generateList(item, nestingLevel + 1));
//     } else {
//       const nestingLevelText = '1.'.repeat(nestingLevel);
//       li.innerText = `${nestingLevelText}${item}`;
//     }
    
//     ul.append(li);
//   });

//   return ul;
// }