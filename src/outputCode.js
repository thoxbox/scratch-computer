import fs from "fs";
import child_process from "child_process";

function outputCode(code) {
    fs.writeFileSync(`build\\output.scra`, code, "utf-8");
    child_process.exec(
        `lascra Sprite1.sprite3 --remove output.scra`,
        { cwd: "build" },
        (_, stdout) => {
            console.log(stdout);
        }
    );
}

export default outputCode;