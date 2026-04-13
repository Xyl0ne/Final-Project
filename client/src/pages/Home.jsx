import { useState,useEffect } from "react";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import Videos from "../components/Videos";
import { Stack, Box, Typography } from "@mui/material";
import myVideos from "../utils/categories";

function Home() {
    const [selectedCategory, setSelectedCategory] = useState("Anime");
    const [videos, setVideos] = useState([]);

    // Home.jsx
    useEffect(() => {
        // .filter returns an ARRAY of all matches
        const filteredData = myVideos.filter((video) => video.name === selectedCategory);

        console.log(`Category: ${selectedCategory} | Found: ${filteredData.length} videos`);

        setVideos(filteredData);
    }, [selectedCategory]);
    return (
        <>
            <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
                <Box sx={{
                    height: { sx: "auto", md: "92vh" },
                    px: { sx: 0, md: 2 },
                    bgcolor: "background.default",
                    marginTop: "20px",
                    borderRight: "2px solid #676666",
                    justifyContent: "center"
                }}>
                    <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </Box>

                <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>

                    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "text.primary", mt: "20px" }}>
                        {selectedCategory} <span style={{ color: "text.primary" }}>videos</span>
                    </Typography>
                    <Videos videos={videos} />
                </Box>
            </Stack>
        </>
    )
}

export default Home;