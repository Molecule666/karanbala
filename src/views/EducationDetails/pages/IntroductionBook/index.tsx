import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { KaranbalaLogoTextSvg } from "../../../../assets";
import { ButtonKit } from "../../../../components/kit/Button";
import { useNavigate } from "react-router-dom";

const IntroductionBook = () => {
    const theme: ThemeOptions = useTheme();
    const navigate = useNavigate();

    return (
        <>
            <Box
                margin={"0.75rem 3.25rem 0 3.25rem"}
                paddingBottom={"7.5rem"}
                display={"flex"}
                justifyContent={"flex-end"}
                gap={"2rem"}
            >
                <ButtonKit onClick={() => navigate("/")}>
                    {" "}
                    <KaranbalaLogoTextSvg />
                </ButtonKit>
            </Box>
            <Box margin={"4rem 5.2rem 8rem  5.2rem"}>
                <Typography fontSize={"3.6rem"} variant="subtitle1">
                    معرفی کتاب
                </Typography>
            </Box>
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
                margin={"2rem"}
            >
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexBasis={"22%"}
                    height={"16.8rem"}
                    bgcolor={theme?.palette?.grey["50"]}
                    borderRadius={"1rem"}
                    padding={"11px"}
                >
                    <Typography variant="subtitle1">بیوگرافی کتاب</Typography>
                </Box>
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexBasis={"22%"}
                    height={"16.8rem"}
                    bgcolor={theme?.palette?.grey["50"]}
                    borderRadius={"1rem"}
                    padding={"11px"}
                >
                    <Typography variant="subtitle1">ریاضی۳ در کنکور</Typography>
                </Box>
                <Box
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexBasis={"22%"}
                    height={"16.8rem"}
                    bgcolor={theme?.palette?.grey["50"]}
                    display={"flex"}
                    borderRadius={"1rem"}
                    padding={"11px"}
                >
                    <Typography variant="subtitle1">ریاضی ۳ در امتحان پایانی</Typography>
                </Box>

                <Box
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexBasis={"22%"}
                    height={"16.8rem"}
                    bgcolor={theme?.palette?.grey["50"]}
                    display={"flex"}
                    borderRadius={"1rem"}
                    padding={"11px"}
                >
                    <Typography variant="subtitle1">بررسی کتاب و نحوه مطالعه</Typography>
                </Box>
            </Box>
        </>
    );
};

export default IntroductionBook;
