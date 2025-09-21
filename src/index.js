const fs = require("fs");
const child_process = require("child_process");

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

function lc_switch(value, against) {
    const entries = Object.entries(against);
    return entries
        .map((x, i) => {
            return `(if (= ${value} ${x[0]})
            ${x[1]}
            ${i + 1 < entries.length ? '(stop "this script")' : ""}
        )`;
        })
        .join("\n");
}

outputCode(`
(define
    (variable pc 1)
    (list registers)
    (list memory)
)
(procedure run_instruction (run_instruction (string instruction))
    ${lc_switch("(argument instruction)", {})}
)
(procedure run_program (run_program)
    (delete_all registers)
    (repeat 16
        (add "" registers)
    )
    (set pc 1)
    (forever
        (call run_instruction (item (variable pc) registers))
    )
)
`);
