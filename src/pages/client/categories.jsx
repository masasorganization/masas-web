import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import BtnExit from '../../components/client/BtnExit';
function Categories() {
    return(
        <div>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <div className="tab-showCategory">
                        <h3 className="txt-title">Escoge una categoría: </h3>
                    </div>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Link to ="/">
                        <BtnExit />
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}

export default Categories;
