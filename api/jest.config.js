// More info at https://redwoodjs.com/docs/project-configuration-dev-test-build#api-side-config

const config = {
  rootDir: '../',
  preset: '@redwoodjs/testing/config/jest/api',
  testEnvironment: 'jsdom',
}

module.exports = config
