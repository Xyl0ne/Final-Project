import React from "react";
import { Stack, Box, Typography } from "@mui/material";

import VideoCard from "./VideoCard";


const Videos = ({ videos, direction }) => {
    // 1. If videos is still null or empty, show a message
    if (!videos || videos.length === 0) return <Typography>No videos found...</Typography>;

    return (
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
            {videos.map((item, idx) => (
                <Box key={idx}>
                    {/* 2. Temporarily remove the 'item.id' check to see if cards show up */}
                    <VideoCard video={item} />
                </Box>
            ))}
        </Stack>
    );
}

export default Videos;