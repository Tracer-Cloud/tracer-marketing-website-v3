# How To Finish The Landing NextJS TSX Project 
Blocker:

Vincent needs to upload his changes to Github in marketing-landing-page-v3. 

This is quite challenging due to the size of the images. 

That is why we move the images one by one to the main project.

Quote requested for: 

Refactoring and reworking of the LandingPage. 

Further Todo's: 

The landing page needs to be reworked visually and refactored. 
refactored to adhere to standard NextJS tsx practices (data should not be split from the component. It should be in the component)

The landing page needs to be reworked post merge.

The links in the footer don't work.

We need to add content for the about us page

The Technology page needs to be tuned post merge. 

Co-Locate The Data With The Component

Since most of these arrays or objects are used only in one component, inlining them within the component file improves discoverability and reduces cross‑file navigation. 

For example, move the footerLinks constant directly into FooterSection and navItems into NavbarSection. This keeps the component self‑contained and aligns with the request to avoid splitting data from the component.
