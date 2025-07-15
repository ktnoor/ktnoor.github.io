# Update the content of the website

## Site banner

Information about the site banner can be found in the [_layouts/archive.html](_layouts/archive.html) file.

## Home/profile page

The content of the home page is located in the [_pages/about.md](_pages/about.md) file.

## Publications page

The content of the publications page is located in the [_pages/publications.html](_pages/publications.html) file.

> To update the publications page, modify the content in the [_publications](_publications/) directory.

## Experience page

The content of the experience page is located in the [_pages/experience.md](_pages/experience.md) file.

> To update the experience page, modify the content in the [_experience](_experience/) directory.

## Blog posts

The content of the blog posts page is located in the [_pages/year-archive.html](_pages/year-archive.html) file.

> To update the blog posts,
    > 1. Create a new markdown file in the [_posts](_posts/) directory.

## CV

The content of the CV page is located in the [cv.md](_pages/cv.md) file.

> To update the CV in PDF format,
    > 1. Update the content [KTNoor_CV.pdf](files/KTNoor_CV.pdf) in the [files](files/) directory.
    > 2. Make sure to Keep the file name as `KTNoor_CV.pdf`.

## Email Signature

The content of the email signature is located in the [email-signature](email-signature/) directory.

This will contain the assets used in the email signature, such as images and logos.
> To update the email signature,
    > 1. Include the assets (images, logos, etc.) in the [email-signature](email-signature/) directory. Generally in `PNG` or `JPG` format.
    > Update the [_data\email-signature.yml](_data/email-signature.yml) file with the new content using the [update-email-signature-data.sh](./update-email-signature-data.sh) script. Just run the following command in the terminal:

    ```bash
     ./update-email-signature-data.sh
    ```
