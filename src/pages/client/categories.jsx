import Grid from "@mui/material/Grid";
import BtnExit from "../../components/client/BtnExit";
import CardCategory from "../../components/client/CardCategory";

function Categories() {
  return (
    <>
      <Grid container>
	      <Grid item xs={12}>
          <div className="tab-showCategory" >
            <h3 className="txt-title">Escoge una categoría: </h3>
          </div>
        </Grid>
        <CardCategory />
        <Grid sx={{ mt: "4rem", position: "static" }} item xs={12}>
          <BtnExit />
        </Grid>
      </Grid>
    </>
  );
}

export default Categories;

