import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

function StarRating(props: any) {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating name="read-only" value={props.value()} readOnly />
    </Box>
  );
}

export default StarRating;
