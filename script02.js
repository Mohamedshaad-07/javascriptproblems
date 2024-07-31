const items = [
    { name: 'Item1', value: 10 },
    { name: 'Item2', value: 20 },
    { name: 'Item3', value: 5 },
  ];
  const maxItem = items.reduce((max, item) => (item.value > max.value ? item : max), items[0]);
 const minItem = items.reduce((min, item) => (item.value < min.value ? item : min), items[0]);
  
  console.log(`Max Item: ${JSON.stringify(maxItem)}`); 
  console.log(`Min Item: ${JSON.stringify(minItem)}`); 
  