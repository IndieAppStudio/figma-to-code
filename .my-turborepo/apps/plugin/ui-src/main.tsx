import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {ThemeProvider, CssBaseline, createTheme} from "@mui/material";
import {theme as themeVars} from "plugin-ui/constants/theme";
import { green } from "@mui/material/colors";


// const theme = createTheme({
//     typography: themeVars.typography,
//     palette: {
//       primary: { main: themeVars.colors.primary },
//       secondary: green,
//     },
//     components: {
//         // Name of the component
//         MuiButtonBase: {
//           defaultProps: {
//             style: {
//                 boxShadow: "none !important",
//             },
//             // The props to change the default for.
//             disableRipple: true, // No more ripple, on the whole application 💣!
//           },
//         },
//     }
//   });

// ReactDOM.render(
//     <ThemeProvider theme={theme}>
//       <>
//         <CssBaseline />
//         <App />
//       </>
//     </ThemeProvider>,
//     document.getElementById("root")
//   );

ReactDOM.render(<App />, document.getElementById("root"));

