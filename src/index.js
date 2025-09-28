import outputCode from "./outputCode.js";
import Top from "./Top.js";

function lc_switch(value, against) {
    return against
        .map(([key, value], i, arr) => {
            const doBreak = !(i + 1 === arr.length || value.includes("(stop "));
            return `(if (= ${value} ${key})
                ${value}
                ${doBreak ? '(stop "this script")' : ""}
            )`;
        })
        .join("\n");
}
function lc_broadcast_switch(value, against, wait = false) {
    against.forEach(([key, value]) => {
        Top.broadcast(key, value);
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
        ${lc_broadcast_switch("(item (variable pc) memory)", [
            ["halt", "(stop all)"],
        ])}
    )
`);
outputCode(Top.output());
