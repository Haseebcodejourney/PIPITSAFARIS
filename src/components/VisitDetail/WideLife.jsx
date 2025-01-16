import React from "react";
import { 
    Box, 
    BoxWrapper, 
    ComponentWrapper, 
    Figure, 
    H2, 
    Image, 
    Strong, 
    Text, 
    Paper, 
    Div 
} from "../../styles/DetailPage/WideLife";

// Data for Wildlife
const wildlifeData = [
    {
        name: "Lion",
        image: {
            src: "https://static.cloudsafaris.com/public/1e127fe6-45f8-413d-b530-cae6ccb26efa_Lion-sm.png?action=get&host=true",
            alt: "Lion",
            width: 128,
            height: 80
        },
        status: "Common",
        statusClass: "common"
    },
    {
        name: "Elephant",
        image: {
            src: "https://static.cloudsafaris.com/public/89ed5392-df8b-4aaa-a189-5d027181824f_Elephant-sm.png?action=get&host=true", // Replace with actual link
            alt: "Elephant",
            width: 128,
            height: 80
        },
        status: "Common",
        statusClass: "common"
    },
    {
        name: "Black Rhino",
        image: {
            src: "https://static.cloudsafaris.com/public/89f58ec6-a3e3-4cb0-a671-11d65891aff6_Black-Rhino-sm.png?action=get&host=true", // Replace with actual link
            alt: "Black Rhino",
            width: 128,
            height: 80
        },
        status: "Occasional",
        statusClass: "occasional"
    },
    {
        name: "Cheetah",
        image: {
            src: "https://static.cloudsafaris.com/public/fafd6b6d-04b9-4641-acb7-78bcff2f0800_Cheetah-sm.png?action=get&host=true", // Replace with actual link
            alt: "Cheetah",
            width: 128,
            height: 80
        },
        status: "Occasional",
        statusClass: "occasional"
    },
    {
        name: "Hippo",
        image: {
            src: "https://static.cloudsafaris.com/public/fee84d1c-4c50-4508-99d8-be3405421139_Hippo-sm.png?action=get&host=true", // Replace with actual link
            alt: "Hippo",
            width: 128,
            height: 80
        },
        status: "Occasional",
        statusClass: "occasional"
    },
    {
        name: "Hyena",
        image: {
            src: "https://static.cloudsafaris.com/public/495be183-41a3-49a4-bead-6c4cff8db8ec_Hyena-sm.png?action=get&host=true", // Replace with actual link
            alt: "Hyena",
            width: 128,
            height: 80
        },
        status: "Common",
        statusClass: "common"
    },
    {
        name: "Leopard",
        image: {
            src: "https://static.cloudsafaris.com/public/149aedc7-5cc1-442a-b0c5-ce4be60e37fa_Leopard-sm.png?action=get&host=true", // Replace with actual link
            alt: "Leopard",
            width: 128,
            height: 80
        },
        status: "Occasional",
        statusClass: "occasional"
    },
    {
        name: "Giraffe",
        image: {
            src: "https://static.cloudsafaris.com/public/b55c7a54-5e96-4ccf-ade2-cfcf75abffc4_Giraffe-sm.png?action=get&host=true", // Replace with actual link
            alt: "Giraffe",
            width: 128,
            height: 80
        },
        status: "Common",
        statusClass: "common"
    },
    {
        name: "Zebra",
        image: {
            src: "https://static.cloudsafaris.com/public/75d5d952-e494-4daf-bba6-0d446d7cc5cf_Zebra-sm.png?action=get&host=true", // Replace with actual link
            alt: "Zebra",
            width: 128,
            height: 80
        },
        status: "Common",
        statusClass: "common"
    },
    {
        name: "Gazelle",
        image: {
            src: "https://static.cloudsafaris.com/public/a929ebb1-2185-496c-9fdb-56488c537cdd_Gazelle-sm.png?action=get&host=true", // Replace with actual link
            alt: "Gazelle",
            width: 128,
            height: 80
        },
        status: "Common",
        statusClass: "common"
    },
    {
        name: "Buffalo",
        image: {
            src: "https://static.cloudsafaris.com/public/251c0e9d-e71c-42ea-9b10-3a37637cc80a_Buffala-sm.png?action=get&host=true", // Replace with actual link
            alt: "Buffalo",
            width: 128,
            height: 80
        },
        status: "Common",
        statusClass: "common"
    },
    {
        name: "Wildebeest",
        image: {
            src: "https://static.cloudsafaris.com/public/47369fdf-6f54-44db-97e3-d20f0116c740_Wildebeest-sm.png?action=get&host=true", // Replace with actual link
            alt: "Wildebeest",
            width: 128,
            height: 80
        },
        status: "Common",
        statusClass: "common"
    }
];

export default function WideLife({theme}) {
    return (
        <ComponentWrapper theme={theme}>
            <H2 theme={theme}>Wildlife</H2>
            <Text theme={theme}>
                The Western Corridor's diverse habitats support an abundant array of
                wildlife, making it a prime location for witnessing the raw beauty of
                the African wilderness.
            </Text>
            <BoxWrapper theme={theme}>
                {wildlifeData.map((animal, index) => (
                    <Box key={index} theme={theme}>
                        <Figure theme={theme}>
                            <Image
                                src={animal.image.src}
                                alt={animal.image.alt}
                                width={animal.image.width}
                                height={animal.image.height}
                            />
                        </Figure>
                        <Div theme={theme}>
                            <Strong theme={theme}>{animal.name}</Strong>
                            <Paper theme={theme}>
                                <span className={animal.statusClass}></span>
                                {animal.status}
                            </Paper>
                        </Div>
                    </Box>
                ))}
            </BoxWrapper>
        </ComponentWrapper>
    );
}
