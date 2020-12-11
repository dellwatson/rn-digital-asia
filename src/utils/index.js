const Months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nob', 'Dec']
export const formatDate = (date) => {
    const getDate = date.split(' ')[0];
    return `${getDate.split('-')[2]} ${Months[Number(getDate.split('-')[1]) - 1]} ${getDate.split('-')[0]}`
}

export const formatPrice = (data) => {
    const temp = Number(data)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&.")
        .split(".");
    return temp.slice(0, temp.length - 1).join(".");
};


export const sortir = (sortBy, array) =>
    array.sort((a, b) =>
        (a[sortBy] > b[sortBy]) ? 1 : -1);


export const filterObj = (array, query) => array.filter(
    o => Object.keys(o).some(
        k => String(o[k]).toLowerCase().includes(
            query.toLowerCase()
        )
    )
)

// filter specific, but imnot sure what the task wants
const searchProperty = ['beneficiary_name', 'beneficiary_bank', 'amount']
export const filterObjLimited = (array, query) => array.filter(
    o => searchProperty.map(prop => String(o[prop].toLowerCase().includes(
        query.toLowerCase()
    )))
)