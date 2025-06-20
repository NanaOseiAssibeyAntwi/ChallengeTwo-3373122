Search Suggestions System
Name: Nana Osei Assibey Antwi
Index Number: 3373122

Description
This project implements a search suggestions system in JavaScript. As a user types each character of a search word, the system returns up to 3 product names that start with the current prefix, sorted in lexicographical order.

Features
Initializes with a list of product names.

Returns suggestions for each prefix of the search word.

Suggestions are limited to 3 and sorted alphabetically.

Example
Input:

js
Copy
Edit
products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
searchWord = "mouse";
Output:

js
Copy
Edit
[
  ["mobile", "moneypot", "monitor"],
  ["mobile", "moneypot", "monitor"],
  ["mouse", "mousepad"],
  ["mouse", "mousepad"],
  ["mouse", "mousepad"]
]
How to Use
Create an instance of SearchSuggestionSystem with a list of products.

Call getSuggestions(searchWord) to get the result.
