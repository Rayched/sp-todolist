import { I_ToDo } from "@/app/_fetchs/CreateToDo";
import { todo } from "node:test";
import { create } from "zustand";

export interface I_ToDosData {
    todo_id: number;
    todo_name: string;
    isDone: boolean;
};

interface I_ToDosDataStore {
    ToDosData: I_ToDosData[];
    deClareToDo: (todos: I_ToDosData[]) => void;
    addNewToDo: (newValue: I_ToDosData) => void;
    updateToDoData: ({ targetId, isDone }: { targetId: number, isDone: boolean }) => void;
};

export const ToDosDataStore = create<I_ToDosDataStore>((set) => ({
    ToDosData: [],
    deClareToDo: (todos) => set({
        ToDosData: todos
    }),
    addNewToDo: (newValue) => set((prev) => ({
        ToDosData: [newValue, ...prev.ToDosData]
    })),
    updateToDoData: ({ targetId, isDone }) => set((prev) => {
        const idx = prev.ToDosData.findIndex((data) => data.todo_id === targetId);

        if (idx === -1) {
            return {
                ToDosData: prev.ToDosData
            }
        } else {
            const prevData = prev.ToDosData[idx];

            const UpdateValue: I_ToDosData = {
                todo_id: prevData.todo_id,
                todo_name: prevData.todo_name,
                isDone: isDone
            };

            return {
                ToDosData: [
                    ...prev.ToDosData.slice(0, idx),
                    UpdateValue,
                    ...prev.ToDosData.slice(idx + 1)
                ]
            }
        }
    })
}));