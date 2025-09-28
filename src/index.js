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
function lc_broadcast_switch(value, against, wait = false) {
    Object.entries(against).forEach((x) => {
        Top.broadcast(x[0], x[1]);
    });
    return `(${wait ? "broadcast_wait" : "broadcast"} ${value})`;
}

Top.definition(`
    (variable pc 1)
    (list registers)
    (list memory
        "halt"
    )
`);
Top.procedure("run_program", "", `
    (delete_all registers)
    (repeat 16
        (add "" registers)
    )
    (set pc 1)
    (forever
        ${lc_broadcast_switch("(item (variable pc) memory)", {
            halt: "(stop all)",
        })}
    )
`);
outputCode(Top.output());
