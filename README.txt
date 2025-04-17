Project Summary: Polylingua is a front-end project designed to replicate the Duolingo website-Dark theme. My emphasis was placed on several components: the navigation bar, progress indicator, shop, and the arrangement of the course page. I concentrated on the structural layout, responsiveness, and visual consistency.

Responsive Sidebar  
On larger screens, a fixed vertical sidebar is located on the left side, extending the full height of the viewport. An animation effect was implemented, causing the sidebar to expand in width when hovered over, along with an animation effect for the brand logo.

On smaller screens, the sidebar relocates to the bottom, evolving into a horizontal navigation bar that extends across the full width and displays only icons.

This differs from Duolingo in that, by default, the navigation bar on larger screens is wide but narrows in width as the screen size decreases, displaying only icons. When the screen becomes smaller still, the navigation bar shifts to the bottom of the viewport, occupying the entire width while also displaying only icons.

Navigation Elements  
Branding: I made a brand logo using an emoji that includes text along with the site title, Polylingua.

The Navigation Links transition to the following four pages: 

Home  
Shop  
Languages  
Contact Us

Note: the navigation bar was primarily developed using CSS.

Home Page:
The Home Page of Polylingua provides users with the platform and includes interactive features. Although it does not closely mirror the homepage of Duolingo, it is influenced by Duolingo's progress bars located on it's Quests page for tracking language learning.

Hero Section  
At the top of the webpage, a prominent banner greets users:  

"Polylingua: Learn. Speak. Connect."  

It features:  

A brief introductory statement  

A call to action: “Start Practicing”, which guides users to the practice section via button and subsequently to my language page.

Note: Hero Section theme was duplicated on all other pages.

Feature Carousel
Below the hero section, a carousel showcases key features of the platform

Practice Categories  
A responsive grid presents four practice categories along with a progress bar:  

Aramaic – 60% completed  

Greek – 45% completed  

Hebrew – 75% completed  

Latin – 20% completed

Every tile comprises:

A themed emoji

A Bootstrap progress bar that reflects the learning progress

A timestamp indicating the most recent practice session

This was is directly influenced by the language progress bar displayed on Duolingo's quest page.

Reminder Section  
At the end of the page, there is a prompt that employs emotional appeal, commonly associated with the responsive Duolingo icon as it shifts emotions, and is designed to re-engage the user:  

It presents an emotional and humorous message conveyed through emojis.  

Additionally, it features another call-to-action button encouraging users to persist in their practice and directs them to the language page to select their course.

Language Page:
The Language Page features an identical visual design and layout to that of my homepage. Case in point, mirroring the theme of the hero section.

Contact Form
Below the hero section is a contact form, developed with the Bootstrap accordion component. Each field in the form is collapsible, with the first section expanded. The sections consist of:

Full Name – Required text input

Email Address – Required email input with validation

Phone Number – Optional telephone field

Your Message – Required text for user feedback

The accordion design guarantees that each input remains separate. 

A button is also provided to submit the input.

Shop Page
The Shop Page is structured with a consistent hero section and interactive Bootstrap tables.

Product Tables
Each product category is displayed with pertinent details in a Bootstrap-styled table, providing descriptions and purchasing options. This mirrors the layout of Duolingo's Shop page.


Each product row includes:

An emoji for visual identification

Product name and short description

A call-to-action button.

All tables use the table-dark and table-responsive classes to ensure mobile-friendly responsiveness and consistent visual design.

Language Page
The Language Page displays a variety of language courses for English speakers in a layout similar to Duolingo's course page, employing Bootstrap Cards and meeting the criteria of using at least three Bootstrap components.

Language Course Cards
Courses are displayed in a responsive grid layout using Bootstrap’s grid system (row, col-6, col-md-3) ensuring optimal viewing across screen sizes.

Each language card includes:

A flag or cultural image

Course Title (e.g., Spanish, Japanese, Greek)

Learner Count (e.g., "49.8M learners")

A Call-to-Action Button to start the course


JavaScript Function Overview – Polylingua  
Four JavaScript functions were developed. Each function is related to the website's functions (language learning, form validation, user rewards, etc.).

1. updateProgress(language, newProgress)
Purpose: Updates the user’s progress in a specific language.
Context: This would reflect on a homepage progress bar.

2. validateForm(userName, email, phone, message)
Purpose: Validates a user's contact form submission.
Context: Contact Us page submission check.

3. getLanguageLearners(language)
Purpose: Retrieves learner count for a selected language.
Context: Used on the Language Courses page.

5. buyStreakFreeze()
Purpose: Simulates purchasing a power-up in the site shop.
Context: Part of a gamified system.


Bootstrap Signature Colors Used:
Utilized btn-outline-warning along with various shades of primary, secondary, and dark

Feedback from the previous call  that has been addressed:

- A common CSS page has been created.  
- A default font was applied in the common.css.  
- A JavaScript page was made for each HTML page, despite them not being linked.  
- Subfolders for JavaScript, CSS, and images have been created; however, an HTML folder was not created due to interference with the live server feed.  
- Lowercase and kebab-case conventions have been used for attributes and file names.

Feedback from the previous call indicates ongoing challenges, particularly with responsiveness on smaller screens. Despite, media queries remaining an opportunity, I have become familiar with the toggle device toolbar and the element inspection tools within the developer tools. 

Learning:
Utilized command line tools (WSL, Bash, CMD, PowerShell) to navigate directories and perform file operations such as create, delete, rename, and move.

Technologies used:

HTML
CSS
Bootstrap
JavaScript
Command Line

Challenges: 
Included issues with media queries and difficulty in adapting formats for smaller screens, resulting in text and buttons extending beyond their containers. Although my table faced similar issues, I discovered that Bootstrap's responsive table somewhat alleviated the problem. Additionally, I encountered challenges with my navigation bar, which took the most time to address. Components such as tables and cards did not respect to the layout, the hover effect and overlapped my navigation bar. Ultimately, I learned that adjusting the Z-index attribute resolved the issue by changing it to z-index-2.


References:
Copilot-Assisted with README formatting and structure

https://emojipedia.org/en/search?q=latin-Source for emoji icons
https://www.duolingo.com/courses-Main site used as design inspiration
https://getbootstrap.com/- Documentation for Bootstrap components
Chatgpt-Provided starter code and research support
Bing Image Generator (DALL·E) – Used for generating images
https://youtu.be/biOMz4puGt8?si=qQzjiEmAuzgMULSd-Fireship-navbar-Navbar tutorial
https://www.youtube.com/@Fireship-Youtube creator and general reference for web development tips