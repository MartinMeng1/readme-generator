// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return ""
  }
  else{
    switch (license) {
      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'Apache 2.0':
        return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'GPL 3.0':
        return '[![License: GPL 3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return ""
  }
  else{
    switch (license) {
      case 'MIT':
        return 'https://opensource.org/licenses/MIT';
      case 'Apache 2.0':
        return 'https://opensource.org/licenses/Apache-2.0';
      case 'GPL 3.0':
        return 'https://www.gnu.org/licenses/gpl-3.0';
  }
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return ""
  }
  else{
    return `This application is covered under ${license} and link to the license is ${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}

  # <${data.title}>

  ## Description

  ${data.description}

  ## Table of contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#contributing)
  - [License](#license)
  - [Description](#description)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribution}

  ## License

  ${renderLicenseSection(data.license)}

  ## Tests

  ${data.test}

  ## Questions
  
  Github UserName: https://github.com/${data.username}
  Email Address: ${data.email}



`;
}

module.exports = generateMarkdown;
