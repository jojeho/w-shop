
import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader, Button, Link, Chip } from "@nextui-org/react";
import Cards from "./cards";

function Menu({ title }) {
    return (
        <Button
            href="https://github.com/nextui-org/nextui"
            as={Link}
            color="primary"
            variant="solid"
        >
            {title}
        </Button>
    )
}

export default function Recoment() {
    const [selected, setSelected] = React.useState("photos");

    return (

        <div className="flex flex-col gap-5 pt-5">
            <h2 className="text-2xl font-bold">
                소나고객님을 위한 추천상품
            </h2>

      
                <Tabs
                    aria-label="Options"
                    color="primary"
                    variant="underlined"
                    classNames={{
                        tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                        cursor: "w-full bg-[#22d3ee]",
                        tab: "max-w-fit px-0 h-12",
                        tabContent: "group-data-[selected=true]:text-[#06b6d4]"
                    }}
                >
                    <Tab
                        key="photos"
                        title={
                            <div className="flex items-center space-x-2">

                                <span>신상</span>

                            </div>
                        }

                    >
                        <Cards></Cards>
                    </Tab>
                    <Tab
                        key="music"
                        title={
                            <div className="flex items-center space-x-2">

                                <span>인기</span>

                            </div>
                        }
                    />
                    <Tab
                        key="videos"
                        title={
                            <div className="flex items-center space-x-2">

                                <span>상의</span>

                            </div>
                        }
                    />
                </Tabs>
        </div>
    )
}
       


