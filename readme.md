<!-- Question-1 -->


1. getElementById
        In js this finds an element with one unique id assigned to a html tag.

2. getElementByClassName
        This finds element or elements assigned a same class. To work with multiple elements we need to loop through them.

3. querySelector
        querySelector searches for an id, tag, element, or class and returns the first matched query.

4. querySelectorAll
        Works same as querySelector but instead of returning the first element matching the query it returns all the elements matching the query 


<!-- Question-2 -->

To create and insert a new element into the DOM we first need to create the element with document.createElement() and inside the 1st bracket we can put element and we need to keep the document.createElement() inside a variable now we can use appendChild() to inset this element into the DOM.


<!-- Question-3 -->


Event bubbling means when something happens (like a click) on a small element, that event also cover-up its bigger containers. It starts at the element you clicked and then goes up through its parents, one by one, until the whole page. Parents can catch the event too, it goes on the whole page until we stop it.


<!-- Question-4 -->


Event delegation means putting one event listener on a parent element instead of giving many listeners to its children. As something happens on a child element, the event bubbles up, and the parent handles it.



<!-- Question-5 -->


preventDefault() stops the browser from carrying out its normal action for an event, like for submitting a form it stops the page from refreshing , while stopPropagation() prevents the event from moving through the DOM, so it doesn’t trigger handlers on parent or child elements.

