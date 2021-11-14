import Grid from '@mui/material/Grid';
import BtnExit from '../../components/client/BtnExit';
import CardCategory from '../../components/client/CardCategory';

function Categories() {
    return(
        <div>
            <Grid container spacing={4}>
                <Grid item xs={12} md={12}>
                    <div className="tab-showCategory">
                        <h3 className="txt-title">Escoge una categoría: </h3>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <CardCategory />
                </Grid>
                <Grid item xs={12} md={4}>
                    <CardCategory />
                </Grid>
                <Grid item xs={12} md={4}>
                    <CardCategory />
                </Grid>
                <Grid sx={{ mt: '4rem',
                            position: 'static'}} item xs={12}>
                    <BtnExit />
                </Grid>
            </Grid>
        </div>
    );
}

export default Categories;
