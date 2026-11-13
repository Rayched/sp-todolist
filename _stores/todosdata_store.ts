import { I_ToDo } from "@/app/_fetchs/CreateToDo";
import { todo } from "node:test";
import { create } from "zustand";

interface I_ToDosDataStore {
    ToDosData: I_ToDo[];
    deClareToDo: (todos: I_ToDo[]) => void;
    addNewToDo: (newValue: I_ToDo) => void;
};

export const ToDosDataStore = create<I_ToDosDataStore>((set) => ({
    ToDosData: [],
    deClareToDo: (todos) => set({
        ToDosData: todos
    }),
    addNewToDo: (newValue) => set((prev) => ({
        ToDosData: [newValue, ...prev.ToDosData]
    }))
}));