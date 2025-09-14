const fs = require("fs");
const child_process = require("child_process");

function outputCode(code) {
    const root = "C:\\Users\\Ann\\Downloads\\Websites\\lascra-project\\build\\";
    fs.writeFileSync(`${root}output.scra`, code, "utf-8");
    child_process.exec(
        `${root}lascra ${root}Sprite1.sprite3 ${root}output.scra`
    );
}

outputCode(`(when flag
    (ask "Test")
)`);