#! /usr/bin/env node

/**
 * Module dependencies.
 */

const program = require("commander")
const fs = require("fs")
const gotReadme = fs.existsSync("./readme.md")

program
  .version("0.1.0")
  .description("A readme style starter")
  .action(() => {
    // Check that we're in the correct directory
    if (gotReadme) {
      // Copy in the template
      fs.copyFile("newReadme.md", "readme.md", err => {
        if (err) throw err
        console.log("Your new Readme is ready to go!")
      })
    } else {
      console.log("Please run this command in the directory of your README.md file")
    }
  })
  .parse(process.argv)
