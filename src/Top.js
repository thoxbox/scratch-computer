class Top {
    static top = "";
    static define = "";
    static broadcast(name, code) {
        this.top += `(when (received ${name})
            ${code}
        )`;
        this.define += `(broadcast ${name})`;
    }
    static definition(definition) {
        this.define += definition;
    }
    static procedure(name, args, code, options = {}) {
        const runWithoutScreenRefresh = options.rwsr;
        this.top += `(${
            runWithoutScreenRefresh ? "function" : "procedure"
        } ${name} (${name} ${args})
            ${code}
        )`;
    }
    static output() {
        return `(define
            ${this.define}
        )
        ${this.top}`;
    }
}

export default Top;