// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if(license!=="none"){    return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`;}
return``


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if(license!=="none"){return`- [License](#license)`}
return``


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if(license!=="none"){return`## License\nThis project is licensed under the ${license} license.`}
return``



}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of contents
- [Istallation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
${renderLicenseLink(data.license)}
- [Testing](#testing)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Testing
${data.testing}

## Contributing
${data.contribute}

${renderLicenseSection(data.license)}

## Testing
${data.testing}

## Questions
if you have any questions you can email me at ${data.email}
if you want to see more of my work visit my github page at [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
