import { Injectable } from '@angular/core';

const morseCode = {
    "a": "._", "b": "_...", "c": "_._.", "d": "_..",
    "e": ".", "f": ".._.", "g": "__.", "h": "....",
    "i": "..", "j": ".___", "k": "_._", "l": "._..",
    "m": "__", "n": "_.", "o": "___", "p": ".__.",
    "q": "__._", "r": "._.", "s": "...", "t": "_",
    "u": ".._", "v": "..._", "w": ".__", "x": "_.._",
    "y": "_.__", "z": "__..", " ": " ",

    "1": ".____", "2": "..___", "3": "...__", "4": "...._", "5": ".....",
    "6": "_....", "7": "__...", "8": "___..", "9": "____.", "0": "_____"
}

export interface DataPoint {
    name: string;
    value: number;
}

export interface BigData {
    pieData: DataPoint[];
    dotSeries: DataPoint[];
    dashSeries: DataPoint[];
}

@Injectable()
export class MorseService {

    public translate(msg: string): string {
        return msg.split("")
            .map(char => morseCode[char.toLocaleLowerCase()])
            .join(" ");
    }

    public getBigData(msg: string): BigData {
        const code = this.translate(msg);
        const res = {};
        const dotSeries: DataPoint[] = [{ name: "0", value: 0 }];
        const dashSeries: DataPoint[] = [{ name: "0", value: 0 }];
        let count = 1;

        code.split('').forEach((char, i, arr) => {
            res[char] = res[char] ? res[char] + 1 : 1;
            if (char === " " || i === (arr.length - 1)) {
                dotSeries.push({ name: count + "", value: res["."] || 0 });
                dashSeries.push({ name: count + "", value: res["_"] || 0 });
                count++;
            }
        });

        const pieData = [
            { name: "dot", value: res["."] },
            { name: "dash", value: res["_"] },
            { name: "space", value: res[" "] }
        ];

        return { pieData, dotSeries, dashSeries };
    }
}