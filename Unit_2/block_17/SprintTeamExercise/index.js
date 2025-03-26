const INVENTORY = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 5, name: "carrot", price: 0.5, category: "vegetable", quantity: 45 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "yogurt", price: 2.5, category: "dairy", quantity: 30 },
  { id: 9, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
  { id: 10, name: "rice", price: 2.0, category: "grains", quantity: 25 },
];

function Stock(items) {
    const lowStock = items.filter(item => (item.quantity < 50) )
    console.log(lowStock)
    
    const highStock = items.map(item => (item.name.toUpperCase())) 
    
    items.forEach(item=> console.log(item.name))
}

console.log(Stock(INVENTORY))



