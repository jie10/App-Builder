import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { Close as CloseIcon, Search as SearchIcon } from '@mui/icons-material';

import "./Inserter_v2.css";

import { getComponents } from "../../api/Components";

import {
    sendBlocks
} from '../../stores/actions'
import { Button } from '@mui/material';

const theme = createTheme({
    components: {
        MuiTab: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    fontSize: "12px",
                    padding: "12px 16px 8px 16px",
                    alignItems: "flex-start",
                    color: '#1e1e1e',
                    "&:hover": {
                        color: "#1e1e1e"
                    },
                    "&.Mui-selected": {
                        color: "#1e1e1e"
                    }
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    borderBottom: "2px solid #F0F0F0",
                    width: 250
                },
                indicator: {
                    height: "4px",
                    backgroundColor: "#68A9C3"
                }
            }
        },
        MuiIconButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    color: '#1e1e1e',
                    transform: "scale(-0.8, 0.8)",
                    "&:hover": {
                        backgroundColor: "transparent"
                    }
                }
            }
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true
            },
            styleOverrides: {
                root: {
                    color: '#1e1e1e',
                    "&:hover": {
                        backgroundColor: "transparent"
                    }
                }
            }
        }
    }
});

const ComponentPreview = (props) => {
    const { component, onPreview } = props;

    return (
        <div className={`component-preview-container ${component && onPreview !== true ? 'hidden' : '' }`}>
            <div className="component-preview-image-container">
                <img src={component.preview_image} alt={`${component.text} preview`} />
            </div>
            <div className="component-preview-details-container">
                <div className="component-preview-details-icon">
                    <img src={component.icon} alt={`${component.text} icon`} />
                </div>
                <div className="component-preview-details-text">
                    <h6 className="component-preview-text">{ component.text }</h6>
                    <p className="component-preview-description">{ component.preview_description }</p>
                </div>
            </div>
        </div>
    );
}

const BlocksList = (props) => {
    const { sendBlocks, setOnPreview, setSelectedComponent, componentsList } = props;

    const styleGridComponent = {
        padding: "16px 8px",
        position: "relative",
        width: "100%",
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid transparent",
    };

    let categories = Object.keys(componentsList).map((key, i) => ({
        "_id": i + 1,
        "group": key,
        "components_list": componentsList[key]
    }));

    const handleOnShowPreview = (e) => {
        let uniqueId = e.target.className.split(" ")[1];
        let findComponent = categories.filter(category => category.group === uniqueId.split("-")[0]);
        let component = findComponent.length > 0 ? findComponent[0].components_list
                        .filter(component => component.name === uniqueId.split("-")[1])[0] : {};
        setSelectedComponent(component);
        setOnPreview(findComponent.length > 0 ? true : false);
    };

    const handleOnHidePreview = (e) => {
        setSelectedComponent({});
        setOnPreview(false);
    }

    return (
        <Grid className="component-group-grids-container" container>
            {
                categories.map((category, i) => (
                    <Grid
                        className={`component-group-grid component-group-grid-${i}-${category.group}`}
                        item
                        key={i}
                        xl={12}
                        xs={12}>
                            <h2 className={`component-group-h2 component-group-h2-${i}-${category.group}`}>{category.group}</h2>
                               <Grid className="component-grids-container" container>
                                    { category.components_list.map((component, i) => 
                                        (<Grid className={`component-grid component-grid-${i}-${component.name}`}
                                            item
                                            key={component._id}
                                            xs={12}
                                            md={4}>
                                            <Button
                                                className={`component-box component-box-${i}-${component.name}`}
                                                sx={styleGridComponent}
                                                onClick={() => {
                                                        sendBlocks({
                                                            type: component.type,
                                                            status: "added",
                                                            parameters: component.parameters})
                                                            setOnPreview(false);
                                                    }}
                                                onMouseOver={handleOnShowPreview}
                                                onMouseLeave={handleOnHidePreview}>
                                                <div className={`component-box-clicker ${category.group}-${component.name}`}></div>
                                                <span className={`component-icon component-icon-${i}-${component.name}`}>
                                                    <img src={component.icon} alt={`${component.name} icon`} />
                                                </span>
                                                <span className={`component-text component-text-${i}-${component.name}`}>
                                                    {component.text}
                                                </span>
                                            </Button>
                                        </Grid>)
                                ) }
                            </Grid>
                    </Grid>
                ))
            }
        </Grid>
    );
}

const PatternsList = (props) => {
    return (
        <div className='patterns-list-container'>
            <p>Patterns List goes here!</p>
        </div>
    );
}

const NoResutsFound = (props) => {
    return (
        <Box className="tab-panel-no-results-found">
            <p>No results found.</p>
        </Box>
    );
}

