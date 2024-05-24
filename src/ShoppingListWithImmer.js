import React, { useState } from 'react';
import produce from 'immer';
import { useImmer } from 'use-immer';




const ShoppingListWithImmer = () => {
  // State initialization with useImmer
  const [shoppingList, updateShoppingList] = useImmer([
    { id: 1, name: 'Apples', quantity: 5, details: { category: 'Fruit', notes: 'Buy from local market' } },
    { id: 2, name: 'Bread', quantity: 2, details: { category: 'Bakery', notes: 'Whole wheat bread' } },
  ]);

  // Function to add a new item
  const addItem = newItem => {
    updateShoppingList(draft => {
      draft.push(newItem);
    });
  };

  // Function to update an existing item
  const updateItem = (itemId, updatedItem) => {
    updateShoppingList(draft => {
      const index = draft.findIndex(item => item.id === itemId);
      if (index !== -1) {
        draft[index] = updatedItem;
      }
    });
  };

  // Function to remove an item
  const removeItem = itemId => {
    updateShoppingList(draft => {
      const index = draft.findIndex(item => item.id === itemId);
      if (index !== -1) {
        draft.splice(index, 1);
      }
    });
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <ul>
        {shoppingList.map(item => (
          <li key={item.id}>
            <div>{item.name}</div>
            <div>Quantity: {item.quantity}</div>
            <div>Category: {item.details.category}</div>
            <div>Notes: {item.details.notes}</div>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Add Item</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          const name = e.target.name.value;
          const quantity = parseInt(e.target.quantity.value);
          const category = e.target.category.value;
          const notes = e.target.notes.value;
          addItem({
            id: Date.now(),
            name,
            quantity,
            details: { category, notes },
          });
          e.target.reset();
        }}
      >
        <input type="text" name="name" placeholder="Name" required />
        <input type="number" name="quantity" placeholder="Quantity" required />
        <input type="text" name="category" placeholder="Category" required />
        <input type="text" name="notes" placeholder="Notes" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ShoppingListWithImmer;
