import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateGame } from "./types/checkers/checkers/tx";
import { MsgCreatePost } from "./types/checkers/checkers/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/sdavidson1177.checkers.checkers.MsgCreateGame", MsgCreateGame],
    ["/sdavidson1177.checkers.checkers.MsgCreatePost", MsgCreatePost],
    
];

export { msgTypes }