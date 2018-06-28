// Author: FirstName lastName

/******************************************************************************
                                constant variables

  These are global variables that should stay the same throughout the run of the
  program. After being initialized, JavaScript won't let you change them ever
  again. Great for when you want to "protect" certain variables from accidental
  tampering!
*******************************************************************************/

const READLINE = require("READLINE-sync");

/******************************************************************************
                                global variables

  contacts
  Object Array. Each object represents a contact.

  quit
  Boolean. Represents if the program should continue running (true) or
  not (false).
*******************************************************************************/

var contacts, quit;

/******************************************************************************
                                  printGreeting()

  Prints a simple greeting. Be as creative as you want here. Be sure to include
  your name as the author!
*******************************************************************************/

function printGreeting() {
  console.log();
  console.log("--------------------------------------------------------------");
  console.log("                          Contacts                            ");
  console.log("--------------------------------------------------------------");
  console.log("By: FirstName LastName");
  console.log();
}

/******************************************************************************
                                  setupApp()

  Initialize global variables as follows:
  -contacts initialized as an empty array
  -quit initialized as false
*******************************************************************************/

function setup() {
  contacts = [];
  quit = false;
}

/******************************************************************************
                                getNameInput()

  Continuously ask user to enter a name until a valid name is entered, then
  return that name.

  Valid names must be at least one character.
*******************************************************************************/

function getNameInput() {
  var nameInput = READLINE.question("Name: ").trim();
  while(nameInput.length === 0) {
    console.log("Please enter at least one character.");
    nameInput = READLINE.question("Name: ").trim();
  }
  return nameInput;
}

/******************************************************************************
                                checkNumber()

  Check if a phone number is valid, according to the following criteria:
  -Phone numbers must be exactly 10 digits (no special characters, spaces, etc).
  -Phone numbers must have a value greater than 0.

  Return true if a phone number is valid, and false otherwise.

  Numbers will be passed in as strings, so use parseInt() to change them into
  number data types. From there you can perform all checks above.
*******************************************************************************/

function checkNumber(number) {
  number = parseInt(number);
  if(number < 0) {
    return false;
  }
  var digits = 0;
  while(number > 0) {
    digits++;
    number = parseInt(number / 10);
  }
  return digits === 10;
}

/******************************************************************************
                                getNumberInput()

  Continuously ask user to enter a phone number until a valid one is entered,
  then return it. Use checkNumber() to validate phone numbers.
*******************************************************************************/
function getNumberInput() {
  var numberInput = READLINE.question("Phone Number: ").trim();
  while(!checkNumber(numberInput)) {
    console.log("Please enter a 10-digit phone number (e.g., 1234567890).");
    numberInput = READLINE.question("Phone Number: ").trim();
  }
  return numberInput;
}

/******************************************************************************
                                checkEmail()

  Check if an email address is valid, according to the following criteria:
  -Email addresses are optional, so they can be length 0. However, if the
   length of the email address is greater than 0, the criteria below apply.
  -Email addresses must contain just one "@" symbol, but not as the first
   character.
  -Email addresses must end in ".com", ".org", ".net", or ".edu".

  Return true if an email address is valid, and false otherwise.
*******************************************************************************/

function checkEmail(email) {
  if(email.length === 0) {
    return true;
  }
  var firstAT = email.indexOf("@");
  var secondAT = email.indexOf("@", firstAT + 1);
  if(firstAT < 1 || secondAT != -1) {
    return false;
  }
  var topLevelDomains = [".com", ".org", ".net", ".edu"];
  var lastFourCharacters = email.substring(email.length - 4);
  if(topLevelDomains.indexOf(lastFourCharacters) === -1) {
    return false;
  }
  return true;
}

/******************************************************************************
                                getEmailInput()

  Continuously ask user to enter an email address until a valid one is entered,
  then return it. Use checkEmail() to validate email addresses.
*******************************************************************************/

function getEmailInput() {
  var emailInput = READLINE.question("Email Address (Optional): ").trim();
  while(!checkEmail(emailInput)) {
    console.log("Please enter a valid email address.");
    emailInput = READLINE.question("Email Address (Optional): ").trim();
  }
  return emailInput;
}

/******************************************************************************
                                compareContacts()

  Compares the names of two contacts, a and b, to determine their alphabetical
  order. If a's name comes before b's, return -1. If a's name comes after b's,
  return 1. If a's name does not come before or after b's, then they must share
  the same name, in which case you should return 0.

  To compare strings alphabetically, you can use comparison operators, just as
  you would with numbers. For example, "c" < "d" is true, while "c" > "d" is
  false.

  Note that a and b are passed in as objects, so you should access their name
  properties before comparing. Also before comparing, you should convert both
  names to lowercase or uppercase. This will make the comparison ignore
  capitalization, which is important for comparing strings alphabetically.
*******************************************************************************/

