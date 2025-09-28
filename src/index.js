import outputCode from "./outputCode.js";
import Top from "./Top.js";

function lc_switch(value, against) {
    return Object.entries(against)
        .map((x, i, arr) => {
            const doBreak = !(i + 1 === arr.length || x[1].includes("(stop "));
            return `(if (= ${value} ${x[0]})
                ${x[1]}
                ${doBreak ? '(stop "this script")' : ""}
            )`;
        })
        .join("\n");
}

Top.definition(`
    (variable pc 1)
    (list registers)
    (list memory
        "halt"
    )
`);
Top.procedure("run_instruction", "(string instruction)", `
    ${lc_switch("(argument instruction)", {
        halt: "(stop all)",
    })}
`);
Top.procedure("run_program", "", `
    (delete_all registers)
    (repeat 16
        (add "" registers)
    )
    (set pc 1)
    (forever
        (call run_instruction (item (variable pc) memory))
    )
`);
outputCode(Top.output());
