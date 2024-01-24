function generateMarkdown (data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  To install dependencies, run the command:
  ${data.install}

  ## Usage 
  ${data.usage}

  ## License 
  ${data.license}

  ## Contributing 
  ${data.contribution}

  ## Tests
  To run tests, run the command:
  ${data.test}

  ## Questions
  Any questions about the project contact me at ${data.email}. See more of my projects at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
