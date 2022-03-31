import { useState } from "react"

export const useSearch = () => {
    const [text, setText] = useState('');

    return {
        setText,
        text,
    }
}