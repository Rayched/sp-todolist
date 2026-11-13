"use client"

import { ViewportStore } from "@/_stores/viewport_store";
import { I_ToDo } from "@/app/_fetchs/CreateToDo"
import styled from "styled-components";
import { useStore } from "zustand";
import ShowDoings from "./ShowToDos";
import ShowDones from "./ShowDones";
import { ToDosDataStore } from "@/_stores/todosdata_store";
import { useEffect } from "react";

interface I_ShowToDos {
    params: I_ToDo[];
};

const Wrapper = styled.div`
    width: 100dvw;
    max-width: 1300px;
    min-height: 80dvh;
    margin-top: 3%;

    .desktop_version {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .mobile_version {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export default function ShowToDos({ params }: I_ShowToDos) {
    const { NowViewportWidth } = useStore(ViewportStore);
    const { ToDosData } = useStore(ToDosDataStore);

    useEffect(() => {
        console.log(ToDosData)
    }, [ToDosData]);

    return (
        <Wrapper>
            {
                NowViewportWidth > 1000 ? (
                    <div className="desktop_version">
                        <ShowDoings
                            tododatas={params.filter((data) => data.isCompleted === false)}
                            isDesktop="true"
                        />
                        <ShowDones
                            tododatas={params.filter((data) => data.isCompleted === true)}
                            isDesktop="true"
                        />
                    </div>
                ) : null
            }
            {
                NowViewportWidth < 999 ? (
                    <div className="mobile_version">
                        <ShowDoings
                            tododatas={params.filter((data) => data.isCompleted === false)}
                            isDesktop="false"
                        />
                        <ShowDones
                            tododatas={params.filter((data) => data.isCompleted === true)}
                            isDesktop="false"
                        />
                    </div>
                ) : null
            }
        </Wrapper>
    );
}