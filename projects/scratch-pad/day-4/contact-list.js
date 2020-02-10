// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //

function makeContact(id, nameFirst, nameLast) {
    //Create an empty object
    var inputContact = {};
    //Add the key value pairs to the object
    inputContact.id = id;
    inputContact.nameFirst = nameFirst;
    inputContact.nameLast = nameLast;
    return inputContact;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    // Create an array to hold the contacts objects
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        // Create a key value pair that has length as its key and has as its value pair a function that returns the value of contacts.length
        
        length: function() {
            return contacts.length;
        },
        // Create a key value pair that has addContact as its key and has as its value pair a function that pushes the argument contactObject to the contacts array 
        
        addContact: function(contactObject) {
            contacts.push(contactObject);
        },
        // Create a key value pair that has findContact as its key and has as its value pair a function that takes the argument fullName
        // Iterate through the contacts array to see if fullName === any elements in array & return the contact object if found & returns undefined if doesn't match anything in the list 
        
        findContact: function(fullName) {
            //Iterate through the contacts array
            for(let i = 0; i <= contacts.length - 1; i++) {
                // if contacts[i].nameFirst + contacts[i].nameLast (the value of the nameFirst of the object concatenated with the value of the nameLast of the object === fullName
                // return the object at that index from the contacts array
                if (contacts[i].nameFirst + " " + contacts[i].nameLast === fullName) {
                    return contacts[i];
                } else {
                    return undefined;
                } 
            }
            
        },
        // removeContact(contact): takes a contact object to be removed from the contact-list.
        // Create a key value pair that has as its key removeContact and takes the argument contactObject & removes that object from the contacts array  
        //splice() --> removes an object from an array at a specific index
        //Use a for loop to iterate through the contacts array of objects
        //if contacts[i] (the object at the i index) is === input contactObject, delete the object at the i index of contacts
        removeContact: function(contactObject) {
            for(let i = 0; i <= contacts.length - 1; i++) {
                if (contactObject === contacts[i]) {
                    contacts.splice(i, 1);
                }
            }    
        },
        
        // Create a key value pair that has as its key makeContactList and as its key value a function that prints as a string the full names of students with a \n between each full name
        //Use the join method on the array to turn the array into a string with "\n" within the join() to create a line break
        printAllContactNames: function() {
            //Create and empty array called fullNameArray
            var fullNameArray = [];
            //Iterate through the contacts array using a for loop and push contacts[i].nameFirst + " " + contacts[i].nameLast to an array called fullNameArray
            for(let i = 0; i <= contacts.length - 1; i++) {
               fullNameArray.push(contacts[i].nameFirst + " " + contacts[i].nameLast);
            }
            //Use the join method to turn the array of full name strings into a single string with the spacer "\n" in the parentheses to create a line break 
            return fullNameArray.join("\n");
        }
     }
  }





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
