import {useEffect, useState} from 'react';
import './style.scss'
import {Table} from "../../components/table";
import {usePeopleApi} from "../../lib/api/usePeopleApi";
import {Avatar} from "@mui/material";
import { useNavigate } from "react-router-dom";

const columns = [
    'ID',
    {
        name: "Avatar",
        options: {
            filter: false,
            sort: false,
            customBodyRender: (v: string) => <Avatar alt="Remy Sharp" src={v} />

        },
    },
    'Name',
    'Professions',
    'Height',
    'Weight',
    'Hair Color',
];

type TRowElem = Array<Array<string | number>>
function Home() {
    const [peopleList, setPeopleList] = useState<TRowElem>([]);
    const {getPeople} = usePeopleApi();
    let navigate = useNavigate();
    const onRowClick = (rowData: Array<string>) => navigate('/human/' + rowData[2])

    useEffect(() => {
        getPeople().then(data => {
            // don't really like this solution due to lack of performance - would be better to sanitize (and paginate) on backend
            const sanitizedData = data.Brastlewark.map(human => ([
                human.id, human.thumbnail, human.name, human.professions?.join('; '),
                human.height, human.weight, human.hair_color
            ]))
            return setPeopleList(sanitizedData)
        })
    }, [])

    return (
        <>
            {peopleList.length ? <Table className={'table-card'} columns={columns} data={peopleList} onRowClick={onRowClick}/> : <></>}
        </>
    );
}

export default Home;
