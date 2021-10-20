import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
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
            AddBusinessOutlined as AddBusinessOutlinedIcon
        } from '@mui/icons-material';

import "./Inserter_v2.css";

import {
    sendBlocks
} from '../../stores/actions'

const componentsList = {
    "Text": [
        {
            "_id": 1,
            "name": "paragraph",
            "text": "Paragraph",
            "icon": <FormatTextdirectionLToRIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 2,
            "name": "heading",
            "text": "Heading",
            "icon": <BookmarkIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 3,
            "name": "list",
            "text": "List",
            "icon": <FormatListBulletedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 4,
            "name": "quote",
            "text": "Quote",
            "icon": <FormatQuoteIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 5,
            "name": "code",
            "text": "Code",
            "icon": <CodeIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 6,
            "name": "classic",
            "text": "Classic",
            "icon": <KeyboardAltOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 7,
            "name": "preformatted",
            "text": "Preformatted",
            "icon": <ShortTextOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 8,
            "name": "pullquote",
            "text": "Pullquote",
            "icon": <FormatQuoteOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 9,
            "name": "table",
            "text": "Table",
            "icon": <TableChartOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 10,
            "name": "verse",
            "text": "Verse",
            "icon": <CreateOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 11,
            "name": "markdown",
            "text": "Markdown",
            "icon": <BorderColorRoundedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 12,
            "name": "syntax_highlighter_code",
            "text": "SyntaxHighlighter Code",
            "icon": <DeveloperModeOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
    ],
    "Media": [
        {
            "_id": 1,
            "name": "image",
            "text": "Image",
            "icon": <ImageIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 2,
            "name": "gallery",
            "text": "Gallery",
            "icon": <ImageSearchIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 3,
            "name": "audio",
            "text": "Audio",
            "icon": <AudiotrackOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 4,
            "name": "cover",
            "text": "Cover",
            "icon": <BookOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 5,
            "name": "file",
            "text": "File",
            "icon": <InsertDriveFileOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 6,
            "name": "media_and_text",
            "text": "Media & Text",
            "icon": <VerticalSplitIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 7,
            "name": "video",
            "text": "Video",
            "icon": <VideocamIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 8,
            "name": "image_compare",
            "text": "Image Compare",
            "icon": <BurstModeIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 9,
            "name": "SlideshowIcon",
            "text": "SlideshowIcon",
            "icon": <SlideshowIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 10,
            "name": "story",
            "text": "Story",
            "icon": <HistoryEduIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 11,
            "name": "tiled_gallery",
            "text": "Tiled Gallery",
            "icon": <PhotoAlbumOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 12,
            "name": "collage",
            "text": "Collage",
            "icon": <PhotoCameraOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 13,
            "name": "masonry",
            "text": "Masonry",
            "icon": <InsertPhotoOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 14,
            "name": "offset",
            "text": "Offset",
            "icon": <PanoramaOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 15,
            "name": "stacked",
            "text": "Stacked",
            "icon": <CropOriginalOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
    ],
    "Design": [
        {
            "_id": 1,
            "name": "buttons",
            "text": "Buttons",
            "icon": <SmartButtonOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 2,
            "name": "columns",
            "text": "Columns",
            "icon": <ViewColumnOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 3,
            "name": "group",
            "text": "Group",
            "icon": <FileCopyOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 4,
            "name": "more",
            "text": "More",
            "icon": <MoreHorizOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 5,
            "name": "page_break",
            "text": "Page Break",
            "icon": <PagesOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 6,
            "name": "separator",
            "text": "Separator",
            "icon": <SafetyDividerOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 7,
            "name": "spacer",
            "text": "Spacer",
            "icon": <SpaceBarOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 8,
            "name": "site_logo",
            "text": "Site Logo",
            "icon": <SupervisedUserCircleOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 9,
            "name": "site_tagline",
            "text": "Site Tagline",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 10,
            "name": "site_title",
            "text": "Site Title",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 11,
            "name": "row",
            "text": "Row",
            "icon": <TableRowsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 12,
            "name": "archive_title",
            "text": "Archive Title",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 13,
            "name": "post_categories",
            "text": "Post Categories",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 14,
            "name": "post_tags",
            "text": "Post Tags",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 15,
            "name": "layout_grid",
            "text": "Layout Grid",
            "icon": <TableViewOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 16,
            "name": "dynamic_hr",
            "text": "Dynamic HR",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 17,
            "name": "hero",
            "text": "Hero",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
    ],
    "Widgets": [
        {
            "_id": 1,
            "name": "shortcode",
            "text": "Shortcode",
            "icon": <CodeIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 2,
            "name": "archives",
            "text": "Archives",
            "icon": <FileCopyOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 3,
            "name": "calendar",
            "text": "Calendar",
            "icon": <DateRangeOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 4,
            "name": "categories",
            "text": "Categories",
            "icon": <CategoryOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 5,
            "name": "custom_html",
            "text": "Custom HTML",
            "icon": <CodeIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 6,
            "name": "latest_comments",
            "text": "Latest Comments",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 7,
            "name": "latest_posts",
            "text": "Latest Posts",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 8,
            "name": "page_list",
            "text": "Page List",
            "icon": <PagesOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 9,
            "name": "rss",
            "text": "RSS",
            "icon": <RssFeedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 10,
            "name": "social_icons",
            "text": "Social Icons",
            "icon": <ShareIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 11,
            "name": "tag_cloud",
            "text": "Tag Cloud",
            "icon": <LocalOfferOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 12,
            "name": "search",
            "text": "Search",
            "icon": <SearchIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 13,
            "name": "star_rating",
            "text": "Star Rating",
            "icon": <StarIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 14,
            "name": "repeat_visitor",
            "text": "Repeat Visitor",
            "icon": <RepeatIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 15,
            "name": "event_countdown",
            "text": "Event Countdown",
            "icon": <DateRangeOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 16,
            "name": "timeline",
            "text": "Timeline",
            "icon": <TimelineIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 17,
            "name": "blog_posts",
            "text": "Blog Posts",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 18,
            "name": "post_carousel",
            "text": "Post Carousel",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
    ],
    "Theme": [
        {
            "_id": 1,
            "name": "query_loop",
            "text": "Query Loop",
            "icon": <ImageIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 2,
            "name": "post_title",
            "text": "Post Title",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 3,
            "name": "post_content",
            "text": "Post Content",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 4,
            "name": "post_date",
            "text": "Post Date",
            "icon": <DateRangeOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 5,
            "name": "post_excerpt",
            "text": "Post Excerpt",
            "icon": <TextFieldsOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 6,
            "name": "post_featured_image",
            "text": "Post Featured Image",
            "icon": <ImageIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 7,
            "name": "login_out",
            "text": "Login/out",
            "icon": <LoginIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 8,
            "name": "navigation",
            "text": "Navigation",
            "icon": <ExploreOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 9,
            "name": "posts_list",
            "text": "Posts List",
            "icon": <FormatListBulletedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
    ],
    "Embeds": [
        {
            "_id": 1,
            "name": "embed",
            "text": "Embed",
            "icon": <CodeIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 2,
            "name": "twitter",
            "text": "Twitter",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 3,
            "name": "youtube",
            "text": "Youtube",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 4,
            "name": "sound_cloud",
            "text": "SoundCloud",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 5,
            "name": "spotify",
            "text": "Spotify",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 6,
            "name": "flickr",
            "text": "Flickr",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 7,
            "name": "vimeo",
            "text": "Vimeo",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 8,
            "name": "animoto",
            "text": "Animoto",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 9,
            "name": "cloudup",
            "text": "Cloudup",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 10,
            "name": "crowdsignal",
            "text": "Crowdsignal",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 11,
            "name": "dailymotion",
            "text": "Dailymotion",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 12,
            "name": "imgur",
            "text": "Imgur",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 13,
            "name": "issuu",
            "text": "Issuu",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 14,
            "name": "kickstarter",
            "text": "Kickstarter",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 15,
            "name": "mixcloud",
            "text": "Mixcloud",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 16,
            "name": "reddit",
            "text": "Reddit",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 17,
            "name": "reverb_nation",
            "text": "ReverbNation",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 18,
            "name": "screencast",
            "text": "Screencast",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 19,
            "name": "scribd",
            "text": "Scribd",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 20,
            "name": "slideshare",
            "text": "Slideshare",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 21,
            "name": "smug_mug",
            "text": "SmugMug",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 22,
            "name": "speaker_deck",
            "text": "Speaker Deck",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 23,
            "name": "tik_tok",
            "text": "TikTok",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 24,
            "name": "ted",
            "text": "TED",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 25,
            "name": "tumblr",
            "text": "Tumblr",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 26,
            "name": "video_press",
            "text": "VideoPress",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 27,
            "name": "wordpress_tv",
            "text": "WordPress.tv",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 28,
            "name": "amazon_kindle",
            "text": "Amazon Kindle",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 29,
            "name": "facebook",
            "text": "Facebook",
            "icon": <FacebookOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 30,
            "name": "instagram",
            "text": "Instagram",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 31,
            "name": "loom",
            "text": "Loom",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 32,
            "name": "smartframe",
            "text": "SmartFrame",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 33,
            "name": "eventbrite_checkout",
            "text": "Eventbrite Checkout",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 34,
            "name": "gif",
            "text": "GIF",
            "icon": <ImageIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 35,
            "name": "google_calendar",
            "text": "Google Calendar",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 36,
            "name": "latest_instagram_posts",
            "text": "Latest Instagram Posts",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 37,
            "name": "map",
            "text": "Map",
            "icon": <RoomIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 38,
            "name": "pinterest",
            "text": "Pinterest",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 39,
            "name": "podcast_player",
            "text": "Podcast Player",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 40,
            "name": "related_posts",
            "text": "Related Posts",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
    ],
    "CrowdSignal": [
        {
            "_id": 1,
            "name": "PollIcon",
            "text": "PollIcon",
            "icon": <PollIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 2,
            "name": "vote",
            "text": "Vote",
            "icon": <ThumbUpOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 3,
            "name": "applause",
            "text": "Applause",
            "icon": <FavoriteIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 4,
            "name": "measure_nps",
            "text": "Measure NPS",
            "icon": <AssessmentOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 5,
            "name": "feedback_button",
            "text": "Feedback Button",
            "icon": <FeedbackOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
    ],
    "Earn": [
        {
            "_id": 1,
            "name": "donations",
            "text": "Donations",
            "icon": <AttachMoneyIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 2,
            "name": "open_table",
            "text": "OpenTable",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 3,
            "name": "payments",
            "text": "Payments",
            "icon": <PaymentIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 4,
            "name": "pay_with_paypal",
            "text": "Pay with PayPal",
            "icon": <PaymentIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 5,
            "name": "pricing_table",
            "text": "Pricing Table",
            "icon": <PriceCheckIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
    ],
    "Grow": [
        {
            "_id": 1,
            "name": "business_hours",
            "text": "Business Hours",
            "icon": <AddBusinessOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 2,
            "name": "calendly",
            "text": "Calendly",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 3,
            "name": "form",
            "text": "Form",
            "icon": <DynamicFormIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 4,
            "name": "contact_info",
            "text": "Contact Info",
            "icon": <DynamicFormIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 5,
            "name": "mailchimp",
            "text": "Mailchimp",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 6,
            "name": "revue",
            "text": "Revue",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 7,
            "name": "subscription_form",
            "text": "Subscription Form",
            "icon": <DynamicFormIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 8,
            "name": "premium_content",
            "text": "Premium Content",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 9,
            "name": "click_to_tweet",
            "text": "Click to Tweet",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 10,
            "name": "logos",
            "text": "Logos",
            "icon": <AddBusinessOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 11,
            "name": "contact_form",
            "text": "Contact Form",
            "icon": <DynamicFormIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 12,
            "name": "rsvp_form",
            "text": "RSVP Form",
            "icon": <DynamicFormIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 13,
            "name": "registration_form",
            "text": "Registration Form",
            "icon": <DynamicFormIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 14,
            "name": "appointment_form",
            "text": "Appointment Form",
            "icon": <DynamicFormIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 15,
            "name": "feedback_form",
            "text": "Feedback Form",
            "icon": <DynamicFormIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
        {
            "_id": 16,
            "name": "whatsapp_button",
            "text": "WhatsApp Button",
            "icon": <LanguageOutlinedIcon />,
            "block_type": "SECTION",
            "block_parameters": {}
        },
    ]
}

let theme = createTheme({
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
                    color: '#000000',
                    "&:hover": {
                        color: "#000000"
                    },
                    "&.Mui-selected": {
                        color: "#000000"
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
        }
    }
});

const BlocksList = (props) => {
    const { sendBlocks } = props;
    let categories = Object.keys(componentsList).map((key, i) => ({
        "_id": i + 1,
        "group": key,
        "components_list": componentsList[key]
    }));

    return (
        <Grid className="component-group-grids-container" container>
            {
                categories.map((category, i) => (
                    <Grid
                        className={`component-group-grid component-group-grid-${i}-${category.group}`}
                        item
                        key={i}
                        xl={12} xs={12}>
                            <h2 className={`component-group-h2 component-group-h2-${i}-${category.group}`}>{category.group}</h2>
                               <Grid className="component-grids-container" container>
                                    { category.components_list.map((component, i) => 
                                        (<Grid className={`component-grid component-grid-${i}-${component.name}`}
                                            item
                                            key={`${i}_${component._id}`}
                                            xs={12}
                                            md={4}
                                            sx={{padding: "16px 8px"}}
                                            onClick={() => sendBlocks({
                                                                        type: component.block_type,
                                                                        parameters: component.block_parameters})
                                                }>
                                        <Box className={`component-box component-box-${i}-${component.name}`}>
                                            <span className={`component-icon component-icon-${i}-${component.name}`}>
                                                {component.icon}
                                            </span>
                                            <span className={`component-text component-text-${i}-${component.name}`}>
                                                {component.text}
                                            </span>
                                        </Box>
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

const TabPanel = (props) => {
    const { value, sendBlocks } = props;

    return (
        <Box>
            <div
                hidden={value !== 0 ? true : false}
                id={`simple-tabpanel-0`} >
                <BlocksList sendBlocks={sendBlocks} />
            </div>
            <div
                hidden={value !== 1 ? true : false}
                id={`simple-tabpanel-1`} >
                <PatternsList />
            </div>
        </Box>
    );
}

const ComponentTabs = (props) => {
    const styleBoxComponentTabs = {
        height: 1,
        borderRight: "1.5px solid #F0F0F0",
        maxHeight: 1,
        overflow: "auto"
    };
    const { sendBlocks } = props
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return(
        <ThemeProvider theme={theme}>
            <Box className="box-component-tabs" sx={styleBoxComponentTabs}>
                <Tabs
                    component="div"
                    id="nested-list-subheader"
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    sx={{width: 1, paddingTop: 2}}>
                    <Tab 
                        label="Blocks"
                        id="component-tab-0"
                        aria-controls="component-tab-0"
                    />
                    <Tab 
                        label="Patterns"
                        id="component-tab-1"
                        aria-controls="component-tab-1"
                    />
                </Tabs>
                <TabPanel value={value} sendBlocks={sendBlocks} />
            </Box>
        </ThemeProvider>
    );
}

const Inserter = (props) => {
    const { isInserterVisible, sendBlocks } = props

    return(
        <Fragment>
            { isInserterVisible && <ComponentTabs sendBlocks={sendBlocks} /> }
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