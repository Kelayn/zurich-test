import {useParams} from "react-router";
import {THuman, usePeopleApi} from "../../lib/api/usePeopleApi";
import {useEffect, useState} from "react";
import {
    Avatar, Card, CardContent, CardHeader, CardMedia, Grid,
    List, ListItem, ListItemButton, ListItemText, Typography
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import './style.scss'

const TextItemList = (props: { text: string }) => <ListItem disablePadding>
    <ListItemText>
        <Typography variant="body2">
            {props.text}
        </Typography>
    </ListItemText>
</ListItem>

function Human() {
    let {name} = useParams();
    const {getHuman} = usePeopleApi();
    const [human, setHuman] = useState<THuman | undefined>();
    let navigate = useNavigate();
    const onFriendClick = (name: string) => navigate('/human/' + name)

    useEffect(() => {
        if (name)
            getHuman(name).then(human => setHuman(() => human));
    }, [name])

    return (!human
            ? <></>
            : <Grid container spacing={0} direction="column" alignItems="center">
                <Grid item xs={12}>
                    <Card variant="outlined" sx={{minWidth: 1000}} className={'human-card'}>
                        <CardHeader
                            avatar={
                                <Avatar>
                                    <CardMedia component="img" image={human.thumbnail} alt="gnome pic"/>
                                </Avatar>
                            }
                            title={human.name}
                            subheader={`${human.age} years`}
                        />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                        List of professions:
                                    </Typography>
                                    <List>
                                        {
                                            human.professions.length
                                                ? human.professions.map((p, i) => <TextItemList text={p} key={i}/>)
                                                : <TextItemList text={'no professions'}/>
                                        }
                                    </List>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                        Params:
                                    </Typography>
                                    <List>
                                        <TextItemList text={`Weight: ${Math.round(human.weight)}`}/>
                                        <TextItemList text={`Height: ${Math.round(human.height)}`}/>
                                        <TextItemList text={`Hair color: ${human.hair_color}`}/>
                                    </List>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                        Friends:
                                    </Typography>
                                    <List dense sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                                        {!human.friends.length
                                            ? <TextItemList text={'No friends'}/>
                                            : human.friends.map((value, i) =>
                                                <ListItem key={i} disablePadding>
                                                    <ListItemButton disableGutters onClick={() => onFriendClick(value)}>
                                                        <ListItemText id={value} primary={value}/>
                                                    </ListItemButton>
                                                </ListItem>
                                            )
                                        }
                                    </List>
                                </Grid>
                            </Grid>

                        </CardContent>

                    </Card>
                </Grid>

            </Grid>
    );
}

export default Human;