const SearchResultsList = (props) => {
    const { sendBlocks, keyword, setOnPreview, setSelectedComponent, componentsList } = props;

    const styleGridComponent = {
        padding: "16px 8px",
        position: "relative",
        width: "100%",
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid transparent",
    };

    const searchCriteria = new RegExp(`${keyword}`, 'gi');
    const components = Object.values(componentsList)
                        .flatMap(component => component)
                        .filter(component => searchCriteria.test(component.text) === true)
                        .sort();

    const handleOnShowPreview = (e) => {
        let uniqueId = e.target.className.split(" ")[1];
        let findComponent = components.filter(component => component.name === uniqueId);
        let component = findComponent.length > 0 ? findComponent[0] : {};
        setSelectedComponent(component);
        setOnPreview(findComponent.length > 0 ? true : false);
    };

    const handleOnHidePreview = (e) => {
        setSelectedComponent({});
        setOnPreview(false);
    }

    return (
        <Grid className="component-grids-container" container>
            { components.length > 0 ? components.map((component, i) => 
                (<Grid className={`component-grid component-grid-${i}-${component.name}`}
                        item
                        key={`${i}_${component._id}`}
                        xs={12}
                        md={4}>
                    <Button className={`component-box component-box-${i}-${component.name}`}
                        sx={styleGridComponent}
                        onClick={() => {
                                sendBlocks({
                                    type: component.type,
                                    parameters: component.parameters})
                                    setOnPreview(false);
                            }}
                        onMouseOver={handleOnShowPreview}
                        onMouseLeave={handleOnHidePreview}>
                        <div className={`component-box-clicker ${component.name}`}></div>
                        <span className={`component-icon component-icon-${i}-${component.name}`}>
                            <img src={component.icon} alt={`${component.name} icon`} />
                        </span>
                        <span className={`component-text component-text-${i}-${component.name}`}>
                            {component.text}
                        </span>
                    </Button>
                </Grid>)
            )  : <NoResutsFound />}
        </Grid>
    );
}

const TabPanel = (props) => {
    const { value, sendBlocks, keyword, components } = props;
    const [onPreview, setOnPreview] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState({});
    
    return (
        keyword && keyword.length > 0 ? 
            <>
                <SearchResultsList sendBlocks={sendBlocks} keyword={keyword} setOnPreview={setOnPreview} setSelectedComponent={setSelectedComponent} componentsList={components} />
                <ComponentPreview  component={selectedComponent} onPreview={onPreview} />
            </>
        :
            <Box>
                <div
                    hidden={value !== 0 ? true : false}
                    id={`simple-tabpanel-0`} >
                    <BlocksList sendBlocks={sendBlocks} setOnPreview={setOnPreview} setSelectedComponent={setSelectedComponent} componentsList={components} />
                    <ComponentPreview  component={selectedComponent} onPreview={onPreview} />
                </div>
                <div
                    hidden={value !== 1 ? true : false}
                    id={`simple-tabpanel-1`} >
                    <PatternsList />
                </div>
            </Box>
    );
}

const ComponentSearchBar = (props) => {
    const { keyword, setKeyword } = props;
    const [inputFocus, setInputFocus] = useState(true);

    const inputBaseStyle = { width: 1, padding: "10px 0 10px 16px" };
    const resetButtonStyle = { padding: '0 8px 0 16px' };
    const searchButtonStyle = { padding: '0 8px 0 16px', cursor: "default" };

    const handleChange = e => setKeyword(e.target.value);

    const handleInputFocusIn = e => setInputFocus(true);

    const handleInputFocusOut = e => setInputFocus(false);

    const handleReset = e => {
        e.preventDefault();
        setKeyword("");
    }

    return (
        <Box className={`component-searchbar-container ${inputFocus ? "component-searchbar--focus" : ""}`}>
            <InputBase
                placeholder="Search"
                sx={inputBaseStyle}
                aria-label="search components list"
                onChange={handleChange}
                onFocus={handleInputFocusIn}
                onBlur={handleInputFocusOut}
                value={keyword}
                autoFocus={inputFocus} />
            {
                keyword && keyword.length > 0 ?
                    <IconButton
                        sx={resetButtonStyle}
                        aria-label="reset"
                        title="Reset search"
                        onClick={handleReset}>
                        <CloseIcon />
                    </IconButton>
                :
                    <IconButton
                        sx={searchButtonStyle}
                        aria-label="search">
                        <SearchIcon />
                    </IconButton>
            }
        </Box>
    );
}

const ComponentTabs = (props) => {
    const { sendBlocks, components } = props
    const [value, setValue] = useState(0);
    const [keyword, setKeyword] = useState('');

    const styleComponentTabs = {
        position: "relative",
        margin: 0,
        height: 1,
        borderRight: "1.5px solid #F0F0F0",
        maxHeight: 1,
        overflow: "auto"
    };
    const styleTabs = { width: 1 };

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return(
        <ThemeProvider theme={theme}>
            <Box className="component-tabs" sx={styleComponentTabs}>
                <div className="components-tabs-controls-container">
                    <ComponentSearchBar keyword={keyword} setKeyword={setKeyword} />
                    <Tabs
                        id="nested-list-subheader"
                        component="div"
                        variant="fullWidth"
                        value={value}
                        onChange={handleChange}
                        sx={styleTabs}>
                        <Tab
                            label="Blocks"
                            id="component-tab-0"
                            aria-controls="component-tab-0" />
                        <Tab
                            label="Patterns"
                            id="component-tab-1"
                            aria-controls="component-tab-1" />
                    </Tabs>
                </div>
                <TabPanel value={value} sendBlocks={sendBlocks} keyword={keyword} components={components} />
            </Box>
        </ThemeProvider>
    );
}

const Inserter = (props) => {
    const { isInserterVisible, sendBlocks, isInserterEnabled } = props
    const [components , setComponents] = useState(null);

    useEffect(() => {
        getComponents
            .then(data => {
                setComponents(data);
            })
            .catch(error => console.log(error));
    }, []);

    return(
        <div className={`inserter-container ${isInserterEnabled  ? '' : 'inserter-container-hide'}`}>
            { isInserterVisible && <ComponentTabs sendBlocks={sendBlocks} components={components} /> }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isInserterVisible: state.isInserterVisible
    }
}

export default connect(mapStateToProps, {
    sendBlocks
})(Inserter)