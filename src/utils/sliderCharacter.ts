import { charactersData } from "../const/charactersData";

let to = 0;
let from = 3;

export default function sliderCharacter(type:string, cb:Function){
    to += type === "right" ? 3 : -3;
    from += type === "right" ? 3 : -3;

    if (from > charactersData.length) {
        to = 0;
        from = 3;
    }

    if (to < 0) {
        to = charactersData.length - 3;
        from = charactersData.length;
    }

    const start = Math.max(0, to);
    const end = Math.min(charactersData.length, from);

    cb(start, end);
}