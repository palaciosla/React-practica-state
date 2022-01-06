export const actions = [
    {
        id: "lowercase",
        action: text => text.toLowerCase()
    },
    {
        id: "uppercase",
        action: text => text.toUpperCase()
    },
    {
        id: "blink",
        action: text => text.blink()
    },
    {
        id: "bold",
        action: text => text.bold()
    },
    {
        id: "italics",
        action: text => text.italics()
    },
    {
        id: "strike",
        action: text => text.strike()
    }
]
