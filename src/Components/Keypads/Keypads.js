import React from 'react';
//import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

const Keypads = (props) => {
    const { classes, keypadHandle ,opHandle,evaluateHandle, clearHandle} = props;
    return (
        <div>
            
            <Button onClick={() => keypadHandle(7)} className={classes.button}>7</Button>
            <Button onClick={() => keypadHandle(8)} className={classes.button}>8</Button>
            <Button onClick={() => keypadHandle(9)} className={classes.button}>9</Button>
            <Button onClick={() => opHandle('/')} className={classes.button}>/</Button>

            <br />

            <Button onClick={() => keypadHandle(4)} className={classes.button}>4</Button>
            <Button onClick={() => keypadHandle(5)} className={classes.button}>5</Button>
            <Button onClick={() => keypadHandle(6)} className={classes.button}>6</Button>
            <Button onClick={() => opHandle('*')} className={classes.button}>*</Button>

            <br />

            <Button onClick={() => keypadHandle(1)} className={classes.button}>1</Button>
            <Button onClick={() => keypadHandle(2)} className={classes.button}>2</Button>
            <Button onClick={() => keypadHandle(3)} className={classes.button}>3</Button>
            <Button onClick={() => opHandle('+')} className={classes.button}>+</Button>

            <br />


            <Button onClick={() => clearHandle('c')} className={classes.button}>c</Button>
            <Button onClick={() => keypadHandle(0)} className={classes.button}>0</Button>
            <Button onClick={() => evaluateHandle('=')} className={classes.button}>=</Button>
            <Button onClick={() => opHandle('-')} className={classes.button}>-</Button>

            <br />

        </div>
    );
}




export default withStyles(styles)(Keypads);
