import * as React from 'react';
import { Box } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import { DestinationBox, DFigure, DImage, DList, DListItems, DPaper, JBorder, JDot, JLeft, JPaper, JRight, JSrtrong, JWrapper } from '../../styles/FindTrip/Itinerary';

function CustomTabPanel({ children, value, index, ...other }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({theme}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Destinations" {...a11yProps(0)}/>
                    <Tab label="Hotels" {...a11yProps(1)}/>
                    <Tab label="Overview" {...a11yProps(2)}/>
                    <Tab label="Meals & Drinks" {...a11yProps(3)}/>
                </Tabs>
            </Box>


            <CustomTabPanel value={value} index={0}>
                <DestinationBox theme={theme}>
                    <DList style={{ padding: '0px' }} theme={theme}>
                        <DListItems theme={theme}>
                            <DFigure theme={theme}>
                                <DImage src='https://static.cloudsafaris.com/public/2b2a7cfd-6c29-49df-954a-ba709fc93c8b_3679500782_3d8ab5750c_b.jpg?action=get&host=true&width=100' alt='' width={36} height={36} />
                            </DFigure>
                            <DPaper>Horombo Hut</DPaper>
                        </DListItems>

                        <DListItems theme={theme}>
                            <DFigure theme={theme}>
                                <DImage src='https://static.cloudsafaris.com/public/2b2a7cfd-6c29-49df-954a-ba709fc93c8b_3679500782_3d8ab5750c_b.jpg?action=get&host=true&width=100' alt='' width={36} height={36} />
                            </DFigure>
                            <DPaper>Horombo Hut</DPaper>
                        </DListItems>

                        <DListItems theme={theme}>
                            <DFigure theme={theme}>
                                <DImage src='https://static.cloudsafaris.com/public/2b2a7cfd-6c29-49df-954a-ba709fc93c8b_3679500782_3d8ab5750c_b.jpg?action=get&host=true&width=100' alt='' width={36} height={36} />
                            </DFigure>
                            <DPaper>Horombo Hut</DPaper>
                        </DListItems>

                        <DListItems theme={theme}>
                            <DFigure theme={theme}>
                                <DImage src='https://static.cloudsafaris.com/public/2b2a7cfd-6c29-49df-954a-ba709fc93c8b_3679500782_3d8ab5750c_b.jpg?action=get&host=true&width=100' alt='' width={36} height={36} />
                            </DFigure>
                            <DPaper>Horombo Hut</DPaper>
                        </DListItems>

                        <DListItems theme={theme}>
                            <DFigure theme={theme}>
                                <DImage src='https://static.cloudsafaris.com/public/2b2a7cfd-6c29-49df-954a-ba709fc93c8b_3679500782_3d8ab5750c_b.jpg?action=get&host=true&width=100' alt='' width={36} height={36} />
                            </DFigure>
                            <DPaper>Horombo Hut</DPaper>
                        </DListItems>

                        <DListItems theme={theme}>
                            <DFigure theme={theme}>
                                <DImage src='https://static.cloudsafaris.com/public/2b2a7cfd-6c29-49df-954a-ba709fc93c8b_3679500782_3d8ab5750c_b.jpg?action=get&host=true&width=100' alt='' width={36} height={36} />
                            </DFigure>
                            <DPaper>Horombo Hut</DPaper>
                        </DListItems>

                        <DListItems theme={theme}>
                            <DFigure theme={theme}>
                                <DImage src='https://static.cloudsafaris.com/public/2b2a7cfd-6c29-49df-954a-ba709fc93c8b_3679500782_3d8ab5750c_b.jpg?action=get&host=true&width=100' alt='' width={36} height={36} />
                            </DFigure>
                            <DPaper>Horombo Hut</DPaper>
                        </DListItems>

                        <DListItems theme={theme}>
                            <DFigure theme={theme}>
                                <DImage src='https://static.cloudsafaris.com/public/2b2a7cfd-6c29-49df-954a-ba709fc93c8b_3679500782_3d8ab5750c_b.jpg?action=get&host=true&width=100' alt='' width={36} height={36} />
                            </DFigure>
                            <DPaper>Horombo Hut</DPaper>
                        </DListItems>


                        <DListItems theme={theme}>
                            <DFigure theme={theme}>
                                <DImage src='https://static.cloudsafaris.com/public/2b2a7cfd-6c29-49df-954a-ba709fc93c8b_3679500782_3d8ab5750c_b.jpg?action=get&host=true&width=100' alt='' width={36} height={36} />
                            </DFigure>
                            <DPaper>Horombo Hut</DPaper>
                        </DListItems>
                    </DList>
                    <JWrapper>
                        <JLeft theme={theme}>
                            <JDot theme={theme}></JDot>
                            <JBorder theme={theme}></JBorder>

                            <JDot theme={theme}></JDot>
                            <JBorder theme={theme}></JBorder>

                            <JDot theme={theme}></JDot>

                        </JLeft>
                        <JRight theme={theme}>

                            <JPaper theme={theme}>Start</JPaper>
                            <JSrtrong theme={theme}>Kibo Hut</JSrtrong>

                            <JSrtrong style={{ paddingTop: '40px' }} theme={theme}>
                                Stella Point
                            </JSrtrong>


                            <JSrtrong style={{ paddingTop: '50px' }} theme={theme}>
                                Horombo Hut
                            </JSrtrong>
                            <JPaper theme={theme}>End</JPaper>


                        </JRight>
                    </JWrapper>
                </DestinationBox>
            </CustomTabPanel>


            <CustomTabPanel value={value} index={1} >
                Hotels
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2} >
                Overview
            </CustomTabPanel >
            <CustomTabPanel value={value} index={3}>
                Meals & Drinks
            </CustomTabPanel>
        </Box>
    );
}
