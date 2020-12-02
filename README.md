## Interactive Frontend Development Milestone Project 2 -- Reservations of Northshore

Have been living in Northshore of Massachussetts for more than 30 years I really enjoyed these Reservations thanks to the Trustess of Reservations and Greenbelt of Essex County's Land Trust.  I hope this website will let users get to know these beautiful places in Northshore and come to visit, enjoy the nature and histroy, become a member and support these wonderful organizations.

My website can be accessed [here](https://suping106.github.io/MS2-NorthShore-Reservations/)

## UX

### As a user
- I can see the markers of these Reservations on Google Map.
- I can click on the marker and see a info window.
- I can access the info page for each Reservation.
- I can contact website owner through email.
- I can sign up to be a member.
- I can navigate through different sections in the page.

### As a website owner
- I want people to know and visit these beautiful places.
- I want to share the photos I took over the years.
- I hope people would like to become a member and support these two land reserve organizations.

### Responsive design
User can browse this website on different devices.

<img src="./assets/images/responsive-img.png" alt="responsive-img"/>

<img src="./assets/images/responsive-img2.png" alt="responsive-img2"/>

## Wireframes

I used Figma to creat the wireframes for the original design of the project. During the development phase some modifications and improvements were made to the project when I moved along. 

<img src="./assets/images/wireframe-ms2.png" alt="Wireframe-MS2"/>

Link to my original wireframes is [here](https://www.figma.com/file/2a5UR6GjIVR26Z2MoWQAEx/LongHill?node-id=0%3A1)

## Features

### Existing Features

- Navbar – On each page there is a Navbar on the top which allow the user to navigate between different pages.
- Footer – There is a Footer area on each page with few social media icon links. Unfortunately there are no social media site for Long Hill at this point. All icon link to the Trustees website. I put them there just to show my understanding of the subject.
- Home page – is the landing page with a picture of Long Hill and three buttons that will take the user to Discover page, location map and signup page.
- Discover page – has a little history of the estate and photos with text wrap around images. Original design was to have a paragraph of the history and four photo links for the four seasons. Since I do not have the knowledge to handle large amount of photos using database I put a photo slides at the bottom of the page.
- Join us page – is the place to signup to become a member. Each field required to fill up before submission.
- Responsive design

### Future Features

- Photo gallery

## Technologies Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5) - used for project development 
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - used for custome styling the elements.
- [GidPod](https://www.gitpod.io/) - used online IDE for project development, code writing and editing
- [Gidhub](https://github.com/) - used for project repository and version control
- [Bootstrap 4](<https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)>) - used it's library templetes for navbars, buttoms and form.
- [Google Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools) - used throughout project development for checking the responsiveness and debugging.
- [Figma](https://www.figma.com/) for creating project wireframes.
- [Fontawesome](https://fontawesome.com/) - used for providing social media icons.
- [Javascript](https://www.javascript.com/)

## Testing

### Code Validation
HTML code for all pages and CSS stylesheet were validated on [W3C Validator](https://validator.w3.org/nu/#textarea). Errors were corrected.
Errors of stray start tag were found. Errors were corrected by moving script links inside the body.

CSS stylesheet were validated on [W3C Validator](https://validator.w3.org/nu/#textarea). No error found.

### Responsiveness
Responsiveness of the site was tested using [Chrome devtools](https://developers.google.com/web/tools/chrome-devtools) and [Responsive Design Checker](https://responsivedesignchecker.com/#home)

<img src="./assets/images/responsive-test.png" alt="responsive-test"/>

### Browser Compatibility
Compatibility of the site was tested on Google Chrome, Microsoft Edge and Firefox.

<img src="./assets/images/compatibility-test.png" alt="compatibility-test"/>

### Testing User Stories
#### As a user
- I can read about the history of this property.
    * by navigating to **Discover** page through **Discover** link on the navbar or the sandwich menu
    * or by clicking **Discover** button on home page

- I can see the photos in different seasons.
    * by viewing photo slides at the bottom of **Discover** page

- I can find directions to the estate. 
    * by clicking **Map** button on the **Home** page to access property location on **Google Maps**
    * or getting direction from **Discover** page
- I can contact Trustess through email or phone.
    * by using the email address and phone number listed on each page right above the Footer
- I can sign up to be a member.
    * by navigating to **Join Us** page through the link on navbar or sandwich menu and filling up the signup form
    * or by clicking **Join Us** button on **Home** page and filling up the signup form
    
- I can navigate through pages.
    * by clicking the links on navbar of each page or sandwich menu
- I can browse Trustees social media sites.
    * by clicking the icons at the Footer of each page

#### As a website owner
- I want people to know and visit this beautiful place.
    * by reading the history on **Discover** page.
    * by viewing the photo slides on **Discover** page
    * by browsing Trustess social media website through the icons on the Footer

- I want to share the photos I took over the years.
    * by the photo slides on **Discover** page
- I hope people would like to become a member and support the trustees.
    * by signing up on **Join Us" page

### Bugs
* Active page was not highlighted. Bug fixed by adding "active" class and now the active page is highlighted. 
* Images were taken over the whole screen. Bug fixed by adding "class="img-fluid" to the image tags and now images are responsive. 

## Deployment
The website was deployed to GitHub pages. Link to the site is [here](https://github.com/suping106/MS2-NorthShore-Reservations).

Deployment was done by 
* Logging in to GitHub
* Locating Milestone2 project repository
* Clicking on the settings tab 
* Navigating to "Github pages" section
* Changing the source from none to master branch
* Website was published and link to the website was shown

Clone the repository
* Log in to GitHub
* Locate Milestone2 project repository
* Click the green "Code" button right next to "Gitpod" button
* Copy the link shown on the popup window under "Clone with HTTPS" 
* In Gitpod teminal window make a new directory on your computer
* At the command promt type git clone https://github.com/suping106/milestone1.git
* Press enter
* Local clone repository will be created

## Credits

### Content

- The Trustees of Reservations information and some photos were from [The Trustees of Reservatios](http://www.thetrustees.org/).
- Greenbelt of Essex County's Land Trust information and some photos were from [Greenbelt of Essex County's Land Trust](https://ecga.org/)

### Code
- The code for Navbar was modified from [getbootstrap.com](https://getbootstrap.com/docs/4.0/components/navbar/).
- The code for the Map and Sign Up form was modified from the source code of Interactive Frontend Development module .

### Media

- Most of the photos are owned by me and few of them were downloaded online.

### Acknowledgements

- I would like to thank my mentor [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/) for his support, help, patience and encouragements. I am also grateful for the helps from tutors and slack members.
