import React from "react";
import Theme from "../themes"
const theme = Theme;

export const styles: Record<string, React.CSSProperties> ={
    container: {
        display: "flex",
        flexDirection: "column",
        width: "20rem",
        backgroundColor: `${theme.colors.background}`,
    },
    title:{
        fontFamily: `${theme.font_family.bold}`,
        fontSize: `${theme.font_size.xl}px`,
        fontWeight: "bold",
        color: `${theme.colors.primary}`
    },
    titleContainer: {
        display: "flex",
        width: "100%",
        backgroundColor: `${theme.colors.white}`,
        padding: '1rem',
        justifyContent: "center",
        borderBottomLeftRadius: "1rem",
        borderBottomRightRadius: "1rem",
    },
    inputContainer: {
        display: "flex",
        padding: "1rem",
        justifyContent: "center"

    },
    styledInput: {
        padding: "0.3rem 1rem",
        height: "2rem",
        borderTopLeftRadius: "1rem",
        borderBottomLeftRadius: "1rem",
        borderWidth: "0px",
        fontSize: `${theme.font_size.md}px`,
    },
    styledButton: {
        display: "flex",
        padding: "0.3rem 1rem",
        height: "2rem",
        borderTopRightRadius: "1rem",
        borderBottomRightRadius: "1rem",
        backgroundColor: `${theme.colors.white}`,
        justifyContent: "center",
        alignItems: "center"
    },
    responseContainerExtern: {
        display: "flex",
        padding: "1rem",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: `${theme.colors.white}`,
        borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem",
    },
    responseTitleContainer:{
        display: "flex",
        width: "100%",
        paddingBottom: "1rem",
        justifyContent: "center",
    },
    responseTitle:{
        fontFamily: `${theme.font_family.bold}`,
        fontSize: `${theme.font_size.lg}px`,
        fontWeight: "bold",
        color: `${theme.colors.primary}`
    },
    responseText:{
        fontFamily: `${theme.font_family.regular}`,
        fontSize: `${theme.font_size.sm}px`,
    }
}