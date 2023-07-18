import { Box } from "@mui/material";

function terminalText(bio) {
  const textWithLineBreaks = bio.text.replace(/\. /g, '.\n');

  return (
    <>
      <p className="m-4 text-white">
        <span className="text-green-400">{"pawasagrwl"} $</span>{" "}
        cat {bio.title}
      </p>
      <p className="text-with-breaks m-4 text-white">
        {textWithLineBreaks}
      </p>
    </>
  );
}

function Terminal(props) {
  const { bio } = props;

  return (
    <Box
      component={"section"}
      className="terminal-shadow rounded-lg mb-5 text-white font-mono"
      width={{ xs: "100%", md: "100%" }}
    >
      <Box
        className="terminal-bar p-2 text-md"
        borderRadius={"0.5rem 0.5rem 0 0"}
      >  
        <i className="fa fa-circle icon-red ml-2"></i>
        <i className="fa fa-circle icon-yellow ml-2"></i>
        <i className="fa fa-circle icon-green ml-2"></i>
      </Box>
      <Box
        className="p-4 terminal-bg rounded-b-md text-md"
        fontFamily={"Courier New, Courier, monospace"}
      >
        {terminalText(bio)}
      </Box>
    </Box>
  );
}

export default Terminal;
