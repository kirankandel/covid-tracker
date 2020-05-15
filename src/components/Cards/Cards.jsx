import React from 'react';
import {Card, CardContent, Typography, Grid, StylesProvider} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

const Cards = ({ data, isGlobal }) => {
    if(!data.confirmed){
        return 'Loading...';
    }

    const GlobalCard = (
        <Grid container spacing={3} justify="center">
        <Grid item component={Card}  xs={12} md={3} className={cx(styles.card,styles.infected)}>
            <CardContent>
                <Typography color="textSecondary" gutter>
                   Infected
                </Typography>
                <Typography variant="h5">
                    <CountUp
                        start={0}
                        end={data.confirmed.value}
                        duration={4.5}
                        separator=","
                        />
                </Typography>
                <Typography color="textSecondary">
                    {new Date(data.lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">
                    Number of active cases of covid19
                </Typography>
            </CardContent>
        </Grid>
    
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
            <CardContent>
                <Typography color="textSecondary" gutter>
                    Recovered
                </Typography>
                <Typography variant="h5">
                    <CountUp
                        start={0}
                        end={data.recovered.value}
                        duration={4.5}
                        separator=","
                        />
                </Typography>
                <Typography color="textSecondary">
                    {new Date(data.lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">
                    Number of recovered cases of covid19
                </Typography>
            </CardContent>
        </Grid>
    
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
            <CardContent>
                <Typography color="textSecondary" gutter>
                    Deaths
                </Typography>
                <Typography variant="h5">
                    <CountUp
                        start={0}
                        end={data.deaths.value}
                        duration={4.5}
                        separator=","
                        />
                </Typography>
                <Typography color="textSecondary">
                    {new Date(data.lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">
                    Number of deaths of covid19
                </Typography>
            </CardContent>
        </Grid>
    </Grid>
    );

    const LocalCard = (
        <Grid container spacing={3} justify="center">
             <Grid item component={Card}  xs={12} md={3} className={cx(styles.card,styles.recovered)}>
            <CardContent>
                <Typography color="textSecondary" gutter>
                   Total Tests
                </Typography>
                <Typography variant="h5">
                    <CountUp
                        start={0}
                        end={data.tested_total}
                        duration={4.5}
                        separator=","
                        />
                </Typography>
                <Typography color="textSecondary">
                    {new Date(data.updated_at).toDateString()}
                </Typography>
                <Typography variant="body2">
                    Total Tests Done in Nepal
                </Typography>
            </CardContent>
        </Grid>

        <Grid item component={Card}  xs={12} md={3} className={cx(styles.card,styles.infected)}>
            <CardContent>
                <Typography color="textSecondary" gutter>
                   Infected
                </Typography>
                <Typography variant="h5">
                    <CountUp
                        start={0}
                        end={data.confirmed}
                        duration={4.5}
                        separator=","
                        />
                </Typography>
                <Typography color="textSecondary">
                    {new Date(data.updated_at).toDateString()}
                </Typography>
                <Typography variant="body2">
                    Number of active cases of covid19
                </Typography>
            </CardContent>
        </Grid>


        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
            <CardContent>
                <Typography color="textSecondary" gutter>
                    Tested Negative
                </Typography>
                <Typography variant="h5">
                    <CountUp
                        start={0}
                        end={data.tested_negative}
                        duration={4.5}
                        separator=","
                        />
                </Typography>
                <Typography color="textSecondary">
                    {new Date(data.updated_at).toDateString()}
                </Typography>
                <Typography variant="body2">
                    Number of Negative Tests of covid19
                </Typography>
            </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
            <CardContent>
                <Typography color="textSecondary" gutter>
                    Recovered
                </Typography>
                <Typography variant="h5">
                    <CountUp
                        start={0}
                        end={data.recovered}
                        duration={4.5}
                        separator=","
                        />
                </Typography>
                <Typography color="textSecondary">
                    {new Date(data.updated_at).toDateString()}
                </Typography>
                <Typography variant="body2">
                    Number of recovered cases of covid19
                </Typography>
            </CardContent>
        </Grid>
    
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
            <CardContent>
                <Typography color="textSecondary" gutter>
                    Deaths
                </Typography>
                <Typography variant="h5">
                    <CountUp
                        start={0}
                        end={data.deaths}
                        duration={4.5}
                        separator=","
                        />
                </Typography>
                <Typography color="textSecondary">
                    {new Date(data.updated_at).toDateString()}
                </Typography>
                <Typography variant="body2">
                    Number of deaths of covid19
                </Typography>
            </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
            <CardContent>
                <Typography color="textSecondary" gutter>
                    RDT Tests
                </Typography>
                <Typography variant="h5">
                    <CountUp
                        start={0}
                        end={data.tested_rdt}
                        duration={4.5}
                        separator=","
                        />
                </Typography>
                <Typography color="textSecondary">
                    {new Date(data.updated_at).toDateString()}
                </Typography>
                <Typography variant="body2">
                    Number of RDT Tests of covid19
                </Typography>
            </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
            <CardContent>
                <Typography color="textSecondary" gutter>
                    Pending Result
                </Typography>
                <Typography variant="h5">
                    <CountUp
                        start={0}
                        end={data.pending_result}
                        duration={4.5}
                        separator=","
                        />
                </Typography>
                <Typography color="textSecondary">
                    {new Date(data.updated_at).toDateString()}
                </Typography>
                <Typography variant="body2">
                    Pending Results of RDT Tests 
                </Typography>
            </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
            <CardContent>
                <Typography color="textSecondary" gutter>
                    Quarantined People
                </Typography>
                <Typography variant="h5">
                    <CountUp
                        start={0}
                        end={data.quarantined}
                        duration={4.5}
                        separator=","
                        />
                </Typography>
                <Typography color="textSecondary">
                    {new Date(data.updated_at).toDateString()}
                </Typography>
                <Typography variant="body2">
                Number Quarentined people due to covid19
                </Typography>
            </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
            <CardContent>
                <Typography color="textSecondary" gutter>
                    Isolation
                </Typography>
                <Typography variant="h5">
                    <CountUp
                        start={0}
                        end={data.in_isolation}
                        duration={4.5}
                        separator=","
                        />
                </Typography>
                <Typography color="textSecondary">
                    {new Date(data.updated_at).toDateString()}
                </Typography>
                <Typography variant="body2">
                    Number of Isolated People Due to covid19
                </Typography>
            </CardContent>
        </Grid>
    </Grid>
    );


    return(
        <div className={styles.container}>
           <h1> {isGlobal} </h1>
           { isGlobal ? GlobalCard : LocalCard }
        </div>
    )
}

export default Cards;