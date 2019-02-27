# Advanced Programming - Field Suggestions

## 1. Assignment
Make it so that when the user starts typing into the field `<input type="text" id="state" name="state">`, the site should
"suggest" what state they might have started typing. 

Suggested state names should be shown in the div `<div class="suggestions">`, and
when the user clicks one, the suggestions should dissappear and the field should be filled with the state name that was clicked.

Style it nicely.

## 2. Extra credit
Make this into your own plugin. If I were doing this, I'd make it so that a developer could have the form there in the html, and just call some JS to apply an array of suggestions to a field. 

Something like this:

    // make the #suggestions field suggest states in the array
    suggestify('#suggestions', ["Alabama", "Alaska", ...]);