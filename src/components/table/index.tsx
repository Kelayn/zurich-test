// @ts-ignore
import MUIDataTable from "mui-datatables";

const options = {
    filterType: 'checkbox',
};

export const Table = (props: { className: string, columns: Array<string | object>, data: Array<any>, onRowClick?: Function }) =>
    <MUIDataTable
        className={props.className}
        title={"People List"}
        data={props.data}
        columns={props.columns}
        options={{...options, onRowClick: props.onRowClick}}
    />
