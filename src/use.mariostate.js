import { useState } from 'react';

export default function useMarioState() { // This is a custom, global hook.
    let [marioState, setMarioState] = useState({
        brother: "mario",
        super: false,
        fire: false,
        invincible: false,
        invinciTimer: 0,
        alive: true,
        points: "000000",
        lives: 3,
        coins: 0,
        timer: 100,
    });

    return { marioState, setMarioState };
}