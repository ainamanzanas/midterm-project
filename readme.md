# # Frontend Midterm Project | Aina Manzanas


## Introduction

In this midterm project, I'm building and deploying my first fully responsive website using the technologies I've learned so far: HTML, CSS & JavaScript.

All pages created have the company's icon as a favicon and a SEO optimized Meta Title, also every link has the expected navigation, and non-existent pages land to the 404 page.

As per CSS animation, when the user hovers over the Logos and the Project and Services Cards they can see an animation making them slightly bigger, this helps to not have a static web design but also not overwhelm the user with too many options.

This project has 4 main pages, all designed to be responsive:

- Home Page
- Projects Page
- Contact Page 
- 404 Page

## 404 Page

Users land to this page when they click into a link that has no hosting page. Since we don't want to lose the traffic, we inform the user they've landed a 404 page, and they have a CTA in order to return home with ease. They can also still navigate through the nav bar and the footer.

## Home Page

There are 8 main Sections:

- Nav Bar: consists of the company logo, Home link, Projects link, Services link and a Contact Us CTA. The Contact Us CTA is hidden as per small screens design since we already redirect the user to the Contact Us page with the Get in contact CTA at the Hero Image section. Also, a hamburger menu was not necessary beacuse there's not a lot of content at the nav bar and is an extra step on navigation.

- Hero Image: composed by some introduction text, a hero image with two cards and two links to Contact Us and Projects pages.

- Logos: we added a grayscale to them and they have a small animation. They are displayed in a row for most all screen sizes and they transform into a column for small screens.

- Project Cards: three project cards with an image, text and CTA to Projects page, when the user hovers they can see a small animation. They are displayed in a row for big screen sizes, and they transform into a column for small screens.

- Testimonials: banner with a background color mixed with an image, four icons displayed on each corner and a review by a user to generate trust. It changes of size depending on the dispositive.

- Service Cards: three services cards with a round background with an icon, text and CTA to 404 page, when the user hovers they can see a small animation. They are displayed in a row for big screen sizes, and they transform into a column for small screens.

- Newsletter Subscription: banner with a background color, some text asking users to subscribe and a straight to the point form with a Subscribe CTA. It changes of size depending on the dispositive.

- Footer: Company logo and address section and 6 links are displayed on the footer, most of them go to 404 page except the project's one. They are displayed in a row and divided in four columns for big screen sizes, and they transform into a column for small screens.

As per **JavaScript** functionality in the Home Page nav bar, when the user clicks to Projects or Services they are immediately scrolled down to that section, and they can finally get there by clicking on the cards CTA (not for the services one since that page has not been built).

The other functionality in the newsletter section. When users type an email with the wrong format they get alerted, and if the format is good they receive a validation. 
Once they click the Subscribe CTA if the email was valid they receive an alert confirming the subscription, if not they receive an alert to inform them that the subscription was not made.


## Projects Page

There are 5 main Sections:

- Nav Bar: consists of the company logo, Home link, Projects link, Services link and a Contact Us CTA. The Contact Us CTA is hidden as per small screens design since we already redirect the user to the Contact Us page with the Get in contact CTA at the Hero Image section. Also, a hamburger menu was not necessary beacuse there's not a lot of content at the nav bar and is an extra step on navigation. What changes from the home is that Project and Services do not scroll to the section but send the user to the Project page (refresh) and the 404 page.

- Main Project: Title, text, image and project description. Responsive.

- Other Projects: Same properties as the home page.

- Newsletter Subscription: Same properties as the home page.

- Footer: Same properties as the home page.

We want to have the same properties and design in order to be aligned in all website and generate branding.


## Contact Us Page

This page has the Nav Bar without the Contact Us CTA since the user is already on that page, and the navigation links go to the right top in order to occupy the place left by the CTA.

The footer is aligned with the rest of the website and the main section is a contact form to generate leads, it is designed using responsive methods. And there's JavaScript logic set up in order for the user to complete the form properly and send the information to the API.

- First name input is required and if it's not filled, the user receives an alert. If the user sets his name as "Ironhack" and alert of “You cannot be Ironhack, because I am Ironhack.”

- Email input requires a proper format with @ and . if it's not filled correctly, the user receives an alert.

- Phone input only accepts between 8 and 10 numbers phone numbers, if the user tries to submit anything outside the requirements they receive an alert.

- If message section is not filled the user receives an alert informing they can't submit the form if that input is empty, here's the alert message.

- If the user fills out all the inputs in the correct way when they click submit, they get an alert saying Form submitted successfully!


