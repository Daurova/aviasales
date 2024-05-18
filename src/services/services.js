export const getSearchId = async()=>{
    const searchResult = await fetch ('https://aviasales-test-api.kata.academy/search');
    const dataResult = await searchResult.json();
    return dataResult.searchId;
    console.log(dataResult, dataResult.searchId);
};

export const getTickets = async (id) =>{
    const ticketResult = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);
    const dataTickets = await ticketResult.json()
    return dataTickets;
    console.log (dataTickets);
}