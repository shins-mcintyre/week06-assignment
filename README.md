# Image Gallery in React

## Requirements

<!-- 🎯 Implement the useState hook to manage gallery state (e.g. selected image). -->

<!-- 🎯 Use useEffect for initial fetching of images from an external API. -->

<!-- 🎯 Return JSX from multiple components (e.g., an ImageItem component for each image and a Gallery component to display them). -->
<!-- 🎯 Use the .map() function to render an array of images dynamically -->

<!-- 🎯 Implement functionality to display a larger version of an image when its thumbnail is clicked. -->

<!-- 🎯 Ensure all images have meaningful alt text. -->

🎯 Ensure basic keyboard navigation for image selection (e.g., thumbnails should be focusable and activatable with Enter/Space).

## Stretch Requirements

🏹 Use useEffect and the dependancy array to update the images when the user types in an input field.
🏹 Set up an Unsplash application that you can fetch from your React app.

<!-- 🏹 Use .env to hide your API keys and tokens from the code. -->

🏹 Style the application excellently, using grid or flex and positioning.

## Reflection

Please also provide an assignment reflection in your project README.md file.

1. The first thing I wanted to get done was the API from unsplash, which I really struggled with before. However from a mix of reading the Unsplash documentation, old lessons, and the chat with the class, I managed to figure out a way to get the photos on the page, which felt like a huge win for me as I thought that was going to cause more issues than it did

2. Next I wanted to get the UI in the place I wanted. I looked at lots of Image Gallery ideas online, and then taking inspiration from different ones came up with my own design for how I wanted it to look and sketched the desktop and mobile versions on paper as a guide for myself. I did some CSS styling and then tried to get the elements to sit where I wanted them on the page.This was more tricky than I anticipated - I feel this is still something I struggle with a bit - knowing how to arrange elements properly in CSS, especially for changing screen sizes etc. By Thursday eve I got this to a place that looks generally like my sketch, but I could return to later to further tidy if I have time

3. Friday morning it is time to add some logic - the first thing was to get the onClick working on the thumbnails. I knew this would be hard, as I felt I only partly grasped these concepts during the week. So I read back over the workshops, and my workshop code, to try and figure out the best way to do this. After a lot of trial and error, I managed to at least get the thumbnail click to console log a message of which photo id was clicked. Then had to go back to the lessons to figure out the state/rendering to actually get the image clicked to show. The way I tried it was not working, so I eventually pasted my code in chat gpt and I was really close but it explained exactly where I was going wrong:

I was using the const [photos, setPhotos] and it suggested creating a second const for the index of the photos- it said that photos is a list of all images while currentIndex is the variable for the currently displayed image, and by using photos in this function it would overwrite photos. Perhaps this is not in fact the best way to do things, but I wanted to try it and see if it worked and return to it if I had time (it did work!)

4. Next step was to add buttons to the large image to navigate through them. For this I followed the code we did in the state workshop that Tim went through with us creating one button component and assigning props to change the handler and text. This was quite seamless however an issue I had was one the 1st and last images the prev/next buttons didn't work respectively - I have set it up so that pressing prev on the 1st image shows the last image and so on, but I thought this was a good opportunity to use conditional rendering, to hide the prev button on the 1st image and hide the next button on the last. If I have time I will do this

5. Conditional rendering of buttons:

### Required

🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?

### Optional

🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?
