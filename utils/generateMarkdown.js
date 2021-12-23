// Function that returns a license badge based on license choice
function renderLicenseBadge(license) {
  if (license == 'BSD 3-Clause License') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license == 'Boost Software License 1.0') {
    return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else if (license == 'Apache 2.0 License') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else {
    return ''
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license == 'None') {
    return ''
  } else {
    return '# License'
  }
}

// Function to generate markdown syntax
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  # Description

  # Instructions

  # Installation

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
