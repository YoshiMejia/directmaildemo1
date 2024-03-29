# CSV Converter Demo

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Usage](#usage)
- [Installation](#installation)

## Introduction

With this project, you can convert your CSV file to a folder full of HTML documents that will easily upload to the Lob interface. Choose from one of many templates and load up your CSV file. If you need to double check that you're selecting the correct template please navigate to the template gallery for a quick refresher on the different options available. This project is built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

## Features

- Next.js with Google Auth: Implements secure user authentication using Google Auth. This will eventually be refactored to allow only members of our Google Workspace to access the application.
- Quick CSV to HTML Conversion: Seamlessly convert CSV files to HTML format, allowing for easy data visualization and rendering.
- Easy ZIP Download: Download the converted HTML files as a compressed ZIP file for convenient sharing and offline use.
- Template Gallery: Browse and choose from a gallery of available templates for the HTML conversion, providing a variety of styling options and layouts.

## Usage

Navigate to the CSV upload form by clicking the "Convert" link at the top of the page. Here you will upload the CSV file you want to be converted to HTML. Please make sure you upload a valid CSV file and select the corresponding template (720v2 CSV file for the 720v2 template). Once you hit convert you will be prompted with a set of options:

- Download ZIP: This will download a ZIP file containing all the HTML files generated from the CSV file. This is useful for offline use and sharing.
- Delete conversions: This will clear out your current bucket of conversions. Currently the conversions persist across all sessions for multiple users. This will be refactored to allow for individual user buckets.
- Preview conversions: This will take the user over to the Previews page which prompts the user to fetch the files. This will bring up a list of all the current files that are in the conversion bucket. Clicking on any of the file links will open up a new tab with the HTML file rendered. This is useful for quickly checking the HTML files before downloading the ZIP file. To download simply click the button above the list of files.
- Convert more: This will simply reload the page and allow the user to upload another CSV file. This is helpful for when you want to convert multiple CSV files at once, but don't want to download the ZIP file each time and wait until you're done converting all the files to clear the bucket.

## Demo

dmd1.vercel.app

## Installation

```shell
$ git clone https://github.com/YoshiMejia/directmaildemo1
$ cd directmaildemo1
$ npm install
```
