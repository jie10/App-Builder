import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import {
            FormatTextdirectionLToR as FormatTextdirectionLToRIcon, 
            Bookmark as BookmarkIcon,
            FormatListBulleted as FormatListBulletedIcon,
            FormatQuote as FormatQuoteIcon,
            Code as CodeIcon,
            KeyboardAltOutlined as KeyboardAltOutlinedIcon,
            ShortTextOutlined as ShortTextOutlinedIcon,
            FormatQuoteOutlined as FormatQuoteOutlinedIcon,
            TableChartOutlined as TableChartOutlinedIcon,
            CreateOutlined as CreateOutlinedIcon,
            BorderColorRounded as BorderColorRoundedIcon,
            DeveloperModeOutlined as DeveloperModeOutlinedIcon,
            ImageSearch as ImageSearchIcon,
            AudiotrackOutlined as AudiotrackOutlinedIcon,
            BookOutlined as BookOutlinedIcon,
            InsertDriveFileOutlined as InsertDriveFileOutlinedIcon,
            VerticalSplit as VerticalSplitIcon,
            Videocam as VideocamIcon,
            BurstMode as BurstModeIcon,
            Slideshow as SlideshowIcon,
            HistoryEdu as HistoryEduIcon,
            PhotoAlbumOutlined as PhotoAlbumOutlinedIcon,
            PhotoCameraOutlined as PhotoCameraOutlinedIcon,
            InsertPhotoOutlined as InsertPhotoOutlinedIcon,
            PanoramaOutlined as PanoramaOutlinedIcon,
            CropOriginalOutlined as CropOriginalOutlinedIcon,
            SmartButtonOutlined as SmartButtonOutlinedIcon,
            ViewColumnOutlined as ViewColumnOutlinedIcon,
            FileCopyOutlined as FileCopyOutlinedIcon,
            MoreHorizOutlined as MoreHorizOutlinedIcon,
            PagesOutlined as PagesOutlinedIcon,
            SafetyDividerOutlined as SafetyDividerOutlinedIcon,
            SpaceBarOutlined as SpaceBarOutlinedIcon,
            SupervisedUserCircleOutlined as SupervisedUserCircleOutlinedIcon,
            TextFieldsOutlined as TextFieldsOutlinedIcon,
            TableRowsOutlined as TableRowsOutlinedIcon,
            TableViewOutlined as TableViewOutlinedIcon,
            DateRangeOutlined as DateRangeOutlinedIcon,
            CategoryOutlined as CategoryOutlinedIcon,
            RssFeed as RssFeedIcon,
            Share as ShareIcon,
            LocalOfferOutlined as LocalOfferOutlinedIcon,
            Search as SearchIcon,
            Star as StarIcon,
            Repeat as RepeatIcon,
            Timeline as TimelineIcon,
            Image as ImageIcon,
            Login as LoginIcon,
            ExploreOutlined as ExploreOutlinedIcon,
            LanguageOutlined as LanguageOutlinedIcon,
            FacebookOutlined as FacebookOutlinedIcon,
            Room as RoomIcon,
            Poll as PollIcon,
            ThumbUpOutlined as ThumbUpOutlinedIcon,
            Favorite as FavoriteIcon,
            AssessmentOutlined as AssessmentOutlinedIcon,
            FeedbackOutlined as FeedbackOutlinedIcon,
            AttachMoney as AttachMoneyIcon,
            Payment as PaymentIcon,
            PriceCheck as PriceCheckIcon,
            DynamicForm as DynamicFormIcon,
            AddBusinessOutlined as AddBusinessOutlinedIcon,
            Close as CloseIcon,
            ViewCarouselOutlined as ViewCarouselOutlinedIcon,
            DashboardOutlined as DashboardOutlinedIcon
        } from '@mui/icons-material';

import "./Inserter_v2.css";
import noPreviewAvailableImage from '../../assets/images/no-preview-available.png';
import codePreviewImage from '../../assets/images/code-preview.png';
import headingPreviewImage from '../../assets/images/heading-preview.png';
import listPreviewImage from '../../assets/images/list-preview.png';
import paragraphPreviewImage from '../../assets/images/paragraph-preview.png';
import quotePreviewImage from '../../assets/images/quote-preview.png';
import tablePreviewImage from '../../assets/images/table-preview.png';
import accordionPreviewImage from '../../assets/images/accordion-preview.PNG';
import breadcrumbsPreviewImage from '../../assets/images/breadcrumbs-preview.PNG';
import cardsPreviewImage from '../../assets/images/cards-preview.PNG';
import footerPreviewImage from '../../assets/images/footer-preview.PNG';
import headerPreviewImage from '../../assets/images/header-preview.PNG';
import imagePreviewImage from '../../assets/images/image-preview.PNG';
import guideBannerPreviewImage from '../../assets/images/guide-banner-preview.PNG';
import imageTextPreviewImage from '../../assets/images/image-text-preview.PNG';
import imageTextButtonPreviewImage from '../../assets/images/image-text-button-preview.PNG';

