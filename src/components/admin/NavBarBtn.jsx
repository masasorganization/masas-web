import Button from "@mui/material/Button";

function BtnExit() {
  return (
    <div>
      <Button
        variant="text"
        sx={{
          bgcolor: "#ffffff",
          color: "#05B3B2",
          textTransform: "none",
          fontFamily: "Noto Sans, sans-serif",
          fontWeight: "Bold",
          fontSize: "1.25rem",
        }}
      ></Button>
    </div>
  );
}

export default BtnExit;