function compareContacts(a, b) {
  var nameA = a.name.toLowerCase();
  var nameB = b.name.toLowerCase();
  if(nameA < nameB) {
    return -1;
  } else if(nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
}

/******************************************************************************
                                addContact()

  Ask user to enter values for a new contact. Then create a contact object
  with those values, add the object to the global contacts array, and sort
  the array according to the compareContacts() function. Finally, let the user
  know that the contact was added successfully.

  Contacts have four properties, and all values are strings:
    -name: The contact's name. Can consist of any characters, spaces, etc.
    -number: The contact's 10-digit phone number (as a string).
    -email: The contact's email address.
    -notes: Any additional text relevant to the contact (e.g., "mobile number")

  You should get the user's input for name, number, and email by calling the
  getNameInput(), getNumberInput(), and getEmailInput() functions, respectively.
  However, notes are optional and don't need to be validated.

  Sort the contacts array alphabetically by contact name using this code:
    contacts.sort(compareContacts)
*******************************************************************************/

function addContact() {
  console.log("Add Contact");
  var nameInput = getNameInput();
  var numberInput = getNumberInput();
  var emailInput = getEmailInput();
  var notesInput = READLINE.question("Notes (optional): ").trim();
  var contact = {
    name:nameInput,
    number:numberInput,
    email:emailInput,
    notes:notesInput
  };
  contacts.push(contact);
  contacts.sort(compareContacts);
  console.log();
  console.log("Contact added successfully!");
  console.log();
}

/******************************************************************************
                                getContactIndex()

  Seach the global contacts array for the first instance of a contact whose
  name matches contactName. Return the index of the first matching contact.
  If no match is found, return -1.

  Be sure to convert both comparison strings to lowercase or uppercase before
  comparing, to account for possible capitalization inconsistencies.
*******************************************************************************/

function getContactIndex(contactName) {
  for(var i = 0; i < contacts.length; i++) {
    if(contacts[i].name.toLowerCase() === contactName.toLowerCase()) {
      return i;
    }
  }
  return -1;
}

/******************************************************************************
                                removeContact()

  Attempt to remove a contact from the global contacts array.

  Ask the user to enter the contact's name, and search the contacts array for
  that contact by name (you have functions for both of these actions).

  If the contact isn't in the contact array, let the user know that you couldn't
  find it. Otherwise, remove the contact, and let the user know that this was
  done successfully.
*******************************************************************************/

function removeContact() {
  console.log("Remove Contact");
  var contactIndex = getContactIndex(getNameInput());
  if(contactIndex != -1) {
    contacts.splice(contactIndex, 1);
    console.log();
    console.log("Contact removed!");
  } else {
    console.log();
    console.log("Can't find that contact.");
  }
  console.log();
}

/******************************************************************************
                                displayUpdateMenu()

  Display the contact update menu, with the following choices:
   1) Name
   2) Phone Number
   3) Email Address
   4) Notes
   0) Return to Main Menu

  Based on what the user chooses, update the appropriate value for the contact
  located at contactIndex. Call the necessary functions to get input for
  name, number, and email, while notes do not need any special validation. Also
  be sure to allow the user to quit this menu and return to the main menu
  by entering "0" (or anything else you want).

  Don't forget to re-sort the contacts array if the user updates any contact's
  name!
*******************************************************************************/

function displayUpdateMenu(contactIndex) {
  console.log("Update " + contacts[contactIndex].name);
  console.log("1: Name");
  console.log("2: Phone Number");
  console.log("3: Email Address");
  console.log("4: Notes");
  console.log("0: Return to Main Menu")
  var choice = READLINE.question("Enter a value: ").trim();
  while(!(choice >= 0 && choice <= 4)) {
      console.log("Please make a valid choice");
      choice = READLINE.question("Enter a value: ").trim();
  }
  if(choice == 1) {
    contacts[contactIndex].name = getNameInput();
    contacts.sort(compareContacts);
    console.log();
    console.log("Contact name updated!");
  } else if(choice == 2) {
    contacts[contactIndex].number = getNumberInput();
    console.log();
    console.log("Contact phone number updated!");
  } else if(choice == 3) {
    contacts[contactIndex].email = getEmailInput();
    console.log();
    console.log("Contact email address updated!");
  } else if(choice == 4) {
    contacts[contactIndex].notes = READLINE.question("Notes (optional): ").trim();
    console.log();
    console.log("Contact notes updated!");
  } else if(choice == 0) {
    console.log();
    console.log("Nothing updated!");
  }
}

/******************************************************************************
                                updateContact()

  Attempt to assign a new value to one of a contact's properties.

  Ask the user to enter the contact's name, and search the contacts array for
  that contact by name (you have functions for both of these actions).

  If the contact isn't in the contact array, let the user know that you couldn't
  find it. Otherwise, call displayContactMenu() with the contact's index passed
  to it as an argument.
*******************************************************************************/

function updateContact() {
  console.log("Update Contact");
  var contactIndex = getContactIndex(getNameInput());
  if(contactIndex != -1) {
    console.log();
    displayUpdateMenu(contactIndex);
  } else {
    console.log();
    console.log("Can't find that contact.");
  }
  console.log();
}

/******************************************************************************
                                printContactInfo()

  Print current values for all four properties of a given contact. You'll first
  need to get the index of the contact based on contactName, which is passed in
  as input.
*******************************************************************************/

function printContactInfo(contactName) {
  var contactIndex = getContactIndex(contactName);
  console.log("Name: " + contacts[contactIndex].name);
  console.log("Phone Number: " + contacts[contactIndex].number);
  console.log("Email Address: " + contacts[contactIndex].email);
  console.log("Notes: " + contacts[contactIndex].notes);
  console.log();
}

/******************************************************************************
                                searchContact()

  Print the info of all contacts whose names start with what the user types in.

  Ask the user to enter a name, and search the contacts list for any names that
  start with whatever string user typed in. If there are any matches, print them
  all. Otherwise let the user know that no matches were found.

  For example, let's say there is a contact named "Barack" and another named
  "Barry". If the user searches for "ba", both contacts' info should be printed.
*******************************************************************************/

function searchContact() {
  console.log("Search Contact");
  var contactName = getNameInput();
  var matches = [];
  for(var i = 0; i < contacts.length; i++) {
    if(contacts[i].name.toLowerCase().startsWith(contactName.toLowerCase())) {
      matches.push(contacts[i]);
    }
  }
  if(matches.length > 0) {
    console.log();
    console.log(matches.length + " matches found:");
    console.log();
    for(var i = 0; i < matches.length; i++) {
      printContactInfo(matches[i].name);
    }
  } else {
    console.log();
    console.log("No matches found.");
    console.log();
  }
}

/******************************************************************************
                                printAllContacts()

  Print the info of every contact in the contacts array. You already have a
  function that prints the info for one contact, so this should be very
  straightforward.
*******************************************************************************/

function printAllContacts() {
  console.log("Printing " + contacts.length + " Contact(s):");
  console.log();
  for(var i = 0; i < contacts.length; i++) {
    printContactInfo(contacts[i].name);
  }
}

/******************************************************************************
                                displayMainMenu()

  Display the main menu, with the following choices:
   1) Add Contact
   2) Remove Contact
   3) Update Contact
   4) Search Contact
   5) Print All Contacts
   0) Quit

  Based on what the user chooses, call the appropriate function. However, if
  the user chooses options 2 through 5 and they don't have any contacts, let
  them know and do nothing else (no point in wasting their time).

  If the user enters "0" (or anything else you want), set quit to true, which
  will prevent this function from running again in the run() loop.
*******************************************************************************/

function displayMainMenu() {
  console.log("Main Menu");
  console.log("1: Add Contact");
  console.log("2: Remove Contact");
  console.log("3: Update Contact");
  console.log("4: Search Contact");
  console.log("5: Print All Contacts");
  console.log("0: Quit");
  var choice = READLINE.question("Enter a value: ").trim();
  while(!(choice >= 0 && choice <= 5)) {
    console.log("Please make a valid choice.");
    choice = READLINE.question("Enter a value: ").trim();
  }
  console.log();
  if(choice >= 2 && choice <= 5 && contacts.length === 0) {
    console.log("You have no contacts.");
    console.log();
  } else if(choice == 1) {
    addContact();
  } else if(choice == 2) {
    removeContact();
  } else if(choice == 3) {
    updateContact();
  } else if(choice == 4) {
    searchContact();
  } else if(choice == 5) {
    printAllContacts();
  } else if(choice == 0) {
    quit = true;
  }
}

/******************************************************************************
                                run()

  This is the "main" function that runs the entire program. Here's what it needs
  to do, in order:
    1) Print a greeting.
    2) Setup global variables.
    3) While the global variable quit is set to false, display the main menu in
       an endless loop.
    4) Outside of the loop, print a goodbye message.
*******************************************************************************/

function run() {
  printGreeting();
  setup();
  while(!quit) {
    displayMainMenu();
  }
  console.log("Goodbye!");
}

// Run the program!
run();
