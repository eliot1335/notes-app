const chalk = require("chalk")
const yargs = require("yargs")
const validator = require("validator")
const getNotes = require('./notes.js')
const { demandOption } = require("yargs")
const notes = require("./notes.js")

/*
const command = process.argv[2]

console.log(process.argv)


if (command === "add") {
    console.log("Adding Note!")
}

else if (command === "remove") {
    console.log("Removing Note!")
}
*/


// Customize yargs version
yargs.version("1.1.0")

// Create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
        // console.log("Title: " + argv.title)
        // console.log("Body: " + argv.body)
    }
})

// Create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        // console.log("Removing the note!")
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: "list",
    describe: "List your notes",
    handler: function() {
        console.log("Listing out all notes!")
    }
})

// Create read command
yargs.command({
    command: "read",
    describe: "Read a note",
    handler: function() {
        console.log("Reading a note!")
    }
})


// console.log(yargs.argv)
yargs.parse()