import { getComponents } from "../../api/Components";

import {
    sendBlocks
} from '../../stores/actions'
import { Button } from '@mui/material';

const componentsList = {
    "Default": [
        {
            "_id": 1,
            "name": "image_left_with_text_button",
            "text": "Image (Left) with Text & Button",
            "icon": <ImageIcon />,
            "block_type": "SECTION_TWO_LEFT",
            "block_parameters": {
                backgroundColor: '#FFFFF',
                height: 'auto',
                title: 'Title',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien quis lectus elementum laoreet sed sit amet velit. Praesent nec enim est. Nulla blandit bibendum ipsum non gravida. Nam placerat purus quis lacinia consequat. Donec magna dolor, dictum ut tortor auctor, pulvinar ultricies turpis. Sed vulputate nunc sit amet iaculis placerat. Morbi non risus vel ex iaculis bibendum. Cras sit amet eleifend nisi, at mattis tortor. Nunc id ornare nunc. Donec porttitor euismod magna eu fermentum.',
                image: 'https://cdn.media.amplience.net/i/cebupacificair/Our-Story-About?w=800&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
                url: '/pages/about/our-story/our-fleet'
            },
            "preview_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "preview_image": imageTextButtonPreviewImage
        },
        {
            "_id": 2,
            "name": "image_right_with_text_button",
            "text": "Image (Right) with Text & Button",
            "icon": <ImageIcon />,
            "block_type": "SECTION_TWO_RIGHT",
            "block_parameters": {
                backgroundColor: '#FFFFF',
                height: 'auto',
                title: 'Title',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien quis lectus elementum laoreet sed sit amet velit. Praesent nec enim est. Nulla blandit bibendum ipsum non gravida. Nam placerat purus quis lacinia consequat. Donec magna dolor, dictum ut tortor auctor, pulvinar ultricies turpis. Sed vulputate nunc sit amet iaculis placerat. Morbi non risus vel ex iaculis bibendum. Cras sit amet eleifend nisi, at mattis tortor. Nunc id ornare nunc. Donec porttitor euismod magna eu fermentum.',
                image: 'https://cdn.media.amplience.net/i/cebupacificair/Our-Story-About?w=800&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
                url: '/pages/about/our-story/our-fleet'
            },
            "preview_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 3,
            "name": "image_with_text_only",
            "text": "Image with Text only",
            "icon": <ImageIcon />,
            "block_type": "SECTION_ONE",
            "block_parameters": {
                backgroundColor: '#FFFFF',
                height: 'auto',
                title: 'Title',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien quis lectus elementum laoreet sed sit amet velit. Praesent nec enim est. Nulla blandit bibendum ipsum non gravida. Nam placerat purus quis lacinia consequat. Donec magna dolor, dictum ut tortor auctor, pulvinar ultricies turpis. Sed vulputate nunc sit amet iaculis placerat. Morbi non risus vel ex iaculis bibendum. Cras sit amet eleifend nisi, at mattis tortor. Nunc id ornare nunc. Donec porttitor euismod magna eu fermentum.',
                image: 'https://cdn.media.amplience.net/i/cebupacificair/Safety measures for contactless flights?w=undefined&amp;h=undefined&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}'
            },
            "preview_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "preview_image": imageTextPreviewImage
        },
        {
            "_id": 4,
            "name": "image",
            "text": "Image",
            "icon": <ImageIcon />,
            "block_type": "IMAGE_SECTION",
            "block_parameters": {
                backgroundColor: '#FFFFF',
                height: 'auto',
                image: 'https://cdn.media.amplience.net/i/cebupacificair/Safety measures for contactless flights?w=undefined&amp;h=undefined&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
                alignment: 'center'
            },
            "preview_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "preview_image": imagePreviewImage
        },
        {
            "_id": 5,
            "name": "header",
            "text": "Header",
            "icon": <TableChartOutlinedIcon />,
            "block_type": "HEADER",
            "block_parameters": {
                backgroundColor: '#fbe700',
                height: '160px',
                title: 'Header',
                image: 'https://cdn.media.amplience.net/i/cebupacificair/BKK-Bangkok-Thailand-SightSeeing2-6000x4000?w=1980&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}?&amp;fmt=jpg&amp;fmt.options=interlaced'
            },
            "preview_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "preview_image": headerPreviewImage
        },
        {
            "_id": 6,
            "name": "guide_banner",
            "text": "Guide Banner",
            "icon": <BookmarkIcon />,
            "block_type": "GUIDE_BANNER",
            "block_parameters": {
                backgroundColor: '#FFFFF',
                height: 'auto',
                title: 'Looking for more destinations?',
                text: 'We have more destinations to choose from!',
                button: 'View all destinations',
                buttonLink: 'https://www.cebupacificair.com/'
            },
            "preview_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "preview_image": guideBannerPreviewImage
        },
        {
            "_id": 7,
            "name": "footer",
            "text": "Footer",
            "icon": <TableChartOutlinedIcon />,
            "block_type": "FOOTER",
            "block_parameters": {
                backgroundColor: '#fbe700',
                height: 'auto'
            },
            "preview_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "preview_image": footerPreviewImage
        },
        {
            "_id": 8,
            "name": "cards",
            "text": "Cards",
            "icon": <DashboardOutlinedIcon />,
            "block_type": "CARDS",
            "block_parameters": {
                backgroundColor: '#FFFFFF',
                height: 'auto',
                card1Title : 'Corporate Profile',
                card1Image : 'https://cdn.media.amplience.net/i/cebupacificair/Corp-Prof?w=600&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
                card2Title : 'Corporate Governance',
                card2Image : 'https://cdn.media.amplience.net/i/cebupacificair/Corp-Gov?w=600&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
                card3Title : 'Corporate Disclosures',
                card3Image : 'https://cdn.media.amplience.net/i/cebupacificair/Corp-Disclosure?w=600&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}'
            },
            "preview_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "preview_image": cardsPreviewImage
        },
        {
            "_id": 9,
            "name": "breadcrumbs",
            "text": "Breadcrumbs",
            "icon": <FormatQuoteOutlinedIcon />,
            "block_type": "BREADCRUMBS",
            "block_parameters": {
                backgroundColor: '#FFFFFF',
                height: 'auto',
                homepageName: 'Home',
                homepagePath: '/homepage',
                parentcategoryName: 'About',
                parentcategoryPath: '/about',
                currentpostName: 'Our Story',
                currentpostPath: '/pages/about/our-story',
            },
            "preview_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "preview_image": breadcrumbsPreviewImage
        },
        {
            "_id": 10,
            "name": "accordion",
            "text": "Accordion",
            "icon": <ViewCarouselOutlinedIcon />,
            "block_type": "ACCORDION",
            "block_parameters": {
                backgroundColor: '#FFFFFF',
                height: 'auto',
                title: 'About Cebu Pacific',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis sapien quis lectus elementum laoreet sed sit amet velit. Praesent nec enim est. Nulla blandit bibendum ipsum non gravida. Nam placerat purus quis lacinia consequat. Donec magna dolor, dictum ut tortor auctor, pulvinar ultricies turpis. Sed vulputate nunc sit amet iaculis placerat. Morbi non risus vel ex iaculis bibendum. Cras sit amet eleifend nisi, at mattis tortor. Nunc id ornare nunc. Donec porttitor euismod magna eu fermentum.'
            },
            "preview_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "preview_image": accordionPreviewImage
        },
        {
            "_id": 11,
            "name": "block_separator",
            "text": "Block Separator",
            "icon": <TableChartOutlinedIcon />,
            "block_type": "BLOCKSEPERATOR",
            "block_parameters": {
                backgroundColor: '#F7F7F7',
                height: '40px'
            },
            "preview_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 12,
            "name": "sidebar",
            "text": "Sidebar",
            "icon": <TableChartOutlinedIcon />,
            "block_type": "SIDEBAR",
            "block_parameters": {
                backgroundColor: '#F4D03F',
                height: '40px'
            },
            "preview_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 13,
            "name": "video",
            "text": "Video",
            "icon": <ImageIcon />,
            "block_type": "VIDEO_SECTION",
            "block_parameters": {
                backgroundColor: '#FFFFF',
                height: 'auto',
                video: 'https://cdn.media.amplience.net/v/cebupacificair/[ONTIVA.COM]-A Message from our Chief Pilot for our 25th Anniversary-720P/mp4_720p',
                alignment: 'center'
            },
            "preview_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "preview_image": imagePreviewImage
        },
        {
            "_id": 14,
            "name": "campaign_cards",
            "text": "Campaign Cards",
            "icon": <DashboardOutlinedIcon />,
            "block_type": "CAMPAIGN_CARDS",
            "block_parameters": {
                backgroundColor: '#FFFFFF',
                height: 'auto',
                card1Title : 'Corporate Profile',
                card1Image : 'https://cdn.media.amplience.net/i/cebupacificair/Corp-Prof?w=600&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
                card2Title : 'Corporate Governance',
                card2Image : 'https://cdn.media.amplience.net/i/cebupacificair/Corp-Gov?w=600&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}',
                card3Title : 'Corporate Disclosures',
                card3Image : 'https://cdn.media.amplience.net/i/cebupacificair/Corp-Disclosure?w=600&amp;sm=c&amp;scaleFit=poi&amp;poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}'
            },
            "preview_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "preview_image": cardsPreviewImage
        },
        {
            "_id": 15,
            "name": "media_gallery",
            "text": "Media Gallery",
            "icon": <DashboardOutlinedIcon />,
            "block_type": "MEDIA_GALLERY",
            "block_parameters": {
                backgroundColor: '#FFFFFF',
                height: 'auto'
                
            },
            "preview_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "preview_image": cardsPreviewImage
        },
        {
            "_id": 16,
            "name": "column_section",
            "text": "Column",
            "icon": <DashboardOutlinedIcon />,
            "block_type": "COLUMN_SECTION",
            "block_parameters": {
                backgroundColor: '#FFFFFF',
                height: 'auto'
                
            },
            "preview_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "preview_image": cardsPreviewImage
        },
        {
            "_id": 17,
            "name": "sliderwrapper_section",
            "text": "SliderWrapper",
            "icon": <DashboardOutlinedIcon />,
            "block_type": "SLIDERWRAPPER_SECTION",
            "block_parameters": {
                backgroundColor: '#FFFFFF',
                height: 'auto'
                
            },
            "preview_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "preview_image": cardsPreviewImage
        },
        {
            "_id": 18,
            "name": "searchbar_section",
            "text": "Search Bar",
            "icon": <DashboardOutlinedIcon />,
            "block_type": "SEARCHBAR_SECTION",
            "block_parameters": {
                backgroundColor: '#FFFFFF',
                height: 'auto'
                
            },
            "preview_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "preview_image": cardsPreviewImage
        },
        {
            "_id": 19,
            "name": "filter_section",
            "text": "Filter",
            "icon": <DashboardOutlinedIcon />,
            "block_type": "FILTER_SECTION",
            "block_parameters": {
                backgroundColor: '#FFFFFF',
                height: 'auto'
                
            },
            "preview_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "preview_image": cardsPreviewImage
        }
        ,
        {
            "_id": 19,
            "name": "paragraph_section",
            "text": "Paragraph",
            "icon": <DashboardOutlinedIcon />,
            "block_type": "PARAGRAPH_SECTION",
            "block_parameters": {
                alignment: 'left',
                FontSize: '14px',
                text: 'Welcome',
                FontWeight: 'normal'
            },
            "preview_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "preview_image": cardsPreviewImage
        }
    ],
    "Text": [
        {
            "_id": 1,
            "name": "paragraph",
            "text": "Paragraph",
            "icon": <FormatTextdirectionLToRIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Start with the building block of all narrative.",
            "preview_image": paragraphPreviewImage
        },
        {
            "_id": 2,
            "name": "heading",
            "text": "Heading",
            "icon": <BookmarkIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Introduce new sections and organize content to help visitors (and search engines) understand the structure of your content.",
            "preview_image": headingPreviewImage
        },
        {
            "_id": 3,
            "name": "list",
            "text": "List",
            "icon": <FormatListBulletedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Create a bulleted or numbered list.",
            "preview_image": listPreviewImage
        },
        {
            "_id": 4,
            "name": "quote",
            "text": "Quote",
            "icon": <FormatQuoteIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Give quoted text visual emphasis.",
            "preview_image": quotePreviewImage
        },
        {
            "_id": 5,
            "name": "code",
            "text": "Code",
            "icon": <CodeIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Display code snippets.",
            "preview_image": codePreviewImage
        },
        {
            "_id": 6,
            "name": "classic",
            "text": "Classic",
            "icon": <KeyboardAltOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Use the classic editor.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 7,
            "name": "preformatted",
            "text": "Preformatted",
            "icon": <ShortTextOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Add text that respects your spacing and tabs, and also allows styling.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 8,
            "name": "pullquote",
            "text": "Pullquote",
            "icon": <FormatQuoteOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Give special visual emphasis to quote from your text.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 9,
            "name": "table",
            "text": "Table",
            "icon": <TableChartOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Create structured content in rows and columns to display information.",
            "preview_image": tablePreviewImage
        },
        {
            "_id": 10,
            "name": "verse",
            "text": "Verse",
            "icon": <CreateOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Insert poetry. Use special spacing formats. Or quote song lyrics.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 11,
            "name": "markdown",
            "text": "Markdown",
            "icon": <BorderColorRoundedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Use regular characters and punctuation to style text, links, and lists.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 12,
            "name": "syntax_highlighter_code",
            "text": "SyntaxHighlighter Code",
            "icon": <DeveloperModeOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Add syntax highlighting to source code (front end only)",
            "preview_image": noPreviewAvailableImage
        },
    ],
    "Media": [
        {
            "_id": 1,
            "name": "image",
            "text": "Image",
            "icon": <ImageIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Insert an image to make a visual statement.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 2,
            "name": "gallery",
            "text": "Gallery",
            "icon": <ImageSearchIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Display multiple images in a rich gallery.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 3,
            "name": "audio",
            "text": "Audio",
            "icon": <AudiotrackOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed a simple audio player.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 4,
            "name": "cover",
            "text": "Cover",
            "icon": <BookOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Add an image or video with a text overlay - great for headers.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 5,
            "name": "file",
            "text": "File",
            "icon": <InsertDriveFileOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Add a link to a downloadable file.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 6,
            "name": "media_and_text",
            "text": "Media & Text",
            "icon": <VerticalSplitIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Set media and words side-by-side for a richer layout.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 7,
            "name": "video",
            "text": "Video",
            "icon": <VideocamIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed a video from your media library or upload a new one.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 8,
            "name": "image_compare",
            "text": "Image Compare",
            "icon": <BurstModeIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Compare two images with a slider.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 9,
            "name": "slideshow",
            "text": "Slideshow",
            "icon": <SlideshowIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Add an interactive slideshow.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 10,
            "name": "story",
            "text": "Story",
            "icon": <HistoryEduIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Add an interactive story.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 11,
            "name": "tiled_gallery",
            "text": "Tiled Gallery",
            "icon": <PhotoAlbumOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Display multiple images in an elegantly organized tiled layout.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 12,
            "name": "collage",
            "text": "Collage",
            "icon": <PhotoCameraOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Assemble images into a beautiful collage gallery.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 13,
            "name": "masonry",
            "text": "Masonry",
            "icon": <InsertPhotoOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Display multiple images in an organized masonry gallery.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 14,
            "name": "offset",
            "text": "Offset",
            "icon": <PanoramaOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Display images in an offset brick pattern gallery.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 15,
            "name": "stacked",
            "text": "Stacked",
            "icon": <CropOriginalOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Display multiple images in a single column stacked gallery.",
            "preview_image": noPreviewAvailableImage
        },
    ],
    "Design": [
        {
            "_id": 1,
            "name": "buttons",
            "text": "Buttons",
            "icon": <SmartButtonOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Prompt visitors to take action with a group of button-style links.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 2,
            "name": "columns",
            "text": "Columns",
            "icon": <ViewColumnOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Display content in multiple columns, with blocks added to each column.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 3,
            "name": "group",
            "text": "Group",
            "icon": <FileCopyOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Combine blocks into a group.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 4,
            "name": "more",
            "text": "More",
            "icon": <MoreHorizOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Content before this block will be shown in the excerpt on your archives page.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 5,
            "name": "page_break",
            "text": "Page Break",
            "icon": <PagesOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Separate your content into a multi-page experience.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 6,
            "name": "separator",
            "text": "Separator",
            "icon": <SafetyDividerOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Create a break between idea or sections with a horizontal separator.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 7,
            "name": "spacer",
            "text": "Spacer",
            "icon": <SpaceBarOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Add whitespace between blocks and customize its height.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 8,
            "name": "site_logo",
            "text": "Site Logo",
            "icon": <SupervisedUserCircleOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Display a graphic to represent this site.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 9,
            "name": "site_tagline",
            "text": "Site Tagline",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Describe in a few words what the website is about.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 10,
            "name": "site_title",
            "text": "Site Title",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Displays the name of this site.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 11,
            "name": "row",
            "text": "Row",
            "icon": <TableRowsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Blocks shown in a row.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 12,
            "name": "archive_title",
            "text": "Archive Title",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Display the archive title based on the queried object.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 13,
            "name": "post_categories",
            "text": "Post Categories",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Display a post categories.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 14,
            "name": "post_tags",
            "text": "Post Tags",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Display a post's tags.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 15,
            "name": "layout_grid",
            "text": "Layout Grid",
            "icon": <TableViewOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Align blocks to a global grid with support for responsive breakpoints.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 16,
            "name": "dynamic_hr",
            "text": "Dynamic HR",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Add a resizable spacer between other blocks.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 17,
            "name": "hero",
            "text": "Hero",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "An introductory area of a page accompanied by a small amount of text and a call to action.",
            "preview_image": noPreviewAvailableImage
        },
    ],
    "Widgets": [
        {
            "_id": 1,
            "name": "shortcode",
            "text": "Shortcode",
            "icon": <CodeIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Insert additional custom elements with a shortcode.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 2,
            "name": "archives",
            "text": "Archives",
            "icon": <FileCopyOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Display a monthly archive of your posts.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 3,
            "name": "calendar",
            "text": "Calendar",
            "icon": <DateRangeOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "A calendar of your site's posts.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 4,
            "name": "categories",
            "text": "Categories",
            "icon": <CategoryOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Display a list of all categories.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 5,
            "name": "custom_html",
            "text": "Custom HTML",
            "icon": <CodeIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Add custom HTML code and preview it as you edit.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 6,
            "name": "latest_comments",
            "text": "Latest Comments",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Display a list of your most recent comments.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 7,
            "name": "latest_posts",
            "text": "Latest Posts",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Display a list of your most recent posts.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 8,
            "name": "page_list",
            "text": "Page List",
            "icon": <PagesOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Display a list of all pages.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 9,
            "name": "rss",
            "text": "RSS",
            "icon": <RssFeedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Display entries from any RSS or Atom feed.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 10,
            "name": "social_icons",
            "text": "Social Icons",
            "icon": <ShareIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Display icons linking to your social media profies or websites.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 11,
            "name": "tag_cloud",
            "text": "Tag Cloud",
            "icon": <LocalOfferOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "A cloud of your most used tags.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 12,
            "name": "search",
            "text": "Search",
            "icon": <SearchIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Help visitors find your content.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 13,
            "name": "star_rating",
            "text": "Star Rating",
            "icon": <StarIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Rate movies, books, songs, recipes - anything you can put a number on.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 14,
            "name": "repeat_visitor",
            "text": "Repeat Visitor",
            "icon": <RepeatIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Control block visibility based on how often a visitor has viewed the page.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 15,
            "name": "event_countdown",
            "text": "Event Countdown",
            "icon": <DateRangeOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Count down to your favorite next thing and celebrate with fireworks when the time is right.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 16,
            "name": "timeline",
            "text": "Timeline",
            "icon": <TimelineIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Create a timeline of events.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 17,
            "name": "blog_posts",
            "text": "Blog Posts",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "A block for displaying homepage posts.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 18,
            "name": "post_carousel",
            "text": "Post Carousel",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "A carousel of posts.",
            "preview_image": noPreviewAvailableImage
        },
    ],
    "Theme": [
        {
            "_id": 1,
            "name": "query_loop",
            "text": "Query Loop",
            "icon": <ImageIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "An advanced block that allows displaying post types based on different query parameters and visual configurations.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 2,
            "name": "post_title",
            "text": "Post Title",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Displays the title of a post, page, or any other content type.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 3,
            "name": "post_content",
            "text": "Post Content",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Displays the content of a post or page.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 4,
            "name": "post_date",
            "text": "Post Date",
            "icon": <DateRangeOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Add the date of this post.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 5,
            "name": "post_excerpt",
            "text": "Post Excerpt",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Display a post's excerpt.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 6,
            "name": "post_featured_image",
            "text": "Post Featured Image",
            "icon": <ImageIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Displays a post's featured image.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 7,
            "name": "login_out",
            "text": "Login/out",
            "icon": <LoginIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Show login & logout links.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 8,
            "name": "navigation",
            "text": "Navigation",
            "icon": <ExploreOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "A collection of blocks that allow visitors to get around your site.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 9,
            "name": "posts_list",
            "text": "Posts List",
            "icon": <FormatListBulletedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Display a list of your most recent posts, excluding sticky posts.",
            "preview_image": noPreviewAvailableImage
        },
    ],
    "Embeds": [
        {
            "_id": 1,
            "name": "embed",
            "text": "Embed",
            "icon": <CodeIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Add a block that displays content pulled from other sites, like Twitter or YouTube.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 2,
            "name": "twitter",
            "text": "Twitter",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed a tweet.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 3,
            "name": "youtube",
            "text": "Youtube",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed a YouTube video.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 4,
            "name": "sound_cloud",
            "text": "SoundCloud",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed SoundCloud content.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 5,
            "name": "spotify",
            "text": "Spotify",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed Spotify content.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 6,
            "name": "flickr",
            "text": "Flickr",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed Flickr content.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 7,
            "name": "vimeo",
            "text": "Vimeo",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed a Vimeo video.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 8,
            "name": "animoto",
            "text": "Animoto",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed an Animoto video.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 9,
            "name": "cloudup",
            "text": "Cloudup",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed Cloudup content.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 10,
            "name": "crowdsignal",
            "text": "Crowdsignal",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed Crowdsignal content.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 11,
            "name": "dailymotion",
            "text": "Dailymotion",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed a Dailymotion video.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 12,
            "name": "imgur",
            "text": "Imgur",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed Imgur content.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 13,
            "name": "issuu",
            "text": "Issuu",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed Issuu content.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 14,
            "name": "kickstarter",
            "text": "Kickstarter",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed Kickstarter content.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 15,
            "name": "mixcloud",
            "text": "Mixcloud",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed Mixcloud content.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 16,
            "name": "reddit",
            "text": "Reddit",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed a Reddit thread.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 17,
            "name": "reverb_nation",
            "text": "ReverbNation",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed Reverbnation content.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 18,
            "name": "screencast",
            "text": "Screencast",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed Screencast content.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 19,
            "name": "scribd",
            "text": "Scribd",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed Scribd content.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 20,
            "name": "slideshare",
            "text": "Slideshare",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed Slideshare content.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 21,
            "name": "smug_mug",
            "text": "SmugMug",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed SmugMug content.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 22,
            "name": "speaker_deck",
            "text": "Speaker Deck",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed Speaker Deck content.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 23,
            "name": "tik_tok",
            "text": "TikTok",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed a TikTok video.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 24,
            "name": "ted",
            "text": "TED",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed a TED video.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 25,
            "name": "tumblr",
            "text": "Tumblr",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed a Tumblr post.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 26,
            "name": "video_press",
            "text": "VideoPress",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed a VideoPress video.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 27,
            "name": "wordpress_tv",
            "text": "WordPress.tv",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed a Wordpress video.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 28,
            "name": "amazon_kindle",
            "text": "Amazon Kindle",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed Amazon Kindle content.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 29,
            "name": "facebook",
            "text": "Facebook",
            "icon": <FacebookOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed a Facebook post.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 30,
            "name": "instagram",
            "text": "Instagram",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed an Instagram post.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 31,
            "name": "loom",
            "text": "Loom",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Emved a Loom video.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 32,
            "name": "smartframe",
            "text": "SmartFrame",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed a SmartFrame image.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 33,
            "name": "eventbrite_checkout",
            "text": "Eventbrite Checkout",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed Eventbrite event details and ticket checkout.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 34,
            "name": "gif",
            "text": "GIF",
            "icon": <ImageIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Search for and insert an animated image.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 35,
            "name": "google_calendar",
            "text": "Google Calendar",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed a Google Calendar.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 36,
            "name": "latest_instagram_posts",
            "text": "Latest Instagram Posts",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Display an automatically updating list of the latest posts from your Instagram feed.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 37,
            "name": "map",
            "text": "Map",
            "icon": <RoomIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Add an interactive map showing one or more locations.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 38,
            "name": "pinterest",
            "text": "Pinterest",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed a Pinterest pin, board, or user.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 39,
            "name": "podcast_player",
            "text": "Podcast Player",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Select and play episodes from a single podcast.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 40,
            "name": "related_posts",
            "text": "Related Posts",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Related Posts.",
            "preview_image": noPreviewAvailableImage
        },
    ],
    "CrowdSignal": [
        {
            "_id": 1,
            "name": "poll",
            "text": "Poll",
            "icon": <PollIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Create polls and get your audience's opinion.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 2,
            "name": "vote",
            "text": "Vote",
            "icon": <ThumbUpOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Allow your audience to rate your work or express their opinion.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 3,
            "name": "applause",
            "text": "Applause",
            "icon": <FavoriteIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Let your audience cheer with a big round of applause.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 4,
            "name": "measure_nps",
            "text": "Measure NPS",
            "icon": <AssessmentOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Collect feedback and track customer satisfaction over time.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 5,
            "name": "feedback_button",
            "text": "Feedback Button",
            "icon": <FeedbackOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Add an always visible button that allows your audience to share feedback anytime.",
            "preview_image": noPreviewAvailableImage
        },
    ],
    "Earn": [
        {
            "_id": 1,
            "name": "donations",
            "text": "Donations",
            "icon": <AttachMoneyIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Collect one-time, monthly, or annually recurring donations.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 2,
            "name": "open_table",
            "text": "OpenTable",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Allow visitors to book a reservaton with OpenTable.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 3,
            "name": "payments",
            "text": "Payments",
            "icon": <PaymentIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Button allowing you to sell products and subscriptions.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 4,
            "name": "pay_with_paypal",
            "text": "Pay with PayPal",
            "icon": <PaymentIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Lets you add credit and debit card payment buttons with minimal setup.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 5,
            "name": "pricing_table",
            "text": "Pricing Table",
            "icon": <PriceCheckIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Add pricing tables to help visitors compare products and plans.",
            "preview_image": noPreviewAvailableImage
        },
    ],
    "Grow": [
        {
            "_id": 1,
            "name": "business_hours",
            "text": "Business Hours",
            "icon": <AddBusinessOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Display opening hours for your business.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 2,
            "name": "calendly",
            "text": "Calendly",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Embed a calendar for customers to schedule appointments.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 3,
            "name": "form",
            "text": "Form",
            "icon": <DynamicFormIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "A simple way to get feedback from folks visiting your site.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 4,
            "name": "contact_info",
            "text": "Contact Info",
            "icon": <DynamicFormIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Lets you add an email address, phone number, and physical address with improved markup for better SEO results.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 5,
            "name": "mailchimp",
            "text": "Mailchimp",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "A form enabling readers to join a Mailchimp audience.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 6,
            "name": "revue",
            "text": "Revue",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Add a subscription form for your Revue newsletter.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 7,
            "name": "subscription_form",
            "text": "Subscription Form",
            "icon": <DynamicFormIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "A form enabling readers to get notifications when new posts are published from this site.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 8,
            "name": "premium_content",
            "text": "Premium Content",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Restrict access to your content for paying subscribers.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 9,
            "name": "click_to_tweet",
            "text": "Click to Tweet",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Add a quote for readers to tweet via Twitter.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 10,
            "name": "logos",
            "text": "Logos",
            "icon": <AddBusinessOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Add logos, badges, or certifications to build credibility.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 11,
            "name": "contact_form",
            "text": "Contact Form",
            "icon": <DynamicFormIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Add a contact form to your page.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 12,
            "name": "rsvp_form",
            "text": "RSVP Form",
            "icon": <DynamicFormIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Add an RSVP form to your page.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 13,
            "name": "registration_form",
            "text": "Registration Form",
            "icon": <DynamicFormIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Add a Registration form to your page.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 14,
            "name": "appointment_form",
            "text": "Appointment Form",
            "icon": <DynamicFormIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Add an Appointment booking form to your page.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 15,
            "name": "feedback_form",
            "text": "Feedback Form",
            "icon": <DynamicFormIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Add a Feedback form to your page.",
            "preview_image": noPreviewAvailableImage
        },
        {
            "_id": 16,
            "name": "whatsapp_button",
            "text": "WhatsApp Button",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {},
            "preview_description": "Let your visitors send you messages on WhatsApp with the tap of a button.",
            "preview_image": noPreviewAvailableImage
        },
    ]
}

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
                    transform: "scaleX(-1)",
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
        <div>
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
    const { isInserterVisible, sendBlocks } = props
    const [components , setComponents] = useState(null);

    useEffect(() => {
        getComponents
            .then(data => {
                setComponents(data);
            })
            .catch(error => console.log(error));
    }, []);

    return(
        <Fragment>
            { isInserterVisible && <ComponentTabs sendBlocks={sendBlocks} components={components} /> }
        </Fragment>
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