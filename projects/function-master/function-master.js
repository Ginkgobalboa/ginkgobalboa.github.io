//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function that takes an object and returns its values in an array
function objectValues(object) {
    //create an empty array
    let array = [];
    // use a for-in loop to loop over the key-value pairs in the object
    for (let key in object) {
        // push the object values to the array
        array.push(object[key]);
    }
    //return the array of object values
    return array;
}
//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// this function should take object as the parameter and return all of its keys
// in a string separated by a space
function keysToString(object) {
    // make an empty array to contain the object keys
    let objectKeyArray = [];
    //using a for-in loop, loop through the object keys
    for (let key in object) {
        //push the object keys to an array
        objectKeyArray.push(key);
    }
    // use join() to turn the array into a string 
    return objectKeyArray.join(" ");
}
//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Create a fucntion that takes an object and loops through all
// key/value pairs.  If value is a string, add value to new string.
// Values should be separated by a space
function valuesToString(object) {
    //create an empty array to contain the key values that are strings
    let arrayValues = [];
    //use a for-in loop to loop over the key-value pairs in the object
    for (var key in object) {
        // if the key value type === "string"
        if (typeof object[key] === 'string') {
            //push the object key to arrayValues
            arrayValues.push(object[key]);
        }
    }
    //use the join method to turn the array into a string and return it
     return arrayValues.join(' ');
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a function that will take an argument and return "array" if it's an
// array and return "object" if its an object
function arrayOrObject(collection) {
    //if the collection is an array, return "array"
    if (Array.isArray(collection) === true) {
        return "array";
    //otherewise, return "object"
    } else {
        return "object";
    }
}
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function that takes a single word string as and input and capitalizes the first letter of the string
function capitalizeWord(string) {
    // return (concatenated) the first letter in the string capitalized and the sliced remainder of the string
    return string[0].toUpperCase() + string.slice(1, string.length);
}
//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a function that capitalizes the first letter of all words in a string
function capitalizeAllWords(string) {
    // set all letters in the string to lowercase and then split the string into an array 
    // where each element in the array is a word in the string
    var splitString = string.toLowerCase().split(' ');
    // use a for loop to loop over the array
    for (let i = 0; i <= splitString.length - 1; i++) {
        // set each element equal to the concatenated first character of the string capitalized + the rest of the string
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
    }
    //use the join method to turn the array back into a string
    return splitString.join(' ');
}
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object with a name property and return 'Welcome <Name>!'
// 
function welcomeMessage(object) {
    // return a concatenated statement utilizing the capitalizeWord function created in a 
    //previous exercise
    return "Welcome" + " " + capitalizeWord(object.name) + "!"; 
}


//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object with a name an a species and return '<Name> is a <Species>'
//
function profileInfo(object) {
    // return a concatenated statement utilizing the capitalizeWord function created in a 
    //previous exercise
    return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'
//
function maybeNoises(object) {
    // if object has the property of noises and the length of the noises array is > 0
    if(object.hasOwnProperty("noises") && object.noises.length > 0) {
        // return the noises array joined into a string and separated by a space
        return object.noises.join(" ");
    // otherwise, return "there are no noises"
    } else {
        return "there are no noises";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take string of words and word and returns true if a string of words contain string.  Otherwise, retrun false.
function hasWord(string, word) {
    // if the result of string.search(word) is > 0 (i.e. there is an instance of the word), return true
    if (string.search(word) > 0) {
        return true;
    // otherwise, return false
    } else {
        return false;
    }
}
//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Write a function that takes a name and an object   
function addFriend (name, object) {
    // Push the the name to the object's friends array.
    object.friends.push(name);
    //Return the object.
    return object;
}
//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// should take a name and an object.  Return true if name is friend of object; otherwise, return false.
function isFriend(name, object) {
    //if the object has the property of friend and the index of name in the friends array is > 0, return true
    if (object.hasOwnProperty('friends') && object.friends.indexOf(name) > 0) {
        return true;
    //otherwise, return false
    } else {
        return false;
    }
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// should take a name and a list of people and return a list of all names that name is not friends with
function nonFriends(name, array) {
    // create and empty array called strangers
    let strangers = [];
    //use a for loop to loop over the input array of objects
    for (let i = 0; i < array.length; i++) {
        // if the name value of the i index of an object doesn't equal the input name and the index of the the name exists 
        if (array[i].name !== name && array[i].friends.indexOf(name) === -1) {
            //push the name to the strangers array
            strangers.push(array[i].name);
        }
    }
    // return the strangers array
    return strangers;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
// Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
     //update the property on a object if it exists; if it doesn't exist, create it
     object[key] = value;
     return object;
 }

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>

function removeProperties(object, array) {
    // use a for loop to loop over the input array
    for (let i = 0; i < array.length; i++) {
        //if the object has the property listed in the input array of strings
        if (object.hasOwnProperty(array[i])) {
            // delete the property of the object
            delete object[array[i]];
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an array and return an array with all the duplicates removed
function dedup(array) {
    // use the filter method to remove the duplicates in an array and return a new array
    return array.filter((item, index) => array.indexOf(item) === index);
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}