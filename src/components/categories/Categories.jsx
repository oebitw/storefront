import { Button, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { active } from '../../store/actions';
const activeCategories = (props) => {
  return (
    <div>
      <Grid container spacing={2} justify="center">
        {props.activeList.categories.map((category) => {
          return (
            <Grid item key={category.name}>
              <Button
                variant="outlined"
                color="default"
                onClick={() => props.active(category.name)}
              >
                {category.display_name}
              </Button>
            </Grid>
          );
        })}
      </Grid>

    </div>
  );
};

const stateToProps = (state) => ({
  activeList: state.categories,
});

const dispatchToProps = { active };

export default connect(stateToProps, dispatchToProps)(activeCategories);