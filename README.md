# Travel List App

## Introduction

The Travel List App is a simple web application designed to help users manage a list of items they need to pack for travelling. Built with React and JavaScript, this app provides an intuitive interface for adding items to a packing list, marking items as packed, deleting them, and various sorting functionalities.

## Features

- **Add Items**: Users can add items to the packing list by entering the name and quantity of each item.
- **Display Items**: Items are displayed on the webpage with options to mark them as packed or delete them.
- **Mark as Packed**: Each item can be checked off as packed, helping users track their packing progress.
- **Delete Items**: Users can remove items from the list if no longer needed.
- **Sorting**: The list can be sorted in three ways:
  - Input Order: Items remain in the order they were added.
  - Alphabetical Order: Items are sorted by name.
  - Packed Status: Items can be sorted based on whether they have been packed.
- **Reset List**: Users can reset the entire list with a single button click.
- **Packing Status**: The footer displays a count of how many items have been packed.

## Installation

To run the Packing List App locally, you'll need to have Node.js installed on your machine. Follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/packing-list-app.git
   cd packing-list-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm start
   ```

This will start the app on `http://localhost:3000` in your web browser.

## Usage

Once the app is running, you can use it to manage your packing list:

1. Enter an item name and quantity in the input fields provided and click the "Add Item" button to add it to the list.
2. Click the checkbox next to an item to mark it as packed.
3. Click the delete button next to an item to remove it from the list.
4. Use the sort buttons to view your list in the desired order.
5. Click the "Reset" button to clear all items from the list.
