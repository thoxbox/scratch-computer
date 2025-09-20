const fs = require("fs");
const child_process = require("child_process");

function outputCode(code) {
    fs.writeFileSync(`build\\output.scra`, code, "utf-8");
    child_process.exec(
        `lascra Sprite1.sprite3 output.scra`
        , { cwd: "build" });
}

outputCode(`(when flag
    (ask "Test")
)`);