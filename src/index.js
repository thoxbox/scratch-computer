import outputCode from "./outputCode.js";

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
