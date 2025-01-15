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
            src: "https://example.com/images/elephant.png", // Replace with actual link
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
            src: "https://example.com/images/black-rhino.png", // Replace with actual link
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
            src: "https://example.com/images/cheetah.png", // Replace with actual link
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
            src: "https://example.com/images/hippo.png", // Replace with actual link
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
            src: "https://example.com/images/hyena.png", // Replace with actual link
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
            src: "https://example.com/images/leopard.png", // Replace with actual link
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
            src: "https://example.com/images/giraffe.png", // Replace with actual link
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
            src: "https://example.com/images/zebra.png", // Replace with actual link
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
            src: "https://example.com/images/gazelle.png", // Replace with actual link
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
            src: "https://example.com/images/buffalo.png", // Replace with actual link
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
            src: "https://example.com/images/wildebeest.png", // Replace with actual link
            alt: "Wildebeest",
            width: 128,
            height: 80
        },
        status: "Common",
        statusClass: "common"
    }
];

export default function WideLife() {
    return (
        <ComponentWrapper>
            <H2>Wildlife</H2>
            <Text>
                The Western Corridor's diverse habitats support an abundant array of
                wildlife, making it a prime location for witnessing the raw beauty of
                the African wilderness.
            </Text>
            <BoxWrapper>
                {wildlifeData.map((animal, index) => (
                    <Box key={index}>
                        <Figure>
                            <Image
                                src={animal.image.src}
                                alt={animal.image.alt}
                                width={animal.image.width}
                                height={animal.image.height}
                            />
                        </Figure>
                        <Div>
                            <Strong>{animal.name}</Strong>
                            <Paper>
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
