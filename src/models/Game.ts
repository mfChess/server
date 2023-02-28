import mongoose from "mongoose";

import { Schema, Types } from "mongoose";

interface MoveType {
    fen: string,
    color: string,
    piece: string,
    from: string,
    to: string,
    san: string,
    lan: string,
    flags: string,
}

const MoveSchema = new Schema<MoveType>({
    fen: {type: String, required: true},
    color: {type: String, required: true},
    piece: {type: String, required: true},
    from: {type: String, required: true},
    to: {type: String, required: true},
    san: {type: String, required: true},
    lan: {type: String, required: true},
    flags: {type: String, required: true},
});


const MoveModel = mongoose.model<MoveType>('Message', MoveSchema)


export {MoveType}